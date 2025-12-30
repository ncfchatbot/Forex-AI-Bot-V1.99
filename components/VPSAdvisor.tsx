
import React, { useState } from 'react';

const VPSAdvisor: React.FC = () => {
  const [step, setStep] = useState<'DEPLOY' | 'DONE'>('DEPLOY');

  const userIP = "188.137.179.13";
  // The complete manual setup script
  const installScript = "apt update && apt install -y xfce4 xfce4-goodies xrdp wine64 && echo 'xfce4-session' > ~/.xsession && systemctl enable xrdp && systemctl start xrdp && wget https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installScript);
    alert("คัดลอกคำสั่งเรียบร้อย! นำไปวางในหน้าจอดำ (Terminal) ได้เลยครับ");
  };

  if (step === 'DEPLOY') {
    return (
      <div className="bg-slate-900/95 border-4 border-red-500 rounded-[3rem] p-10 shadow-[0_0_100px_rgba(239,68,68,0.3)] backdrop-blur-3xl mt-12 overflow-hidden relative">
        <div className="absolute top-8 right-8 text-[10px] text-red-400 font-black uppercase italic tracking-widest animate-pulse">Mode: Manual Override</div>
        <h3 className="text-white font-black text-3xl uppercase tracking-tighter italic mb-10">MT5 <span className="text-red-500">Power Command</span></h3>
        
        <div className="space-y-8">
           <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-3xl flex items-center gap-6 border-l-8 border-l-red-500">
             <div className="text-3xl">🔑</div>
             <div className="text-xs text-red-200 italic font-bold leading-relaxed">
               <span className="text-white font-black uppercase block mb-1">ก๊อปปี้คำสั่งด้านล่างนี้ครับ</span>
               เมื่อรันเสร็จ Server จะเปลี่ยนเป็นหน้าจอ Desktop (GUI) ทันที <br/>
               และจะโหลดตัวติดตั้ง MT5 มารอไว้ให้คุณครับ
             </div>
           </div>

           <div className="w-full">
             <div className="group relative">
               <div className="bg-black/80 p-8 rounded-[2rem] border border-red-500/50 font-mono text-red-300 text-[12px] shadow-inner flex flex-col gap-6">
                 <code className="break-all leading-relaxed whitespace-pre-wrap">{installScript}</code>
                 <button 
                   onClick={copyToClipboard}
                   className="w-full py-5 bg-red-600 hover:bg-red-500 text-white text-sm font-black uppercase rounded-xl transition-all shadow-lg active:scale-95 shadow-red-900/40 flex items-center justify-center gap-3"
                 >
                   <span>📋 COPY THIS COMMAND</span>
                 </button>
               </div>
             </div>
             
             <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-[10px] text-slate-400 italic">
                  <b className="text-white block mb-1">1. PASTE & ENTER</b>
                  วางคำสั่งใน Terminal แล้วกด Enter ทันที
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-[10px] text-slate-400 italic">
                  <b className="text-white block mb-1">2. WAIT 5 MINS</b>
                  ระบบจะติดตั้งหน้าจอ Desktop ให้ ใช้เวลาสักครู่
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-[10px] text-slate-400 italic">
                  <b className="text-white block mb-1">3. PRESS ENTER</b>
                  ถ้ามีหน้าจอสีฟ้าถามอะไร ให้กด Enter ผ่านได้เลย
                </div>
             </div>
           </div>
        </div>

        <button 
          onClick={() => setStep('DONE')}
          className="mt-12 w-full py-8 bg-indigo-500 hover:bg-indigo-400 text-white font-black text-lg uppercase rounded-[2rem] transition-all shadow-xl active:scale-95 shadow-indigo-500/20"
        >
          ตัวหนังสือหยุดวิ่งแล้ว ➔ ขั้นตอนสุดท้าย
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/95 border-4 border-emerald-500 rounded-[3rem] p-12 shadow-[0_0_100px_rgba(16,185,129,0.2)] backdrop-blur-3xl mt-12 text-center">
      <div className="text-6xl mb-8 animate-bounce">🛡️</div>
      <h3 className="text-white font-black text-3xl uppercase tracking-tighter italic mb-6">Server is <span className="text-emerald-400">Live</span></h3>
      <p className="text-slate-400 text-sm italic leading-relaxed mb-10 px-10">
        ยินดีด้วยครับ! ตอนนี้คุณสามารถรีโมทเข้าไปติดตั้งบอทได้แล้ว <br/><br/>
        <b>ขั้นตอนสุดท้าย:</b> <br/>
        1. เปิด <b>Remote Desktop Connection</b> ในคอมคุณ <br/>
        2. ใส่ IP: <b className="text-emerald-400">{userIP}</b> <br/>
        3. User: <b className="text-white">root</b> และรหัสผ่านของคุณ <br/>
        4. เมื่อเข้าหน้าจอได้แล้ว จะเจอไฟล์ <b className="text-emerald-400">mt5setup.exe</b> ให้ดับเบิลคลิกติดตั้งครับ!
      </p>
      <div className="p-8 bg-emerald-500/10 border border-emerald-500/20 rounded-[2.5rem] inline-block">
        <span className="text-emerald-400 font-black text-xs uppercase tracking-[0.3em]">Status: Ready for GUI Connection</span>
      </div>
    </div>
  );
};

export default VPSAdvisor;
