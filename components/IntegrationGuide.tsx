
import React from 'react';

const IntegrationGuide: React.FC = () => {
  return (
    <div className="mt-16 bg-slate-900/40 border border-emerald-500/20 rounded-[3.5rem] p-12 relative overflow-hidden backdrop-blur-3xl shadow-3xl">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl italic font-black pointer-events-none">WORKFLOW</div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16 border-b border-white/5 pb-10">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">
            How it works: <span className="text-emerald-400">The Synergy System</span>
          </h2>
          <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mt-3 italic">
            เข้าใจความแตกต่างระหว่าง "สมอง AI" และ "มือสังหาร MT5"
          </p>
        </div>
        <div className="flex items-center gap-4">
           <div className="px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 text-[10px] font-black uppercase tracking-widest">
             Level: Professional
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Step 1: Brain */}
        <div className="relative group">
          <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center text-4xl mb-8 shadow-2xl shadow-emerald-500/30 group-hover:scale-110 transition-transform">
            🧠
          </div>
          <h3 className="text-white font-black text-xl mb-4 italic uppercase">1. The Brain (App)</h3>
          <p className="text-slate-400 text-sm leading-relaxed italic">
            ใช้แอปนี้เป็น <b>"ศูนย์บัญชาการ"</b> เพื่อดูอารมณ์ตลาดจาก Gemini AI และคำนวณ MM (Money Management) ที่เหมาะสมที่สุด
          </p>
          <div className="mt-6 text-[10px] text-emerald-500/60 font-black uppercase tracking-widest">Planning & Sentiment</div>
        </div>

        {/* Connector */}
        <div className="hidden md:flex absolute left-1/3 top-10 w-24 h-[2px] bg-gradient-to-r from-emerald-500 to-blue-500 opacity-20"></div>

        {/* Step 2: Bridge */}
        <div className="relative group">
          <div className="w-20 h-20 bg-blue-500 rounded-[2rem] flex items-center justify-center text-4xl mb-8 shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform">
            🚀
          </div>
          <h3 className="text-white font-black text-xl mb-4 italic uppercase">2. The Bridge (MQL5)</h3>
          <p className="text-slate-400 text-sm leading-relaxed italic">
            คัดลอกโค้ด <b>MQL5</b> จากปุ่ม DEPLOY ไปรันใน MT5 เพื่อเปลี่ยน "แผนการ" ให้กลายเป็น "การเทรดอัตโนมัติ"
          </p>
          <div className="mt-6 text-[10px] text-blue-500/60 font-black uppercase tracking-widest">Code Deployment</div>
        </div>

        {/* Connector */}
        <div className="hidden md:flex absolute left-2/3 top-10 w-24 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20"></div>

        {/* Step 3: Soldier */}
        <div className="relative group">
          <div className="w-20 h-20 bg-indigo-500 rounded-[2rem] flex items-center justify-center text-4xl mb-8 shadow-2xl shadow-indigo-500/30 group-hover:scale-110 transition-transform">
            🛡️
          </div>
          <h3 className="text-white font-black text-xl mb-4 italic uppercase">3. The Soldier (MT5)</h3>
          <p className="text-slate-400 text-sm leading-relaxed italic">
            บอทใน <b>MetaTrader 5</b> จะเฝ้ากราฟแทนคุณ 24/7 และลงมือเปิดออเดอร์ (เก็บเศษเงิน) ตามวินัยเหล็กโดยไม่มีอารมณ์
          </p>
          <div className="mt-6 text-[10px] text-indigo-500/60 font-black uppercase tracking-widest">Execution & Profit</div>
        </div>
      </div>

      <div className="mt-16 p-8 bg-black/40 border border-white/5 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10">
        <div className="text-4xl">💡</div>
        <div className="text-slate-400 text-sm italic leading-relaxed">
          <b>สรุป:</b> แอปนี้ทำหน้าที่ <b>"สอนและสั่ง"</b> ส่วนบอทใน MT5 ทำหน้าที่ <b>"ฟังและทำ"</b> ครับ หากบอทใน MT5 ยังไม่เปิด Order แสดงว่า "แผนการ" ที่เราวางไว้ในโค้ดยังไม่ถึงจุดที่คุ้มค่าที่สุดนั่นเอง!
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuide;
