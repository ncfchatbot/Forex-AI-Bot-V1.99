
import React from 'react';

const VPSShutdownGuide: React.FC = () => {
  return (
    <div className="bg-slate-900/95 border-2 border-blue-500/40 rounded-[3rem] p-12 shadow-3xl backdrop-blur-3xl mt-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-5 text-7xl italic font-black text-blue-500 pointer-events-none">REMOTE ACCESS</div>
      
      <div className="flex items-center gap-6 mb-12">
        <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/40">🛰️</div>
        <div>
          <h3 className="text-white font-black text-2xl uppercase tracking-tighter italic">VPS <span className="text-blue-400">Lifecycle Guide</span></h3>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-1 italic">วิธีเปิด-ปิด และแก้ปัญหาการเข้าใช้งาน</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
        {/* Connection Section */}
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-[2.5rem] p-8">
           <h4 className="text-blue-400 font-black text-sm uppercase mb-6 italic flex items-center gap-3">
             <span className="text-xl">🔓</span> วิธีเปิดรีโมทกลับเข้ามาดูบอท
           </h4>
           <div className="space-y-4">
              <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                 <div className="text-[10px] text-blue-400 font-black mb-2 uppercase">Windows PC</div>
                 <p className="text-slate-300 text-[11px] italic leading-relaxed">
                    ค้นหาโปรแกรมชื่อ <b>"Remote Desktop Connection"</b> หรือกด <b>Win+R</b> แล้วพิมพ์ <b>mstsc</b>
                 </p>
              </div>
              <div className="bg-black/40 p-5 rounded-2xl border border-white/5">
                 <div className="text-[10px] text-blue-400 font-black mb-2 uppercase">Mobile / Mac</div>
                 <p className="text-slate-300 text-[11px] italic leading-relaxed">
                    ใช้แอป <b>"Microsoft Remote Desktop"</b> ใส่ IP/User/Pass แล้วกด Connect ได้เลยครับ
                 </p>
              </div>
           </div>
        </div>

        {/* Disconnection Section */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-[2.5rem] p-8">
           <h4 className="text-emerald-400 font-black text-sm uppercase mb-6 italic flex items-center gap-3">
             <span className="text-xl">🔒</span> วิธีปิดเพื่อปล่อยให้บอทรันต่อ
           </h4>
           <div className="space-y-4">
              <div className="flex items-start gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <span className="text-emerald-400 text-lg">✅</span>
                <p className="text-slate-400 text-[11px] italic">กด <b>"X"</b> ที่แถบบาร์บนสุด เพื่อตัดการเชื่อมต่อจอภาพ (บอทยังทำงานอยู่)</p>
              </div>
              <div className="flex items-start gap-4 bg-red-500/5 p-4 rounded-xl border border-red-500/20">
                <span className="text-red-400 text-lg">❌</span>
                <p className="text-red-400/80 text-[11px] italic font-black">ห้ามกด "Shut down" หรือปิดโปรแกรม MT5 เด็ดขาด!</p>
              </div>
           </div>
        </div>
      </div>

      {/* EMERGENCY TROUBLESHOOTING */}
      <div className="bg-amber-500/10 border-2 border-amber-500/40 rounded-[2.5rem] p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl">🆘</div>
        <h4 className="text-amber-400 font-black text-xl mb-6 uppercase italic flex items-center gap-4">
           แก้ปัญหา: "Login Failed" หรือ "Display 0"
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-slate-300 text-sm leading-relaxed italic">
              ถ้าขึ้นหน้าจอสีฟ้าๆ แบบในรูปที่คุณส่งมา ให้เช็ค 3 อย่างนี้ครับ:
            </p>
            <ul className="text-[11px] text-slate-400 space-y-3">
              <li className="flex gap-3"><span className="text-amber-500">📍</span> <b>เช็คภาษา:</b> คุณกำลังพิมพ์ภาษาไทยอยู่หรือเปล่า? (ต้องเป็นอังกฤษเท่านั้น)</li>
              <li className="flex gap-3"><span className="text-amber-500">📍</span> <b>เช็คตัวใหญ่:</b> กด Caps Lock ค้างไว้ไหม? (รหัสผ่านตัวใหญ่ตัวเล็กต่างกัน)</li>
              <li className="flex gap-3"><span className="text-amber-500">📍</span> <b>Username:</b> ใส่คำว่า <b>Administrator</b> (ตัว A ใหญ่) ให้ถูกต้อง</li>
            </ul>
          </div>
          <div className="bg-black/60 p-6 rounded-3xl border border-white/5 flex flex-col justify-center">
            <p className="text-emerald-400 text-[12px] font-black italic text-center leading-relaxed uppercase">
               ไม่ต้องห่วง! แม้คุณจะเข้าหน้าจอไม่ได้ <br/>
               แต่บอทที่เปิดทิ้งไว้ "ยังรันอยู่" ตามปกติครับ <br/>
               ความผิดพลาดของการ Login <br/>
               ไม่มีผลต่อโปรแกรมที่รันอยู่ข้างใน
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-slate-950 p-6 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
        <span className="text-3xl animate-pulse">📡</span>
        <div>
          <p className="text-slate-300 text-sm font-black italic uppercase">Pro Tip: Look at MT5 Mobile</p>
          <p className="text-slate-500 text-[10px] italic mt-1 uppercase tracking-widest">
             ถ้ารีโมทเข้าไม่ได้ ให้เปิดแอป MT5 ในมือถือดูครับ ถ้าเห็นราคาขยับ หรือเห็นประวัติการเทรด แปลว่าบอทยังทำงานอยู่ 100% ครับ สบายใจได้!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VPSShutdownGuide;
