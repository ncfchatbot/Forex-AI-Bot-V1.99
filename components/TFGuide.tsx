
import React from 'react';

const TFGuide: React.FC = () => {
  const tfs = [
    { 
      name: 'M1 / M5', 
      status: 'Avoid', 
      desc: 'ผันผวนสูงเกินไป สเปรดโบรกจะกินกำไรคุณหมด ไม่เหมาะกับเก็บเศษเงินระยะยาวครับ', 
      color: 'border-red-500/30 text-red-400',
      icon: '⚠️'
    },
    { 
      name: 'M15', 
      status: 'BEST CHOICE', 
      desc: 'จุดสมดุล! กราฟเริ่มมีทรงชัดเจน เก็บกำไรได้ไวและมีสัญญาณที่แม่นยำที่สุดสำหรับบอทตัวนี้', 
      color: 'border-cyan-500 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.2)] bg-cyan-500/5',
      icon: '💎'
    },
    { 
      name: 'H1', 
      status: 'Trend Filter', 
      desc: 'ใช้ดูภาพรวมตลาด บอท v14.2 จะอ่านค่านี้ให้อัตโนมัติเพื่อยืนยันว่าเราไม่สวนเทรนด์ใหญ่', 
      color: 'border-blue-500/30 text-blue-400',
      icon: '📊'
    }
  ];

  return (
    <div className="mb-14">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">
          Timeframe <span className="text-cyan-400">Optimization</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tfs.map((tf, idx) => (
          <div key={idx} className={`p-8 rounded-[2.5rem] border-2 transition-all ${tf.color}`}>
            <div className="flex justify-between items-start mb-6">
              <span className="text-3xl">{tf.icon}</span>
              <span className="text-[10px] font-black uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full">{tf.status}</span>
            </div>
            <h3 className="text-2xl font-black mb-3 italic">{tf.name}</h3>
            <p className="text-slate-500 text-[11px] leading-relaxed italic">
              "{tf.desc}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TFGuide;
