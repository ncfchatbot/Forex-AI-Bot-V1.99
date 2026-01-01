
import React, { useState } from 'react';

const WealthAccelerator: React.FC<{ balance: number }> = ({ balance }) => {
  const [compoundingRate, setCompoundingRate] = useState(1.5); // Risk %

  const projectGrowth = (days: number, startBalance: number) => {
    let current = startBalance;
    const dailyReturn = (compoundingRate * 0.4); // อ้างอิงจากผลเทสเฉลี่ย (Conservative)
    for (let i = 0; i < days; i++) {
      current += current * (dailyReturn / 100);
    }
    return current;
  };

  return (
    <div className="space-y-10">
      <div className="bg-gradient-to-br from-slate-900 via-[#02040a] to-emerald-950/20 border-4 border-emerald-500/40 rounded-[4rem] p-10 lg:p-16 shadow-[0_0_150px_rgba(16,185,129,0.15)] backdrop-blur-3xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 text-[12rem] italic font-black text-emerald-400 pointer-events-none uppercase select-none">GROWTH</div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16 relative z-10">
          <div className="flex items-center gap-8">
            <div className="w-24 h-24 bg-emerald-500 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-[0_20px_50px_rgba(16,185,129,0.4)]">🚀</div>
            <div>
              <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">Wealth <span className="text-emerald-400">Accelerator</span></h3>
              <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-2 italic">วิเคราะห์ความคุ้มค่า: จากพอร์ตเริ่มต้นสู่พอร์ตมหาเศรษฐี</p>
            </div>
          </div>
        </div>

        {/* Scaling Truth Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 relative z-10">
          <div className="bg-black/60 p-10 rounded-[3rem] border border-white/5">
            <h4 className="text-emerald-400 font-black text-xl mb-6 uppercase italic">Phase 1: Your Current Stage</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-slate-500 text-[11px] font-black uppercase">Start Balance</span>
                <span className="text-white font-mono font-bold text-xl">${balance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-slate-500 text-[11px] font-black uppercase">Est. Monthly Profit</span>
                <span className="text-emerald-400 font-mono font-bold text-xl">~${(balance * 0.12).toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-slate-500 italic leading-relaxed">
                "ในระยะนี้กำไรอาจดูน้อย (หลักสิบเหรียญ) แต่คุณกำลังสร้าง 'รากฐาน' ที่แข็งแกร่งที่สุด คือการไม่พอร์ตแตกในตลาดทองครับ"
              </p>
            </div>
          </div>

          <div className="bg-emerald-500/5 p-10 rounded-[3rem] border-2 border-emerald-500/20">
            <h4 className="text-white font-black text-xl mb-6 uppercase italic">Phase 2: The Scaling Truth</h4>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-slate-500 text-[11px] font-black uppercase">If Balance is $10,000</span>
                <span className="text-emerald-400 font-mono font-bold text-xl">~$1,200 / Month</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-4">
                <span className="text-slate-500 text-[11px] font-black uppercase">If Balance is $50,000</span>
                <span className="text-emerald-400 font-mono font-bold text-xl">~$6,000 / Month</span>
              </div>
              <p className="text-[10px] text-emerald-400 font-bold italic leading-relaxed">
                "หัวใจไม่ได้อยู่ที่กำไรกี่บาทในวันนี้ แต่อยู่ที่ 'ระบบ' นี้สามารถรันพอร์ต $50,000 ได้โดยที่คุณไม่ต้องเปลี่ยนวิธีเทรดเลยครับ"
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10">
          <div className="bg-black/40 p-10 rounded-[3rem] border border-emerald-500/20">
            <h4 className="text-slate-500 text-[10px] font-black uppercase mb-6 tracking-widest">Projection (1 Year with {balance} $)</h4>
            <div className="text-6xl font-mono font-black text-white mb-4">
              ${projectGrowth(365, balance).toLocaleString(undefined, {maximumFractionDigits: 0})}
            </div>
            <div className="text-emerald-400 text-xs font-bold italic">โตขึ้น {( (projectGrowth(365, balance)/balance - 1) * 100 ).toFixed(0)}% ต่อปี</div>
          </div>

          <div className="bg-emerald-500/10 p-10 rounded-[3rem] border-2 border-emerald-500/30 flex flex-col justify-center">
            <h4 className="text-emerald-400 text-[10px] font-black uppercase mb-4 tracking-widest">Risk Tuning</h4>
            <input 
              type="range" min="0.5" max="3" step="0.1" value={compoundingRate}
              onChange={(e) => setCompoundingRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 mb-4"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-black uppercase">
              <span>Safety Focus ({compoundingRate}%)</span>
              <span className="text-emerald-400">Scale Master Mode</span>
            </div>
          </div>
        </div>

        <div className="p-8 bg-black/60 rounded-[3rem] border border-white/5">
          <h5 className="text-white font-black text-xs uppercase mb-6 italic text-center">🏆 บทสรุปความคุ้มค่า (Analysis Verdict)</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <div className="text-white font-bold text-[10px] uppercase mb-1">ความเสี่ยง</div>
              <p className="text-slate-500 text-[9px] italic">ต่ำมาก (0.5-1.5%) ยากที่จะพอร์ตแตก</p>
            </div>
            <div className="text-center border-x border-white/5">
              <div className="text-2xl mb-2">📈</div>
              <div className="text-white font-bold text-[10px] uppercase mb-1">ผลตอบแทน</div>
              <p className="text-slate-500 text-[9px] italic">สม่ำเสมอ กินยาวแบบทบต้น</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💎</div>
              <div className="text-white font-bold text-[10px] uppercase mb-1">ความคุ้มค่า</div>
              <p className="text-emerald-400 text-[9px] font-bold italic">สูงที่สุดสำหรับการปั้นพอร์ตยั่งยืน</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WealthAccelerator;
