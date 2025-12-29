
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
    <div className={`rounded-xl border p-6 transition-all shadow-2xl ${verdict.successProbability < 30 ? 'bg-red-950/40 border-red-500/50' : 'bg-slate-800 border-slate-700'}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-black text-lg flex items-center gap-2">
          <svg className={`w-5 h-5 ${verdict.successProbability < 30 ? 'text-red-500' : 'text-blue-500'}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
          AI STRATEGIC VERDICT
        </h3>
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${verdict.successProbability < 30 ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
          {verdict.successProbability < 30 ? 'High Ruin Risk' : 'Sustainable'}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-black/30 p-4 rounded-lg border border-white/5">
          <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Win Probability</div>
          <div className={`text-2xl font-black ${verdict.successProbability < 30 ? 'text-red-400' : 'text-green-400'}`}>
            {verdict.successProbability}%
          </div>
        </div>
        <div className="bg-black/30 p-4 rounded-lg border border-white/5">
          <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Risk of Ruin</div>
          <div className={`text-2xl font-black ${verdict.riskOfRuin > 70 ? 'text-red-400' : 'text-orange-400'}`}>
            {verdict.riskOfRuin}%
          </div>
        </div>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
        "{verdict.verdict}"
      </p>

      <div className="space-y-2">
        <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">AI Recommendations:</div>
        {verdict.suggestions.map((s, i) => (
          <div key={i} className="flex gap-2 text-xs text-slate-400 bg-black/20 p-2 rounded border border-white/5">
            <span className="text-indigo-400">⚡</span> {s}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyConsultant;
