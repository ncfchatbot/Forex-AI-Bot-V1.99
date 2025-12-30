
import React from 'react';

const VPSAdvisor: React.FC = () => {
  return (
    <div className="bg-slate-900/95 border-4 border-emerald-500 rounded-[3rem] p-12 shadow-[0_0_100px_rgba(16,185,129,0.3)] backdrop-blur-3xl mt-12 relative overflow-hidden text-white">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full"></div>
      
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-blue-500 rounded-[2rem] flex items-center justify-center text-4xl mx-auto mb-6 shadow-2xl shadow-blue-500/40">
          🎮
        </div>
        <h3 className="font-black text-4xl uppercase tracking-tighter italic">Demo <span className="text-blue-400">Setup Guide</span></h3>
        <p className="text-blue-500/60 text-[10px] font-black uppercase tracking-[0.4em] mt-2 italic">How to link GoldMaster v5.5 to your Demo Account</p>
      </div>

      {/* Demo Step Card */}
      <div className="bg-blue-600/10 border-2 border-blue-500/40 p-8 rounded-[3rem] mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-20 text-5xl">⚡</div>
        <h4 className="text-blue-400 font-black text-xl italic mb-6 uppercase">การตั้งค่าพอร์ต Demo ใน 3 นาที</h4>
        <div className="space-y-6">
          <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
            <div className="text-blue-400 font-black text-xs uppercase mb-2">Step 1: เลือก Server ให้ถูก</div>
            <p className="text-slate-300 text-[11px] italic italic">
              ในช่อง Search โบรกเกอร์ ให้พิมพ์ <b>"VT Markets"</b> แล้วเลือก Server ที่ชื่อว่า <b>"VTMarkets-Demo"</b> (ถ้าเลือก Live บอทจะเข้าออเดอร์ไม่ได้)
            </p>
          </div>
          <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
            <div className="text-blue-400 font-black text-xs uppercase mb-2">Step 2: ระบุเงินเริ่มต้นให้พอดี</div>
            <p className="text-slate-300 text-[11px] italic">
              แนะนำให้กรอกเงิน Demo ที่ <b>$100 - $1,000</b> (อย่าใส่เยอะเกินไปจนไม่สมจริง) เพื่อให้เห็นการทำงานของระบบ Money Management 5% ครับ
            </p>
          </div>
        </div>
      </div>

      <div className="text-center p-8 bg-blue-500/20 rounded-[2.5rem] border-2 border-blue-500">
        <p className="text-white font-black text-sm italic uppercase leading-relaxed">
          "ลองใช้โค้ดบอท v5.5 รันบนบัญชี Demo วันนี้ <br/>
          เพื่อดูพลังของ <b className="text-blue-400">SMC AI Algorithm</b> ก่อนลงสนามจริงครับ!"
        </p>
      </div>
    </div>
  );
};

export default VPSAdvisor;
