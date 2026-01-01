
import React from 'react';

const AssetComparison: React.FC = () => {
  const assets = [
    { 
      name: 'XAU/USD (Gold)', 
      concept: 'High Stakes', 
      safety: 20, 
      freq: 40, 
      cost: 'High Spread',
      verdict: 'เสี่ยงพอร์ตแตกสูง', 
      color: 'text-amber-500', 
      icon: '🔥' 
    },
    { 
      name: 'EUR/USD (Forex)', 
      concept: 'Micro-Scalping', 
      safety: 95, 
      freq: 90, 
      cost: 'Zero Spread',
      verdict: 'เหมาะเก็บเศษเงินที่สุด', 
      color: 'text-blue-400', 
      icon: '💎' 
    }
  ];

  return (
    <div className="bg-slate-900/60 border border-white/5 rounded-[3rem] p-10 mb-12 backdrop-blur-3xl overflow-hidden relative group">
      <div className="absolute top-0 right-0 p-12 opacity-5 text-8xl italic font-black text-white pointer-events-none select-none uppercase">BETTER THAN GOLD</div>
      
      <div className="flex items-center gap-6 mb-12 border-b border-white/5 pb-8 relative z-10">
        <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl">📊</div>
        <div>
          <h3 className="text-white font-black text-2xl uppercase tracking-tighter italic">Asset <span className="text-blue-400">Battlefield</span></h3>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-1 italic">ทำไม EUR/USD ถึงเป็นสวรรค์ของบอทเก็บเศษเงิน</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {assets.map((asset, idx) => (
          <div key={idx} className={`p-8 rounded-[2.5rem] border-2 transition-all ${asset.safety > 80 ? 'bg-blue-500/5 border-blue-500/20' : 'bg-amber-500/5 border-amber-500/20 opacity-60'}`}>
            <div className="flex justify-between items-start mb-6">
              <div className="text-4xl">{asset.icon}</div>
              <div className={`font-black text-[10px] uppercase px-4 py-1.5 rounded-full bg-black/40 ${asset.color}`}>{asset.concept}</div>
            </div>
            
            <h4 className={`text-2xl font-black mb-6 italic ${asset.color}`}>{asset.name}</h4>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[10px] text-slate-500 uppercase font-black mb-1">
                  <span>Safety Score (โอกาสรอด)</span>
                  <span className={asset.color}>{asset.safety}%</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full">
                  <div className={`h-full rounded-full ${asset.safety > 80 ? 'bg-blue-400' : 'bg-amber-500'}`} style={{ width: `${asset.safety}%` }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 text-center">
                  <div className="text-[9px] text-slate-500 uppercase mb-1">Trading Freq</div>
                  <div className="text-white font-bold text-xs">{asset.freq}% Active</div>
                </div>
                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 text-center">
                  <div className="text-[9px] text-slate-500 uppercase mb-1">Fee Impact</div>
                  <div className="text-white font-bold text-xs">{asset.cost}</div>
                </div>
              </div>
              
              <div className={`mt-4 text-[11px] font-black italic text-center uppercase p-3 rounded-xl bg-black/40 ${asset.color}`}>
                Verdict: {asset.verdict}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetComparison;
