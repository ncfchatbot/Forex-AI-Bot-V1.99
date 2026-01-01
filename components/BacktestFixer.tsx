
import React from 'react';

const BacktestFixer: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border-4 border-red-500/40 rounded-[4rem] p-10 lg:p-16 shadow-[0_0_100px_rgba(239,68,68,0.1)] backdrop-blur-3xl mb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-[10rem] italic font-black text-red-500 pointer-events-none uppercase select-none">v5.8 FIX</div>
      
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16 border-b border-white/5 pb-12">
        <div className="w-24 h-24 bg-red-500 rounded-[2rem] flex items-center justify-center text-5xl shadow-[0_20px_40px_rgba(239,68,68,0.4)]">⚠️</div>
        <div>
          <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">Why your Backtest <span className="text-red-400">is not v5.8?</span></h3>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-2 italic text-red-400/60">วิเคราะห์จากรูปภาพ: คุณเปลี่ยนโค้ดแล้ว แต่ยังรันไฟล์ชื่อ v5.7 อยู่ครับ!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* POINT 1 */}
        <div className="bg-black/40 p-10 rounded-[3rem] border border-red-500/20 relative group hover:border-red-500/50 transition-all">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6 font-black italic">POINT 1</div>
          <h4 className="text-white font-black text-lg uppercase mb-4 italic">File Name Mismatch</h4>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
            ในรูปที่คุณส่งมา ชื่อไฟล์ใน MetaEditor ยังเป็น <b className="text-red-400">GoldMaster_v5_7.mq5</b> แม้คุณจะเอาโค้ด 5.8 มาวางทับ แต่มันทำให้สับสนครับ
            <br/><br/>
            <span className="text-emerald-400 font-bold underline underline-offset-4">วิธีแก้:</span> Save As เป็นชื่อ <b className="text-white italic">"GoldMaster_v5_8"</b> เพื่อความชัดเจน
          </p>
        </div>

        {/* POINT 2 */}
        <div className="bg-black/40 p-10 rounded-[3rem] border border-red-500/20 relative group hover:border-red-500/50 transition-all">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6 font-black italic">POINT 2</div>
          <h4 className="text-white font-black text-lg uppercase mb-4 italic">Compounding Check</h4>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
            ถ้าผลแบคเทสออกมา "กำไรเท่าเดิมทุกไม้" แสดงว่าระบบ <b className="text-red-400">Auto-Lot</b> ยังไม่ทำงาน
            <br/><br/>
            <span className="text-emerald-400 font-bold underline underline-offset-4">วิธีแก้:</span> ตรวจสอบในโค้ด 5.8 ว่า <b className="text-white">InpUseCompounding</b> ตั้งเป็น true หรือไม่
          </p>
        </div>

        {/* POINT 3 */}
        <div className="bg-black/40 p-10 rounded-[3rem] border border-red-500/20 relative group hover:border-red-500/50 transition-all">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6 font-black italic">POINT 3</div>
          <h4 className="text-white font-black text-lg uppercase mb-4 italic">Ghost Shield Active?</h4>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
            ถ้าโดนกวาด SL บ่อยเหมือนเดิม แสดงว่าคุณยังรันระบบเก่าที่ไม่มี <b className="text-red-400">Session Filter</b>
            <br/><br/>
            <span className="text-emerald-400 font-bold underline underline-offset-4">ยืนยัน:</span> โค้ด 5.8 ของแท้ต้องมีบรรทัด <b className="text-white italic">"IsMarketSafe()"</b> ในฟังก์ชัน OnTick ครับ
          </p>
        </div>
      </div>

      <div className="mt-12 p-8 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-[3rem] flex flex-col md:flex-row items-center gap-8">
        <div className="text-4xl">💎</div>
        <p className="text-emerald-400 text-sm font-black italic uppercase text-center md:text-left leading-relaxed">
          "ลบไฟล์ v5.7 ทิ้งไปเลยครับ แล้วใช้ <span className="underline decoration-2">GoldMaster_v5_8</span> เพียงตัวเดียว <br/> 
          เพื่อรับประสิทธิภาพสูงสุดในการปั้นพอร์ตหลักล้านครับ!"
        </p>
      </div>
    </div>
  );
};

export default BacktestFixer;
