
import React from 'react';

const DailyRoutine: React.FC = () => {
  const steps = [
    {
      time: "Morning (Pre-Trade)",
      action: "Check AI Sentiment",
      desc: "ดู Confidence ใน App ถ้าต่ำกว่า 60% วันนั้นอาจจะปิดบอทเพื่อความปลอดภัย",
      icon: "☀️"
    },
    {
      time: "London/NY Open",
      action: "Monitor Volatility",
      desc: "ดู Risk Reality Check ใน App หากข่าวแรงเกินไป ให้เตรียมปรับ Trailing Shield ให้กว้างขึ้น",
      icon: "🔔"
    },
    {
      time: "End of Day",
      action: "Sync Equity & Planning",
      desc: "ดู Income Forecast ว่าพอร์ตโตตามเป้าไหม เพื่อเตรียมปรับ Lot Size สำหรับวันถัดไป",
      icon: "🌙"
    }
  ];

  return (
    <div className="bg-slate-900/60 border border-blue-500/20 rounded-[3rem] p-10 shadow-2xl backdrop-blur-3xl mt-12">
      <div className="flex items-center gap-4 mb-10">
        <h3 className="text-white font-black text-2xl uppercase tracking-tighter italic flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
          Professional <span className="text-blue-400">Daily Routine</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 relative group hover:border-blue-500/30 transition-all">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform block">{step.icon}</div>
            <div className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-2">{step.time}</div>
            <div className="text-white font-black text-lg mb-3 italic">{step.action}</div>
            <p className="text-slate-500 text-[11px] leading-relaxed italic">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex items-center gap-6">
        <div className="text-2xl">📢</div>
        <p className="text-slate-400 text-[11px] italic">
          <b>จำไว้ว่า:</b> MT5 คือ "เครื่องจักร" ที่ทำงานตามสั่ง แต่คุณคือ "ผู้ควบคุม" ที่ต้องคอยป้อนข้อมูลจาก App เพื่อให้เครื่องจักรทำงานได้เต็มประสิทธิภาพครับ
        </p>
      </div>
    </div>
  );
};

export default DailyRoutine;
