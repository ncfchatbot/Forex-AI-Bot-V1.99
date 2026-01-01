
import React from 'react';

const AbsoluteLockBanner: React.FC = () => {
  return (
    <div className="mb-10 p-10 bg-gradient-to-r from-emerald-900/40 via-teal-900/10 to-transparent border-l-8 border-emerald-500 rounded-r-[3rem] backdrop-blur-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-7xl font-black italic text-white pointer-events-none">NO MORE DRAWDOWN</div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-white font-black text-3xl uppercase tracking-tighter italic mb-4">
            "ทำไมกันหน้าทุนเดิมถึงเอาไม่อยู่? นี่คือคำตอบครับ"
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed italic">
            ในรูปที่คุณส่งมา ราคาไหลลงแรงมากจนระบบ Trailing แบบเดิมขยับไม่ทัน <br/>
            <b>v16.0 ABSOLUTE LOCK</b> จะใช้ระบบ <b>"Instant Break-even"</b>: <br/>
            ทันทีที่ราคาวิ่งพ้นระยะ Spread + 5 Points บอทจะกระโดดมาล็อคหน้าทุนทันที 100% โดยไม่ต้องรอให้กำไรเยอะก่อนครับ
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-emerald-500/20 px-8 py-5 rounded-3xl border border-emerald-500/30 text-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <div className="text-emerald-400 font-black text-2xl">v16.0</div>
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Instant Lock</div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black/40 p-5 rounded-2xl border border-emerald-500/20 flex items-center gap-4">
          <span className="text-2xl">⚡</span>
          <p className="text-[10px] text-slate-400 italic"><b>Zero-Gap Trigger:</b> ล็อคทันทีเมื่อพ้นค่า Spread ไม่สนว่ากำไรจะกี่เหรียญ</p>
        </div>
        <div className="bg-black/40 p-5 rounded-2xl border border-emerald-500/20 flex items-center gap-4">
          <span className="text-2xl">🦾</span>
          <p className="text-[10px] text-slate-400 italic"><b>Hard Enforcement:</b> กันหน้าทุนบวกเพิ่ม 1 Point เพื่อการันตีว่าปิดไม้จะไม่เสียค่าคอมมิชชัน</p>
        </div>
      </div>
    </div>
  );
};

export default AbsoluteLockBanner;
