
import React from 'react';
import { AdvancedStrategy } from '../types';

const strategies: AdvancedStrategy[] = [
  {
    name: "SMC Liquidity Hunter (v5.0)",
    concept: "Institutional Grade: เข้าเทรดในจุดที่คนทั่วไปโดน Stop Loss (Liquidity Sweep) และใช้ Dynamic Shield",
    winRate: "72-78%",
    difficulty: "Hard",
    pros: ["RR Ratio สูงมาก (1:3+)", "Dynamic Trailing กันสะบัด"],
    cons: ["ต้องมีวินัยเหล็ก", "ต้องรันบน VPS เสถียร"],
    efficiencyScore: 95
  },
  {
    name: "DXY Correlation AI",
    concept: "วิเคราะห์ความสัมพันธ์ผกผันกับ US Dollar Index (DXY) เพื่อหาจังหวะ Arbitrage",
    winRate: "68-75%",
    difficulty: "Medium",
    pros: ["ความแม่นยำสูงในระยะสั้น", "ลดความเสี่ยงจากข่าว"],
    cons: ["Data Latency", "Spread ต้องต่ำ"],
    efficiencyScore: 88
  },
  {
    name: "Retail Scalper (Standard)",
    concept: "เทรดตาม Indicator ทั่วไป (RSI/Bollinger Bands) ที่คนส่วนใหญ่ใช้",
    winRate: "50-55%",
    difficulty: "Easy",
    pros: ["เข้าใจง่าย", "เข้าไม้ออเดอร์บ่อย"],
    cons: ["เสี่ยงโดนลากยาว", "R:R ต่ำ"],
    efficiencyScore: 45
  }
];

const StrategyExplorer: React.FC = () => {
  return (
    <div className="mt-16 space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-l-4 border-emerald-500 pl-6 py-4">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">
            Global Strategy <span className="text-emerald-400">Benchmark</span>
          </h2>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2 italic">
            เปรียบเทียบประสิทธิภาพ v5.0 กับมาตรฐานตลาดโลก
          </p>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/30 px-6 py-3 rounded-2xl">
           <span className="text-emerald-400 font-black text-sm italic uppercase">Ranking: ELITE TIER (TOP 5%)</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {strategies.map((strat, idx) => (
          <div key={idx} className={`group relative bg-slate-900/80 border rounded-[3rem] p-10 transition-all overflow-hidden ${strat.efficiencyScore > 90 ? 'border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.2)]' : 'border-slate-800'}`}>
            <div className="absolute top-0 right-0 p-8">
               <div className={`text-5xl font-black italic opacity-20 ${strat.efficiencyScore > 90 ? 'text-emerald-500' : 'text-slate-500'}`}>#{idx + 1}</div>
            </div>

            <h3 className={`font-black text-xl mb-4 italic ${strat.efficiencyScore > 90 ? 'text-emerald-400' : 'text-slate-300'}`}>{strat.name}</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-8 h-16 overflow-hidden italic">
              "{strat.concept}"
            </p>

            <div className="flex justify-between items-center mb-8 bg-black/60 p-5 rounded-[2rem] border border-white/5">
              <div>
                <div className="text-[9px] text-slate-500 uppercase font-black mb-1">Efficiency</div>
                <div className={`text-2xl font-mono font-black ${strat.efficiencyScore > 90 ? 'text-emerald-400' : 'text-slate-400'}`}>{strat.efficiencyScore}%</div>
              </div>
              <div className="text-right">
                <div className="text-[9px] text-slate-500 uppercase font-black mb-1">Difficulty</div>
                <div className={`font-black text-[10px] px-4 py-1.5 rounded-full ${
                  strat.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-400' :
                  strat.difficulty === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-red-500/20 text-red-400'
                }`}>{strat.difficulty}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Global Standing:</div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full transition-all duration-1000 ${strat.efficiencyScore > 90 ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]' : 'bg-slate-600'}`} style={{ width: `${strat.efficiencyScore}%` }}></div>
              </div>
              <p className="text-[10px] text-slate-500 font-bold italic">
                {strat.efficiencyScore > 90 ? "อยู่ในระดับสถาบันการเงินการเทรด" : "ระดับพื้นฐานที่คนส่วนใหญ่ใช้"}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-emerald-950/20 border border-emerald-500/20 p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-10">
        <div className="w-20 h-20 bg-emerald-500 rounded-[2rem] flex items-center justify-center shrink-0 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
          <span className="text-4xl">🏆</span>
        </div>
        <div>
          <h4 className="text-emerald-400 font-black text-xl italic uppercase tracking-tighter">AI Expert Conclusion: ทำไม v5.0 ถึงเหนือกว่า?</h4>
          <p className="text-slate-400 text-[13px] mt-3 leading-relaxed italic">
            "บอทส่วนใหญ่ในโลก 90% พ่ายแพ้เพราะ <b>อารมณ์และการสะบัดของราคา</b> เราแก้จุดตายนี้ด้วย <b>Dynamic Shield</b> และ <b>Zero-Emotion Logic</b> ทำให้ GoldMaster v5.0 ก้าวข้ามจากบอท 'เก็บเศษเงิน' ไปสู่บอท 'กองทุนระดับ Professional' ครับ"
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategyExplorer;
