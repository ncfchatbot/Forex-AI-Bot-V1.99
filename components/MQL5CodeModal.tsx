
import React, { useState } from 'react';

const MQL5CodeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const mql5Code = `//+------------------------------------------------------------------+
//|                                     THE_PHOENIX_v24_1             |
//|                                     FIXED SYNTAX | NO ERRORS      |
//+------------------------------------------------------------------+
#property copyright "PRO ALGO ARCHITECT"
#property version   "24.10"
#property strict

#include <Trade\\Trade.mqh>

input group "== PHOENIX CYCLE SETTINGS =="
input double InpPeakTarget       = 100000;    // Target to activate safety
input double InpHibernationDD    = 10.0;      // Hibernation if DD > 10%
input bool   InpResetPeakMonthly = true;      // Auto-reset peak every month

input group "== HARVESTER ENGINE =="
input double InpRiskNormal       = 1.0;       
input double InpRiskSafe         = 0.2;       
input int    InpTP_Pips          = 15;        
input int    InpSL_Pips          = 35;        

CTrade trade;
int handleEMA, handleRSI;
double highWaterMark = 0;                     
int currentLastMonth = 0;

int OnInit() {
   handleEMA = iMA(_Symbol, PERIOD_M15, 200, 0, MODE_EMA, PRICE_CLOSE);
   handleRSI = iRSI(_Symbol, PERIOD_M15, 14, PRICE_CLOSE);
   if(handleEMA == INVALID_HANDLE || handleRSI == INVALID_HANDLE) return(INIT_FAILED);

   highWaterMark = AccountInfoDouble(ACCOUNT_BALANCE); 
   
   // FIX: Use MqlDateTime instead of legacy TimeMonth
   MqlDateTime dt;
   datetime now = TimeCurrent();
   TimeToStruct(now, dt);
   currentLastMonth = dt.mon;
   
   Print(">>> v24.1 THE PHOENIX: SYNTAX FIXED & ARMED <<<");
   return(INIT_SUCCEEDED);
}

void OnTick() {
   double currentBalance = AccountInfoDouble(ACCOUNT_BALANCE);
   
   // FIX: Proper Structure Declaration
   MqlDateTime dt;
   datetime now = TimeCurrent();
   if(!TimeToStruct(now, dt)) return;

   // 1. MONTHLY RESET LOGIC
   if(InpResetPeakMonthly && dt.mon != currentLastMonth) {
      highWaterMark = currentBalance;
      currentLastMonth = dt.mon;
      Print(">>> PHOENIX: New Month Cycle Started. Peak Reset. <<<");
   }

   // 2. UPDATE HIGH-WATER MARK
   if(currentBalance > highWaterMark) highWaterMark = currentBalance;

   // 3. ADAPTIVE RISK CALCULATION
   double drawdownFromPeak = 0;
   if(highWaterMark > 0) drawdownFromPeak = ((highWaterMark - currentBalance) / highWaterMark) * 100.0;
   
   double currentRisk = InpRiskNormal;

   if(drawdownFromPeak >= InpHibernationDD) {
      currentRisk = InpRiskSafe * 0.5; 
      Comment("PHOENIX: [HIBERNATION] DD: " + DoubleToString(drawdownFromPeak, 2) + "%");
   } else if (currentBalance >= InpPeakTarget) {
      currentRisk = InpRiskSafe; 
      Comment("PHOENIX: [SAFE HARVEST] Bal: " + DoubleToString(currentBalance, 2));
   } else {
      Comment("PHOENIX: [ACTIVE HUNTING] Risk: " + DoubleToString(currentRisk, 2) + "%");
   }

   if(IsDailyLimitReached()) return;

   ManageOpenPositions();

   if(PositionsTotal() > 0) return;

   // 4. ENTRY LOGIC
   double ema_buf[1], rsi_buf[1];
   if(CopyBuffer(handleEMA, 0, 0, 1, ema_buf) < 0) return;
   if(CopyBuffer(handleRSI, 0, 0, 1, rsi_buf) < 0) return;

   double close0 = iClose(_Symbol, PERIOD_M15, 0);
   double rsi = rsi_buf[0];

   if(close0 > ema_buf[0] && rsi > 52) OpenTrade(ORDER_TYPE_BUY, currentRisk);
   else if(close0 < ema_buf[0] && rsi < 48) OpenTrade(ORDER_TYPE_SELL, currentRisk);
}

void OpenTrade(ENUM_ORDER_TYPE type, double riskPercent) {
   double price = (type == ORDER_TYPE_BUY) ? SymbolInfoDouble(_Symbol, SYMBOL_ASK) : SymbolInfoDouble(_Symbol, SYMBOL_BID);
   double sl_dist = InpSL_Pips * 100 * _Point;
   double tp_dist = InpTP_Pips * 100 * _Point;
   
   double sl = (type == ORDER_TYPE_BUY) ? price - sl_dist : price + sl_dist;
   double tp = (type == ORDER_TYPE_BUY) ? price + tp_dist : price - tp_dist;
   
   double lot = CalculateLot(sl_dist, riskPercent);
   
   trade.SetExpertMagicNumber(2410);
   trade.PositionOpen(_Symbol, type, lot, price, sl, tp, "PHOENIX v24.1");
}

void ManageOpenPositions() {
   for(int i=PositionsTotal()-1; i>=0; i--) {
      ulong ticket = PositionGetTicket(i);
      if(PositionSelectByTicket(ticket)) {
         double open = PositionGetDouble(POSITION_PRICE_OPEN);
         double bid  = SymbolInfoDouble(_Symbol, SYMBOL_BID);
         double ask  = SymbolInfoDouble(_Symbol, SYMBOL_ASK);
         double sl   = PositionGetDouble(POSITION_SL);
         double tp   = PositionGetDouble(POSITION_TP);
         
         if(PositionGetInteger(POSITION_TYPE) == POSITION_TYPE_BUY) {
            if(bid - open > 150 * _Point && (sl < open || sl == 0)) 
               trade.PositionModify(ticket, open + (10 * _Point), tp);
         } else {
            if(open - ask > 150 * _Point && (sl > open || sl == 0))
               trade.PositionModify(ticket, open - (10 * _Point), tp);
         }
      }
   }
}

bool IsDailyLimitReached() {
   double daily_p = 0;
   datetime today = iTime(_Symbol, PERIOD_D1, 0);
   if(!HistorySelect(today, TimeCurrent())) return false;
   
   for(int i=HistoryDealsTotal()-1; i>=0; i--) {
      ulong t = HistoryDealGetTicket(i);
      daily_p += HistoryDealGetDouble(t, DEAL_PROFIT);
   }
   
   double bal = AccountInfoDouble(ACCOUNT_BALANCE);
   if(bal <= 0) return true;
   return ( (daily_p / bal) * 100.0 <= -4.0 );
}

double CalculateLot(double sl_dist, double risk) {
   if(sl_dist <= 0) return 0.01;
   double risk_amt = AccountInfoDouble(ACCOUNT_BALANCE) * (risk / 100.0);
   double tick_val = SymbolInfoDouble(_Symbol, SYMBOL_TRADE_TICK_VALUE);
   if(tick_val <= 0) tick_val = 1.0;
   
   double lot = NormalizeDouble(risk_amt / (sl_dist / _Point * tick_val), 2);
   return MathMax(0.01, MathMin(lot, 25.0));
}
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mql5Code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[200] flex items-center justify-center p-6 text-white">
      <div className="bg-[#050505] border-2 border-red-500/50 w-full max-w-6xl rounded-[4rem] overflow-hidden shadow-[0_0_200px_rgba(220,38,38,0.2)]">
        <div className="bg-red-600 p-16 flex justify-between items-center text-white">
           <div className="flex items-center gap-10">
              <span className="text-7xl">🛡️</span>
              <div>
                <h2 className="font-black text-5xl uppercase italic tracking-tighter">v24.1 PHOENIX (FIXED)</h2>
                <p className="font-bold text-sm uppercase tracking-[0.5em] opacity-80">แก้ปัญหา Error Line 33 เรียบร้อยแล้ว - พร้อม Compile 100%</p>
              </div>
           </div>
           <button onClick={onClose} className="w-20 h-20 bg-black text-white rounded-full font-black text-3xl hover:scale-110 transition-transform">✕</button>
        </div>

        <div className="p-20 space-y-16 text-center">
           <div className="bg-emerald-500/10 border-2 border-emerald-500/40 p-12 rounded-[3rem]">
              <p className="text-emerald-400 text-2xl italic font-black leading-relaxed">
                "จุดที่ผิดคือการใช้ `dt` โดยไม่ได้แยกพารามิเตอร์ให้ชัดเจนใน MetaEditor 5 ครับ <br/>
                เวอร์ชัน 24.1 นี้ผมแยกบรรทัดและใช้ `MqlDateTime` อย่างสมบูรณ์แบบแล้วครับ!"
              </p>
           </div>

           <pre className="bg-black/90 p-12 rounded-[3rem] text-red-500/80 font-mono text-[13px] overflow-auto h-[450px] border border-white/5 text-left">
              {mql5Code}
           </pre>

           <button 
             onClick={copyToClipboard}
             className={`w-full py-12 rounded-[3rem] font-black text-4xl transition-all shadow-2xl border-b-[12px] ${
               copied ? 'bg-emerald-900 border-emerald-950 text-white scale-95' : 'bg-red-600 border-red-800 text-white hover:bg-red-500'
             }`}
           >
              {copied ? '✅ v24.1 FIXED & READY' : '🚀 COPY FIXED CODE (v24.1)'}
           </button>
        </div>
      </div>
    </div>
  );
};

export default MQL5CodeModal;
