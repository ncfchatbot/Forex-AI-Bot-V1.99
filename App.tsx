
import React, { useState, useEffect } from 'react';
import { MarketSignal, AccountStats, StrategyVerdict, MarketSide } from './types';
import { getUnifiedAnalysis } from './services/geminiService';
import SignalCard from './components/SignalCard';
import StatsPanel from './components/StatsPanel';
import MQL5CodeModal from './components/MQL5CodeModal';
import StrategyConsultant from './components/StrategyConsultant';
import StrategyBattle from './components/StrategyBattle';
import BotDiagnostics from './components/BotDiagnostics';
import IncomeForecast from './components/IncomeForecast';
import NavigatorGuide from './components/NavigatorGuide';
import BacktestLab from './components/BacktestLab';

const App: React.FC = () => {
  const [selectedSymbol] = useState('XAU/USD');
  const [signal, setSignal] = useState<MarketSignal | null>(null);
  const [verdict, setVerdict] = useState<StrategyVerdict | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMqlModalOpen, setIsMqlModalOpen] = useState(false);
  
  const currentVersion = 'v5.7';
  const [mt5Version] = useState('v5.5');

  const [stats] = useState<AccountStats>({
    balance: 66633.00,
    equity: 66633.00,
    dailyProfit: 0.00,
    winRate: 91, 
    totalTrades: 120
  });

  const handleFetchSignal = async (force: boolean = false) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const result = await getUnifiedAnalysis(selectedSymbol, stats.balance);
      setSignal(result.signal);
      setVerdict(result.verdict);
    } catch (e) {
      console.error("Sync Error:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { 
    if ((window as any).hideAppLoader) (window as any).hideAppLoader();
    handleFetchSignal();
  }, []);

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-200 font-sans selection:bg-yellow-500/30">
      <MQL5CodeModal isOpen={isMqlModalOpen} onClose={() => setIsMqlModalOpen(false)} />
      
      {/* 1. PERMANENT STICKY BUTTON */}
      <div className="fixed bottom-10 right-10 z-[100]">
        <button 
          onClick={() => setIsMqlModalOpen(true)}
          className="group flex items-center gap-5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 p-2 px-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(234,179,8,0.5)] transition-all active:scale-95 border-4 border-[#02040a]"
        >
          <div className="py-4 font-black text-xl italic tracking-tighter uppercase">📋 Get v5.7 Code</div>
          <div className="w-12 h-12 bg-slate-950 text-yellow-500 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700">
             <span className="font-black text-lg">v7</span>
          </div>
        </button>
      </div>

      <header className="sticky top-0 z-[40] bg-[#02040a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer" onClick={() => setIsMqlModalOpen(true)}>
              <span className="text-slate-950 font-black text-2xl italic">GM</span>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-white flex items-center gap-4 italic uppercase">
                GoldMaster <span className="text-yellow-500 underline underline-offset-8 text-xl lg:text-2xl">Ultra Elite</span>
              </h1>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Live Engine v5.7</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => handleFetchSignal(true)}
            disabled={isLoading}
            className={`px-8 py-4 rounded-2xl font-black text-xs uppercase transition-all flex items-center gap-4 shadow-2xl ${
              isLoading ? 'bg-slate-800 text-slate-500' : 'bg-blue-600 text-white hover:bg-blue-500'
            }`}
          >
            {isLoading ? 'SYNCING...' : '⚡ Sync AI'}
          </button>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-8 py-12">
        {mt5Version !== currentVersion && (
          <div className="mb-12 bg-red-600/10 border-2 border-red-500/20 p-8 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-8">
              <div className="text-5xl">🚨</div>
              <div>
                <h4 className="text-white font-black text-2xl uppercase italic tracking-tighter">การซิงค์ไม่สำเร็จ (Version Mismatch)</h4>
                <p className="text-slate-400 text-sm italic mt-1">บอทใน MT5 ของคุณเป็น v5.5 กรุณาอัปเดตเป็น v5.7 เพื่อให้แบคเทสได้แม่นยำครับ</p>
              </div>
            </div>
            <button onClick={() => setIsMqlModalOpen(true)} className="bg-yellow-500 text-slate-950 px-10 py-4 rounded-[2rem] font-black text-xs uppercase hover:scale-105 transition-all">อัปเดตโค้ดทันที</button>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
          <div className="xl:col-span-8 space-y-10">
            <BacktestLab balance={stats.balance} />
            <StatsPanel stats={stats} history={[{name: 'Start', equity: 50000}, {name: 'v5.5', equity: 66633}, {name: 'Target', equity: 150000}]} />
            <BotDiagnostics />
            <IncomeForecast balance={stats.balance} />
            <NavigatorGuide />
          </div>

          <div className="xl:col-span-4 space-y-10">
            <div className="sticky top-32">
              <SignalCard signal={signal} isLoading={isLoading} onRefresh={() => handleFetchSignal(true)} />
              <div className="mt-10">
                <StrategyConsultant verdict={verdict} isLoading={isLoading} sideBias={signal?.side} />
              </div>
              <div className="mt-10">
                <StrategyBattle />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-24 border-t border-white/5 text-center">
        <p className="text-slate-700 text-[11px] font-black uppercase tracking-[0.5em] italic">
          Professional Scalping Engine &bull; {currentVersion} STABLE BUILD
        </p>
      </footer>
    </div>
  );
};

export default App;
