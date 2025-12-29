
import React, { useState, useEffect } from 'react';
import { MarketSignal, AccountStats, StrategyVerdict } from './types';
import { getUnifiedAnalysis } from './services/geminiService';
import SignalCard from './components/SignalCard';
import StatsPanel from './components/StatsPanel';
import MQL5CodeModal from './components/MQL5CodeModal';
import StrategyConsultant from './components/StrategyConsultant';
import StrategyBattle from './components/StrategyBattle';

const App: React.FC = () => {
  const [signal, setSignal] = useState<MarketSignal | null>(null);
  const [verdict, setVerdict] = useState<StrategyVerdict | null>(null);
  const [recommendedLot, setRecommendedLot] = useState<number>(0.05);
  const [isLoading, setIsLoading] = useState(false);
  const [isMqlModalOpen, setIsMqlModalOpen] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const [stats, setStats] = useState<AccountStats>({
    balance: 100.00, // สามารถจำลองทุนเพิ่มขึ้นได้ที่นี่
    equity: 100.00,
    dailyProfit: 0.00,
    winRate: 0,
    totalTrades: 0
  });

  const handleFetchSignal = async () => {
    if (cooldown > 0 || isLoading) return;
    setIsLoading(true);
    try {
      const result = await getUnifiedAnalysis("XAU/USD", stats.balance);
      setSignal(result.signal);
      setVerdict(result.verdict);
      setRecommendedLot(result.recommendedLot);
      setCooldown(30);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { handleFetchSignal(); }, []);
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown(c => c - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  return (
    <div className="min-h-screen pb-24 bg-[#020617] text-slate-200">
      <MQL5CodeModal isOpen={isMqlModalOpen} onClose={() => setIsMqlModalOpen(false)} />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-yellow-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="bg-slate-950/50 border-b border-slate-800/50 backdrop-blur-2xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-black font-black text-2xl">R</span>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-white uppercase italic">GoldRunner <span className="text-yellow-500 underline decoration-yellow-500/30">V2.2 PRO</span></h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] text-slate-400 font-black tracking-widest uppercase">
                  Mode: Auto-Compound & Protect
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end px-4 border-r border-slate-800 mr-2">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Target Lot Scale</div>
              <div className="text-sm font-mono text-yellow-500 font-black">{recommendedLot.toFixed(2)} Lot</div>
            </div>
            <button 
              onClick={handleFetchSignal}
              disabled={isLoading || cooldown > 0}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white text-[10px] font-black rounded-2xl transition-all border border-slate-700"
            >
              {isLoading ? 'ANALYZING...' : cooldown > 0 ? `COOLDOWN ${cooldown}s` : 'REFRESH ANALYSIS'}
            </button>
            <button 
              onClick={() => setIsMqlModalOpen(true)}
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-black rounded-2xl transition-all shadow-xl shadow-yellow-500/10 flex items-center gap-2 group"
            >
              GET V2.2 COMPOUND CODE
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <StrategyBattle />
             <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/5 blur-3xl rounded-full group-hover:bg-yellow-500/10 transition-all"></div>
                <h2 className="text-yellow-500 font-black text-xl mb-4 flex items-center gap-3">
                  🛡️ SAFE & SCALE V2.2
                </h2>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">●</span>
                    <span><b>Initial Hard SL:</b> ป้องกันต้นทุนทันทีที่เปิดไม้</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-500 font-bold">●</span>
                    <span><b>Auto-Compound:</b> ปรับ Lot ตามทุน (0.05 ต่อ $100)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 font-bold">●</span>
                    <span><b>Re-Entry Rule:</b> รอสัญญาณชัดเจนหลังโดน SL เท่านั้น</span>
                  </li>
                </ul>
             </div>
          </div>
          <StatsPanel stats={stats} history={[{name: 'Init', equity: 100}, {name: 'Target', equity: 200}]} />
        </div>

        <div className="xl:col-span-4 space-y-6">
          <div className="bg-slate-900/50 border border-slate-800/50 rounded-[2rem] p-8 shadow-2xl backdrop-blur-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-black text-sm flex items-center gap-3 uppercase tracking-widest">
                <span className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,1)]"></span> 
                Market Edge
              </h3>
              <div className="text-[10px] font-mono text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">
                REC: {recommendedLot.toFixed(2)} LOT
              </div>
            </div>
            <SignalCard signal={signal} isLoading={isLoading} onRefresh={handleFetchSignal} showRefreshBtn={false} />
          </div>
          <StrategyConsultant verdict={verdict} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
};

export default App;
