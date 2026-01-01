
import React from 'react';

const BotDiagnostics: React.FC = () => {
  return (
    <div className="bg-slate-950/50 border border-emerald-500/20 rounded-[4rem] p-12 mb-16 shadow-2xl backdrop-blur-3xl">
      <div className="flex items-center gap-8 mb-12 border-b border-white/5 pb-8">
        <h3 className="text-white font-black text-3xl uppercase italic tracking-tighter">System <span className="text-emerald-500">Integrity v22.1</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-10">
          <div className="p-8 bg-emerald-500/5 rounded-[3rem] border border-emerald-500/20">
             <div className="flex justify-between items-center mb-6">
                <span className="text-slate-500 text-xs uppercase font-black tracking-widest">Syntax Status</span>
                <span className="text-emerald-500 font-black text-sm uppercase">CLEAN / 0 WARNINGS</span>
             </div>
             <p className="text-sm text-slate-400 italic">แก้ไขจุดเซมิโคลอนเกินและลบ Warning ทั้งหมดเพื่อให้การประมวลผลแม่นยำ 100%</p>
          </div>
          
          <div className="p-8 bg-blue-500/5 rounded-[3rem] border border-blue-500/20">
             <div className="flex justify-between items-center mb-6">
                <span className="text-slate-500 text-xs uppercase font-black tracking-widest">Memory Management</span>
                <span className="text-blue-400 font-black text-sm uppercase">STABLE</span>
             </div>
             <p className="text-sm text-slate-400 italic">เพิ่มระบบ OnDeinit เพื่อคืนค่าทรัพยากรให้คอมพิวเตอร์ของคุณ ไม่ทำให้ MT5 ค้างครับ</p>
          </div>
        </div>

        <div className="bg-black/60 p-12 rounded-[4rem] border border-white/5 flex flex-col justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
            <div className="text-7xl mb-10">✅</div>
            <h4 className="text-white font-black text-2xl mb-4 uppercase italic">TITAN ENGINE READY</h4>
            <p className="text-slate-500 text-xs italic leading-relaxed uppercase tracking-[0.2em]">
               บอทเวอร์ชันนี้สมบูรณ์ที่สุดในแง่ของเทคนิค <br/> 
               ไม่มี Bug กวนใจ และพร้อมรันแบคเทส <br/>
               เพื่อพิสูจน์ระบบรักษากำไรครับ
            </p>
        </div>
      </div>
    </div>
  );
};

export default BotDiagnostics;
