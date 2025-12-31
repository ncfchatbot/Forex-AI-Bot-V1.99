
import React, { useState, useEffect } from 'react';
import { MarketSignal, AccountStats, StrategyVerdict, MarketSide } from './types.ts';
import { getUnifiedAnalysis } from './services/geminiService.ts';
import SignalCard from './components/SignalCard.tsx';
import StatsPanel from './components/StatsPanel.tsx';
import MQL5CodeModal from './components/MQL5CodeModal.tsx';
import StrategyConsultant from './components/StrategyConsultant.tsx';
import StrategyBattle from './components/StrategyBattle.tsx';
import BotDiagnostics from './components/BotDiagnostics.tsx';
import IncomeForecast from './components/IncomeForecast.tsx';
import NavigatorGuide from './components/NavigatorGuide.tsx';
import BacktestLab from './components/BacktestLab.tsx';
import MarketRanker from './components/MarketRanker.tsx';
import StrategyExplorer from './components/StrategyExplorer.tsx';
import DailyRoutine from './components/DailyRoutine.tsx';
import VPSAdvisor from './components/VPSAdvisor.tsx';
import VPSShutdownGuide from './components/VPSShutdownGuide.tsx';
import RiskBreakdown from './components/RiskBreakdown.tsx';
import IntegrationGuide from './components/IntegrationGuide.tsx';
import BacktestFixer from './components/BacktestFixer.tsx';
import SuccessCalibration from './components/SuccessCalibration.tsx';
import WealthAccelerator from './components/WealthAccelerator.tsx';

const App: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('XAU/USD');
  const [signal, setSignal] = useState<MarketSignal | null>(null);
  const [verdict, setVerdict] = useState<StrategyVerdict | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMqlModalOpen, setIsMqlModalOpen] = useState(false);
  
  const currentVersion = 'v5.8 GHOST';
  const [mt5Version] = useState('v5.7');

  const [stats] = useState<AccountStats>({
    balance: 101317.64,
    equity: 101317.64,
    dailyProfit: 0.00,
    winRate: 92.5, 
    totalTrades: 350
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
    console.log("✅ App Mounted, hiding loader...");
    if ((window as any).hideAppLoader) (window as any).hideAppLoader();
    handleFetchSignal();
  }, [selectedSymbol]);

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-200 font-sans selection:bg-emerald-500/30">
      <MQL5CodeModal isOpen={isMqlModalOpen} onClose={() => setIsMqlModalOpen(false)} />
      
      <div className="fixed bottom-10 right-10 z-[100]">
        <button 
          onClick={() => setIsMqlModalOpen(true)}
          className="group flex items-center gap-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-2 px-10 rounded-[2.5rem] shadow-[0_30px_60px_rgba(16,185,129,0.5)] transition-all active:scale-95 border-4 border-[#02040a]"
        >
          <div className="py-4 font-black text-xl italic tracking-tighter uppercase">📋 Get v5.8 GHOST</div>
          <div className="w-12 h-12 bg-slate-950 text-emerald-500 rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700">
             <span className="font-black text-lg">v8</span>
          </div>
        </button>
      </div>

      <header className="sticky top-0 z-[40] bg-[#02040a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer" onClick={() => setIsMqlModalOpen(true)}>
              <span className="text-slate-950 font-black text-2xl italic">GM</span>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-white flex items-center gap-4 italic uppercase">
                GoldMaster <span className="text-emerald-400 underline underline-offset-8 text-xl lg:text-2xl">Ghost Scalper</span>
              </h1>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_100px_#10b981]"></span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Compounding Mode: ON</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => handleFetchSignal(true)}
            disabled={isLoading}
            className={`px-8 py-4 rounded-2xl font-black text-xs uppercase transition-all flex items-center gap-4 shadow-2xl ${
              isLoading ? 'bg-slate-800 text-slate-500' : 'bg-emerald-600 text-white hover:bg-emerald-500'
            }`}
          >
            {isLoading ? 'SYNCING...' : '⚡ Sync Live AI'}
          </button>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-8 py-12">
        <MarketRanker currentSymbol={selectedSymbol} onSelectSymbol={setSelectedSymbol} />

        {/* NEW WEALTH ACCELERATOR COMPONENT */}
        <WealthAccelerator balance={stats.balance} />

        {mt5Version !== currentVersion && (
          <div className="mb-12 bg-emerald-600/10 border-2 border-emerald-500/20 p-8 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-8">
              <div className="text-5xl">🏦</div>
              <div>
                <h4 className="text-white font-black text-2xl uppercase italic tracking-tighter">Ready for Capital Expansion</h4>
                <p className="text-slate-400 text-sm italic mt-1">อัปเกรดเป็น v5.8 เพื่อเปิดใช้ระบบคำนวณ Lot อัตโนมัติและเร่งการเติบโตของพอร์ตครับ</p>
              </div>
            </div>
            <button onClick={() => setIsMqlModalOpen(true)} className="bg-emerald-500 text-slate-950 px-10 py-4 rounded-[2rem] font-black text-xs uppercase hover:scale-105 transition-all">Get v5.8 GHOST</button>
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
          <div className="xl:col-span-8 space-y-10">
            <StatsPanel stats={stats} history={[{name: 'Start', equity: 50000}, {name: 'M1', equity: 75000}, {name: 'Current', equity: 101317}]} />
            <RiskBreakdown />
            <IncomeForecast balance={stats.balance} />
            <BotDiagnostics />
            <StrategyExplorer />
            <IntegrationGuide onOpenModal={() => setIsMqlModalOpen(true)} />
            <SuccessCalibration />
            <BacktestFixer />
            <DailyRoutine />
            <VPSShutdownGuide />
            <VPSAdvisor />
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
          Professional Capital Management &bull; {currentVersion} STABLE BUILD
        </p>
      </footer>
    </div>
  );
};

export default App;
