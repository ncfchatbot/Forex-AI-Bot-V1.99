
import React from 'react';

const WarRoomBanner: React.FC = () => {
  return (
    <div className="mb-12 p-12 bg-gradient-to-br from-orange-950/20 via-black to-transparent border-2 border-orange-600/20 rounded-[4rem] backdrop-blur-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl font-black italic text-white pointer-events-none select-none uppercase">AGGRESSIVE</div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-6 py-2 bg-orange-600 text-black text-[10px] font-black uppercase mb-8 tracking-widest rounded-full">
             SITUATION REPORT: "ทำไมบอทไม่เปิดไม้?"
          </div>
          <h2 className="text-white font-black text-5xl uppercase tracking-tighter italic mb-8 leading-[1.1]">
            "จากรูปที่คุณส่งมา... <br/>สเปรดโบรกคุณคือ <span className="text-orange-500 underline decoration-8 underline-offset-[12px]">33</span> แต่บอทล็อคไว้ที่ 25"
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed italic font-medium">
            บอทไม่ได้เสียครับ แต่มัน <b>"ฉลาดเกินไป"</b> จนไม่ยอมเทรดในจุดที่ค่าต๋งแพง! <br/>
            ใน <b>v18.0</b> ผมแก้โดยการปลดล็อค Spread Filter ให้กว้างขึ้น และปรับปรุงจุดเข้าใหม่ <br/>
            เพื่อให้คุณเห็นกำไร **15%** โดยที่ Drawdown ยังคุมอยู่ที่ **5%** เหมือนเดิมครับ
          </p>
        </div>
        
        <div className="flex flex-col gap-6 shrink-0">
           <div className="bg-orange-600 p-8 rounded-[3rem] text-center shadow-[0_0_60px_rgba(234,88,12,0.3)]">
              <div className="text-black font-black text-5xl font-mono">FIXED</div>
              <div className="text-[10px] text-orange-900 uppercase font-black mt-2 tracking-widest">Spread Awareness</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WarRoomBanner;
