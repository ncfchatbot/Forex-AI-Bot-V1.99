
import React, { useState } from 'react';

const VPSAdvisor: React.FC = () => {
  const [step, setStep] = useState<'DEPLOY' | 'DONE'>('DONE'); // ตั้งค่าเริ่มต้นเป็น DONE เพราะผู้ใช้รันเสร็จแล้ว

  const userIP = "188.137.179.13";

  if (step === 'DEPLOY') {
    return (
      <div className="bg-slate-900/95 border-4 border-red-500 rounded-[3rem] p-10 shadow-[0_0_100px_rgba(239,68,68,0.3)] backdrop-blur-3xl mt-12 overflow-hidden relative">
        <div className="absolute top-8 right-8 text-[10px] text-red-400 font-black uppercase italic tracking-widest animate-pulse">Mode: Manual Override</div>
        <h3 className="text-white font-black text-3xl uppercase tracking-tighter italic mb-10">MT5 <span className="text-red-500">Power Command</span></h3>
        <button 
          onClick={() => setStep('DONE')}
          className="mt-12 w-full py-8 bg-indigo-500 hover:bg-indigo-400 text-white font-black text-lg uppercase rounded-[2rem] transition-all shadow-xl active:scale-95 shadow-indigo-500/20"
        >
          ติดตั้งสมบูรณ์แล้ว ➔ เข้าสู่ระบบรีโมท
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/95 border-4 border-emerald-500 rounded-[3rem] p-12 shadow-[0_0_100px_rgba(16,185,129,0.3)] backdrop-blur-3xl mt-12 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full"></div>
      
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center text-4xl mx-auto mb-6 shadow-2xl shadow-emerald-500/40 animate-bounce">
          🖥️
        </div>
        <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">Server is <span className="text-emerald-400">READY</span></h3>
        <p className="text-emerald-500/60 text-[10px] font-black uppercase tracking-[0.4em] mt-2">Remote Access Environment Activated</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5">
          <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-4">Remote Credentials</div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-slate-400 text-xs">IP Address</span>
              <span className="text-white font-mono font-bold">{userIP}</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-slate-400 text-xs">Username</span>
              <span className="text-white font-mono font-bold">root</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="text-slate-400 text-xs">Password</span>
              <span className="text-emerald-400 text-[10px] italic">รหัสที่คุณได้รับจากผู้ให้บริการ</span>
            </div>
          </div>
        </div>

        <div className="bg-emerald-500/5 p-8 rounded-[2.5rem] border border-emerald-500/20">
          <div className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-4">Next Step: Inside Remote Desktop</div>
          <ul className="text-xs text-slate-300 space-y-3 italic leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-500 font-black">1.</span>
              <span>ดับเบิลคลิกไฟล์ <b>mt5setup.exe</b> ในหน้าจอ VPS</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-black">2.</span>
              <span>ติดตั้งตามปกติ (Next -> Next) จนจบ</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-500 font-black">3.</span>
              <span>เปิด MT5 ขึ้นมา แล้วนำ <b>Elite MQL5 Code</b> จากแอปนี้ไปวางครับ</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex items-center gap-6">
        <div className="text-2xl">💡</div>
        <p className="text-slate-400 text-[11px] italic">
          <b>Pro Tip:</b> ขณะอยู่ในหน้าจอรีโมท ถ้าตัวอักษรเล็กเกินไป คุณสามารถปรับความละเอียด (Resolution) ในตั้งค่าของโปรแกรม Remote Desktop ก่อนเชื่อมต่อได้ครับ
        </p>
      </div>
    </div>
  );
};

export default VPSAdvisor;
