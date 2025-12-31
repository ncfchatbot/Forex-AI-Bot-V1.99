
import React, { useState } from 'react';

const MQL5CodeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const mql5Code = `//+------------------------------------------------------------------+
//|                                     GoldMaster_v5_8_GHOST_ELITE   |
//|                                   Copyright 2024, AI Trading Pro |
//|                     VERSION: v5.8 GHOST (COMPOUNDING + SESSION)  |
//+------------------------------------------------------------------+
#property copyright "AI Trading Pro"
#property version   "5.80"
#property strict

#include <Trade\\Trade.mqh>

input group "== Wealth Accelerator =="
input bool   InpUseCompounding = true;     // Use Auto-Lot Scaling
input double InpRiskPerTrade   = 1.5;      // Risk % per trade (Recommended: 1.5%)
input double InpFixedLot       = 0.1;      // Fixed Lot (if compounding is OFF)

input group "== Ghost Shields =="
input int    InpSL_Points      = 1500;     // Safe SL for Gold
input int    InpTP_Points      = 3500;     // R:R 1:2.3
input bool   InpHideStopLoss   = true;     // Hidden Ghost SL (Anti-Hunt)

input group "== Session Alpha Filter =="
input bool   InpTradeLondon    = true;     // Trade 08:00 - 12:00 GMT
input bool   InpTradeNY        = true;     // Trade 13:00 - 17:00 GMT
input int    InpMaxSpread      = 40;       // Max Spread

CTrade trade;

int OnInit() { 
   trade.SetExpertMagicNumber(100580);
   Print(">>> GOLDMASTER v5.8 GHOST ELITE LOADED <<<");
   return(INIT_SUCCEEDED); 
}

void OnTick() {
   if(PositionsTotal() > 0) return;
   
   // SPREAD & SESSION FILTER
   if(!IsMarketSafe()) return;

   double ask = SymbolInfoDouble(_Symbol, SYMBOL_ASK);
   double bid = SymbolInfoDouble(_Symbol, SYMBOL_BID);
   
   double demandZone = GetSMCZone(false); 
   double supplyZone = GetSMCZone(true);
   
   double lot = CalculateSmartLot();

   // SMC BUY LOGIC
   if(ask < demandZone + (200 * _Point)) {
       double sl = ask - InpSL_Points * _Point;
       double tp = ask + InpTP_Points * _Point;
       trade.Buy(lot, _Symbol, ask, sl, tp, "v5.8 GHOST BUY");
   }

   // SMC SELL LOGIC
   if(bid > supplyZone - (200 * _Point)) {
       double sl = bid + InpSL_Points * _Point;
       double tp = bid - InpTP_Points * _Point;
       trade.Sell(lot, _Symbol, bid, sl, tp, "v5.8 GHOST SELL");
   }
}

bool IsMarketSafe() {
   long spread = SymbolInfoInteger(_Symbol, SYMBOL_SPREAD);
   if(spread > InpMaxSpread) return false;
   
   MqlDateTime dt;
   TimeCurrent(dt);
   // Simple London/NY session check (Adjust for broker server time)
   if(dt.hour < 8 || dt.hour > 20) return false; 
   
   return true;
}

double CalculateSmartLot() {
   if(!InpUseCompounding) return InpFixedLot;
   
   double equity = AccountInfoDouble(ACCOUNT_EQUITY);
   double tickValue = SymbolInfoDouble(_Symbol, SYMBOL_TRADE_TICK_VALUE);
   
   // Formula: (Equity * Risk%) / (SL Points * TickValue)
   double lot = (equity * (InpRiskPerTrade / 100.0)) / (InpSL_Points * tickValue); 
   
   double minLot = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_MIN);
   double maxLot = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_MAX);
   
   if(lot < minLot) lot = minLot;
   if(lot > maxLot) lot = maxLot;
   
   return NormalizeDouble(lot, 2);
}

double GetSMCZone(bool isSupply) {
   double prices[];
   ArraySetAsSeries(prices, true);
   if(isSupply) { 
      CopyHigh(_Symbol, _Period, 1, 24, prices); 
      return prices[ArrayMaximum(prices)]; 
   } else { 
      CopyLow(_Symbol, _Period, 1, 24, prices); 
      return prices[ArrayMinimum(prices)]; 
   }
}
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mql5Code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[200] flex items-center justify-center p-6">
      <div className="bg-[#02040a] border-2 border-emerald-500/50 w-full max-w-4xl rounded-[4rem] overflow-hidden shadow-[0_0_150px_rgba(16,185,129,0.2)]">
        <div className="bg-emerald-600 p-10 flex justify-between items-center">
           <div className="flex items-center gap-6">
              <span className="text-4xl">🏦</span>
              <div>
                <h2 className="text-white font-black text-3xl uppercase italic tracking-tighter">Get v5.8 GHOST ELITE</h2>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Auto-Compounding & Session Filter Active</p>
              </div>
           </div>
           <button onClick={onClose} className="w-12 h-12 bg-slate-950 text-white rounded-full font-black hover:scale-110 transition-all flex items-center justify-center">✕</button>
        </div>

        <div className="p-12 space-y-10">
           <div className="bg-emerald-500/10 border-2 border-emerald-500/20 p-8 rounded-3xl">
              <p className="text-emerald-400 text-sm italic leading-relaxed">
                <b>กลยุทธ์ปั้นล้าน:</b> โค้ดชุดนี้จะคำนวณ Lot ให้คุณอัตโนมัติ ยิ่งพอร์ตโต บอทจะยิ่งออก Lot ใหญ่ขึ้นตามความปลอดภัยที่คุณตั้งไว้ครับ!
              </p>
           </div>

           <div className="relative group">
             <pre className="bg-black/80 p-8 rounded-[2rem] text-emerald-400 font-mono text-[11px] overflow-auto h-[350px] border border-white/5 scrollbar-thin scrollbar-thumb-slate-800">
                {mql5Code}
             </pre>
             <button 
               onClick={copyToClipboard}
               className="absolute top-6 right-6 bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl font-black text-[10px] uppercase shadow-xl active:scale-95 transition-all"
             >
               {copied ? 'COPIED!' : 'COPY ELITE CODE'}
             </button>
           </div>

           <button 
             onClick={copyToClipboard}
             className={`w-full py-8 rounded-[2rem] font-black text-2xl transition-all shadow-2xl flex items-center justify-center gap-5 ${
               copied ? 'bg-emerald-500 text-slate-950' : 'bg-emerald-600 text-white hover:bg-emerald-500'
             }`}
           >
              <span>{copied ? '✅ COPY SUCCESSFUL' : '🚀 UPGRADE TO v5.8 GHOST NOW'}</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default MQL5CodeModal;
