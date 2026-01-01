
import React from 'react';

interface AssetRank {
  rank: number;
  symbol: string;
  name: string;
  safety: number; 
  return: number; 
  tag: string;
  description: string;
}

const ranks: AssetRank[] = [
  {
    rank: 1,
    symbol: 'EUR/USD',
    name: 'Euro / US Dollar',
    safety: 98,
    return: 65,
    tag: '👑 BEST FOR SMALL CHANGE',
    description: 'สเปรดต่ำที่สุด เหมาะมากกับกลยุทธ์เก็บเศษเงินที่เน้นความสม่ำเสมอและไม่ลุ้นจนหัวใจวาย'
  },
  {
    rank: 2,
    symbol: 'XAU/USD',
    name: 'Gold (Spot)',
    safety: 55,
    return: 95,
    tag: '🔥 HIGH REWARD / VOLATILE',
    description: 'กำไรคำใหญ่ แต่ต้องแลกด้วยสเปรดที่สูงและการเหวี่ยงแรง ต้องใช้ v14.1 Filter เท่านั้น'
  },
  {
    rank: 3,
    symbol: 'GBP/USD',
    name: 'Great British Pound',
    safety: 82,
    return: 75,
    tag: '⚡ TREND FOLLOWER',
    description: 'วิ่งแรงกว่า EUR นิดหน่อย เก็บกำไรได้เป็นกอบเป็นกำในช่วงตลาดลอนดอนเปิด'
  },
  {
    rank: 4,
    symbol: 'USD/JPY',
    name: 'Dollar / Yen',
    safety: 88,
    return: 70,
    tag: '📉 SMOOTH TRENDS',
    description: 'เทรนด์ชัดเจนและยาวนาน เหมาะสำหรับสายที่ไม่ชอบกราฟสับขาหลอกบ่อยๆ'
  }
];

interface MarketRankerProps {
  currentSymbol: string;
  onSelectSymbol: (symbol: string) => void;
}

const MarketRanker: React.FC<MarketRankerProps> = ({ currentSymbol, onSelectSymbol }) => {
  return (
    <div className="mb-14">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">
            Asset <span className="text-blue-400">Selector</span>
          </h2>
          <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-4 py-1 rounded-full border border-blue-500/20">
            SMC COMPATIBILITY
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {ranks.map((item) => (
          <button
            key={item.symbol}
            onClick={() => onSelectSymbol(item.symbol)}
            className={`text-left p-8 rounded-[2.5rem] border-2 transition-all relative overflow-hidden group ${
              currentSymbol === item.symbol 
                ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.2)] scale-[1.03]' 
                : 'bg-slate-900/40 border-white/5 hover:border-blue-500/30'
            }`}
          >
            <div className="absolute -top-4 -right-4 text-7xl font-black opacity-[0.03] group-hover:opacity-[0.07] transition-opacity italic">
              {item.symbol.split('/')[0]}
            </div>
            
            <div className="mb-6">
               <div className={`text-[9px] font-black uppercase tracking-widest mb-2 ${currentSymbol === item.symbol ? 'text-blue-400' : 'text-slate-500'}`}>
                  {item.tag}
               </div>
               <h3 className={`text-2xl font-black italic ${currentSymbol === item.symbol ? 'text-white' : 'text-slate-400'}`}>
                  {item.symbol}
               </h3>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-[8px] text-slate-500 uppercase font-black mb-1.5">
                  <span>Safety</span>
                  <span className="text-blue-400">{item.safety}%</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${item.safety}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-[8px] text-slate-500 uppercase font-black mb-1.5">
                  <span>Profit Potential</span>
                  <span className="text-emerald-400">{item.return}%</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${item.return}%` }}></div>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-500 leading-relaxed italic line-clamp-3">
              "{item.description}"
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MarketRanker;
