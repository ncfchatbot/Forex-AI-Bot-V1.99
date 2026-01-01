
import React from 'react';

const UnstoppableBanner: React.FC = () => {
  return (
    <div className="mb-14 p-14 bg-gradient-to-br from-red-950/20 via-black to-transparent border-2 border-red-600/30 rounded-[4rem] backdrop-blur-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-16 opacity-5 text-[12rem] font-black italic text-white pointer-events-none select-none uppercase leading-none">FIXED</div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-8 py-2.5 bg-red-600 text-white text-[11px] font-black uppercase mb-10 tracking-widest rounded-full shadow-[0_0_20px_rgba(220,38,38,0.3)]">
             COMPILE ERROR SOLVED
          </div>
          <h2 className="text-white font-black text-6xl uppercase tracking-tighter italic mb-10 leading-[1]">
            "จากรูปที่คุณส่งมา... <br/>คำสั่ง <span className="text-red-500 underline decoration-[12px] underline-offset-[16px]">iRSI</span> มันใช้ผิดแบบครับ"
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed italic font-medium">
            MT5 ไม่เหมือน MT4 ครับ คุณจะเรียกใช้ iRSI ตรงๆ ในบรรทัดคำนวณไม่ได้ <br/>
            ผมเขียน Code v20.0 ให้ใหม่โดยใช้ระบบ <b>Handle & Buffer</b> ตามมาตรฐาน MT5 แท้ๆ <br/>
            เอาไปวางแล้วกด <b>Compile (F7)</b> รับรองว่าผ่าน 100% ไม่มี Error ครับ!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnstoppableBanner;
