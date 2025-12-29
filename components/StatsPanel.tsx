
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
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col justify-center">
          <div className="text-slate-400 text-xs font-bold uppercase mb-1">Total Balance</div>
          <div className="text-3xl font-mono font-bold text-blue-400">${stats.balance.toFixed(2)}</div>
          <div className="mt-2 text-xs text-slate-500">Target: $100.00/day</div>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col justify-center">
          <div className="text-slate-400 text-xs font-bold uppercase mb-1">Daily Profit</div>
          <div className={`text-3xl font-mono font-bold ${stats.dailyProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            ${stats.dailyProfit.toFixed(2)}
          </div>
          <div className="mt-2 text-xs text-slate-500">Progress: {((stats.dailyProfit/100)*100).toFixed(1)}%</div>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col justify-center">
          <div className="text-slate-400 text-xs font-bold uppercase mb-1">Win Rate</div>
          <div className="text-3xl font-mono font-bold text-purple-400">{stats.winRate}%</div>
          <div className="mt-2 text-xs text-slate-500">From {stats.totalTrades} trades</div>
        </div>
      </div>

      <div className="lg:col-span-3 bg-slate-800 p-6 rounded-xl border border-slate-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-slate-200">Equity Growth Simulation</h3>
          <div className="text-xs text-slate-500 italic">Simulated based on 0.01 lot per trade</div>
        </div>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={history}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="name" hide />
              <YAxis domain={['auto', 'auto']} stroke="#475569" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                itemStyle={{ color: '#60a5fa' }}
              />
              <Area type="monotone" dataKey="equity" stroke="#3b82f6" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
