
import React from 'react';

const NavigatorGuide: React.FC = () => {
  return (
    <div className="space-y-8 mt-12">
      <div className="bg-slate-900/80 border-2 border-blue-500/30 rounded-[3rem] p-12 shadow-3xl backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 text-8xl italic font-black text-blue-500 pointer-events-none">STEP-BY-STEP</div>
        
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/40">🧭</div>
          <div>
            <h3 className="text-white font-black text-2xl uppercase tracking-tighter italic">How to use <span className="text-blue-400">MT5 Navigator</span></h3>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-1 italic">ขั้นตอนการลากบอทลงกราฟให้สำเร็จ</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 relative group">
            <div className="text-blue-500 font-black text-4xl mb-6 opacity-20">01</div>
            <h4 className="text-white font-black text-sm uppercase mb-4 italic">Open Navigator</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed italic">
              กด <b className="text-blue-400">Ctrl + N</b> เพื่อเปิดหน้าต่างทางซ้ายมือ แล้วหาหัวข้อ <b className="text-white">Expert Advisors</b>
            </p>
            <div className="mt-6 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 text-[10px] text-blue-400 font-mono italic">
              Shortcut: View -> Navigator
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 relative group">
            <div className="text-blue-500 font-black text-4xl mb-6 opacity-20">02</div>
            <h4 className="text-white font-black text-sm uppercase mb-4 italic">Drag and Drop</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed italic">
              คลิกค้างที่ไฟล์ <b className="text-blue-400">GoldMaster_v5_5</b> แล้วลากไปปล่อยตรงกลาง "กราฟทอง"
            </p>
            <div className="mt-6 flex gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-slate-500 italic uppercase font-black">Ready to Link</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 relative group">
            <div className="text-blue-500 font-black text-4xl mb-6 opacity-20">03</div>
            <h4 className="text-white font-black text-sm uppercase mb-4 italic">The Common Tab</h4>
            <p className="text-slate-400 text-[11px] leading-relaxed italic">
              หน้าต่างจะเด้งขึ้นมา ให้ไปที่แท็บ <b className="text-blue-400">Common</b> แล้วติ๊กถูกที่ <b className="text-white">"Allow Algo Trading"</b>
            </p>
            <div className="mt-6 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-[10px] text-emerald-400 font-black italic uppercase">
               CRITICAL STEP! 🛡️
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting Section for "Not Found" */}
      <div className="bg-amber-900/20 border-2 border-amber-500/30 rounded-[3rem] p-10 backdrop-blur-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl">🔍</div>
        <h4 className="text-amber-400 font-black text-xl mb-8 uppercase italic flex items-center gap-4">
          <span className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-lg">⚠️</span>
          ถ้าหา "GoldMaster_v5_5" ไม่เจอ? (เช็ค 3 จุดนี้)
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/40 p-6 rounded-3xl border border-amber-500/10">
            <div className="text-amber-500 font-black text-xs mb-3 uppercase tracking-widest">1. กลับไปหน้า Code (F4)</div>
            <p className="text-slate-300 text-[11px] leading-relaxed italic">
              ต้องกด <b className="text-white">F7 (Compile)</b> ในหน้า MetaEditor ให้เรียบร้อยก่อน และดูที่ช่องด้านล่าง (Errors) ต้องเป็น <b>0 errors</b> เท่านั้น
            </p>
          </div>
          
          <div className="bg-black/40 p-6 rounded-3xl border border-amber-500/10">
            <div className="text-amber-500 font-black text-xs mb-3 uppercase tracking-widest">2. กด Refresh ที่ Navigator</div>
            <p className="text-slate-300 text-[11px] leading-relaxed italic">
              ในหน้า MT5 ตรงช่อง Navigator ให้ <b>คลิกขวา</b> ที่หัวข้อ Expert Advisors แล้วกด <b className="text-white">Refresh</b> หนึ่งครั้งครับ
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-3xl border border-amber-500/10">
            <div className="text-amber-500 font-black text-xs mb-3 uppercase tracking-widest">3. เช็คชื่อโฟลเดอร์</div>
            <p className="text-slate-300 text-[11px] leading-relaxed italic">
              ตรวจสอบว่าตอนสร้างไฟล์ คุณเลือก <b className="text-white">Expert Advisor</b> ไม่ใช่ Script หรือ Indicator และไฟล์ต้องอยู่ในโฟลเดอร์ <b>Experts</b>
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-amber-500/5 border border-amber-500/10 rounded-2xl">
          <p className="text-amber-400/80 text-[10px] italic">
            *หากยังไม่เจอจริงๆ: ให้ลองปิดโปรแกรม MT5 แล้วเปิดใหม่อีกครั้ง ระบบจะทำการ Scan หาไฟล์บอทใหม่ตอนเริ่มต้นครับ
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavigatorGuide;
