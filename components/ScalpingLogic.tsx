
import React from 'react';

const ScalpingLogic: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#02040a] to-[#0d1b1f] border-4 border-cyan-500/40 rounded-[4rem] p-10 lg:p-16 shadow-[0_0_150px_rgba(6,182,212,0.15)] backdrop-blur-3xl mb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-[10rem] italic font-black text-cyan-400 pointer-events-none uppercase select-none">QUANTUM</div>
      
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16 border-b border-white/5 pb-12 relative z-10">
        <div className="w-24 h-24 bg-gradient-to-tr from-cyan-600 to-blue-400 rounded-[2.5rem] flex items-center justify-center text-5xl shadow-[0_20px_50px_rgba(6,182,212,0.4)]">🚀</div>
        <div>
          <h3 className="text-white font-black text-4xl uppercase tracking-tighter italic">v13.0 <span className="text-cyan-400">Quantum Recovery</span></h3>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.4em] mt-2 italic text-cyan-400/60">Trend Confluence | Candle Confirmation | 0.2% Micro-Risk</p>
        </div>
        <div className="ml-auto bg-cyan-500/10 border border-cyan-500/30 px-6 py-3 rounded-2xl animate-pulse">
           <span className="text-cyan-400 font-black text-sm italic uppercase tracking-widest">System: Recovery Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center">
        <div className="bg-black/60 p-8 rounded-[3rem] border border-white/5 group hover:border-cyan-400/50 transition-all">
          <div className="text-cyan-400 font-black text-[10px] uppercase mb-4 tracking-widest italic">1. Trend Filter</div>
          <div className="text-3xl font-mono font-black text-white mb-2">EMA <span className="text-sm text-slate-500">200</span></div>
          <p className="text-slate-500 text-[10px] italic leading-relaxed">เทรดตามเทรนด์ใหญ่เท่านั้น ไม่สวนราคาแรงๆ เพื่อลดโอกาสพอร์ตแตก</p>
        </div>

        <div className="bg-black/60 p-8 rounded-[3rem] border border-white/5 group hover:border-cyan-400/50 transition-all">
          <div className="text-cyan-400 font-black text-[10px] uppercase mb-4 tracking-widest italic">2. Safety Entry</div>
          <div className="text-3xl font-mono font-black text-white mb-2">Candle <span className="text-sm text-slate-500">Sync</span></div>
          <p className="text-slate-500 text-[10px] italic leading-relaxed">รอแท่งเทียนปิดยืนยันความปลอดภัยก่อนเข้า ไม่ใช้ระบบ Limit Order</p>
        </div>

        <div className="bg-black/60 p-8 rounded-[3rem] border border-white/5 group hover:border-cyan-400/50 transition-all">
          <div className="text-cyan-400 font-black text-[10px] uppercase mb-4 tracking-widest italic">3. Risk Control</div>
          <div className="text-3xl font-mono font-black text-white mb-2">0.2% <span className="text-sm text-slate-500">Lot</span></div>
          <p className="text-slate-500 text-[10px] italic leading-relaxed">ใช้ความเสี่ยงต่ำที่สุดเพื่อรักษาฐานทุนเดิม และค่อยๆ ฟื้นพอร์ต</p>
        </div>

        <div className="bg-black/60 p-8 rounded-[3rem] border border-white/5 group hover:border-cyan-400/50 transition-all">
          <div className="text-cyan-400 font-black text-[10px] uppercase mb-4 tracking-widest italic">4. Spread Shield</div>
          <div className="text-3xl font-mono font-black text-white mb-2">Auto <span className="text-sm text-slate-500">Filter</span></div>
          <p className="text-slate-500 text-[10px] italic leading-relaxed">ข้ามช่วงตลาดเหวี่ยงแรงและค่าธรรมเนียมสูง เพื่อเก็บกำไรเน้นๆ</p>
        </div>
      </div>

      <div className="mt-12 p-8 bg-cyan-400/5 border-2 border-cyan-400/20 rounded-[3rem] flex items-center gap-8">
        <div className="text-4xl animate-bounce">🛡️</div>
        <p className="text-cyan-200 text-[11px] font-black italic uppercase leading-relaxed text-center lg:text-left">
          "v13.0 เลิกพยายามสวนตลาด <span className="text-white underline decoration-2 underline-offset-4">แต่เน้นไหลตามยักษ์ใหญ่</span> 
          เพื่อกู้พอร์ตกลับสู่ $10,000 อย่างมั่นคงที่สุดครับ"
        </p>
      </div>
    </div>
  );
};

export default ScalpingLogic;
