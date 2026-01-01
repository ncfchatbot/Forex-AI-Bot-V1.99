
import React from 'react';

interface IntegrationGuideProps {
  onOpenModal?: () => void;
}

const IntegrationGuide: React.FC<IntegrationGuideProps> = ({ onOpenModal }) => {
  return (
    <div className="mt-16 bg-slate-900/60 border-4 border-emerald-500/30 rounded-[4rem] p-12 lg:p-16 relative overflow-hidden backdrop-blur-3xl shadow-[0_0_100px_rgba(16,185,129,0.1)]">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-[15rem] italic font-black pointer-events-none text-emerald-500 select-none">INSTALL</div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20 relative z-10 border-b border-white/5 pb-12">
        <div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic flex items-center gap-6">
            <span className="w-4 h-14 bg-emerald-500 rounded-full shadow-[0_0_30px_#10b981]"></span>
            MT5 v5.8 <span className="text-emerald-400">Final Setup</span>
          </h2>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-4 italic text-emerald-500/60">วิธีกำจัด Log 5.7 และเริ่มใช้ GHOST 5.8 ของจริง</p>
        </div>
        <button 
          onClick={onOpenModal}
          className="group flex items-center gap-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-10 py-5 rounded-[2.5rem] shadow-2xl transition-all active:scale-95"
        >
          <span className="font-black text-sm uppercase italic">📋 Get v5.8 GHOST Code</span>
          <div className="w-10 h-10 bg-slate-950 text-emerald-400 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-xl">⚡</span>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5 group hover:border-blue-500/50 transition-all relative overflow-hidden">
          <div className="text-blue-500/10 font-black text-8xl absolute -top-4 -right-4">1</div>
          <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-xl">🖥️</div>
          <h3 className="text-white font-black text-lg mb-4 uppercase italic">Show Navigator</h3>
          <p className="text-slate-500 text-[11px] leading-relaxed italic">
            ในหน้า MT5 กด <b className="text-blue-400">Ctrl + N</b> เพื่อเปิดหน้าต่าง Navigator ด้านซ้ายมือครับ (ถ้าหาไม่เจอให้ไปที่เมนู View)
          </p>
        </div>

        <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5 group hover:border-red-500/50 transition-all relative overflow-hidden">
          <div className="text-red-500/10 font-black text-8xl absolute -top-4 -right-4">2</div>
          <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-xl">🗑️</div>
          <h3 className="text-white font-black text-lg mb-4 uppercase italic">Remove v5.7</h3>
          <p className="text-slate-500 text-[11px] leading-relaxed italic">
            <b>สำคัญมาก:</b> คลิกขวาที่กราฟทอง → Expert List → เลือก v5.7 แล้วกด <b className="text-red-400 uppercase">Remove</b> ออกไปก่อนครับ เพื่อไม่ให้ Log สับสน
          </p>
        </div>

        <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5 group hover:border-emerald-500/50 transition-all relative overflow-hidden">
          <div className="text-emerald-500/10 font-black text-8xl absolute -top-4 -right-4">3</div>
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-xl">🔄</div>
          <h3 className="text-white font-black text-lg mb-4 uppercase italic">Refresh Expert</h3>
          <p className="text-slate-500 text-[11px] leading-relaxed italic">
            ในช่อง Navigator คลิกขวาที่หัวข้อ <b>Expert Advisors</b> แล้วกด <b>Refresh</b> หนึ่งครั้งเพื่อให้ไฟล์ v5.8 ปรากฏตัวออกมา
          </p>
        </div>

        <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5 group hover:border-emerald-500/50 transition-all relative overflow-hidden">
          <div className="text-emerald-500/10 font-black text-8xl absolute -top-4 -right-4">4</div>
          <div className="w-16 h-16 bg-emerald-400 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-xl">🎯</div>
          <h3 className="text-white font-black text-lg mb-4 uppercase italic">Drag v5.8</h3>
          <p className="text-slate-500 text-[11px] leading-relaxed italic">
            ลากไฟล์ <b className="text-emerald-400">v5.8 GHOST</b> ลงบนกราฟทองแทน ตรวจสอบที่แท็บ Experts ด้านล่าง ต้องขึ้นว่า <b>"v5.8 GHOST ELITE LOADED"</b> ครับ
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuide;
