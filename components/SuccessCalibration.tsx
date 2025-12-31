
import React from 'react';

const SuccessCalibration: React.FC = () => {
  return (
    <div className="bg-indigo-950/20 border-4 border-indigo-500/30 rounded-[4rem] p-10 lg:p-16 shadow-[0_0_100px_rgba(99,102,241,0.1)] backdrop-blur-3xl mb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-[8rem] italic font-black text-indigo-400 pointer-events-none uppercase select-none">TUNING</div>
      
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16 border-b border-white/5 pb-12">
        <div className="w-24 h-24 bg-indigo-500 rounded-[2rem] flex items-center justify-center text-5xl shadow-[0_20px_40px_rgba(99,102,241,0.4)]">⚙️</div>
        <div>
          <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">Elite <span className="text-indigo-400">Calibration</span></h3>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-2 italic">ทำไมแบคเทสแล้วโดน SL รัวๆ? นี่คือ "กุญแจสำคัญ" ครับ</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-black/40 p-10 rounded-[3rem] border border-indigo-500/20 group hover:border-emerald-500/50 transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 text-xl italic font-black">!</div>
            <h4 className="text-white font-black text-lg uppercase italic">Stop Loss is too TIGHT</h4>
          </div>
          <p className="text-slate-400 text-[11px] leading-relaxed italic mb-6">
            ในรูปที่คุณส่งมา บอทโดนตัดขาดทุน (SL) บ่อยมากเพราะระยะ 300 Points มันสั้นเกินไปสำหรับทองคำ บอทระดับโลกจะไม่ตั้ง SL แคบขนาดนั้นในช่วงตลาดผันผวน
          </p>
          <div className="bg-emerald-500/10 p-5 rounded-2xl border border-emerald-500/20">
             <span className="text-emerald-400 font-black text-[10px] uppercase block mb-1">PRO FIX:</span>
             <p className="text-white font-bold text-xs italic">ปรับ SL เป็น <span className="underline decoration-2">1500 - 2000 Points</span> (15-20 Pips) เพื่อสู้กับแรงเหวี่ยงของทองครับ</p>
          </div>
        </div>

        <div className="bg-black/40 p-10 rounded-[3rem] border border-indigo-500/20 group hover:border-emerald-500/50 transition-all">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 text-xl italic font-black">§</div>
            <h4 className="text-white font-black text-lg uppercase italic">High Spread Block</h4>
          </div>
          <p className="text-slate-400 text-[11px] leading-relaxed italic mb-6">
            โบรกเกอร์บางเจ้า Spread ทองกว้างถึง 40-50 Points ซึ่งถ้าเราตั้งเป้าเก็บกำไรสั้นๆ เราจะเสียเปรียบตั้งแต่เริ่ม
          </p>
          <div className="bg-blue-500/10 p-5 rounded-2xl border border-blue-500/20">
             <span className="text-blue-400 font-black text-[10px] uppercase block mb-1">PRO FIX:</span>
             <p className="text-white font-bold text-xs italic">ใช้โค้ด <span className="underline decoration-2">v5.7 PRO</span> ที่มีระบบ Max Spread Filter ห้ามเปิดออเดอร์ถ้าค่าต๋งแพงเกินไป</p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-10 bg-indigo-500/10 border-2 border-indigo-500/30 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10">
         <div className="flex items-center gap-6">
            <span className="text-4xl">💎</span>
            <p className="text-slate-200 text-sm font-black italic uppercase leading-relaxed">
              "เปลี่ยนจาก 'เก็บเศษเงิน' เป็น 'เก็บกำไรเป็นคำ' <br/> 
              ด้วยการปรับ SL ให้กว้างขึ้น และใช้ R:R 1:2 ครับ"
            </p>
         </div>
         <div className="bg-slate-950 px-8 py-4 rounded-2xl border border-white/5">
            <div className="text-[10px] text-slate-500 uppercase font-black mb-1">Recommended R:R</div>
            <div className="text-indigo-400 font-mono font-black text-2xl">1 : 2.5</div>
         </div>
      </div>
    </div>
  );
};

export default SuccessCalibration;
