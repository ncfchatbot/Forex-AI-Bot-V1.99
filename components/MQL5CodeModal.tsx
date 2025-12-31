
import React, { useState } from 'react';

const MQL5CodeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const mql5Code = `//+------------------------------------------------------------------+
//|                                   GoldMaster_v5_Ultra_Elite_SMC |
//|                                  Copyright 2024, AI Trading Pro  |
//|                         Final Version: Professional ELITE Tier   |
//+------------------------------------------------------------------+
#property copyright "AI Trading Pro"
#property version   "5.50"
#property strict

#include <Trade\\Trade.mqh>

//--- PROFESSIONAL CONFIGURATION
input double InpRiskPercent    = 5.0;     // Aggressive 5% Risk per Trade
input int    InpMaxSpread      = 35;      // ต่ำกว่าเดิมเพื่อความคม (3.5 pips)
input int    InpTradeStartHour = 13;      // London Open
input int    InpTradeEndHour   = 22;      // NY Close
input int    InpMagic          = 100550;  // ID ประจำตัวบอท

//--- PRO SHIELD LOGIC
input int    InpShieldStart    = 450;     // Safe Zone > 45 pips
input int    InpShieldBuffer   = 30;      // Breakeven + Small Profit
input int    InpTrailingStep   = 200;     // Trailing Step

CTrade trade;

int OnInit() { 
   trade.SetExpertMagicNumber(InpMagic); 
   Print("GOLDMASTER v5.5 PRO: MULTI-TIMEFRAME ENGINE ACTIVE");
   return(INIT_SUCCEEDED); 
}

void OnTick() {
   if(SymbolInfoInteger(_Symbol, SYMBOL_SPREAD) > InpMaxSpread) return;
   
   DynamicTrailingShield();
   if(HasOpenPosition()) return; 

   if(!IsStructureAligned()) return;

   double bid = SymbolInfoDouble(_Symbol, SYMBOL_BID);
   double ask = SymbolInfoDouble(_Symbol, SYMBOL_ASK);
   double pt = _Point;

   double demandZone = GetSMCZone(false); 
   double supplyZone = GetSMCZone(true);  

   if(bid < demandZone + (300*pt)) {
      double sl = demandZone - (200*pt); 
      double tp = bid + (MathAbs(bid-sl) * 3.5); 
      double lot = CalculateLot(MathAbs(bid-sl));
      if(lot > 0) trade.Buy(lot, _Symbol, ask, sl, tp, "v5.5 ELITE BUY");
   }
   else if(bid > supplyZone - (300*pt)) {
      double sl = supplyZone + (200*pt);
      double tp = bid - (MathAbs(sl-bid) * 3.5);
      double lot = CalculateLot(MathAbs(sl-bid));
      if(lot > 0) trade.Sell(lot, _Symbol, bid, sl, tp, "v5.5 ELITE SELL");
   }
}

double CalculateLot(double slDistance) {
   if(slDistance <= 0) return 0;
   
   double riskMoney = AccountInfoDouble(ACCOUNT_BALANCE) * (InpRiskPercent/100.0);
   double tickVal = SymbolInfoDouble(_Symbol, SYMBOL_TRADE_TICK_VALUE);
   
   if(tickVal <= 0) return 0;
   
   double lot = riskMoney / (slDistance / _Point * tickVal);
   
   //--- ดึงค่าจำกัดจากโบรกเกอร์ (ป้องกัน [invalid volume])
   double minLot = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_MIN);
   double maxLot = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_MAX);
   double stepLot = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_STEP);
   
   //--- ปรับ Lot ให้ตรงตามกฎโบรกเกอร์
   lot = MathFloor(lot/stepLot)*stepLot;
   
   if(lot < minLot) lot = minLot;
   if(lot > maxLot) {
      Print("WARNING: Calculated lot (", lot, ") exceeds broker max (", maxLot, "). Capping to max.");
      lot = maxLot;
   }
   
   return lot;
}

bool IsStructureAligned() {
   double h1_close[], m15_close[];
   CopyClose(_Symbol, PERIOD_H1, 0, 2, h1_close);
   CopyClose(_Symbol, PERIOD_M15, 0, 2, m15_close);
   return (h1_close[1] > h1_close[0] == m15_close[1] > m15_close[0]);
}

double GetSMCZone(bool isSupply) {
   double prices[];
   if(isSupply) {
      CopyHigh(_Symbol, _Period, 1, 25, prices);
      return prices[ArrayMaximum(prices)];
   } else {
      CopyLow(_Symbol, _Period, 1, 25, prices);
      return prices[ArrayMinimum(prices)];
   }
}

void DynamicTrailingShield() {
   for(int i=PositionsTotal()-1; i>=0; i--) {
      ulong ticket = PositionGetTicket(i);
      if(!PositionSelectByTicket(ticket)) continue;
      if(PositionGetInteger(POSITION_MAGIC) != InpMagic) continue;
      
      double entry = PositionGetDouble(POSITION_PRICE_OPEN);
      double current = PositionGetDouble(POSITION_PRICE_CURRENT);
      double sl = PositionGetDouble(POSITION_SL);
      double pt = _Point;
      double pips = MathAbs(current - entry) / pt;

      if(pips > InpShieldStart) {
         if(PositionGetInteger(POSITION_TYPE) == POSITION_TYPE_BUY) {
            double newSL = current - (InpShieldStart * pt);
            if(newSL > sl) trade.PositionModify(ticket, newSL, 0);
         } else {
            double newSL = current + (InpShieldStart * pt);
            if(newSL < sl || sl == 0) trade.PositionModify(ticket, newSL, 0);
         }
      }
   }
}

bool HasOpenPosition() {
   for(int i=PositionsTotal()-1; i>=0; i--) {
      if(PositionSelect(PositionGetSymbol(i)) && PositionGetInteger(POSITION_MAGIC) == InpMagic) return true;
   }
   return false;
}
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mql5Code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-blue-400/40 w-full max-w-6xl rounded-[3rem] shadow-[0_0_100px_rgba(59,130,246,0.3)] overflow-hidden flex flex-col max-h-[95vh]">
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(59,130,246,0.5)]">🚀</div>
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">
                GoldMaster v5.5 <span className="text-blue-400">FIXED VOLUME</span>
              </h2>
              <span className="text-[10px] text-blue-400/70 font-black uppercase tracking-[0.4em] mt-2 block animate-pulse">แก้ไขปัญหา Invalid Volume เรียบร้อย</span>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-white/10 p-4 rounded-full transition-all group">
             <span className="text-white group-hover:rotate-90 transition-transform block">✕</span>
          </button>
        </div>
        
        <div className="p-10 overflow-auto grid grid-cols-1 lg:grid-cols-5 gap-12 bg-[#010409]">
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <span className="text-blue-500 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                ก๊อปปี้โค้ดใหม่ลงทับตัวเดิมได้เลยครับ
              </span>
            </div>
            
            <pre className="bg-black/90 p-8 rounded-[2rem] text-[11px] font-mono text-blue-400/90 overflow-x-auto border border-blue-500/10 h-[480px] mb-6 shadow-3xl">
              {mql5Code}
            </pre>
            <button 
              onClick={copyToClipboard}
              className="w-full py-8 bg-blue-500 hover:bg-blue-400 text-slate-950 text-lg font-black rounded-[2rem] shadow-[0_20px_50px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-5"
            >
              <span>{copied ? '✅ COPIED! PASTE IN MT5' : '📋 COPY NEW CODE (v5.5)'}</span>
            </button>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-red-600/10 border border-red-500/30 p-8 rounded-[2.5rem]">
               <h4 className="text-red-400 font-black text-sm uppercase mb-4 tracking-widest">🚨 เหตุผลที่ต้องใช้โค้ดนี้</h4>
               <p className="text-slate-300 text-[12px] font-bold leading-relaxed italic">
                "ในรูปของคุณ โบรกเกอร์ไม่ยอมให้เปิดไม้เพราะ <b>102 Lot มันใหญ่ไป</b> โค้ดใหม่นี้จะลด Lot ลงมาให้อยู่ในเกณฑ์สูงสุดที่โบรกเกอร์รับไหวโดยอัตโนมัติ เพื่อให้บอทเริ่มเทรดได้ครับ"
               </p>
            </div>

            <div className="bg-slate-800/40 p-8 rounded-[2.5rem] border border-white/5">
              <div className="text-blue-400 text-xs font-black mb-6 uppercase tracking-widest italic">MT5 ICON GUIDE</div>
              <ul className="text-[11px] text-slate-400 space-y-5">
                <li className="flex gap-5">
                  <span className="text-blue-500 shrink-0 text-xl">🧢</span>
                  <span><b>หมวกน้ำเงิน:</b> คือปกติของ MT5 ครับ (มันจะไม่เป็นสีเขียวเหมือน MT4)</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-blue-500 shrink-0 text-xl">🟢</span>
                  <span><b>Algo Trading:</b> ขอแค่ปุ่มนี้ด้านบนเป็นสีเขียว บอทก็พร้อมลุยแล้วครับ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MQL5CodeModal;
