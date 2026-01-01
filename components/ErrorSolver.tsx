
import React from 'react';

const ErrorSolver: React.FC = () => {
  return (
    <div className="bg-slate-950 border-4 border-red-600/20 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 text-[10rem] opacity-5 text-red-600 italic font-black">BUG</div>
      
      <div className="flex items-center gap-8 mb-12">
        <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl">🛠️</div>
        <div>
          <h3 className="text-white font-black text-3xl uppercase tracking-tighter italic">Technical <span className="text-red-500">Fix Log</span></h3>
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mt-2 italic">วิเคราะห์จาก Error ในรูปภาพ MetaEditor ของคุณ</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-black/60 p-8 rounded-[3rem] border border-red-500/20">
          <h4 className="text-red-500 font-black text-lg mb-6 uppercase italic underline">The Issue (จากรูป)</h4>
          <p className="text-slate-400 text-xs leading-relaxed italic mb-4">
             Error: <code className="text-red-400">wrong parameters count</code> ในไฟล์ <code className="text-slate-300">GoldMaster_v8_0_TITAN.mq5</code>
          </p>
          <p className="text-slate-500 text-[11px] leading-relaxed italic">
             เพราะใน MQL5 ฟังก์ชัน iRSI ต้องการพารามิเตอร์ 4 ตัว: <br/>
             <code className="text-blue-400">iRSI(Symbol, Period, MA_Period, Applied_Price)</code> <br/>
             และมันจะคืนค่าเป็น <b>"Handle" (ตัวเลขประจำห้อง)</b> ไม่ใช่ค่า RSI จริงๆ ครับ
          </p>
        </div>

        <div className="bg-green-600/5 p-8 rounded-[3rem] border border-green-500/20">
          <h4 className="text-green-500 font-black text-lg mb-6 uppercase italic underline">The Solution (v20.0)</h4>
          <div className="space-y-4 text-[11px] italic text-slate-400">
             <div className="flex gap-4">
                <span className="text-green-500 font-black">1.</span>
                <p>สร้าง <b>Handle</b> ใน <code className="text-slate-300">OnInit()</code> ครั้งเดียวจบ</p>
             </div>
             <div className="flex gap-4">
                <span className="text-green-500 font-black">2.</span>
                <p>ใช้ <b>CopyBuffer</b> เพื่อดึงค่า RSI มาเก็บใน Array ใน <code className="text-slate-300">OnTick()</code></p>
             </div>
             <div className="flex gap-4">
                <span className="text-green-500 font-black">3.</span>
                <p>Compile ผ่านฉลุย พร้อมเทรดบน <b>M15 Gold</b> ครับ</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorSolver;
