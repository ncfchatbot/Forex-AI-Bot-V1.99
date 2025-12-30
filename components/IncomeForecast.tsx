
import React, { useState } from 'react';

interface IncomeForecastProps {
  balance: number;
}

const IncomeForecast: React.FC<IncomeForecastProps> = ({ balance }) => {
  const [riskMode, setRiskMode] = useState<'SAFE' | 'GROWTH' | 'HYPER'>('HYPER');

  const riskSettings = {
    SAFE: { roi: 15, risk: 1, dd: 6, label: 'Conservative Growth', ruinLimit: 60 },
    GROWTH: { roi: 40, risk: 3, dd: 14, label: 'Moderate Compounding', ruinLimit: 25 },
    HYPER: { roi: 75, risk: 5, dd: 25, label: 'Aggressive Wealth Growth', ruinLimit: 15 }
  };

  const currentSettings = riskSettings[riskMode];
  
  const starterAmount = 100;
  const monthlyRate = currentSettings.roi / 100;
  const weeklyMultiplier = Math.pow(1 + monthlyRate, 1/4);
  
  const w1 = starterAmount * weeklyMultiplier;
  const w2 = w1 * weeklyMultiplier;
  const w3 = w2 * weeklyMultiplier;
  const w4 = starterAmount * (1 + monthlyRate);

  const totalReturn6Months = starterAmount * Math.pow(1 + monthlyRate, 6);

  return (
    <div className="space-y-10 mb-14">
      <div className="bg-slate-900/80 border border-emerald-500/20 rounded-[3rem] p-10 lg:p-14 shadow-2xl backdrop-blur-3xl overflow-hidden relative group">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-10 relative z-10">
          <div>
            <h2 className="text-white font-black text-5xl uppercase tracking-tighter italic flex items-center gap-5">
              <span className="w-4 h-14 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]"></span>
              Wealth <span className="text-emerald-400">Accelerator</span>
            </h2>
            <p className="text-slate-500 text-[11px] font-black mt-4 uppercase tracking-[0.3em] italic">v5.0 Elite Hyper-Compounding Simulation</p>
          </div>
          
          <div className="flex bg-slate-950 p-2.5 rounded-full border border-white/5 shadow-2xl">
            {(['SAFE', 'GROWTH', 'HYPER'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setRiskMode(mode)}
                className={`px-10 py-4 rounded-full text-[12px] font-black transition-all ${
                  riskMode === mode 
                  ? 'bg-emerald-600 text-white shadow-[0_10px_20px_rgba(16,185,129,0.3)] scale-105' 
                  : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {mode === 'HYPER' ? '🚀 HYPER' : mode}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
          <div className="bg-black/50 p-12 rounded-[2.5rem] border border-emerald-500/10 hover:border-emerald-500/30 transition-all group/card shadow-inner">
            <div className="text-slate-500 font-black text-[11px] uppercase tracking-widest mb-3">Target ROI (Monthly)</div>
            <div className="text-6xl font-mono font-black text-emerald-400">+{currentSettings.roi}%</div>
            <div className="mt-8 text-[12px] text-slate-400 font-bold italic border-l-4 border-emerald-500 pl-5">
              {currentSettings.label}
            </div>
          </div>

          <div className="bg-black/50 p-12 rounded-[2.5rem] border border-blue-500/10 shadow-inner">
            <div className="text-slate-500 font-black text-[11px] uppercase tracking-widest mb-3">Compounding Risk</div>
            <div className="text-6xl font-mono font-black text-blue-400">{currentSettings.risk}%</div>
            <div className="mt-8 text-[12px] text-slate-400 font-bold italic border-l-4 border-blue-500 pl-5">
              Max Projected DD: {currentSettings.dd}%
            </div>
          </div>

          <div className="bg-black/50 p-12 rounded-[2.5rem] border border-yellow-500/10 shadow-inner">
            <div className="text-slate-500 font-black text-[11px] uppercase tracking-widest mb-3">Current Yield</div>
            <div className="text-6xl font-mono font-black text-yellow-500">
              ${(balance * (currentSettings.roi / 100)).toLocaleString()}
            </div>
            <div className="mt-8 text-[12px] text-slate-400 font-bold italic border-l-4 border-yellow-500 pl-5">
              Based on v5.0 Efficiency
            </div>
          </div>
        </div>

        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-[3.5rem] p-12 mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">🔥</div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center text-4xl shadow-2xl shadow-emerald-500/30">📈</div>
              <div>
                <h3 className="text-white font-black text-2xl uppercase italic">Hyper-Growth Path: $100 Starter</h3>
                <p className="text-emerald-400 text-[11px] font-black uppercase tracking-widest mt-2">จำลองพลังของ AGGRESSIVE 5% RISK (No Withdrawals)</p>
              </div>
            </div>
            <div className="text-center md:text-right">
               <div className="text-[11px] text-slate-500 font-black uppercase mb-2">Month 1 Final</div>
               <div className="text-5xl font-mono font-black text-white">${w4.toFixed(2)}</div>
               <div className="text-emerald-400 text-sm font-bold mt-2">Growth Performance: +{currentSettings.roi}%</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Week 1', val: w1 },
              { label: 'Week 2', val: w2 },
              { label: 'Week 3', val: w3 },
              { label: 'Week 4', val: w4 },
            ].map((week, idx) => (
              <div key={idx} className="bg-black/60 p-8 rounded-[2.5rem] border border-white/5 group hover:border-emerald-500/40 transition-all shadow-xl">
                <div className="text-[11px] text-slate-500 font-black mb-4 uppercase tracking-tighter">{week.label}</div>
                <div className="text-2xl font-mono font-black text-slate-100">${week.val.toFixed(2)}</div>
                <div className="mt-6 h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.7)] transition-all duration-1000" 
                    style={{ width: `${((idx + 1) / 4) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-indigo-600/5 border border-indigo-500/20 rounded-[3rem] p-10 flex flex-col justify-between shadow-2xl">
             <div>
               <div className="text-indigo-400 font-black text-base uppercase mb-3 flex items-center gap-4">
                 <span className="w-3 h-3 bg-indigo-500 rounded-full animate-ping"></span>
                 6-Month Hyper-Projection
               </div>
               <p className="text-[12px] text-slate-400 font-bold italic mb-8">
                 "ด้วยความเสี่ยง {currentSettings.risk}% และการทำ Compounding แบบ 100% Autopilot พอร์ตของคุณจะเติบโตแบบทวีคูณ:"
               </p>
             </div>
             <div className="flex items-end justify-between">
                <div className="text-6xl font-mono font-black text-white drop-shadow-2xl">
                  ${Math.floor(totalReturn6Months).toLocaleString()}
                </div>
                <div className="text-[11px] text-indigo-400 font-black bg-indigo-500/10 px-5 py-2 rounded-full uppercase tracking-widest border border-indigo-500/20">HYPER-COMPOUND</div>
             </div>
          </div>

          <div className="bg-slate-950/50 p-10 rounded-[3rem] border border-white/5 flex flex-col justify-center">
            <h4 className="text-white font-black text-sm uppercase mb-6 tracking-widest italic flex items-center gap-3">
              <span className="text-emerald-500 text-xl">🚀</span> v5.0 Aggressive Logic
            </h4>
            <div className="space-y-4 text-[12px] text-slate-400 leading-relaxed italic">
              <p>• <span className="text-emerald-400 font-black">Aggressive Risk:</span> เราใช้ความเสี่ยง 5% เพื่อเร่งการเติบโตในช่วงเริ่มต้นของพอร์ตขนาดเล็ก</p>
              <p>• <span className="text-emerald-400 font-black">Pure Autopilot:</span> บอทจะคำนวณ Lot ใหม่ทุกไม้ตามยอด Balance ปัจจุบัน ยิ่งชนะพอร์ตยิ่งโตไว</p>
              <p>• <span className="text-emerald-400 font-black">Zero Interference:</span> ในโหมด Hyper การตัดสินใจด้วยอารมณ์คือความเสี่ยงเดียวที่ระบบควบคุมไม่ได้ครับ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeForecast;
