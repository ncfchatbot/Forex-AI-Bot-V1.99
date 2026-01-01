
import React from 'react';

const WithdrawalStrategy: React.FC = () => {
  return (
    <div className="bg-emerald-950/20 border-4 border-emerald-500/20 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden mb-12">
      <div className="absolute -top-10 -right-10 text-[10rem] opacity-5 text-emerald-500 italic font-black">CASH OUT</div>
      
      <div className="flex items-center gap-8 mb-12">
        <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center text-4xl shadow-xl">💰</div>
        <div>
          <h3 className="text-white font-black text-3xl uppercase tracking-tighter italic">Profit <span className="text-emerald-500">Exit Plan</span></h3>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic">ถอนทุกเดือน VS ทิ้งไว้ยาว? AI มีคำตอบครับ</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-black/60 p-10 rounded-[3rem] border border-emerald-500/20">
          <h4 className="text-emerald-500 font-black text-lg mb-6 uppercase italic underline">กลยุทธ์ "ถอนทุนคืน" (แนะนำ)</h4>
          <p className="text-slate-400 text-xs leading-relaxed italic mb-6">
             ความสำเร็จที่แท้จริงคือการถอนเงินเข้าบัญชีครับ เมื่อบอททำกำไรได้ถึง 100% (เช่น ฝาก 1,000 กำไร 1,000) ให้ถอน 1,000 แรกออกมาทันที
          </p>
          <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/30 text-[10px] text-emerald-400 font-bold uppercase italic text-center">
             "หลังจากถอนทุน... ทุกเหรียญหลังจากนี้คือกำไร 100% ไร้ความเสี่ยง!"
          </div>
        </div>

        <div className="bg-black/60 p-10 rounded-[3rem] border border-emerald-500/20">
          <h4 className="text-emerald-500 font-black text-lg mb-6 uppercase italic underline">ถอนทุกเดือน VS ทิ้งยาว</h4>
          <ul className="space-y-4 text-[11px] italic text-slate-400">
             <li className="flex gap-3">
                <span className="text-emerald-500">📍</span>
                <p><b>ถอนทุกเดือน:</b> เหมาะกับสายเก็บเศษเงิน ช่วยให้คุณมี Cashflow และลดความเสี่ยงช่วง Q4 (ที่เพิ่งเจอมา)</p>
             </li>
             <li className="flex gap-3">
                <span className="text-emerald-500">📍</span>
                <p><b>ทิ้งยาว:</b> พอร์ตโตไวแบบ Compounding แต่ต้องแลกกับความเสี่ยง Profit Giveback เหมือนในรูปครับ</p>
             </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalStrategy;
