
import React, { useState } from 'react';

const MQL5CodeModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const mql5Code = `//+------------------------------------------------------------------+
//|                                       GoldScalperAI_FullAuto_v1.99 |
//|                                  Copyright 2024, AI Trading Pro  |
//|                             Concept: เก็บเศษเงิน (Deployment Success)|
//+------------------------------------------------------------------+
#property copyright "AI Trading Pro"
#property version   "1.99"
#property strict

#include <Trade\\Trade.mqh>

//--- INPUT PARAMETERS
input double InpLot          = 0.01;   // ขนาดไม้
input int    InpTP_Pips      = 50;     // TP (Pips)
input int    InpSL_Pips      = 100;    // SL (Pips)
input int    InpMA_Period    = 20;     // เทรนด์ (Moving Average)
input int    InpRSI_Period   = 14;     // แรงซื้อขาย (RSI)
input int    InpMagic        = 888888; // รหัสบอท

//--- GLOBAL VARIABLES
CTrade trade;
int    handle_ma;
int    handle_rsi;

//+------------------------------------------------------------------+
//| Expert initialization function                                   |
//+------------------------------------------------------------------+
int OnInit()
{
   trade.SetExpertMagicNumber(InpMagic);
   handle_ma  = iMA(_Symbol, _Period, InpMA_Period, 0, MODE_SMA, PRICE_CLOSE);
   handle_rsi = iRSI(_Symbol, _Period, InpRSI_Period, PRICE_CLOSE);
   
   if(handle_ma == INVALID_HANDLE || handle_rsi == INVALID_HANDLE) return(INIT_FAILED);

   CreateDashboard(); 
   return(INIT_SUCCEEDED);
}

void OnDeinit(const int reason)
{
   ObjectsDeleteAll(0, "GS_");
}

void OnTick()
{
   double ma_buffer[];
   double rsi_buffer[];
   ArraySetAsSeries(ma_buffer, true);
   ArraySetAsSeries(rsi_buffer, true);
   
   if(CopyBuffer(handle_ma, 0, 0, 1, ma_buffer) <= 0) return;
   if(CopyBuffer(handle_rsi, 0, 0, 1, rsi_buffer) <= 0) return;
   
   double ma  = NormalizeDouble(ma_buffer[0], _Digits);
   double rsi = NormalizeDouble(rsi_buffer[0], 2);
   double price = SymbolInfoDouble(_Symbol, SYMBOL_BID);
   double ask = SymbolInfoDouble(_Symbol, SYMBOL_ASK);
   double bid = SymbolInfoDouble(_Symbol, SYMBOL_BID);
   double pt  = _Point;
   
   string status = "";
   color  status_color = clrWhite;

   if(PositionsTotal() > 0) {
      status = "POSITION OPENING...";
      status_color = clrYellow;
   } else {
      if(price > ma) {
         if(rsi < 70 && rsi > 45) { 
            status = "READY TO BUY!"; status_color = clrLime; 
            trade.Buy(InpLot, _Symbol, ask, ask-(InpSL_Pips*10*pt), ask+(InpTP_Pips*10*pt), "v1.99 AUTO BUY");
         }
         else if(rsi >= 70) { status = "OVERBOUGHT (Wait)"; status_color = clrOrange; }
         else { status = "WAITING MOMENTUM"; status_color = clrGray; }
      } else {
         if(rsi > 30 && rsi < 55) { 
            status = "READY TO SELL!"; status_color = clrRed; 
            trade.Sell(InpLot, _Symbol, bid, bid+(InpSL_Pips*10*pt), bid-(InpTP_Pips*10*pt), "v1.99 AUTO SELL");
         }
         else if(rsi <= 30) { status = "OVERSOLD (Wait)"; status_color = clrOrange; }
         else { status = "WAITING MOMENTUM"; status_color = clrGray; }
      }
   }

   UpdateDashboard(price, ma, rsi, status, status_color);
}

void CreateDashboard()
{
   string name = "GS_BG";
   if(ObjectFind(0, name) < 0)
      ObjectCreate((long)0, name, (ENUM_OBJECT)OBJ_RECTANGLE_LABEL, 0, (datetime)0, (double)0);
      
   ObjectSetInteger(0, name, OBJPROP_CORNER, CORNER_RIGHT_UPPER);
   ObjectSetInteger(0, name, OBJPROP_XDISTANCE, 10);
   ObjectSetInteger(0, name, OBJPROP_YDISTANCE, 10);
   ObjectSetInteger(0, name, OBJPROP_XSIZE, 220);
   ObjectSetInteger(0, name, OBJPROP_YSIZE, 120);
   ObjectSetInteger(0, name, OBJPROP_BGCOLOR, clrBlack);
   ObjectSetInteger(0, name, OBJPROP_BORDER_TYPE, BORDER_FLAT);
   ObjectSetInteger(0, name, OBJPROP_COLOR, clrSlateGray);
   
   CreateLabel("GS_Title", "GOLD SCALPER AI v1.99", 20, 20, 10, clrCyan);
   CreateLabel("GS_Price", "Price: 0.00", 20, 45, 9, clrWhite);
   CreateLabel("GS_MA", "Trend MA: 0.00", 20, 60, 9, clrWhite);
   CreateLabel("GS_RSI", "RSI (14): 0.00", 20, 75, 9, clrWhite);
   CreateLabel("GS_Status", "STATUS: INITIALIZING", 20, 95, 10, clrWhite);
}

void CreateLabel(string name, string text, int x, int y, int size, color col)
{
   if(ObjectFind(0, name) < 0)
      ObjectCreate((long)0, name, (ENUM_OBJECT)OBJ_LABEL, 0, (datetime)0, (double)0);
      
   ObjectSetInteger(0, name, OBJPROP_CORNER, CORNER_RIGHT_UPPER);
   ObjectSetInteger(0, name, OBJPROP_XDISTANCE, x + 180); 
   ObjectSetInteger(0, name, OBJPROP_YDISTANCE, y);
   ObjectSetString(0, name, OBJPROP_TEXT, text);
   ObjectSetInteger(0, name, OBJPROP_COLOR, col);
   ObjectSetInteger(0, name, OBJPROP_FONTSIZE, size);
   ObjectSetString(0, name, OBJPROP_FONT, "Arial Bold");
}

void UpdateDashboard(double pr, double m, double r, string s, color sc)
{
   ObjectSetString(0, "GS_Price", OBJPROP_TEXT, "Price: " + DoubleToString(pr, _Digits));
   ObjectSetString(0, "GS_MA", OBJPROP_TEXT, "Trend MA: " + DoubleToString(m, _Digits));
   ObjectSetString(0, "GS_RSI", OBJPROP_TEXT, "RSI (14): " + DoubleToString(r, 2));
   ObjectSetString(0, "GS_Status", OBJPROP_TEXT, s);
   ObjectSetInteger(0, "GS_Status", OBJPROP_COLOR, sc);
}
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mql5Code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-yellow-600">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            🥇 DEPLOYMENT SUCCESSFUL
          </h2>
          <button onClick={onClose} className="text-white/70 hover:text-white font-bold">Close [X]</button>
        </div>
        
        <div className="p-8 overflow-auto">
          <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-2xl mb-6">
            <h3 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
              ✨ นี่คือโค้ดเวอร์ชั่นที่ทำงานได้จริงในเครื่องคุณ
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              คุณสามารถคัดลอกเก็บไว้เป็น Master Copy ได้เลยครับ <br/>
              หากต้องการปรับจูน Lot Size หรือ TP ในอนาคต สามารถแก้ได้ที่ส่วน <b>Input Parameters</b> บนสุดของโค้ดครับ
            </p>
          </div>

          <div className="relative group">
            <pre className="bg-black p-6 rounded-xl text-xs font-mono text-yellow-400 overflow-x-auto border border-slate-800 h-[300px]">
              {mql5Code}
            </pre>
            <button 
              onClick={copyToClipboard}
              className="absolute top-4 right-4 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-black text-sm font-black rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              {copied ? 'Copied Master Code!' : 'Copy Master Copy (v1.99)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MQL5CodeModal;
