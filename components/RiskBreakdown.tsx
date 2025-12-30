
import React from 'react';

const RiskBreakdown: React.FC = () => {
  const risks = [
    { 
      name: 'Market Slippage (News)', 
      prob: '15%', 
      impact: 'High', 
      color: 'bg-red-500', 
      desc: 'ราคาข้าม SL ในช่วงข่าวแรง ทำให้ขาดทุนเกิน 5%' 
    },
    { 
      name: 'Bad Market Regime', 
      prob: '25%', 
      impact: 'Medium', 
      color: 'bg-orange-500', 
      desc: 'ตลาดเป็น Sideway นานเกินไปจนระบบ SMC ผิดพลาดสะสม' 
    },
    { 
      name: 'Technical Failures', 
      prob: '5%', 
      impact: 'Critical', 
      color: 'bg-blue-500', 
      desc: 'อินเทอร์เน็ตหลุดหรือ Server โบรกเกอร์ค้าง' 
    },
    { 
      name: 'Human Interference', 
      prob: '55%', 
      impact: 'Fatal', 
      color: 'bg-purple-500', 
      desc: 'เจ้าของพอร์ตตกใจแล้วกดปิดออเดอร์เองจนระบบ MM พัง' 
    }
  ];

  return (
    <div className="bg-slate-900/60 border border-red-500/10 rounded-[2.5rem] p-10 shadow-2xl backdrop-blur-xl mb-10">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
        <div>
          <h2 className="text-white font-black text-2xl uppercase tracking-tighter italic flex items-center gap-3">
            <span className="w-2 h-8 bg-red-500 rounded-full"></span>
            Risk <span className="text-red-400">Reality Check</span>
          </h2>
          <p className="text-slate-500 text-[10px] font-black mt-2 uppercase tracking-widest italic">วิเคราะห์สาเหตุที่ทำให้พอร์ตไม่เป็นไปตามเป้า</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl text-red-400 text-[10px] font-black uppercase">
          Total Risk Exposure: HIGH
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {risks.map((risk, idx) => (
          <div key={idx} className="bg-black/40 p-6 rounded-[2rem] border border-white/5 hover:border-red-500/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-8 h-8 ${risk.color} rounded-lg flex items-center justify-center text-white text-xs font-black shadow-lg`}>
                {risk.prob}
              </div>
              <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Impact: {risk.impact}</span>
            </div>
            <h4 className="text-white font-bold text-xs mb-2 uppercase">{risk.name}</h4>
            <p className="text-slate-500 text-[9px] leading-relaxed italic">"{risk.desc}"</p>
            
            <div className="mt-6 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className={`h-full ${risk.color}`} style={{ width: risk.prob }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl flex items-center gap-6">
        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
          <span className="text-2xl">✅</span>
        </div>
        <div>
          <h4 className="text-emerald-400 font-bold text-sm">Solution: วิธีป้องกันพอร์ตแตก</h4>
          <p className="text-slate-400 text-[10px] mt-1 italic">
            "ใช้ VPS ที่เสถียร, เลือกโบรกเกอร์ที่มี Slippage ต่ำ, และที่สำคัญที่สุดคือ <b>ห้ามแทรกแซงการทำงานของบอท</b> ในขณะที่แผนยังไม่จบครับ"
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskBreakdown;
