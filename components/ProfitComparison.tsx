
import React from 'react';

const ProfitComparison: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border-4 border-orange-500/20 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden mb-12">
      <div className="absolute -top-10 -right-10 text-[10rem] opacity-5 text-orange-500 italic font-black">VERSUS</div>
      
      <div className="flex items-center gap-8 mb-12">
        <div className="w-20 h-20 bg-orange-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl">⚖️</div>
        <div>
          <h3 className="text-white font-black text-3xl uppercase tracking-tighter italic">Why v21 <span className="text-orange-500">Wins Backtest?</span></h3>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic">วิเคราะห์ความต่างของกำไร vs ความเสี่ยงที่คุณเจอจริง</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5 opacity-60">
          <h4 className="text-slate-400 font-black text-lg mb-4 uppercase italic">v21 HARVEST</h4>
          <div className="text-3xl font-mono font-black text-emerald-400 mb-6">+280% Profit</div>
          <p className="text-[10px] text-slate-500 italic leading-relaxed">
             "กำไรพุ่งเพราะไม่ยอมเบรก แต่ถ้าเจอ Q4 แบบในรูป... กำไรทั้งหมดอาจละลายเหลือศูนย์หรือติดลบได้ทันที"
          </p>
        </div>

        <div className="bg-black/40 p-10 rounded-[3rem] border border-blue-500/30 opacity-80">
          <h4 className="text-blue-500 font-black text-lg mb-4 uppercase italic">v22 TITAN</h4>
          <div className="text-3xl font-mono font-black text-blue-400 mb-6">+110% Profit</div>
          <p className="text-[10px] text-slate-500 italic leading-relaxed">
             "เน้นความปลอดภัยสูงสุด กำไรอาจจะดูน้อยกว่าในแบคเทส แต่ในตลาดจริง คุณจะรักษาเงิน 144,000 ไว้ได้ถาวร"
          </p>
        </div>

        <div className="bg-orange-600/10 p-10 rounded-[3rem] border-2 border-orange-500 relative shadow-[0_0_40px_rgba(234,88,12,0.1)]">
          <div className="absolute -top-4 right-8 bg-orange-600 px-4 py-1 rounded-full text-[9px] font-black text-white uppercase">RECOMMENDED</div>
          <h4 className="text-orange-500 font-black text-lg mb-4 uppercase italic">v23 ZENITH</h4>
          <div className="text-3xl font-mono font-black text-orange-400 mb-6">+185% Profit</div>
          <p className="text-[10px] text-white italic leading-relaxed font-bold">
             "ทางสายกลาง! บุกหนักเหมือน v21 ในช่วงขาขึ้น แต่เปลี่ยนเป็นโล่ป้องกันเหมือน v22 เมื่อกำไรถึงเป้า คุ้มค่าที่สุด!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfitComparison;
