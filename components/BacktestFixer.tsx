
import React from 'react';

const BacktestFixer: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border-4 border-red-500/40 rounded-[4rem] p-10 lg:p-16 shadow-[0_0_100px_rgba(239,68,68,0.1)] backdrop-blur-3xl mb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-[10rem] italic font-black text-red-500 pointer-events-none uppercase select-none">ERROR FIX</div>
      
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16 border-b border-white/5 pb-12">
        <div className="w-24 h-24 bg-red-500 rounded-[2rem] flex items-center justify-center text-5xl shadow-[0_20px_40px_rgba(239,68,68,0.4)]">⚠️</div>
        <div>
          <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">Why your Backtest <span className="text-red-400">Failed?</span></h3>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-2 italic text-red-400/60">วิเคราะห์จากรูปภาพที่คุณส่งมา: คุณกำลังใช้บอทผิดตัวครับ!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* POINT 1 */}
        <div className="bg-black/40 p-10 rounded-[3rem] border border-red-500/20 relative group hover:border-red-500/50 transition-all">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6 font-black italic">POINT 1</div>
          <h4 className="text-white font-black text-lg uppercase mb-4 italic">Wrong Expert Advisor</h4>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
            ในรูปเขียนว่า <b className="text-red-400">"Moving Average"</b> นี่คือบอทพื้นฐานที่แพ้ตลาด 99% ครับ 
            <br/><br/>
            <span className="text-emerald-400 font-bold underline underline-offset-4">วิธีแก้:</span> เปลี่ยนในช่อง Expert เป็น <b className="text-white italic">"GoldMaster_v5_7"</b> เท่านั้น
          </p>
        </div>

        {/* POINT 2 */}
        <div className="bg-black/40 p-10 rounded-[3rem] border border-red-500/20 relative group hover:border-red-500/50 transition-all">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6 font-black italic">POINT 2</div>
          <h4 className="text-white font-black text-lg uppercase mb-4 italic">Precision Settings</h4>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
            คุณใช้ <b className="text-red-400">"1 minute OHLC"</b> ซึ่งข้ามรายละเอียดการสะบัดของราคาไป ทำให้บอทวิเคราะห์ SMC ผิด
            <br/><br/>
            <span className="text-emerald-400 font-bold underline underline-offset-4">วิธีแก้:</span> เลือก Modeling เป็น <b className="text-white italic">"Every tick based on real ticks"</b>
          </p>
        </div>

        {/* POINT 3 */}
        <div className="bg-black/40 p-10 rounded-[3rem] border border-red-500/20 relative group hover:border-red-500/50 transition-all">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6 font-black italic">POINT 3</div>
          <h4 className="text-white font-black text-lg uppercase mb-4 italic">The Floating Loss</h4>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
            ออเดอร์ SELL ที่ติดลบ <b className="text-red-400">-$4,278</b> เกิดจากการฝืนเทรน
            <br/><br/>
            <span className="text-emerald-400 font-bold underline underline-offset-4">ข้อดีของ v5.7:</span> จะมีระบบ <b className="text-white">Trend-Shield</b> ที่จะไม่ยอมเปิด SELL หากราคาอยู่เหนือเส้นค่าเฉลี่ยสถาบันครับ
          </p>
        </div>
      </div>

      <div className="mt-12 p-8 bg-emerald-500/10 border-2 border-emerald-500/30 rounded-[3rem] flex flex-col md:flex-row items-center gap-8">
        <div className="text-4xl">🚀</div>
        <p className="text-emerald-400 text-sm font-black italic uppercase text-center md:text-left leading-relaxed">
          "ลองเลือกไฟล์ <span className="underline decoration-2">GoldMaster_v5_7</span> แล้วรันใหม่อีกครั้ง <br/> 
          คุณจะเห็นเส้นกำไรที่ต่างจากบอทเดิมหน้ามือเป็นหลังมือแน่นอนครับ!"
        </p>
      </div>
    </div>
  );
};

export default BacktestFixer;
