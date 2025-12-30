
import React from 'react';

const IntegrationGuide: React.FC = () => {
  return (
    <div className="mt-16 bg-slate-900/40 border border-blue-500/20 rounded-[3.5rem] p-12 relative overflow-hidden backdrop-blur-3xl shadow-3xl">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl italic font-black pointer-events-none text-blue-500">MT5</div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16 border-b border-white/5 pb-10">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">
            Deployment <span className="text-blue-400">Checklist</span>
          </h2>
          <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mt-3 italic">
            ยินดีด้วยที่คุณได้ Demo แล้ว! ทำตาม 4 ขั้นตอนนี้เพื่อเริ่มรัน
          </p>
        </div>
        <div className="flex items-center gap-4">
           <div className="px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-400 text-[10px] font-black uppercase tracking-widest animate-pulse">
             Status: Ready to Deploy
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/40 transition-all">
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/20">⌨️</div>
          <h3 className="text-white font-black text-sm mb-3 uppercase italic">1. MetaEditor</h3>
          <p className="text-slate-500 text-[10px] leading-relaxed italic">
            กด <b>F4</b> ใน MT5 เพื่อเปิดหน้าเขียนโค้ด แล้วสร้าง <b>New Expert Advisor</b>
          </p>
        </div>

        <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/40 transition-all">
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/20">📋</div>
          <h3 className="text-white font-black text-sm mb-3 uppercase italic">2. Paste Code</h3>
          <p className="text-slate-500 text-[10px] leading-relaxed italic">
            Copy โค้ด v5.5 จากแอปนี้ ไปวางทับในไฟล์ที่สร้างขึ้นมาใหม่
          </p>
        </div>

        <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/40 transition-all">
          <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-emerald-500/20">⚙️</div>
          <h3 className="text-white font-black text-sm mb-3 uppercase italic">3. Compile (F7)</h3>
          <p className="text-slate-500 text-[10px] leading-relaxed italic">
            กด <b>F7</b> เพื่อบันทึกโค้ดเข้าสู่ระบบ MT5 (ต้องไม่มี Error สีแดง)
          </p>
        </div>

        <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/40 transition-all">
          <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-amber-500/20">▶️</div>
          <h3 className="text-white font-black text-sm mb-3 uppercase italic">4. Algo Trading</h3>
          <p className="text-slate-500 text-[10px] leading-relaxed italic">
            ลากบอทลงกราฟทอง M15 และกดปุ่ม <b>Algo Trading</b> ให้เป็นสีเขียว
          </p>
        </div>
      </div>

      <div className="mt-12 p-8 bg-blue-500/10 border border-blue-500/30 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10">
        <div className="text-5xl animate-bounce">💡</div>
        <div>
          <h4 className="text-blue-400 font-black text-sm uppercase mb-2 italic">Pro Hint: เช็คหมวกสีฟ้า!</h4>
          <p className="text-slate-300 text-[11px] leading-relaxed italic">
            หากติดตั้งสำเร็จ คุณจะเห็น <b>ไอคอนหมวกสีน้ำเงิน</b> (หรือรูปคนยิ้ม) ที่มุมขวาบนของกราฟครับ ถ้าเป็นสีเทาแปลว่ายังไม่ได้กดปุ่ม Algo Trading นะครับ!
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuide;
