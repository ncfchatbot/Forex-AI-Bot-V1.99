
import React from 'react';

const StrategyBattle: React.FC = () => {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-[2rem] p-8 shadow-2xl backdrop-blur-xl">
      <h3 className="text-white font-black text-xl mb-6 flex items-center gap-3">
        <span className="text-yellow-500">🛡️</span> SYSTEM: SAFE & SCALE
      </h3>
      
      <div className="space-y-8">
        {/* Compounding Visual */}
        <div className="p-5 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
          <div className="flex justify-between mb-2">
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Compounding Efficiency</span>
            <span className="text-[10px] font-mono text-emerald-500">+300% Long-term</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 animate-pulse" style={{ width: '85%' }}></div>
          </div>
          <p className="mt-3 text-[10px] text-slate-400 leading-relaxed italic">
            "การไม่ถอนกำไรออกและปล่อยให้ Lot ขยับตามทุน คือทางลัดสู่เป้าหมาย $100/วัน ที่ปลอดภัยที่สุดครับ"
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-xs font-black text-blue-400 uppercase tracking-widest">Safety Protocol</div>
              <div className="text-slate-400 text-[10px]">Hard SL + Breakeven @ 20 Pips</div>
            </div>
            <div className="text-right">
              <span className="text-blue-400 font-mono text-sm">Active</span>
            </div>
          </div>
          <div className="text-[10px] text-slate-400/60 leading-relaxed">
            บอทจะตั้ง SL ทันที 100 pips และขยับมากันหน้าทุนเมื่อกำไร 20 pips ทำให้การเทรดส่วนใหญ่มีสถานะเป็น <b>Risk-Free</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyBattle;
