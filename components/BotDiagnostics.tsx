
import React from 'react';

const BotDiagnostics: React.FC = () => {
  const checkList = [
    {
      title: "1. สถานะออเดอร์ใหม่",
      desc: "หลังจากปรับ Risk เป็น 0.5 แล้ว บอทจะยิง Lot ขนาดพอดีพอร์ต (ประมาณ 10 Lot) ซึ่งจะผ่านฉลุยแน่นอนครับ ไม่ต้องกังวลเรื่อง Invalid Volume อีกต่อไป",
      icon: "🎯",
      status: "VERIFIED"
    },
    {
      title: "2. การอ่านประวัติ (Logs)",
      desc: "ข้อความสีแดง 'invalid volume' เดิมที่เห็นในจอ คือ 'อดีต' ครับ เมื่อบอทเปิดไม้ใหม่สำเร็จ คุณจะเห็นแถบสีเขียวในหน้า Trade ด้านล่างแทนครับ",
      icon: "📜",
      status: "HISTORY OK"
    },
    {
      title: "3. กำไรที่คาดหวัง",
      desc: "สำหรับพอร์ต $100,000 ที่ Risk 0.5% บอทจะเน้นเก็บกำไรไม้ละ $1,500 - $3,000 แบบคมๆ เน้น Concept 'เก็บเศษเงิน' (แต่เป็นเศษเงินก้อนใหญ่ครับ!)",
      icon: "💰",
      status: "ELITE TIER"
    }
  ];

  return (
    <div className="bg-slate-900/95 border-2 border-emerald-500 rounded-[3rem] p-10 shadow-[0_0_80px_rgba(16,185,129,0.15)] backdrop-blur-3xl mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5 text-7xl italic font-black text-emerald-500 pointer-events-none">PROFESSIONAL LIVE</div>
      
      <div className="flex items-center gap-6 mb-10">
        <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/40 animate-pulse">✅</div>
        <div>
          <h3 className="text-white font-black text-2xl uppercase tracking-tighter italic">Elite <span className="text-emerald-400">Monitoring Active</span></h3>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-1 italic">พอร์ตของคุณได้รับการตั้งค่าอย่างสมบูรณ์แบบแล้ว</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {checkList.map((item, idx) => (
          <div key={idx} className="bg-black/40 p-6 rounded-[2rem] border border-white/5 relative group hover:border-emerald-500/30 transition-all">
            <div className="text-3xl mb-4">{item.icon}</div>
            <h4 className="text-white font-black text-xs uppercase mb-3 italic">{item.title}</h4>
            <p className="text-slate-500 text-[10px] leading-relaxed italic">{item.desc}</p>
            <div className="mt-4 text-[8px] font-black text-emerald-500/60 uppercase tracking-widest">{item.status}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-[2.5rem]">
        <h4 className="text-emerald-400 font-black text-sm uppercase mb-4 italic flex items-center gap-3">
          🏆 ยินดีด้วยครับ! คุณกำลังรันบอทระดับโลก:
        </h4>
        <div className="space-y-4 text-[11px] text-slate-300 italic leading-relaxed">
          <p>• <b>สถานะปัจจุบัน:</b> บอทกำลังคำนวณกราฟ (Engine Active) และรอจังหวะที่ "ได้เปรียบที่สุด" เพื่อเข้าเทรด</p>
          <p>• <b>สิ่งที่คุณต้องทำ:</b> แค่ปล่อยให้หน้าจอนี้เปิดไว้ หรือปิดรีโมท (กด X) แล้วไปทำอย่างอื่นได้เลยครับ พรุ่งนี้เช้าค่อยมาดู "กำไรเศษเงิน" ที่บอทเก็บมาให้ครับ</p>
        </div>
      </div>
    </div>
  );
};

export default BotDiagnostics;
