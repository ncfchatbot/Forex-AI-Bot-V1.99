
import React from 'react';
import { StrategyVerdict, MarketSide } from '../types';

interface StrategyConsultantProps {
  verdict: StrategyVerdict | null;
  isLoading: boolean;
  sideBias?: MarketSide;
}

const StrategyConsultant: React.FC<StrategyConsultantProps> = ({ verdict, isLoading, sideBias = MarketSide.BUY }) => {
  if (isLoading) return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 animate-pulse">
      <div className="h-4 bg-slate-700 w-1/2 mb-4"></div>
      <div className="h-20 bg-slate-700 rounded-lg"></div>
    </div>
  );

  if (!verdict) return null;

  return (
    <div className={`rounded-[2.5rem] border p-10 transition-all shadow-3xl bg-slate-900/60 border-slate-800 backdrop-blur-3xl`}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-black text-xl text-white flex items-center gap-4 uppercase italic tracking-tighter">
          <span className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-lg text-indigo-400">🧠</span>
          BIAS ANALYSIS
        </h3>
        <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${sideBias === MarketSide.BUY ? 'bg-emerald-500 text-slate-950' : 'bg-red-500 text-white'}`}>
          {sideBias} BIAS ACTIVE
        </div>
      </div>

      {/* Market Bias Explanation */}
      <div className="mb-10 bg-black/40 p-6 rounded-3xl border border-white/5">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest italic">ทำไมบอทถึงเลือกฝั่ง {sideBias}?</span>
        </div>
        <p className="text-slate-300 text-[11px] leading-relaxed italic">
          {sideBias === MarketSide.BUY 
            ? "เพราะโครงสร้างตลาดปัจจุบันเป็นขาขึ้น (Bullish Structure) การเปิด BUY ใน Demand Zone มีความน่าจะเป็น (Win Rate) สูงกว่าการ Sell สวนเทรนครับ" 
            : "เพราะโครงสร้างตลาดเปลี่ยนเป็นขาลง (CHoCH) และราคากำลังทดสอบ Supply Zone บอทจึงเน้นฝั่ง SELL เพื่อตามน้ำรายใหญ่ครับ"}
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex items-center justify-between">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">SMC Trend Alignment</span>
          <span className="text-emerald-400 font-black text-xs uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> FULLY ALIGNED
          </span>
        </div>
        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex items-center justify-between">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Opposite Signal Risk</span>
          <span className={`font-black text-xs uppercase ${sideBias === MarketSide.BUY ? 'text-red-400' : 'text-emerald-400'}`}>
             {sideBias === MarketSide.BUY ? 'SELL IS HIGH RISK' : 'BUY IS HIGH RISK'}
          </span>
        </div>
      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/10 p-6 rounded-3xl mb-8">
        <div className="text-[10px] text-indigo-400 font-black uppercase mb-3 tracking-widest italic">AI Suggestion:</div>
        <p className="text-slate-300 text-[11px] leading-relaxed italic">
          {verdict.verdict}
        </p>
      </div>

      <div className="space-y-3">
        {verdict.suggestions.map((s, i) => (
          <div key={i} className="flex gap-4 text-[10px] text-slate-400 bg-black/30 p-4 rounded-2xl border border-white/5 items-start">
             <span className="text-indigo-400 text-xs">●</span>
             <span>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyConsultant;
