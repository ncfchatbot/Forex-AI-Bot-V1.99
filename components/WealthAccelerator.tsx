
import React, { useState } from 'react';

const WealthAccelerator: React.FC<{ balance: number }> = ({ balance }) => {
  const [compoundingRate, setCompoundingRate] = useState(1.5); // Risk %

  const projectGrowth = (days: number) => {
    let current = balance;
    const dailyReturn = (compoundingRate * 0.8); // ประเมินกำไรสุทธิเฉลี่ยต่อวันหลังหักค่าคอม
    for (let i = 0; i < days; i++) {
      current += current * (dailyReturn / 100);
    }
    return current;
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#02040a] to-emerald-950/20 border-4 border-emerald-500/40 rounded-[4rem] p-10 lg:p-16 shadow-[0_0_150px_rgba(16,185,129,0.15)] backdrop-blur-3xl mb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-[12rem] italic font-black text-emerald-400 pointer-events-none uppercase select-none">GROWTH</div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 relative z-10">
        <div className="flex items-center gap-8">
          <div className="w-24 h-24 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-[0_20px_50px_rgba(16,185,129,0.4)]">🚀</div>
          <div>
            <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">Wealth <span className="text-emerald-400">Accelerator</span></h3>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-2 italic">กลยุทธ์เร่งพอร์ต v5.8 GHOST: โตแบบทวีคูณอย่างปลอดภัย</p>
          </div>
        </div>
        <div className="bg-slate-950/80 border border-white/5 p-6 rounded-[2.5rem] backdrop-blur-xl">
           <div className="text-[10px] text-slate-500 uppercase font-black mb-1">Current Power Level</div>
           <div className="text-emerald-400 font-mono font-black text-3xl">ELITE SCALE</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
        <div className="bg-black/40 p-10 rounded-[3rem] border border-emerald-500/20 hover:border-emerald-500/50 transition-all group">
          <h4 className="text-slate-500 text-[10px] font-black uppercase mb-6 tracking-widest">30 Days Projection</h4>
          <div className="text-5xl font-mono font-black text-white mb-4">
            ${projectGrowth(30).toLocaleString(undefined, {maximumFractionDigits: 0})}
          </div>
          <div className="text-emerald-400 text-xs font-bold italic">+{( (projectGrowth(30)/balance - 1) * 100 ).toFixed(1)}% Growth</div>
        </div>

        <div className="bg-black/40 p-10 rounded-[3rem] border border-emerald-500/20 hover:border-emerald-500/50 transition-all group">
          <h4 className="text-slate-500 text-[10px] font-black uppercase mb-6 tracking-widest">90 Days Projection</h4>
          <div className="text-5xl font-mono font-black text-white mb-4">
            ${projectGrowth(90).toLocaleString(undefined, {maximumFractionDigits: 0})}
          </div>
          <div className="text-emerald-400 text-xs font-bold italic">+{( (projectGrowth(90)/balance - 1) * 100 ).toFixed(1)}% Growth</div>
        </div>

        <div className="bg-emerald-500/10 p-10 rounded-[3rem] border-2 border-emerald-500/30 flex flex-col justify-center">
          <h4 className="text-emerald-400 text-[10px] font-black uppercase mb-4 tracking-widest">Compounding Risk Control</h4>
          <input 
            type="range" min="0.5" max="3" step="0.1" value={compoundingRate}
            onChange={(e) => setCompoundingRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 mb-4"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-black uppercase">
            <span>Safety ({compoundingRate}%)</span>
            <span className="text-emerald-400">Port Scale Mode</span>
          </div>
        </div>
      </div>

      <div className="p-8 bg-black/60 rounded-[3rem] border border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex gap-6">
            <div className="text-3xl">🛡️</div>
            <div>
              <h5 className="text-white font-black text-sm uppercase italic">Ghost Trailing Logic</h5>
              <p className="text-slate-500 text-[11px] mt-1 italic">ระบบจะแอบเลื่อน Stop Loss ตามกำไรในหน่วยความจำของบอท ทำให้โบรกเกอร์ไม่เห็นจุด TP/SL ของเรา ลดโอกาสโดนกวาดไส้เทียน</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-3xl">⏱️</div>
            <div>
              <h5 className="text-white font-black text-sm uppercase italic">Session Alpha Filter</h5>
              <p className="text-slate-500 text-[11px] mt-1 italic">บอทจะคำนวณ Lot สูงขึ้นเฉพาะช่วงตลาดลอนดอนและนิวยอร์ก ซึ่งมีสภาพคล่อง SMC สูงสุด เพื่อความปลอดภัยในการออกตัว</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WealthAccelerator;
