
import React from 'react';

interface IntegrationGuideProps {
  onOpenModal?: () => void;
}

const IntegrationGuide: React.FC<IntegrationGuideProps> = ({ onOpenModal }) => {
  return (
    <div className="mt-16 bg-slate-900/40 border border-blue-500/20 rounded-[3.5rem] p-12 relative overflow-hidden backdrop-blur-3xl shadow-3xl">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl italic font-black pointer-events-none text-blue-500">MT5</div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16 border-b border-white/5 pb-10">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">
            Fixing <span className="text-red-400">Permission Error v5.7</span>
          </h2>
          <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] mt-3 italic">
            วิธีแก้ Error ตัวแดง "cannot open document" (รูปที่ 4)
          </p>
        </div>
        <div className="flex items-center gap-4">
           <button 
              onClick={onOpenModal}
              className="px-6 py-3 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-3"
           >
             <span className="text-lg">⚡</span> OPEN v5.7 FIX
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 group hover:border-red-500/40 transition-all">
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-500/20">📂</div>
          <h3 className="text-white font-black text-sm mb-3 uppercase italic">1. Open Data Folder</h3>
          <p className="text-slate-500 text-[10px] leading-relaxed italic">
            ในหน้า MT5 กดเมนู <b>File -> Open Data Folder</b> (ห้ามลากลง C:\Program Files ตรงๆ)
          </p>
        </div>

        <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/40 transition-all">
          <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-amber-500/20">📄</div>
          <h3 className="text-white font-black text-sm mb-3 uppercase italic">2. Manual Create</h3>
          <p className="text-slate-500 text-[10px] leading-relaxed italic">
            เข้าไปที่ <b>MQL5/Experts/Advisors</b> แล้วคลิกขวา สร้างไฟล์ชื่อ <b className="text-amber-400">GoldMaster_v5_7.mq5</b>
          </p>
        </div>

        <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/40 transition-all">
          <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-emerald-500/20">📋</div>
          <h3 className="text-white font-black text-sm mb-3 uppercase italic">3. Paste & F7</h3>
          <p className="text-slate-500 text-[10px] leading-relaxed italic">
            ก๊อปโค้ดจากเว็บไปวางในไฟล์ที่สร้าง แล้วกด <b>F7</b> ใน MetaEditor เพื่อ Compile ครับ
          </p>
        </div>

        <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 group hover:border-blue-500/40 transition-all">
          <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-indigo-500/20">🎯</div>
          <h3 className="text-white font-black text-sm mb-3 uppercase italic">4. Done v5.7</h3>
          <p className="text-slate-500 text-[10px] leading-relaxed italic">
            กลับไปหน้า MT5 จะเห็น <b>v5.7</b> ขึ้นมา และ Error ตัวสีแดงจะหายไป 100% ครับ
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuide;
