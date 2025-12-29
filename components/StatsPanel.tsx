
import React from 'react';
import { AccountStats } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StatsPanelProps {
  stats: AccountStats;
  history: any[];
}

const StatsPanel: React.FC<StatsPanelProps> = ({ stats, history }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
      <div className="lg:col-span-1 space-y-4">
        <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex flex-col justify-center backdrop-blur-sm">
          <div className="text-slate-500 text-[10px] font-black uppercase mb-1 tracking-widest">Balance</div>
          <div className="text-2xl font-mono font-black text-yellow-500">${stats.balance.toFixed(2)}</div>
        </div>
        <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 flex flex-col justify-center backdrop-blur-sm">
          <div className="text-slate-500 text-[10px] font-black uppercase mb-1 tracking-widest">Win Rate</div>
          <div className="text-2xl font-mono font-black text-emerald-500">{stats.winRate}%</div>
        </div>
      </div>

      <div className="lg:col-span-3 bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col min-h-[300px]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-black text-xs text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Growth Simulation
          </h3>
          <div className="text-[10px] text-slate-600 font-mono">0.05 Lot Ratio</div>
        </div>
        
        {/* Fix: Container must have a stable width/height for ResponsiveContainer */}
        <div className="flex-1 w-full relative min-h-[200px]">
          <div className="absolute inset-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={history} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#eab308" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" hide />
                <YAxis domain={['auto', 'auto']} stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px', fontSize: '10px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="equity" 
                  stroke="#eab308" 
                  fillOpacity={1} 
                  fill="url(#colorEquity)" 
                  strokeWidth={3}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
