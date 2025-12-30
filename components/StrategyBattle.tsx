
import React from 'react';

const StrategyBattle: React.FC = () => {
  return (
    <div className="bg-slate-900/60 border border-emerald-500/10 rounded-[2.5rem] p-10 shadow-2xl backdrop-blur-xl group h-full flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <h3 className="text-white font-black text-xl flex items-center gap-4">
          <span className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-lg text-emerald-400">🛡️</span>
          SMC SAFETY CORE
        </h3>
        <div className="flex flex-col items-end">
          <span className="bg-emerald-500/10 text-emerald-400 text-[9px] font-black px-3 py-1 rounded-full border border-emerald-500/20 animate-pulse">
            SHIELD: ACTIVE
          </span>
        </div>
      </div>
      
      <div className="space-y-6 flex-1">
        {/* Zero-Emotion Logic Section */}
        <div className="p-5 bg-indigo-500/5 border border-indigo-500/20 rounded-3xl relative overflow-hidden group/logic">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400">🧠</div>
              <div className="text-[11px] font-black text-white uppercase tracking-tighter">Zero-Emotion Logic</div>
            </div>
            <div className="text-[9px] font-mono text-indigo-400">MECHANICAL EDGE</div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
              <div className="text-[8px] text-slate-500 uppercase mb-1">Human Trader</div>
              <div className="text-[10px] text-red-400 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Emotional Gap
              </div>
            </div>
            <div className="bg-black/40 p-3 rounded-2xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <div className="text-[8px] text-slate-500 uppercase mb-1">AI Scalper</div>
              <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> Pure Logic
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-400 italic leading-relaxed">
            "การไม่เข้าไปก้าวก่ายบอท คือการรักษาสถิติ Win Rate ให้เป็นไปตามแผนครับ"
          </p>
        </div>

        {/* Mechanical Advantage Checklist */}
        <div className="bg-black/40 rounded-3xl p-5 border border-white/5">
           <div className="text-[10px] text-emerald-500 font-black uppercase mb-4 tracking-widest">ทำไมต้องปล่อยมือ? (Mechanical Rule)</div>
           <div className="space-y-3">
              <div className="flex items-center gap-3">
                 <div className="w-5 h-5 bg-emerald-500/20 rounded flex items-center justify-center text-[10px]">✓</div>
                 <span className="text-[10px] text-slate-300 italic">บอทไม่เหนื่อย ไม่ล้า และไม่กดดันจากราคาแกว่ง</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-5 h-5 bg-emerald-500/20 rounded flex items-center justify-center text-[10px]">✓</div>
                 <span className="text-[10px] text-slate-300 italic">รักษาระยะ TP/SL ให้คงที่เพื่อค่า R:R ที่เป็นบวก</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-5 h-5 bg-emerald-500/20 rounded flex items-center justify-center text-[10px]">✓</div>
                 <span className="text-[10px] text-slate-300 italic">รอจังหวะ Trailing Stop ทำงานอัตโนมัติ 100%</span>
              </div>
           </div>
        </div>

        {/* Dynamic Trailing Shield Visualization */}
        <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-3xl">
          <div className="flex justify-between mb-4">
            <span className="text-[11px] font-black text-blue-400 uppercase tracking-widest italic">Trailing Shield</span>
            <span className="text-[11px] font-mono text-blue-500">AUTO-MANAGEMENT</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <div className="text-[10px] text-slate-300 font-bold">ป้องกันกำไรกลายเป็นขาดทุน</div>
            </div>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 animate-pulse" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyBattle;
