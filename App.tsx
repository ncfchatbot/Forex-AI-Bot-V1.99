
import React, { useState, useEffect, useCallback } from 'react';
import { MarketSignal, MarketSide, AccountStats, Trade, StrategyVerdict } from './types';
import { analyzeMarketSentiment, evaluateStrategy } from './services/geminiService';
import SignalCard from './components/SignalCard';
import StatsPanel from './components/StatsPanel';
import MQL5CodeModal from './components/MQL5CodeModal';
import StrategyConsultant from './components/StrategyConsultant';

const App: React.FC = () => {
  const [signal, setSignal] = useState<MarketSignal | null>(null);
  const [verdict, setVerdict] = useState<StrategyVerdict | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMqlModalOpen, setIsMqlModalOpen] = useState(false);
  const [stats, setStats] = useState<AccountStats>({
    balance: 100.00,
    equity: 100.00,
    dailyProfit: 0.00,
    winRate: 0,
    totalTrades: 0
  });

  const [chartData, setChartData] = useState<{name: string, equity: number}[]>([
    { name: 'Start', equity: 100 }
  ]);

  const handleFetchSignal = async () => {
    setIsLoading(true);
    try {
      const [marketResult, strategyResult] = await Promise.all([
        analyzeMarketSentiment("XAU/USD"),
        evaluateStrategy(100, 100, 50, 100)
      ]);
      setSignal(marketResult);
      setVerdict(strategyResult);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchSignal();
    const interval = setInterval(handleFetchSignal, 600000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pb-24 bg-[#050810] text-slate-200">
      <MQL5CodeModal isOpen={isMqlModalOpen} onClose={() => setIsMqlModalOpen(false)} />
      
      {/* Dynamic Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Header Bar */}
      <div className="bg-slate-900/80 border-b border-slate-800 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20 ring-1 ring-yellow-400/50">
              <span className="text-black font-black text-xl">G</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-white uppercase italic">Gold Station <span className="text-yellow-500">Command Center</span></h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Bot Status: Online & Monitoring</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMqlModalOpen(true)}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-black rounded-xl transition-all border border-slate-700 flex items-center gap-2"
            >
              Get Latest MQL5 Code
            </button>
          </div>
        </div>
      </div>

      <main className="relative max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 space-y-8">
          {/* Success Banner */}
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/5 border border-green-500/30 p-8 rounded-3xl relative overflow-hidden group hover:border-green-500/50 transition-all">
            <div className="absolute right-0 top-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <svg className="w-24 h-24 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            </div>
            <h2 className="text-green-400 font-black text-2xl mb-2 flex items-center gap-3">
              🎉 ระบบพร้อมทำกำไรแล้วครับ!
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              ตอนนี้บอทกำลังเฝ้ากราฟ <b>XAUUSD (M15)</b> ให้คุณอย่างใกล้ชิด <br/> 
              เมื่อสัญญาณ RSI และราคาข้ามเส้น MA เข้าเงื่อนไข บอทจะเปิดไม้ 0.01 Lot และเก็บ 50 pips ทันทีตามที่คุณต้องการครับ
            </p>
            <div className="mt-6 flex gap-4">
              <div className="bg-black/40 px-4 py-2 rounded-lg border border-white/5 text-[10px] font-bold text-slate-400">TARGET: $100.00 / DAY</div>
              <div className="bg-black/40 px-4 py-2 rounded-lg border border-white/5 text-[10px] font-bold text-slate-400">LOT SIZE: 0.01 FIXED</div>
            </div>
          </div>

          <StatsPanel stats={stats} history={chartData} />
        </div>

        <div className="xl:col-span-4 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <h3 className="text-white font-black text-sm mb-4 flex items-center gap-2">
              <span className="text-yellow-500">●</span> GEMINI LIVE INSIGHTS
            </h3>
            <SignalCard signal={signal} isLoading={isLoading} onRefresh={handleFetchSignal} />
          </div>
          
          <StrategyConsultant verdict={verdict} isLoading={isLoading} />
        </div>
      </main>
    </div>
  );
};

export default App;
