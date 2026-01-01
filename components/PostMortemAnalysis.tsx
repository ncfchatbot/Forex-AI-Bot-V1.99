
import React from 'react';

const PostMortemAnalysis: React.FC = () => {
  return (
    <div className="bg-red-950/20 border-4 border-red-500/40 rounded-[4rem] p-10 lg:p-16 shadow-[0_0_100px_rgba(239,68,68,0.1)] backdrop-blur-3xl mb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-[8rem] italic font-black text-red-500 pointer-events-none uppercase select-none">FAILURE</div>
      
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16 border-b border-white/5 pb-12">
        <div className="w-24 h-24 bg-red-600 rounded-[2rem] flex items-center justify-center text-5xl shadow-[0_20px_40px_rgba(239,68,68,0.4)]">📉</div>
        <div>
          <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">Post-Mortem <span className="text-red-400">Analysis ($2.9k Case)</span></h3>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-2 italic text-red-400/60">ทำไมพอร์ตถึงวูบจาก $7k มา $2k? วิเคราะห์จากรูปของคุณ</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-black/60 p-8 rounded-[3rem] border border-red-500/20">
          <div className="text-red-400 font-black text-xs uppercase mb-4 tracking-widest">Error 1: Counter-Trend Catch</div>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
            รูปแบคเทสโชว์เทรนด์ขาลงที่แข็งแกร่งมาก แต่บอท v12 พยายาม BUY สวนทุกครั้งที่ราคาแตะเส้นล่าง ทำให้โดน "มีดบาด" ต่อเนื่องครับ
          </p>
        </div>
        <div className="bg-black/60 p-8 rounded-[3rem] border border-red-500/20">
          <div className="text-red-400 font-black text-xs uppercase mb-4 tracking-widest">Error 2: No Confirm Entry</div>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
            การใช้ Limit Order หรือแตะปุ๊บเข้าปั๊บในตลาดที่มีเทรนด์รุนแรงคืออันตรายที่สุด ระบบใหม่ v13 จะรอให้แท่งเทียนปิดยืนยันก่อนเสมอ
          </p>
        </div>
        <div className="bg-black/60 p-8 rounded-[3rem] border border-red-500/20">
          <div className="text-red-400 font-black text-xs uppercase mb-4 tracking-widest">Error 3: Psychological Fatigue</div>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
            เมื่อเห็นเลขพอร์ตลดลง เรามักจะอยากแก้คืนเร็วๆ แต่ v13 จะบังคับให้คุณ "ใจเย็น" ด้วยความเสี่ยง 0.2% เพื่อความยั่งยืน
          </p>
        </div>
      </div>

      <div className="mt-12 p-10 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10">
         <div className="flex items-center gap-6">
            <span className="text-5xl animate-pulse">💡</span>
            <p className="text-cyan-400 text-sm font-black italic uppercase leading-relaxed text-center md:text-left">
              "เปลี่ยนวิกฤตเป็นโอกาส: ใช้ <span className="underline decoration-2 text-white">v13.0 QUANTUM</span> <br/>
              เพื่อเรียนรู้การเทรดตามเทรนด์ และกู้คืนศรัทธากลับมาครับ"
            </p>
         </div>
      </div>
    </div>
  );
};

export default PostMortemAnalysis;
