
import React, { useState } from 'react';

interface IncomeForecastProps {
  balance: number;
}

const IncomeForecast: React.FC<IncomeForecastProps> = ({ balance }) => {
  const [riskMode, setRiskMode] = useState<'STABLE' | 'PERFORMANCE' | 'ELITE'>('PERFORMANCE');

  const riskSettings = {
    STABLE: { roi: 10, risk: 0.5, dd: 3, label: 'Conservative Growth (ปลอดภัยสูงสุด)', estLot: (balance * 0.0001).toFixed(2) },
    PERFORMANCE: { roi: 25, risk: 1.5, dd: 8, label: 'Standard Elite (หวังผลกำไรชัดเจน)', estLot: (balance * 0.0003).toFixed(2) },
    ELITE: { roi: 50, risk: 3.0, dd: 15, label: 'Aggressive Wealth (ปั้นพอร์ตโตเร็ว)', estLot: (balance * 0.0006).toFixed(2) }
  };

  const currentSettings = riskSettings[riskMode];

  return (
    <div className="space-y-10 mb-14">
      <div className="bg-slate-900/80 border border-emerald-500/20 rounded-[3rem] p-10 lg:p-14 shadow-2xl backdrop-blur-3xl overflow-hidden relative group">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-10 relative z-10">
          <div>
            <h2 className="text-white font-black text-5xl uppercase tracking-tighter italic flex items-center gap-5">
              <span className="w-4 h-14 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]"></span>
              Wealth <span className="text-emerald-400">Projection</span>
            </h2>
            <p className="text-slate-500 text-[11px] font-black mt-4 uppercase tracking-[0.3em] italic">เปลี่ยนพอร์ตของคุณให้เป็น "เครื่องจักรผลิตกำไร" แบบหวังผลชัดเจน</p>
          </div>
          
          <div className="flex bg-slate-950 p-2.5 rounded-full border border-white/5 shadow-2xl">
            {(['STABLE', 'PERFORMANCE', 'ELITE'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setRiskMode(mode)}
                className={`px-10 py-4 rounded-full text-[12px] font-black transition-all ${
                  riskMode === mode 
                  ? 'bg-emerald-600 text-white shadow-[0_10px_20px_rgba(16,185,129,0.3)] scale-105' 
                  : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {mode === 'STABLE' ? '🛡️ STABLE' : mode}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
          <div className="bg-black/50 p-12 rounded-[2.5rem] border border-emerald-500/10 hover:border-emerald-500/30 transition-all group/card shadow-inner">
            <div className="text-slate-500 font-black text-[11px] uppercase tracking-widest mb-3">Risk Per Trade</div>
            <div className="text-6xl font-mono font-black text-emerald-400">{currentSettings.risk}%</div>
            <div className="mt-8 text-[12px] text-slate-400 font-bold italic border-l-4 border-emerald-500 pl-5">
              {currentSettings.label}
            </div>
          </div>

          <div className="bg-black/50 p-12 rounded-[2.5rem] border border-blue-500/10 shadow-inner">
            <div className="text-slate-500 font-black text-[11px] uppercase tracking-widest mb-3">Recommended Lot</div>
            <div className="text-6xl font-mono font-black text-blue-400">{currentSettings.estLot}</div>
            <div className="mt-8 text-[12px] text-slate-400 font-bold italic border-l-4 border-blue-500 pl-5">
              คำนวณจากทุน $${balance.toLocaleString()}
            </div>
          </div>

          <div className="bg-black/50 p-12 rounded-[2.5rem] border border-yellow-500/10 shadow-inner">
            <div className="text-slate-500 font-black text-[11px] uppercase tracking-widest mb-3">Monthly Target</div>
            <div className="text-6xl font-mono font-black text-yellow-500">
              ${(balance * (currentSettings.roi / 100)).toLocaleString()}
            </div>
            <div className="mt-8 text-[12px] text-slate-400 font-bold italic border-l-4 border-yellow-500 pl-5">
              ROI คาดการณ์: {currentSettings.roi}%
            </div>
          </div>
        </div>

        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-[3.5rem] p-12 mb-14 relative overflow-hidden text-center">
            <p className="text-emerald-400 text-sm font-black uppercase italic italic leading-relaxed">
              "ลบภาพบอทเก็บเศษเงินทิ้งไป! GoldMaster v5.7 คือระบบเทรดระดับสถาบัน <br/>
              ที่เน้นความแม่นยำเพื่อ 'กำไรที่จับต้องได้' และการเติบโตของพอร์ตที่ยั่งยืนครับ"
            </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeForecast;
