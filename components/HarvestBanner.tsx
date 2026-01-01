
import React from 'react';

const HarvestBanner: React.FC = () => {
  return (
    <div className="mb-14 p-14 bg-gradient-to-br from-emerald-950/20 via-black to-transparent border-2 border-emerald-500/30 rounded-[4rem] backdrop-blur-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-16 opacity-5 text-[12rem] font-black italic text-white pointer-events-none select-none uppercase leading-none text-emerald-500">SCALP</div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-8 py-2.5 bg-emerald-500 text-black text-[11px] font-black uppercase mb-10 tracking-widest rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]">
             SCALPING FREQUENCY OPTIMIZED
          </div>
          <h2 className="text-white font-black text-6xl uppercase tracking-tighter italic mb-10 leading-[1]">
            "เน้นเก็บ <span className="text-emerald-500 underline decoration-[12px] underline-offset-[16px]">กำไรพอดีคำ</span> <br/>เข้าไว ออกไว ไร้ความกังวล"
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed italic font-medium">
            v21.0 แก้ไขให้บอท "ขยันเปิดไม้" มากขึ้นบนกราฟ M15 <br/>
            โดยลดระยะเป้าหมายกำไรลง เพื่อให้คุณเห็นประวัติการเทรดที่วิ่งไม่หยุด <br/>
            พร้อมระบบ <b>Force-Min-Lot</b> ที่จะทำให้บอททำงานแม้ในพอร์ตขนาดเล็กครับ!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HarvestBanner;
