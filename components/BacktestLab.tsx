
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BacktestLab: React.FC<{ balance: number }> = ({ balance }) => {
  const [testBalance, setTestBalance] = useState(balance);
  const [risk, setRisk] = useState(1);
  const [months, setMonths] = useState(6);

  // จำลองข้อมูลแบคเทส (SMC v5.7 Logic)
  const generateSimData = () => {
    let current = testBalance;
    const data = [{ month: 'Start', equity: current }];
    for (let i = 1; i <= months; i++) {
      const win = Math.random() > 0.3; // 70% Win Rate simulation
      const change = win ? (current * (risk * 2.5 / 100)) : -(current * (risk / 100));
      current += change;
      data.push({ month: `M${i}`, equity: Math.round(current) });
    }
    return data;
  };

  const simData = generateSimData();
  const finalEquity = simData[simData.length - 1].equity;
  const totalProfit = finalEquity - testBalance;

  return (
    <div className="bg-slate-900/60 border-2 border-indigo-500/20 rounded-[3rem] p-10 shadow-2xl backdrop-blur-xl mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
        <div>
          <h3 className="text-white font-black text-2xl uppercase italic tracking-tighter flex items-center gap-4">
            <span className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-lg text-indigo-400">🧪</span>
            Backtest <span className="text-indigo-400">Lab v5.7</span>
          </h3>
          <p className="text-slate-500 text-[10px] font-black mt-2 uppercase tracking-widest italic">จำลองผลประกอบการย้อนหลังตามกลยุทธ์ SMC</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
             <span className="text-[10px] text-slate-500 block mb-1 uppercase font-black">Total Profit Est.</span>
             <span className="text-emerald-400 font-mono font-black text-xl">${totalProfit.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
            <label className="text-[10px] text-slate-500 uppercase font-black block mb-4 tracking-widest">Starting Capital</label>
            <input 
              type="number" 
              value={testBalance} 
              onChange={(e) => setTestBalance(Number(e.target.value))}
              className="w-full bg-slate-800 border border-white/10 p-4 rounded-xl text-white font-mono text-lg focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>

          <div className="bg-black/40 p-6 rounded-3xl border border-white/5">
            <label className="text-[10px] text-slate-500 uppercase font-black block mb-4 tracking-widest">Risk Per Trade: {risk}%</label>
            <input 
              type="range" min="0.5" max="5" step="0.5" value={risk}
              onChange={(e) => setRisk(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between mt-2 text-[10px] text-slate-600 font-bold uppercase">
              <span>Low Risk</span>
              <span>Aggressive</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-black/20 rounded-[2.5rem] p-6 border border-white/5 min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={simData}>
              <defs>
                <linearGradient id="colorSim" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="month" stroke="#475569" fontSize={10} />
              <YAxis stroke="#475569" fontSize={10} tickFormatter={(val) => `$${val/1000}k`} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '15px', color: '#fff' }} />
              <Area type="monotone" dataKey="equity" stroke="#6366f1" fillOpacity={1} fill="url(#colorSim)" strokeWidth={4} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BacktestLab;
