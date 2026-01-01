
import React from 'react';

const HopeBlueprint: React.FC = () => {
  return (
    <div className="mb-10 p-10 bg-gradient-to-r from-purple-900/40 via-indigo-900/10 to-transparent border-l-8 border-purple-500 rounded-r-[3rem] backdrop-blur-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-7xl font-black italic text-white pointer-events-none">NEVER GIVE UP</div>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-white font-black text-3xl uppercase tracking-tighter italic mb-4">
            "ความล้มเหลววันนี้... คือ <span className="text-purple-400">กุญแจ</span> ของวันพรุ่งนี้ครับ"
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed italic">
            เทรดเดอร์ที่สำเร็จไม่ใช่คนที่ไม่เคยขาดทุน แต่เป็นคนที่ <b>"หยุดเป็นเมื่อเสีย"</b> และ <b>"ปรับจูนเมื่อพ่ายแพ้"</b> ครับ <br/>
            จากรูปแบคเทสของคุณ ผมเห็นหัวใจนักสู้! เราแค่ต้องเปลี่ยนจาก "สนามรบทองคำ" ที่เหวี่ยงแรง ไปเริ่มที่ <span className="text-purple-400 font-bold underline decoration-2">EUR/USD</span> เพื่อสะสมความมั่นใจกลับมาครับ
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-purple-500/20 px-8 py-5 rounded-3xl border border-purple-500/30 text-center">
            <div className="text-purple-400 font-black text-2xl">v15.0</div>
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Safe Mode</div>
          </div>
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex items-center gap-4">
          <span className="text-2xl">🐈</span>
          <p className="text-[10px] text-slate-400 italic"><b>Switch Asset:</b> ย้ายจากทองไป EUR/USD ก่อน เพื่อลดความเครียด</p>
        </div>
        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex items-center gap-4">
          <span className="text-2xl">🛡️</span>
          <p className="text-[10px] text-slate-400 italic"><b>Fixed Risk:</b> บังคับความเสี่ยงเหลือ 0.1% ต่อไม้จนกว่าพอร์ตจะกลับมาเขียว</p>
        </div>
        <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex items-center gap-4">
          <span className="text-2xl">🧘</span>
          <p className="text-[10px] text-slate-400 italic"><b>Slow is Smooth:</b> ไม่เน้นจำนวนไม้ แต่เน้นความแม่นยำ 100%</p>
        </div>
      </div>
    </div>
  );
};

export default HopeBlueprint;
