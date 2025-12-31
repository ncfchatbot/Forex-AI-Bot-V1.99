
import React from 'react';
import { MarketSignal, MarketSide } from '../types';

interface SignalCardProps {
  signal: MarketSignal | null;
  isLoading: boolean;
  onRefresh: () => void;
  showRefreshBtn?: boolean;
}

const SignalCard: React.FC<SignalCardProps> = ({ signal, isLoading, onRefresh, showRefreshBtn = true }) => {
  return (
    <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 shadow-xl transition-all hover:border-blue-500/30">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded-full"></span>
          AI Sentiment
        </h2>
      </div>

      {!signal && !isLoading ? (
        <div className="text-center py-10">
          <p className="text-slate-500 italic text-sm mb-6">
            Cloud AI is Sleeping (Eco-Mode)
          </p>
          <button 
            onClick={onRefresh}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg"
          >
            🚀 Sync Live AI
          </button>
        </div>
      ) : isLoading ? (
        <div className="space-y-4 animate-pulse">
          <div className="h-16 bg-slate-700/50 rounded-lg"></div>
          <div className="h-24 bg-slate-700/50 rounded-lg"></div>
        </div>
      ) : signal ? (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className={`text-3xl font-black px-5 py-2 rounded-xl ${
              signal.side === MarketSide.BUY ? 'bg-green-500/10 text-green-400' : 
              signal.side === MarketSide.SELL ? 'bg-red-500/10 text-red-400' : 
              'bg-slate-500/10 text-slate-400'
            }`}>
              {signal.side}
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Confidence</div>
              <div className="text-xl font-mono text-slate-200">{signal.confidence}%</div>
            </div>
          </div>

          <div className="bg-black/20 p-4 rounded-lg border border-white/5">
            <p className="text-slate-400 leading-relaxed text-xs italic">
              {signal.reasoning}
            </p>
          </div>

          <div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">Key Drivers</div>
            <div className="flex flex-wrap gap-2">
              {signal.keyFactors.map((factor, idx) => (
                <span key={idx} className="px-2 py-1 bg-slate-900 text-slate-400 text-[10px] rounded border border-slate-800 italic">
                  {factor}
                </span>
              ))}
            </div>
          </div>

          {showRefreshBtn && (
            <div className="pt-4 border-t border-white/5">
               <button 
                onClick={onRefresh}
                disabled={isLoading}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 border border-white/5 text-slate-500 hover:text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all"
              >
                {isLoading ? 'ANALYZING...' : '🔄 Update Analysis'}
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default SignalCard;
