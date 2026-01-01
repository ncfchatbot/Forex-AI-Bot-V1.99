
import React from 'react';

const FundManagerBanner: React.FC = () => {
  return (
    <div className="mb-10 p-12 bg-gradient-to-br from-slate-900 via-amber-950/10 to-transparent border-2 border-amber-500/20 rounded-[3rem] backdrop-blur-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl font-black italic text-white pointer-events-none select-none">PRO MODE</div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-500 text-[10px] font-black uppercase mb-6 tracking-widest">
             TARGET: 15.0% PROFIT / 5.0% DRAWDOWN
          </div>
          <h2 className="text-white font-black text-4xl uppercase tracking-tighter italic mb-6 leading-tight">
            "เลิกกังวลเรื่องทิศทาง... <br/>หันมาคุม <span className="text-amber-500 underline decoration-4 underline-offset-8">วินัยการเงิน</span> แทนครับ"
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed italic">
            v17.0 ถูกออกแบบมาให้เทรดเหมือนกองทุนครับ เราไม่เน้นถูกทุกไม้ แต่เราเน้นว่า <b>"เมื่อชนะต้องได้ 2 เท่า และเมื่อเสียต้องหยุดทันที"</b> <br/>
            ระบบจะล็อคความเสี่ยงไว้ที่ 0.5% ต่อไม้ เพื่อให้คุณไม่มีทางล้างพอร์ตและคุม DD ได้ตามเป้า 5% แน่นอน
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 shrink-0">
           <div className="bg-black/60 p-6 rounded-[2.5rem] border border-amber-500/30 text-center shadow-2xl">
              <div className="text-amber-500 font-black text-4xl font-mono">15%</div>
              <div className="text-[9px] text-slate-500 uppercase font-black mt-2">Monthly Target</div>
           </div>
           <div className="bg-black/60 p-6 rounded-[2.5rem] border border-red-500/30 text-center shadow-2xl">
              <div className="text-red-500 font-black text-4xl font-mono">&lt;5%</div>
              <div className="text-[9px] text-slate-500 uppercase font-black mt-2">Max Drawdown</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FundManagerBanner;
