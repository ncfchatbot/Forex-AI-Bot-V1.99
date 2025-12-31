
import React from 'react';

const NavigatorGuide: React.FC = () => {
  return (
    <div className="space-y-12 mt-12">
      {/* ADVANCED MT5 BACKTEST MASTERCLASS */}
      <div className="bg-slate-900/90 border-4 border-emerald-500/40 rounded-[4rem] p-10 lg:p-16 shadow-[0_0_100px_rgba(16,185,129,0.1)] backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 text-[12rem] italic font-black text-emerald-500 pointer-events-none uppercase select-none">TEST</div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16 border-b border-white/5 pb-12">
          <div className="w-24 h-24 bg-emerald-500 rounded-[2rem] flex items-center justify-center text-5xl shadow-[0_20px_40px_rgba(16,185,129,0.4)]">🔬</div>
          <div>
            <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">MT5 Backtest <span className="text-emerald-400">Masterclass</span></h3>
            <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-2 italic">ขั้นตอนการทดสอบบอท v5.7 ให้ได้ผลลัพธ์แม่นยำ 99.9%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* STEP 1 */}
          <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5 relative group hover:border-emerald-500/30 transition-all">
            <div className="text-emerald-500/20 font-black text-7xl absolute top-6 right-8">01</div>
            <h4 className="text-white font-black text-xl uppercase mb-6 italic tracking-tighter">เปิดหน้าต่าง Tester</h4>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm leading-relaxed italic">
                ในโปรแกรม MetaTrader 5 ให้กดคีย์ลัด <b className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Ctrl + R</b> หรือไปที่เมนู <b className="text-white">View -> Strategy Tester</b>
              </p>
              <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 text-[10px] font-mono text-emerald-500">
                // Tip: หากหน้าต่างไม่ขึ้น ให้เช็คว่าไม่ได้พับเก็บไว้ที่ขอบล่างจอ
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5 relative group hover:border-emerald-500/30 transition-all">
            <div className="text-emerald-500/20 font-black text-7xl absolute top-6 right-8">02</div>
            <h4 className="text-white font-black text-xl uppercase mb-6 italic tracking-tighter">ตั้งค่า Symbol & Period</h4>
            <div className="space-y-4">
              <ul className="text-slate-400 text-sm space-y-3 italic">
                <li className="flex gap-3"><span className="text-emerald-500">●</span> <b>Symbol:</b> เลือก <b className="text-white">XAUUSD</b> (ทองคำ)</li>
                <li className="flex gap-3"><span className="text-emerald-400">●</span> <b>Timeframe:</b> เลือก <b className="text-white">M15</b> (แนะนำสูงสุดสำหรับ v5.7)</li>
                <li className="flex gap-3"><span className="text-emerald-300">●</span> <b>Modeling:</b> เลือก <b className="text-emerald-400">Every tick based on real ticks</b></li>
              </ul>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5 relative group hover:border-emerald-500/30 transition-all">
            <div className="text-emerald-500/20 font-black text-7xl absolute top-6 right-8">03</div>
            <h4 className="text-white font-black text-xl uppercase mb-6 italic tracking-tighter">การตั้งค่า Inputs</h4>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm italic">
                ไปที่แท็บ <b className="text-white italic">Inputs</b> เพื่อตั้งค่าความเสี่ยง:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                  <div className="text-[9px] text-slate-500 uppercase font-black mb-1">Risk Percent</div>
                  <div className="text-emerald-400 font-bold">1.0</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                  <div className="text-[9px] text-slate-500 uppercase font-black mb-1">Max Lot</div>
                  <div className="text-emerald-400 font-bold">10.0</div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5 relative group hover:border-emerald-500/30 transition-all">
            <div className="text-emerald-500/20 font-black text-7xl absolute top-6 right-8">04</div>
            <h4 className="text-white font-black text-xl uppercase mb-6 italic tracking-tighter">รันโหมด Visual</h4>
            <div className="space-y-4">
              <p className="text-slate-400 text-sm italic">
                ติ๊กถูกที่ช่อง <b className="text-emerald-400">Visual mode</b> แล้วกดปุ่ม <b className="text-white">Start</b> ด้านล่างขวา เพื่อดูบอทเข้าออเดอร์บนกราฟจำลอง
              </p>
              <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-black">
                * กราฟจะวิ่งเร็วขึ้นหากคุณเลื่อนแถบ Speed ไปทางขวาสุด
              </p>
            </div>
          </div>
        </div>

        {/* PRO TIPS SECTION */}
        <div className="bg-emerald-500/10 border-2 border-emerald-500/20 rounded-[3rem] p-10">
           <h5 className="text-emerald-400 font-black text-lg uppercase italic mb-6 flex items-center gap-4">
             <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-slate-950 text-sm">!</span>
             Pro Tips สำหรับการแบคเทส
           </h5>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex gap-6 items-start">
                 <div className="text-2xl">💰</div>
                 <div>
                    <h6 className="text-white font-bold text-sm mb-1 italic">Modeling Quality 99%</h6>
                    <p className="text-slate-400 text-[11px] italic">หากค่า % ต่ำเกินไป ผลลัพธ์จะเชื่อถือไม่ได้ ให้ดาวน์โหลดข้อมูลย้อนหลัง (Tools -> History Center) ก่อนเริ่มรันครับ</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="text-2xl">📉</div>
                 <div>
                    <h6 className="text-white font-bold text-sm mb-1 italic">Check Max Drawdown</h6>
                    <p className="text-slate-400 text-[11px] italic">ในหน้า Graph และ Report ให้ดูค่า Drawdown ว่าพอร์ตเคยติดลบสูงสุดเท่าไหร่ เพื่อเตรียมใจรับความเสี่ยงในอนาคต</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* ORIGINAL NAVIGATOR GUIDE (REDUCED) */}
      <div className="bg-slate-900/80 border-2 border-blue-500/30 rounded-[3rem] p-12 shadow-3xl backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 text-8xl italic font-black text-blue-500 pointer-events-none uppercase">Navigator</div>
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/40">🧭</div>
          <div>
            <h3 className="text-white font-black text-2xl uppercase tracking-tighter italic">Chart <span className="text-blue-400">Setup Guide</span></h3>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-1 italic">วิธีลากบอทลงกราฟจริง (Live Trading)</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5">
            <h4 className="text-blue-400 font-black text-xs uppercase mb-4 italic tracking-widest">Step 1: Install</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed italic">กด <b>Ctrl + N</b> ลากไฟล์ v5.7 จากเมนู Experts เข้าไปในกราฟทอง XAUUSD</p>
          </div>
          <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5">
             <h4 className="text-blue-400 font-black text-xs uppercase mb-4 italic tracking-widest">Step 2: Permit</h4>
             <p className="text-slate-400 text-[11px] leading-relaxed italic">ติ๊กถูกที่ <b>"Allow Algo Trading"</b> ในหน้าต่างบอทก่อนกด OK</p>
          </div>
          <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5">
             <h4 className="text-blue-400 font-black text-xs uppercase mb-4 italic tracking-widest">Step 3: Activate</h4>
             <p className="text-slate-400 text-[11px] leading-relaxed italic">กดปุ่ม <b>Algo Trading (สีเขียว)</b> ด้านบนจอ เพื่อเริ่มการทำงานอัตโนมัติ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigatorGuide;
