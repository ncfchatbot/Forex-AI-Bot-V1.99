
import React from 'react';

const ExecutionerBanner: React.FC = () => {
  return (
    <div className="mb-14 p-14 bg-gradient-to-br from-yellow-950/20 via-black to-transparent border-2 border-yellow-500/20 rounded-[4rem] backdrop-blur-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-16 opacity-5 text-[15rem] font-black italic text-white pointer-events-none select-none uppercase leading-none">GOLD</div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-8 py-2.5 bg-yellow-500 text-black text-[11px] font-black uppercase mb-10 tracking-widest rounded-full">
             M15 SPECIALIZED ENGINE
          </div>
          <h2 className="text-white font-black text-6xl uppercase tracking-tighter italic mb-10 leading-[1]">
            "เลิกทฤษฎี... <br/>มาดู <span className="text-yellow-500 underline decoration-[12px] underline-offset-[16px]">ตัวเลขของจริง</span> กันครับ"
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed italic font-medium">
            v19.0 ถูกจูนมาเพื่อ <b>XAUUSD บน M15</b> โดยเฉพาะ <br/>
            ตัดความลังเลทิ้ง เข้าออเดอร์เมื่อจังหวะได้ ล็อคกำไรเมื่อถึงเป้า <br/>
            พอร์ต $10,000 ของคุณ จะมุ่งสู่ $11,500 ด้วยกฎ Drawdown 5% ที่เข้มงวดที่สุดครับ
          </p>
        </div>
        
        <div className="flex flex-col gap-8 shrink-0">
           <div className="bg-yellow-500 p-10 rounded-[4rem] text-center shadow-[0_0_80px_rgba(234,179,8,0.4)]">
              <div className="text-black font-black text-6xl font-mono">v19.0</div>
              <div className="text-[11px] text-yellow-900 uppercase font-black mt-3 tracking-[0.3em]">Execution Ready</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutionerBanner;
