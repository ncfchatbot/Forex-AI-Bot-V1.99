
import React, { useState } from 'react';

const MQL5CodeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const mql5Code = `//+------------------------------------------------------------------+
//|                                     GoldRunner_Compound_v2.2_PRO |
//|                                  Copyright 2024, AI Trading Pro  |
//|                         Concept: ทบต้น (Auto-Lot) + กันทุน (Safe) |
//+------------------------------------------------------------------+
#property copyright "AI Trading Pro"
#property version   "2.20"
#property strict

#include <Trade\\Trade.mqh>

//--- INPUT PARAMETERS
input bool   InpAutoLot      = true;   // เปิดระบบคำนวณ Lot อัตโนมัติ (ทบต้น)
input double InpBaseLot      = 0.05;   // Lot มาตรฐานต่อทุน $100
input double InpRiskPer100   = 100.0;  // ตัวหารคำนวณ Lot (BaseLot ทุกๆ $100)
input int    InpSL_Pips      = 100;    // SL เริ่มต้นทันที (Hard SL) 100 pips
input int    InpBE_Pips      = 20;     // บวก 20 pips ขยับ SL บังทุน
input int    InpTrailingStart= 50;     // บวก 50 pips เริ่มรันเทรนด์
input int    InpMagic        = 888999;

//--- GLOBAL VARIABLES
CTrade trade;

int OnInit() { trade.SetExpertMagicNumber(InpMagic); return(INIT_SUCCEEDED); }

void OnTick()
{
   ManageProtections();

   if(PositionsTotal() > 0) return;

   //--- CALCULATE DYNAMIC LOT (ทบต้น)
   double lot = InpBaseLot;
   if(InpAutoLot) {
      double balance = AccountInfoDouble(ACCOUNT_BALANCE);
      lot = MathFloor((balance / InpRiskPer100) * InpBaseLot * 100) / 100.0;
      if(lot < 0.01) lot = 0.01;
   }

   // STRATEGY LOGIC (Simple Example: EMA Cross)
   double ma_f = iMA(_Symbol, _Period, 10, 0, MODE_EMA, PRICE_CLOSE);
   double ma_s = iMA(_Symbol, _Period, 50, 0, MODE_SMA, PRICE_CLOSE);
   double price = SymbolInfoDouble(_Symbol, SYMBOL_BID);
   double pt = _Point;

   if(price > ma_f && ma_f > ma_s) { // BUY Signal
      double ask = SymbolInfoDouble(_Symbol, SYMBOL_ASK);
      trade.Buy(lot, _Symbol, ask, ask-(InpSL_Pips*10*pt), 0, "v2.2 Compound BUY");
   }
   else if(price < ma_f && ma_f < ma_s) { // SELL Signal
      double bid = SymbolInfoDouble(_Symbol, SYMBOL_BID);
      trade.Sell(lot, _Symbol, bid, bid+(InpSL_Pips*10*pt), 0, "v2.2 Compound SELL");
   }
}

void ManageProtections()
{
   for(int i=PositionsTotal()-1; i>=0; i--) {
      if(PositionSelectByTicket(PositionGetTicket(i))) {
         if(PositionGetInteger(POSITION_MAGIC) != InpMagic) continue;
         
         double entry = PositionGetDouble(POSITION_PRICE_OPEN);
         double current = PositionGetDouble(POSITION_PRICE_CURRENT);
         double sl = PositionGetDouble(POSITION_SL);
         double pt = _Point;
         
         // Breakeven Logic
         if(PositionGetInteger(POSITION_TYPE) == POSITION_TYPE_BUY) {
            if(current - entry > InpBE_Pips*10*pt && sl < entry)
               trade.PositionModify(PositionGetTicket(i), entry + 5*pt, 0);
         } else {
            if(entry - current > InpBE_Pips*10*pt && (sl > entry || sl == 0))
               trade.PositionModify(PositionGetTicket(i), entry - 5*pt, 0);
         }
      }
   }
}
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mql5Code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/98 backdrop-blur-2xl z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-yellow-500/20 w-full max-w-4xl rounded-3xl shadow-[0_0_50px_rgba(234,179,8,0.1)] overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-gradient-to-r from-yellow-600 to-yellow-800">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center text-xl">🚀</span>
            <h2 className="text-xl font-black text-white uppercase tracking-tighter">
              Gold Runner Pro v2.2 (COMPOUND)
            </h2>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white font-bold bg-black/20 px-4 py-1 rounded-full text-xs">CLOSE</button>
        </div>
        
        <div className="p-8 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl">
              <div className="text-emerald-400 font-black text-[10px] mb-1">AUTO-COMPOUND</div>
              <p className="text-slate-400 text-[10px]">Lot จะขยับตามทุนอัตโนมัติ (0.05 ต่อ $100)</p>
            </div>
            <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl">
              <div className="text-red-400 font-black text-[10px] mb-1">INITIAL HARD SL</div>
              <p className="text-slate-400 text-[10px]">เปิดไม้ปุ๊บ ตั้ง SL ทันที ป้องกันข่าวแรงกระชาก</p>
            </div>
            <div className="bg-blue-500/5 border border-blue-500/20 p-4 rounded-xl">
              <div className="text-blue-400 font-black text-[10px] mb-1">SMART RE-ENTRY</div>
              <p className="text-slate-400 text-[10px]">หากโดน SL จะรอสัญญาณ EMA ตัดใหม่เพื่อเข้าใหม่</p>
            </div>
          </div>

          <pre className="bg-black p-6 rounded-2xl text-[11px] font-mono text-yellow-500/90 overflow-x-auto border border-slate-800 h-[300px]">
            {mql5Code}
          </pre>
          <button 
            onClick={copyToClipboard}
            className="w-full mt-6 py-4 bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-black rounded-2xl shadow-xl transition-all"
          >
            {copied ? 'COPIED!' : 'COPY V2.2 COMPOUND CODE'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MQL5CodeModal;
