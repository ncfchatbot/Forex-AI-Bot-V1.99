
import React from 'react';

interface AssetRank {
  rank: number;
  symbol: string;
  name: string;
  safety: number; // 0-100
  return: number; // 0-100
  description: string;
}

const ranks: AssetRank[] = [
  {
    rank: 1,
    symbol: 'EUR/USD',
    name: 'Euro / US Dollar',
    safety: 95,
    return: 70,
    description: 'ปลอดภัยที่สุด สภาพคล่องสูงมาก กราฟวิ่งตาม SMC แม่นยำ เหมาะกับมือใหม่และพอร์ตใหญ่'
  },
  {
    rank: 2,
    symbol: 'XAU/USD',
    name: 'Gold (XAU)',
    safety: 60,
    return: 98,
    description: 'ผลตอบแทนสูงสุด แต่ความผันผวนสูงมาก ต้องคุม Risk 1% และใช้ Trailing Stop ตลอดเวลา'
  },
  {
    rank: 3,
    symbol: 'GBP/USD',
    name: 'Great British Pound',
    safety: 85,
    return: 80,
    description: 'วิ่งแรงกว่า EUR ล็อคกำไร Trailing ได้คำใหญ่ขึ้น แต่ต้องระวังข่าวฝั่งอังกฤษ'
  },
  {
    rank: 4,
    symbol: 'USD/JPY',
    name: 'US Dollar / Yen',
    safety: 75,
    return: 85,
    description: 'Trend ชัดเจนมาก (Trend Following) เหมาะกับบอทที่ชอบถือตามแนวโน้ม'
  },
  {
    rank: 5,
    symbol: 'WTI/USD',
    name: 'Crude Oil',
    safety: 50,
    return: 90,
    description: 'โซน Supply/Demand ชัดเจนที่สุด แต่ค่า Spread และ Margin อาจสูงกว่าคู่เงิน'
  }
];

interface MarketRankerProps {
  currentSymbol: string;
  onSelectSymbol: (symbol: string) => void;
}

const MarketRanker: React.FC<MarketRankerProps> = ({ currentSymbol, onSelectSymbol }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-black text-white uppercase tracking-tighter italic">
            Top 5 <span className="text-emerald-400">Opportunity Ranker</span>
          </h2>
          <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-500/20">
            SMC EFFICIENCY INDEX
          </span>
        </div>
        <div className="text-[10px] text-slate-500 font-black uppercase italic tracking-widest animate-pulse">
           Click to switch AI Analysis →
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {ranks.map((item) => (
          <button
            key={item.symbol}
            onClick={() => onSelectSymbol(item.symbol)}
            className={`text-left p-5 rounded-3xl border transition-all relative overflow-hidden group ${
              currentSymbol === item.symbol 
                ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)] scale-[1.02]' 
                : 'bg-slate-900/40 border-slate-800 hover:border-emerald-500/30'
            }`}
          >
            <div className="absolute top-2 right-4 text-4xl font-black opacity-5 group-hover:opacity-10 transition-opacity">
              {item.rank}
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${currentSymbol === item.symbol ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'}`}></span>
                <span className={`text-xs font-black ${currentSymbol === item.symbol ? 'text-emerald-400' : 'text-white'}`}>{item.symbol}</span>
              </div>
              {currentSymbol === item.symbol && <span className="text-[8px] font-black text-emerald-500 uppercase">Selected</span>}
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[9px] text-slate-500 uppercase font-bold mb-1">
                  <span>Safety</span>
                  <span className="text-emerald-400">{item.safety}%</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${item.safety}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-[9px] text-slate-500 uppercase font-bold mb-1">
                  <span>ROI</span>
                  <span className="text-blue-400">{item.return}%</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${item.return}%` }}></div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[9px] text-slate-500 leading-relaxed line-clamp-2 italic">
              "{item.description}"
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MarketRanker;
