
import React from 'react';

const SafeguardBanner: React.FC = () => {
  return (
    <div className="mb-14 p-14 bg-gradient-to-br from-blue-950/20 via-black to-transparent border-2 border-blue-600/30 rounded-[4rem] backdrop-blur-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-16 opacity-5 text-[12rem] font-black italic text-white pointer-events-none select-none uppercase leading-none text-blue-500">PROTECT</div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-8 py-2.5 bg-blue-600 text-white text-[11px] font-black uppercase mb-10 tracking-widest rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)]">
             PROFIT PRESERVATION SYSTEM
          </div>
          <h2 className="text-white font-black text-6xl uppercase tracking-tighter italic mb-10 leading-[1]">
            "ล็อคกำไร <span className="text-blue-500 underline decoration-[12px] underline-offset-[16px]">144,000</span> <br/>ไม่ให้ไหลกลับลงมาอีก"
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed italic font-medium">
            v22.0 ถูกสร้างมาเพื่อแก้ปัญหา <b>"กำไรคืนตลาด"</b> โดยเฉพาะ <br/>
            เมื่อบอททำกำไรได้ถึงจุดสูงสุด (All-time High) ระบบจะล็อคกำไรส่วนใหญ่ไว้ <br/>
            และลดความเสี่ยงลงทันที 80% เพื่อให้มั่นใจว่าคุณจะจบปีด้วยผลกำไรมหาศาลครับ!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafeguardBanner;
