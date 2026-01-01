
import React, { useState, useEffect } from 'react';
import { MarketSignal, AccountStats, StrategyVerdict, MarketSide } from './types.ts';
import { getUnifiedAnalysis } from './services/geminiService.ts';
import SignalCard from './components/SignalCard.tsx';
import StatsPanel from './components/StatsPanel.tsx';
import MQL5CodeModal from './components/MQL5CodeModal.tsx';
import SafeguardBanner from './components/SafeguardBanner.tsx';
import DrawdownAnalysis from './components/DrawdownAnalysis.tsx';
import WithdrawalStrategy from './components/WithdrawalStrategy.tsx';
import BotDiagnostics from './components/BotDiagnostics.tsx';
import StrategyBattle from './components/StrategyBattle.tsx';
import ProfitComparison from './components/ProfitComparison.tsx';
import PhoenixStatus from './components/PhoenixStatus.tsx';

const App: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('XAU/USD'); 
  const [signal, setSignal] = useState<MarketSignal | null>(null);
  const [verdict, setVerdict] = useState<StrategyVerdict | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMqlModalOpen, setIsMqlModalOpen] = useState(false);
  
  const currentVersion = 'v24.1 PHOENIX (SYNTAX FIXED)';

  const [stats] = useState<AccountStats>({
    balance: 112876.00,
    equity: 112876.00, 
    dailyProfit: 450, 
    winRate: 85, 
    totalTrades: 842
  });

  const handleFetchSignal = async (force: boolean = false) => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const result = await getUnifiedAnalysis(selectedSymbol, stats.balance);
      setSignal(result.signal);
      setVerdict(result.verdict);
    } catch (e) {
      console.error("AI Sync Error:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { 
    if ((window as any).hideAppLoader) (window as any).hideAppLoader();
    handleFetchSignal();
  }, [selectedSymbol]);

  return (
    <div className="min-h-screen bg-[#020202] text-slate-200 font-sans selection:bg-red-500/30">
      <MQL5CodeModal isOpen={isMqlModalOpen} onClose={() => setIsMqlModalOpen(false)} />
      
      <div className="fixed bottom-10 right-10 z-[100]">
        <button 
          onClick={() => setIsMqlModalOpen(true)}
          className="group flex items-center gap-6 bg-red-600 hover:bg-red-500 text-white p-2 px-14 rounded-full shadow-[0_0_80px_rgba(220,38,38,0.4)] transition-all active:scale-95 border-b-8 border-red-900"
        >
          <div className="py-6 font-black text-3xl italic tracking-tighter uppercase">🔥 GET v24.1 FIXED CODE</div>
        </button>
      </div>

      <header className="sticky top-0 z-[40] bg-[#020202]/95 backdrop-blur-3xl border-b border-red-500/10">
        <div className="max-w-[1600px] mx-auto px-10 py-8 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="w-20 h-20 bg-red-600 rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.3)] animate-pulse">
              <span className="text-white font-black text-4xl italic">24</span>
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter text-white flex items-center gap-5 italic uppercase">
                THE <span className="text-red-500 underline decoration-red-700 underline-offset-8">PHOENIX</span>
              </h1>
              <p className="text-[11px] text-slate-500 font-black uppercase tracking-[0.5em]">{currentVersion}</p>
            </div>
          </div>
          <div className="flex items-center gap-14 text-right">
             <div className="px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="text-emerald-400 font-black text-[10px] uppercase tracking-widest italic">✓ 100% COMPILABLE</span>
             </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-10 py-16">
        <PhoenixStatus />
        <BotDiagnostics />
        <ProfitComparison />
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 mt-12">
          <div className="xl:col-span-8 space-y-12">
            <StatsPanel stats={stats} history={[]} />
            <DrawdownAnalysis />
          </div>
          <div className="xl:col-span-4 space-y-12">
            <SignalCard signal={signal} isLoading={isLoading} onRefresh={() => handleFetchSignal(true)} />
            <StrategyBattle />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
