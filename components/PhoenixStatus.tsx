
import React from 'react';

const PhoenixStatus: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-red-950/20 via-black to-transparent border-4 border-red-500/20 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden mb-12 group">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl font-black italic text-red-500 pointer-events-none select-none">INFINITE</div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-6 py-2 bg-red-600 text-white text-[10px] font-black uppercase mb-8 tracking-widest rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]">
             AUTO-RECOVERY ENGINE: ENGAGED
          </div>
          <h2 className="text-white font-black text-5xl uppercase tracking-tighter italic mb-8 leading-[1.1]">
            "บอทจะไม่มีวัน <span className="text-red-500 underline decoration-8 underline-offset-[12px]">หยุดเทรด</span> <br/>แต่จะสลับโหมดเพื่อรอวันฟื้นตัว"
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed italic font-medium">
            ลืมภาพกราฟแบคเทสที่หยุดเป็นเส้นตรงไปได้เลยครับ! ใน v24 เมื่อบอททำกำไรถึงเป้า 100k แล้ว <br/>
            บอทจะยังเทรดต่อเรื่อยๆ แต่จะลดความเสี่ยงลงเพื่อประคองกำไร <br/>
            และถ้าเกิด Drawdown บอทจะเข้าสู่โหมด <b>"Safe Hibernation"</b> ทันทีจนกว่าจะถึงเวลาบินใหม่!
          </p>
        </div>
        
        <div className="bg-black/60 p-10 rounded-[3rem] border-2 border-red-500/30 flex flex-col items-center justify-center text-center shadow-2xl">
           <div className="text-6xl mb-6">🦅</div>
           <div className="text-red-500 font-black text-3xl font-mono uppercase tracking-tighter">NO HALT</div>
           <div className="text-[10px] text-slate-500 uppercase font-black mt-2 tracking-widest">Continuous Trading</div>
        </div>
      </div>
    </div>
  );
};

export default PhoenixStatus;
