
import React from 'react';

const DailyRoutine: React.FC = () => {
  const steps = [
    {
      time: "Morning (07:00 - 10:00)",
      action: "Focus: EUR/USD",
      desc: "ตลาดเอเชียทองมักจะไม่วิ่ง แต่ EUR/USD จะเริ่มขยับนิ่งๆ เหมาะกับการ 'เก็บเศษเงิน' รอบเช้าครับ",
      icon: "☕"
    },
    {
      time: "Evening (19:00 - 22:00)",
      action: "Focus: Gold (XAU)",
      desc: "ตลาดนิวยอร์กเปิด ทองจะวิ่งแรง บอท v14.1 จะทำงานหนักในช่วงนี้เพื่อล่าเทรนด์ใหญ่",
      icon: "🏙️"
    },
    {
      time: "Late Night (00:00+)",
      action: "Sleep Mode / Cooldown",
      desc: "ตลาดวาย สเปรดจะกว้างมาก บอทจะเริ่มใช้ Spread Filter เพื่อหยุดเทรดอัตโนมัติ ไม่ต้องเฝ้าครับ",
      icon: "💤"
    }
  ];

  return (
    <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-10 shadow-2xl backdrop-blur-3xl mt-12">
      <div className="flex items-center gap-4 mb-10">
        <h3 className="text-white font-black text-2xl uppercase tracking-tighter italic flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
          Agile <span className="text-blue-400">Routine</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-black/40 p-8 rounded-[2.5rem] border border-white/5 relative group hover:border-blue-500/30 transition-all">
            <div className="text-4xl mb-6">{step.icon}</div>
            <div className="text-[10px] text-blue-500 font-black uppercase tracking-widest mb-2">{step.time}</div>
            <div className="text-white font-black text-lg mb-3 italic uppercase">{step.action}</div>
            <p className="text-slate-500 text-[11px] leading-relaxed italic">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl flex items-center gap-6">
        <div className="text-2xl animate-pulse">💡</div>
        <p className="text-slate-400 text-[11px] italic leading-relaxed">
          <b>Pro Tip:</b> คุณสามารถรันบอทตัวเดียวแต่เปิด 2 กราฟ (EURUSD และ XAUUSD) พร้อมกันได้ เพื่อให้ระบบบริหารความเสี่ยงทำงานแบบกระจายสินทรัพย์ครับ
        </p>
      </div>
    </div>
  );
};

export default DailyRoutine;
