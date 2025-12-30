
import React from 'react';
import { StrategyVerdict } from '../types';

interface StrategyConsultantProps {
  verdict: StrategyVerdict | null;
  isLoading: boolean;
}

const StrategyConsultant: React.FC<StrategyConsultantProps> = ({ verdict, isLoading }) => {
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
          STRATEGIC CONSULTANT
        </h3>
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${verdict.successProbability < 50 ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'}`}>
          {verdict.successProbability < 50 ? 'High Risk Zone' : 'Aggressive Edge'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
          <div className="text-[10px] text-slate-500 font-bold uppercase mb-2 tracking-widest">Success Edge</div>
          <div className={`text-4xl font-mono font-black ${verdict.successProbability < 50 ? 'text-red-400' : 'text-emerald-400'}`}>
            {verdict.successProbability}%
          </div>
        </div>
        <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
          <div className="text-[10px] text-slate-500 font-bold uppercase mb-2 tracking-widest">Volatility Guard</div>
          <div className="text-4xl font-mono font-black text-blue-400">
            350pts
          </div>
        </div>
      </div>

      <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-3xl mb-8">
        <div className="text-[10px] text-emerald-400 font-black uppercase mb-3 tracking-widest">Tactical Advice:</div>
        <p className="text-slate-300 text-sm leading-relaxed italic">
          "{verdict.verdict}"
        </p>
      </div>

      <div className="space-y-4">
        <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-4">Final v5.0 Guidelines:</div>
        <div className="flex gap-4 text-[12px] text-slate-400 bg-black/30 p-4 rounded-2xl border border-white/5 items-start">
           <span className="text-emerald-500 text-lg">⚡</span>
           <span><b>Breathing Room:</b> ทองคำผันผวนสูง ห้ามเลื่อน SL มากันทุนเร็วเกินไป (แนะนำให้รออย่างน้อย +350-400 จุด)</span>
        </div>
        <div className="flex gap-4 text-[12px] text-slate-400 bg-black/30 p-4 rounded-2xl border border-white/5 items-start">
           <span className="text-emerald-500 text-lg">⚡</span>
           <span><b>Structure vs Fixed:</b> บอทตัวนี้ขยับ SL ตามโครงสร้างราคาสลับกับระยะห่างคงที่ เพื่อลดการโดนสะบัดกินทุน</span>
        </div>
      </div>
    </div>
  );
};

export default StrategyConsultant;
