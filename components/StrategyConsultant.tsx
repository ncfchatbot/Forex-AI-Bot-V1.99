
import React from 'react';
import { StrategyVerdict } from '../types';

interface StrategyConsultantProps {
  verdict: StrategyVerdict | null;
  isLoading: boolean;
}

const StrategyConsultant: React.FC<StrategyConsultantProps> = ({ verdict, isLoading }) => {
  if (isLoading) return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 animate-pulse">
      <div className="h-4 bg-slate-700 w-1/2 mb-4"></div>
      <div className="h-20 bg-slate-700 rounded-lg"></div>
    </div>
  );

  if (!verdict) return null;

  // จำลองสถานะการรอจาก Logic ใน MT5
  const isWaitingForZone = true; 
  const isTrendAligned = false;

  return (
    <div className={`rounded-[2.5rem] border p-10 transition-all shadow-3xl bg-slate-900/60 border-slate-800 backdrop-blur-3xl`}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-black text-xl text-white flex items-center gap-4 uppercase italic tracking-tighter">
          <span className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-lg text-indigo-400">🧠</span>
          DECISION MATRIX
        </h3>
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-500 text-slate-950 animate-pulse`}>
          STANDBY MODE
        </span>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex items-center justify-between">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Price in SMC Zone?</span>
          <span className="text-red-400 font-black text-xs uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span> OUTSIDE ZONE
          </span>
        </div>
        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex items-center justify-between">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">H1/M15 Alignment</span>
          <span className="text-amber-400 font-black text-xs uppercase flex items-center gap-2">
             WAITING FOR SYNC
          </span>
        </div>
      </div>

      <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-3xl mb-8">
        <div className="text-[10px] text-emerald-400 font-black uppercase mb-3 tracking-widest">AI Market Observation:</div>
        <p className="text-slate-300 text-sm leading-relaxed italic">
          "ราคาทองคำปัจจุบัน (4364) อยู่กึ่งกลางระหว่างจุดสูงสุดและจุดต่ำสุดของวัน บอทจะยังไม่เปิดออเดอร์จนกว่าราคาจะเข้าใกล้โซน 4398 หรือ 4314 เพื่อรักษาค่า R:R ให้คุ้มค่าที่สุดครับ"
        </p>
      </div>

      <div className="space-y-4">
        <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-4">Why no trade yet?</div>
        <div className="flex gap-4 text-[11px] text-slate-400 bg-black/30 p-4 rounded-2xl border border-white/5 items-start">
           <span className="text-amber-500 text-lg">⏳</span>
           <span><b>Patience is Profit:</b> การรอคือส่วนหนึ่งของกำไร บอทถูกออกแบบมาให้เทรดน้อยแต่เน้นคุณภาพ (High Precision)</span>
        </div>
      </div>
    </div>
  );
};

export default StrategyConsultant;
