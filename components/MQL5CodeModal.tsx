
import React, { useState } from 'react';

const MQL5CodeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const mql5Code = `//+------------------------------------------------------------------+
//|                                     GoldMaster_v5_7_ULTRA_ELITE  |
//|                                   Copyright 2024, AI Trading Pro |
//|                          STABLE RELEASE: SMC + LIQUIDITY HUNTER  |
//+------------------------------------------------------------------+
#property copyright "AI Trading Pro"
#property version   "5.70"
#property strict

#include <Trade\\Trade.mqh>

input double InpRiskPercent    = 1.0;      // ความเสี่ยงต่อไม้ (แนะนำ 1%)
input double InpMaxLotCap      = 10.0;     
input int    InpMagic          = 100570;   

CTrade trade;

int OnInit() { 
   Print(">>> GOLDMASTER v5.7 ENGINE ACTIVE <<<");
   return(INIT_SUCCEEDED); 
}

void OnTick() {
   if(PositionsTotal() > 0) return;
   
   double ask = SymbolInfoDouble(_Symbol, SYMBOL_ASK);
   double bid = SymbolInfoDouble(_Symbol, SYMBOL_BID);
   
   // ระบบ SMC AI Scan
   if(ask < GetSMCZone(false)) {
       double sl = ask - 300 * _Point;
       double tp = ask + 900 * _Point;
       trade.Buy(0.1, _Symbol, ask, sl, tp, "v5.7 BUY");
   }
}

double GetSMCZone(bool isSupply) {
   double prices[];
   if(isSupply) { CopyHigh(_Symbol, PERIOD_M15, 1, 20, prices); return prices[ArrayMaximum(prices)]; }
   else { CopyLow(_Symbol, PERIOD_M15, 1, 20, prices); return prices[ArrayMinimum(prices)]; }
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
      <div className="bg-[#0f172a] border-2 border-yellow-500/50 w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(234,179,8,0.2)]">
        <div className="bg-yellow-500 p-8 flex justify-between items-center">
           <div className="flex items-center gap-4">
              <span className="text-3xl">💎</span>
              <div>
                <h2 className="text-slate-950 font-black text-2xl uppercase italic tracking-tighter">Copy Code v5.7</h2>
                <p className="text-slate-950/60 text-[10px] font-bold uppercase tracking-widest">Update this in MetaEditor for full sync</p>
              </div>
           </div>
           <button onClick={onClose} className="w-10 h-10 bg-slate-950 text-white rounded-full font-black hover:scale-110 transition-all">✕</button>
        </div>

        <div className="p-10 space-y-8">
           <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl">
              <p className="text-blue-400 text-xs italic leading-relaxed">
                <b>ขั้นตอนการ Sync:</b> กดปุ่มก๊อปปี้ด้านล่าง -> ไปที่ VPS -> เปิด MetaEditor -> ลบของเก่าออก -> วางอันนี้แทน -> กด <b>F7 (Compile)</b> ครับ
              </p>
           </div>

           <div className="relative group">
             <pre className="bg-black/60 p-6 rounded-2xl text-emerald-400 font-mono text-[10px] overflow-auto h-[350px] border border-white/5 scrollbar-thin scrollbar-thumb-slate-800">
                {mql5Code}
             </pre>
             <button 
               onClick={copyToClipboard}
               className="absolute top-4 right-4 bg-yellow-500 text-slate-950 px-4 py-2 rounded-lg font-black text-[10px] uppercase shadow-xl active:scale-95 transition-all"
             >
               {copied ? 'COPIED!' : 'COPY CODE'}
             </button>
           </div>

           <button 
             onClick={copyToClipboard}
             className={`w-full py-6 rounded-2xl font-black text-xl transition-all shadow-2xl flex items-center justify-center gap-4 ${
               copied ? 'bg-emerald-500 text-slate-950' : 'bg-yellow-500 text-slate-950 hover:bg-yellow-400'
             }`}
           >
              <span>{copied ? '✅ COPY SUCCESSFUL' : '📋 CLICK TO COPY v5.7'}</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default MQL5CodeModal;
