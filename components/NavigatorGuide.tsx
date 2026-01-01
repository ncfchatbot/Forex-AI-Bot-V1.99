
import React from 'react';

const NavigatorGuide: React.FC = () => {
  return (
    <div className="space-y-12 mt-12">
      {/* HOW TO SHOW NAVIGATOR */}
      <div className="bg-slate-900/95 border-4 border-blue-500/40 rounded-[4rem] p-10 lg:p-16 shadow-[0_0_100px_rgba(59,130,246,0.1)] backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 text-[10rem] italic font-black text-blue-500 pointer-events-none uppercase select-none">VIEW</div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 border-b border-white/5 pb-12">
          <div className="w-24 h-24 bg-blue-500 rounded-[2rem] flex items-center justify-center text-5xl shadow-[0_20px_40px_rgba(59,130,246,0.4)]">🖥️</div>
          <div>
            <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">How to Show <span className="text-blue-400">Navigator Window</span></h3>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-2 italic text-blue-400/60">วิธีเปิดหน้าต่าง Navigator เพื่อลากบอท v5.8 ลงกราฟ</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-black/40 p-10 rounded-[3rem] border-2 border-blue-500/20 group hover:border-blue-500/50 transition-all">
            <h4 className="text-white font-black text-xl uppercase mb-6 italic">ใช้คีย์ลัด (Shortcut)</h4>
            <div className="flex items-center gap-6">
              <div className="bg-slate-800 px-6 py-4 rounded-2xl font-mono text-2xl font-black text-blue-400 border border-white/10 shadow-xl">Ctrl + N</div>
              <p className="text-slate-400 text-sm italic">กดพร้อมกันในหน้า MT5 หน้าต่าง Navigator จะเด้งขึ้นมาด้านซ้ายทันทีครับ</p>
            </div>
          </div>

          <div className="bg-black/40 p-10 rounded-[3rem] border-2 border-blue-500/20 group hover:border-blue-500/50 transition-all">
            <h4 className="text-white font-black text-xl uppercase mb-6 italic">ใช้เมนูด้านบน</h4>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm italic">
                ไปที่เมนู <b className="text-white">View</b> → เลือก <b className="text-blue-400 underline decoration-2 underline-offset-4">Navigator</b>
              </p>
              <div className="text-[10px] text-slate-500 font-black uppercase bg-slate-950 p-3 rounded-xl border border-white/5 inline-block">
                *ถ้ามี Market Watch บังอยู่ Navigator จะไปอยู่ด้านล่างของมันครับ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY LOG STILL SHOWS 5.7 */}
      <div className="bg-slate-900/90 border-4 border-red-500/40 rounded-[4rem] p-10 lg:p-16 shadow-[0_0_100px_rgba(239,68,68,0.1)] backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 text-[10rem] italic font-black text-red-500 pointer-events-none uppercase select-none">LOG FIX</div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 border-b border-white/5 pb-12">
          <div className="w-24 h-24 bg-red-500 rounded-[2rem] flex items-center justify-center text-5xl shadow-[0_20px_40px_rgba(239,68,68,0.4)]">📜</div>
          <div>
            <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">Why Log still shows <span className="text-red-400">v5.7?</span></h3>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-2 italic text-red-400/60">วิเคราะห์จากรูป: บอทที่รันบนกราฟยังเป็นตัวเก่าครับ</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5">
            <p className="text-slate-300 text-sm leading-relaxed italic mb-8">
              จากรูป Experts Tab ของคุณขึ้นว่า <code className="text-red-400 bg-red-400/10 px-2 py-1 rounded">GOLDMASTER v5.7 ENGINE ACTIVE</code> 
              หมายความว่า <b>"บอทที่ทำงานอยู่บนกราฟตอนนี้คือตัวเก่า"</b> แม้คุณจะสร้างไฟล์ 5.8 ใน MetaEditor แล้วก็ตาม
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-emerald-500/10 p-8 rounded-[2rem] border border-emerald-500/30">
                  <div className="font-black text-emerald-400 uppercase text-xs mb-4">Step 1: ลบตัวเก่าออก</div>
                  <p className="text-slate-400 text-[11px] italic">คลิกขวาที่กราฟทอง → Expert List → เลือก v5.7 → กด <b>Remove</b></p>
               </div>
               <div className="bg-emerald-500/10 p-8 rounded-[2rem] border border-emerald-500/30">
                  <div className="font-black text-emerald-400 uppercase text-xs mb-4">Step 2: ลาก 5.8 ตัวใหม่ลงไป</div>
                  <p className="text-slate-400 text-[11px] italic">เปิด Navigator (Ctrl+N) → หาไฟล์ <b>GoldMaster_v5_8</b> → ลากลงกราฟ → กด <b>OK</b></p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigatorGuide;
