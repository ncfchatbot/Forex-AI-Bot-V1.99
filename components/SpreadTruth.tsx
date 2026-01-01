
import React from 'react';

const SpreadTruth: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border-2 border-rose-500/20 rounded-[3rem] p-10 lg:p-14 shadow-2xl backdrop-blur-3xl overflow-hidden relative group mb-12">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-[10rem] italic font-black text-rose-500 pointer-events-none select-none">FEE KILLER</div>
      
      <div className="flex flex-col md:flex-row items-center gap-10 mb-14 relative z-10">
        <div className="w-24 h-24 bg-rose-500 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-[0_20px_50px_rgba(225,29,72,0.4)] animate-pulse">📉</div>
        <div>
          <h2 className="text-white font-black text-4xl uppercase tracking-tighter italic">Spread in <span className="text-rose-400">Backtesting</span></h2>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2 italic">"ความลับที่ทำให้พอร์ตแบคเทสยับเยิน คือค่าต๋งที่คุณมองข้าม"</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        <div className="bg-black/60 p-10 rounded-[3rem] border border-white/5 space-y-6">
          <h4 className="text-rose-400 font-black text-xl uppercase italic">สเปรดทำงานยังไงตอนแบคเทส?</h4>
          <p className="text-slate-400 text-sm leading-relaxed italic">
            เมื่อคุณกด Start Backtest ใน MT5 ระบบจะดึงค่าสเปรด <b>ณ เวลานั้น</b> มาใช้ ถ้าคุณเทรดทอง (XAU) แล้วสเปรดโบรกเกอร์กระโดดไป 33-40 Points บอทจะเริ่มไม้ด้วยการขาดทุนมหาศาลทันทีครับ
          </p>
          <div className="p-6 bg-rose-500/10 border border-rose-500/30 rounded-2xl">
            <span className="text-[10px] text-rose-400 font-black uppercase block mb-2">Check Your Image:</span>
            <p className="text-white font-bold text-xs italic">ในรูปของคุณ Spread คือ 33! นั่นคือเหตุผลที่มัน "ยับเยิน" ครับ</p>
          </div>
        </div>

        <div className="bg-emerald-500/5 p-10 rounded-[3rem] border-2 border-emerald-500/20 flex flex-col justify-center">
          <h4 className="text-emerald-400 font-black text-xl uppercase italic mb-6">วิธีตั้งค่า Backtest ที่ถูกต้อง</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
              <span className="text-emerald-400 font-bold">1.</span>
              <p className="text-slate-300 text-[11px] italic">ในหน้า Strategy Tester หาช่อง <b>Spread</b></p>
            </div>
            <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
              <span className="text-emerald-400 font-bold">2.</span>
              <p className="text-slate-300 text-[11px] italic">เปลี่ยนจาก Current เป็นเลขคงที่ (เช่น <b>20</b> สำหรับทองระดับเทพ)</p>
            </div>
            <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
              <span className="text-emerald-400 font-bold">3.</span>
              <p className="text-slate-300 text-[11px] italic">ถ้าอยากเทสแบบโหดๆ ให้ใส่ <b>35-40</b> ดูว่าบอทจะรอดไหม</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpreadTruth;
