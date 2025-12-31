
import React from 'react';

const BotDiagnostics: React.FC = () => {
  return (
    <div className="bg-slate-900/60 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1 h-8 bg-yellow-500 rounded-full"></div>
        <h3 className="text-white font-black text-xl uppercase tracking-tighter italic">System <span className="text-yellow-500">Live Status</span></h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black/40 p-6 rounded-3xl border border-white/5 flex items-start gap-6">
          <div className="text-3xl mt-1">🔄</div>
          <div>
            <h4 className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-1">Manual Sync Requirement</h4>
            <p className="text-white font-bold text-sm italic italic">ต้องก๊อปปี้โค้ด v5.7 ไปวางใหม่</p>
            <p className="text-slate-500 text-[10px] mt-2 leading-relaxed">ข้อมูลในเว็บนี้จะเปลี่ยนตามตลาด แต่บอทใน VPS จะเปลี่ยนตามเมื่อคุณเปลี่ยนโค้ดเท่านั้น</p>
          </div>
        </div>

        <div className="bg-black/40 p-6 rounded-3xl border border-white/5 flex items-start gap-6">
          <div className="text-3xl mt-1">🛰️</div>
          <div>
            <h4 className="text-slate-500 font-black text-[10px] uppercase tracking-widest mb-1">VPS Connection</h4>
            <p className="text-emerald-400 font-bold text-sm italic uppercase">Active & Running</p>
            <p className="text-slate-500 text-[10px] mt-2 leading-relaxed">ระบบ Ghost Scalper พื้นฐานกำลังทำงานปกติ พร้อมรับการอัปเกรดเป็น Elite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotDiagnostics;
