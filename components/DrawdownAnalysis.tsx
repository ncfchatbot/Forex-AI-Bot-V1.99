
import React from 'react';

const DrawdownAnalysis: React.FC = () => {
  return (
    <div className="bg-slate-950 border-4 border-blue-600/20 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden mb-12">
      <div className="absolute -top-10 -right-10 text-[10rem] opacity-5 text-blue-600 italic font-black">ANALYSIS</div>
      
      <div className="flex items-center gap-8 mb-12">
        <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-4xl shadow-xl">📈</div>
        <div>
          <h3 className="text-white font-black text-3xl uppercase tracking-tighter italic">Q4 <span className="text-blue-500">Post-Mortem</span></h3>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic">วิเคราะห์ว่าทำไมกำไร 144,000 ถึงร่วงมาเหลือ 37,000</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-black/60 p-10 rounded-[3rem] border border-blue-500/20">
          <h4 className="text-blue-500 font-black text-lg mb-6 uppercase italic underline">ทำไมถึงร่วง?</h4>
          <p className="text-slate-400 text-xs leading-relaxed italic">
             ทองคำในช่วงปลายปี (Q4) มักจะมีความผันผวนจากตัวเลขเศรษฐกิจและวันหยุดธนาคาร <br/><br/>
             บอทตัวเก่าอาจจะเจอช่วง <b>"Sideway Whip-saw"</b> (ราคาสับขาหลอก) ทำให้โดน SL ถี่ๆ ในขณะที่ Lot Size ยังใหญ่อยู่ (เพราะคำนวณจากบาลานซ์ 144,000) ผลคือขาดทุนหนักกว่าตอนเริ่มพอร์ตครับ
          </p>
        </div>

        <div className="bg-blue-600/5 p-10 rounded-[3rem] border border-blue-500/20">
          <h4 className="text-blue-500 font-black text-lg mb-6 uppercase italic underline">ทางแก้ใน v22.0</h4>
          <div className="space-y-4 text-[11px] italic text-slate-400">
             <div className="flex gap-4">
                <span className="text-blue-500 font-black">1.</span>
                <p><b>High-Water Mark:</b> เมื่อกำไรถึง 100k บอทจะจดจำค่านี้ไว้ หากพอร์ตร่วงลงมาถึงจุดที่กำหนด บอทจะ <b>"ถอดปลั๊ก"</b> ทันทีเพื่อรักษากำไร</p>
             </div>
             <div className="flex gap-4">
                <span className="text-blue-500 font-black">2.</span>
                <p><b>Dynamic Risk Scaling:</b> ยิ่งกำไรเยอะ บอทจะค่อยๆ ลดความเสี่ยงลง เพื่อเน้น "รักษาแชมป์" แทนการไล่ล่าตัวเลข</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawdownAnalysis;
