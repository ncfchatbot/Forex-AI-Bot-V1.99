
import React from 'react';
import { MarketSignal, MarketSide } from '../types';

interface SignalCardProps {
  signal: MarketSignal | null;
  isLoading: boolean;
  onRefresh: () => void;
}

const SignalCard: React.FC<SignalCardProps> = ({ signal, isLoading, onRefresh }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl transition-all hover:border-blue-500/50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
          AI Fundamental Analysis
        </h2>
        <button 
          onClick={onRefresh}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-all"
        >
          {isLoading ? 'Analyzing...' : 'Refresh Signal'}
        </button>
      </div>

      {!signal && !isLoading ? (
        <div className="text-center py-10 text-slate-400 italic">
          No signal generated. Click refresh to analyze market.
        </div>
      ) : isLoading ? (
        <div className="space-y-4 animate-pulse">
          <div className="h-20 bg-slate-700 rounded-lg"></div>
          <div className="h-32 bg-slate-700 rounded-lg"></div>
        </div>
      ) : signal ? (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className={`text-4xl font-black px-6 py-3 rounded-xl ${
              signal.side === MarketSide.BUY ? 'bg-green-500/20 text-green-400' : 
              signal.side === MarketSide.SELL ? 'bg-red-500/20 text-red-400' : 
              'bg-slate-500/20 text-slate-400'
            }`}>
              {signal.side}
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">Confidence</div>
              <div className="text-2xl font-mono">{signal.confidence}%</div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
            <p className="text-slate-300 leading-relaxed text-sm">
              {signal.reasoning}
            </p>
          </div>

          <div>
            <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Key Drivers</div>
            <div className="flex flex-wrap gap-2">
              {signal.keyFactors.map((factor, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full border border-slate-600">
                  {factor}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SignalCard;
