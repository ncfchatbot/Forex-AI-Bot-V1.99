
import React from 'react';
import { StrategyVerdict, MarketSide } from '../types';

interface StrategyConsultantProps {
  verdict: StrategyVerdict | null;
  isLoading: boolean;
  sideBias?: MarketSide;
}

const StrategyConsultant: React.FC<StrategyConsultantProps> = ({ verdict, isLoading, sideBias = MarketSide.BUY }) => {
  if (isLoading) return (
    <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-10 animate-pulse">
      <div className="h-6 bg-slate-800 w-1/2 mb-6 rounded-full"></div>
      <div className="h-32 bg-slate-800 rounded-3xl"></div>
    </div>
  );

  const isHoliday = new Date().getMonth() === 11 || new Date().getMonth() === 0;

  if (!verdict) return null;

  return (
    <div className={`rounded-[3rem] border p-10 transition-all shadow-3xl bg-slate-900/40 border-slate-800/50 backdrop-blur-3xl`}>
      <div className="flex items-center justify-between mb-10">
        <h3 className="font-black text-2xl text-white flex items-center gap-5 uppercase italic tracking-tighter">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-xl text-indigo-400">🧠</div>
          AI Analysis
        </h3>
        <div className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${sideBias === MarketSide.BUY ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_#10b981]' : 'bg-red-500 text-white shadow-[0_0_20px_#ef4444]'}`}>
          {sideBias} PREFERRED
        </div>
      </div>

      {isHoliday && (
        <div className="mb-10 bg-orange-500/10 border-2 border-orange-500/30 p-6 rounded-3xl">
           <div className="text-orange-400 font-black text-[10px] uppercase mb-2">📢 Holiday Note:</div>
           <p className="text-slate-300 text-[11px] italic leading-relaxed">
             "เนื่องจากเป็นช่วงส่งท้ายปี ปริมาณการเทรดในตลาดโลกจะน้อยลงมาก บอท v5.7 อาจจะไม่เปิดออเดอร์เพราะราคาวิ่งไม่แรงพอ หรือ Spread กว้างเกินไป นี่คือระบบป้องกันพอร์ตแตกที่ดีที่สุดครับ"
           </p>
        </div>
      )}

      <div className="mb-10 bg-black/40 p-8 rounded-[2rem] border border-white/5">
        <div className="flex justify-between items-center mb-5">
          <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] italic">Logic Breakdown</span>
        </div>
        <p className="text-slate-300 text-[12px] leading-relaxed italic">
          {sideBias === MarketSide.BUY 
            ? "ตลาดมีแนวโน้มสะสมพลังเพื่อขึ้นต่อในสภาวะ Bullish SMC หากสภาพคล่องกลับมาปกติ แผน BUY คือแผนที่ปลอดภัยที่สุดครับ" 
            : "โครงสร้างตลาดเริ่มมีการอ่อนแรง (Weakness) แผน SELL ตามน้ำจากจุด Supply มีโอกาสสำเร็จสูงกว่าในช่วงสภาพคล่องต่ำแบบนี้ครับ"}
        </p>
      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 p-8 rounded-3xl mb-10">
        <div className="text-[10px] text-indigo-400 font-black uppercase mb-4 tracking-widest italic">Professional Verdict:</div>
        <p className="text-slate-200 text-xs leading-relaxed italic font-bold">
          {verdict.verdict}
        </p>
      </div>

      <div className="space-y-4">
        {verdict.suggestions.map((s, i) => (
          <div key={i} className="flex gap-5 text-[11px] text-slate-400 bg-black/30 p-5 rounded-2xl border border-white/5 items-start">
             <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_#6366f1]"></div>
             <span className="italic leading-relaxed">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyConsultant;
