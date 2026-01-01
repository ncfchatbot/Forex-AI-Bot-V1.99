
import React from 'react';

const BacktestReview: React.FC = () => {
  return (
    <div className="bg-slate-950 border-4 border-emerald-600/20 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 text-[10rem] opacity-5 text-emerald-600 italic font-black">REVIEW</div>
      
      <div className="flex items-center gap-8 mb-12">
        <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl">📊</div>
        <div>
          <h3 className="text-white font-black text-3xl uppercase tracking-tighter italic">Backtest <span className="text-emerald-500">Diagnostics</span></h3>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic">วิเคราะห์ว่าทำไมรูปแบคเทสของคุณถึงไม่มีออเดอร์</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-black/60 p-8 rounded-[3rem] border border-emerald-500/20">
          <h4 className="text-emerald-500 font-black text-lg mb-6 uppercase italic underline">1. ล็อตเล็กเกินไป</h4>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
             ในรูป พอร์ตของคุณรันแบบ "Pips" และมีการคำนวณ Lot ตามความเสี่ยง 0.5% <br/>
             หากเงินต้นน้อยเกินไป Lot ที่ได้จะต่ำกว่า 0.01 ทำให้ระบบโบรกเกอร์ไม่รับออเดอร์ครับ
          </p>
        </div>

        <div className="bg-black/60 p-8 rounded-[3rem] border border-emerald-500/20">
          <h4 className="text-emerald-500 font-black text-lg mb-6 uppercase italic underline">2. สเปรดแบคเทส</h4>
          <p className="text-slate-400 text-[11px] leading-relaxed italic">
             ในรูปสเปรดคือ <b>44 จุด</b> แม้ v20.0 จะรองรับได้ แต่ในระบบแบคเทสบางครั้งโบรกจะถ่างสเปรดหลอก ทำให้บอทมองว่าไม่คุ้มที่จะเข้าเทรดครับ
          </p>
        </div>

        <div className="bg-emerald-600/5 p-8 rounded-[3rem] border border-emerald-500/20">
          <h4 className="text-white font-black text-lg mb-6 uppercase italic underline">3. วิธีแก้ใน v21.0</h4>
          <p className="text-emerald-400 text-[11px] leading-relaxed italic font-bold">
             ผมเพิ่มคำสั่ง <code className="text-white">Minimum Lot 0.01</code> และขยายระยะสเปรดให้ทำงานได้จริง พร้อมลดระยะ TP ให้ใกล้ขึ้นเพื่อให้บอทจบงานไวขึ้นครับ
          </p>
        </div>
      </div>
    </div>
  );
};

export default BacktestReview;
