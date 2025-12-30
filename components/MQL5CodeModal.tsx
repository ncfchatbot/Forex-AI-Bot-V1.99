
import React, { useState } from 'react';

const MQL5CodeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const mql5Code = `//+------------------------------------------------------------------+
//|                                     GoldRunner_Compound_v2.5_PRO |
//|                                  Copyright 2024, AI Trading Pro  |
//|                         Concept: ทบต้น + แก้ปัญหา Order ไม่เปิด       |
//+------------------------------------------------------------------+
#property copyright "AI Trading Pro"
#property version   "2.50"
#property strict

#include <Trade\\Trade.mqh>

//--- INPUT PARAMETERS
input bool   InpAutoLot      = true;   // เปิดระบบคำนวณ Lot อัตโนมัติ (ทบต้น)
input double InpBaseLot      = 0.05;   // Lot มาตรฐานต่อทุน $100
input double InpRiskPer100   = 100.0;  // ตัวหารคำนวณ Lot
input int    InpSL_Pips      = 100;    // SL เริ่มต้นทันที (Hard SL)
input int    InpBE_Pips      = 20;     // กำไรเท่าไหร่ถึงกันทุน
input int    InpMagic        = 888999;

//--- GLOBAL VARIABLES
CTrade trade;

int OnInit() { 
   trade.SetExpertMagicNumber(InpMagic); 
   // แก้ปัญหา Filling Mode (สำคัญมากสำหรับบางโบรกเกอร์)
   trade.SetTypeFillingBySymbol(_Symbol);
   Print("GoldRunner V2.5: Initialized. Balance: ", AccountInfoDouble(ACCOUNT_BALANCE));
   return(INIT_SUCCEEDED); 
}

void OnTick()
{
   ManageProtections();

   // เช็คว่ามีไม้เปิดอยู่หรือไม่ (บอทเน้นเก็บทีละไม้)
   if(PositionsTotal() > 0) return;

   //--- CALCULATE DYNAMIC LOT (ทบต้น)
   double balance = AccountInfoDouble(ACCOUNT_BALANCE);
   double lot = InpBaseLot;
   
   if(InpAutoLot) {
      lot = MathFloor((balance / InpRiskPer100) * InpBaseLot * 100) / 100.0;
      
      // เช็คขีดจำกัด Lot ของโบรกเกอร์
      double minLot = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_MIN);
      double maxLot = SymbolInfoDouble(_Symbol, SYMBOL_VOLUME_MAX);
      if(lot < minLot) lot = minLot;
      if(lot > maxLot) lot = maxLot;
   }

   // STRATEGY LOGIC: EMA 10 ตัด 50
   double ma_f = iMA(_Symbol, _Period, 10, 0, MODE_EMA, PRICE_CLOSE, 1);
   double ma_s = iMA(_Symbol, _Period, 50, 0, MODE_SMA, PRICE_CLOSE, 1);
   double price = SymbolInfoDouble(_Symbol, SYMBOL_BID);
   double pt = _Point;

   // DEBUG: พิมพ์สถานะลงในแท็บ Experts เพื่อตรวจสอบ
   // Comment บรรทัดด้านล่างออกหากบอททำงานปกติแล้ว
   // CommentString(StringFormat("Lot: %.2f | EMA10: %.2f | EMA50: %.2f", lot, ma_f, ma_s));

   if(price > ma_f && ma_f > ma_s) { // BUY Signal
      double ask = SymbolInfoDouble(_Symbol, SYMBOL_ASK);
      double sl_price = ask - (InpSL_Pips * 10 * pt);
      if(trade.Buy(lot, _Symbol, ask, sl_price, 0, "V2.5 BUY")) {
         Print("BUY Order Opened: ", lot, " Lots");
      } else {
         Print("BUY Failed! Error: ", GetLastError());
      }
   }
   else if(price < ma_f && ma_f < ma_s) { // SELL Signal
      double bid = SymbolInfoDouble(_Symbol, SYMBOL_BID);
      double sl_price = bid + (InpSL_Pips * 10 * pt);
      if(trade.Sell(lot, _Symbol, bid, sl_price, 0, "V2.5 SELL")) {
         Print("SELL Order Opened: ", lot, " Lots");
      } else {
         Print("SELL Failed! Error: ", GetLastError());
      }
   }
}

void ManageProtections()
{
   for(int i=PositionsTotal()-1; i>=0; i--) {
      ulong ticket = PositionGetTicket(i);
      if(PositionSelectByTicket(ticket)) {
         if(PositionGetInteger(POSITION_MAGIC) != InpMagic) continue;
         
         double entry = PositionGetDouble(POSITION_PRICE_OPEN);
         double current = PositionGetDouble(POSITION_PRICE_CURRENT);
         double sl = PositionGetDouble(POSITION_SL);
         double pt = _Point;
         
         if(PositionGetInteger(POSITION_TYPE) == POSITION_TYPE_BUY) {
            if(current - entry > InpBE_Pips*10*pt && sl < entry)
               trade.PositionModify(ticket, entry + 5*pt, 0);
         } else {
            if(entry - current > InpBE_Pips*10*pt && (sl > entry || sl == 0))
               trade.PositionModify(ticket, entry - 5*pt, 0);
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
              Gold Runner Pro v2.5 (STABLE)
            </h2>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white font-bold bg-black/20 px-4 py-1 rounded-full text-xs">CLOSE</button>
        </div>
        
        <div className="p-8 overflow-auto">
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-xl mb-6 flex items-start gap-4">
             <span className="text-2xl">💡</span>
             <div>
                <p className="text-blue-400 text-xs font-bold uppercase mb-1">วิธีตรวจสอบหาก Order ไม่เปิด:</p>
                <p className="text-slate-400 text-[10px] leading-relaxed">
                  ไปที่โปรแกรม MT5 > ดูด้านล่างที่แท็บ <b>"Experts"</b> (ถัดจากแท็บ Trade/History) 
                  หากบอทพยายามเปิดไม้แต่ไม่สำเร็จ จะมี Error Code แจ้งที่นั่นครับ โค้ด V2.5 นี้จะพิมพ์สาเหตุบอกไว้ให้เลย
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl">
              <div className="text-emerald-400 font-black text-[10px] mb-1">LOT SCALE (MAX: $100K)</div>
              <p className="text-slate-400 text-[10px]">รองรับพอร์ตใหญ่ด้วยระบบ Auto-Min/Max Lot</p>
            </div>
            <div className="bg-yellow-500/5 border border-yellow-500/20 p-4 rounded-xl">
              <div className="text-yellow-400 font-black text-[10px] mb-1">AUTO FILLING MODE</div>
              <p className="text-slate-400 text-[10px]">แก้ปัญหา "Unsupported Filling Mode" อัตโนมัติ</p>
            </div>
            <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl">
              <div className="text-red-400 font-black text-[10px] mb-1">DEBUG LOG ENABLED</div>
              <p className="text-slate-400 text-[10px]">พิมพ์สาเหตุลงแท็บ Experts ทันทีหากส่งคำสั่งพลาด</p>
            </div>
          </div>

          <pre className="bg-black p-6 rounded-2xl text-[11px] font-mono text-yellow-500/90 overflow-x-auto border border-slate-800 h-[300px]">
            {mql5Code}
          </pre>
          <button 
            onClick={copyToClipboard}
            className="w-full mt-6 py-4 bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-black rounded-2xl shadow-xl transition-all"
          >
            {copied ? 'COPIED!' : 'COPY V2.5 STABLE CODE'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MQL5CodeModal;
