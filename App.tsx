
import React, { useState, useEffect } from 'react';
import { MarketSignal, AccountStats, StrategyVerdict, MarketSide } from './types';
import { getUnifiedAnalysis } from './services/geminiService';
import SignalCard from './components/SignalCard';
import StatsPanel from './components/StatsPanel';
import MQL5CodeModal from './components/MQL5CodeModal';
import StrategyConsultant from './components/StrategyConsultant';
import StrategyBattle from './components/StrategyBattle';
import StrategyExplorer from './components/StrategyExplorer';
import MarketRanker from './components/MarketRanker';
import IncomeForecast from './components/IncomeForecast';
import RiskBreakdown from './components/RiskBreakdown';
import IntegrationGuide from './components/IntegrationGuide';
import DailyRoutine from './components/DailyRoutine';
import VPSAdvisor from './components/VPSAdvisor';
import NavigatorGuide from './components/NavigatorGuide';
import VPSShutdownGuide from './components/VPSShutdownGuide';
import BotDiagnostics from './components/BotDiagnostics';

const App: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('XAU/USD');
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [signal, setSignal] = useState<MarketSignal | null>(null);
  const [verdict, setVerdict] = useState<StrategyVerdict | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMqlModalOpen, setIsMqlModalOpen] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const [isAiFallback, setIsAiFallback] = useState(false);

  const [stats] = useState<AccountStats>({
    balance: 100000.00,
    equity: 100000.00,
    dailyProfit: 0.00,
    winRate: 88, 
    totalTrades: 120
  });

  const handleFetchSignal = async (symbol: string = selectedSymbol) => {
    if (cooldown > 0 || isLoading) return;
    setIsLoading(true);
    try {
      const result = await getUnifiedAnalysis(symbol, stats.balance);
      setSignal(result.signal);
      setVerdict(result.verdict);
      setIsAiFallback(!!result.isFallback);
      setCooldown(45);
    } catch (e) {
      console.error("Fetch Error:", e);
      // Fail-safe default
      setSignal({
        side: MarketSide.NEUTRAL,
        confidence: 0,
        reasoning: "Awaiting Market Synchronization...",
        timestamp: Date.now(),
        keyFactors: ["Network Sync"]
      });
    } finally {
      setIsLoading(false);
    }
  };

  const changeSymbol = (symbol: string) => {
    setSelectedSymbol(symbol);
    setCooldown(0); 
    handleFetchSignal(symbol);
  };

  useEffect(() => { 
    // Fix: Using (window as any) to bypass TypeScript error for property 'hideAppLoader' which is injected globally.
    if ((window as any).hideAppLoader) {
      (window as any).hideAppLoader();
    }
    
    // ค่อยๆ โหลดข้อมูลตามหลังมา
    handleFetchSignal();
  }, []);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown(c => c - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  return (
    <div className={`min-h-screen pb-32 transition-colors duration-700 ${isDemoMode ? 'bg-[#050b18]' : 'bg-[#02040a]'}`}>
      <MQL5CodeModal isOpen={isMqlModalOpen} onClose={() => setIsMqlModalOpen(false)} />
      
      {isAiFallback && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 py-2 text-center text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] animate-pulse relative z-50 italic">
          ⚠️ AI Network Traffic High - Running on Local Predictive Cache
        </div>
      )}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-15%] right-[-10%] w-[70%] h-[70%] blur-[150px] rounded-full transition-colors duration-1000 ${isDemoMode ? 'bg-blue-600/10' : 'bg-emerald-600/10'}`}></div>
        <div className={`absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] blur-[150px] rounded-full transition-colors duration-1000 ${isDemoMode ? 'bg-indigo-600/10' : 'bg-blue-600/10'}`}></div>
      </div>

      <div className={`bg-slate-950/90 border-b backdrop-blur-2xl sticky top-0 z-40 transition-colors duration-500 ${isDemoMode ? 'border-blue-500/30' : 'border-emerald-400/20'}`}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="relative group">
              <div className={`w-16 h-16 bg-gradient-to-br rounded-[1.5rem] flex items-center justify-center shadow-2xl group-hover:scale-105 transition-all ${isDemoMode ? 'from-blue-400 via-indigo-700 to-slate-900 shadow-blue-500/40' : 'from-emerald-400 via-emerald-700 to-slate-900 shadow-emerald-500/40'}`}>
                <span className="text-slate-950 font-black text-3xl italic tracking-tighter">V5</span>
              </div>
              <div className={`absolute -bottom-1 -right-1 w-6 h-6 border-4 border-slate-950 rounded-full animate-pulse ${isDemoMode ? 'bg-blue-500' : 'bg-emerald-500'}`}></div>
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none flex items-center gap-4">
                GoldMaster <span className={isDemoMode ? 'text-blue-400' : 'text-emerald-400'}>{isDemoMode ? 'SANDBOX v5.5' : 'ULTRA ELITE'}</span>
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${isAiFallback ? 'bg-amber-500/20 border-amber-500/40 text-amber-500' : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'}`}>
                  {isAiFallback ? '⚡ LOCAL AI ACTIVE' : '🌐 CLOUD AI CONNECTED'}
                </div>
                <select value={selectedSymbol} onChange={(e) => changeSymbol(e.target.value)} className="bg-slate-900/50 text-slate-400 text-[10px] font-black tracking-widest uppercase border border-white/10 rounded-xl px-4 py-1.5 focus:outline-none hover:bg-slate-800 transition-all cursor-pointer">
                  <option value="XAU/USD">XAU/USD (GOLD)</option>
                  <option value="EUR/USD">EUR/USD (EURO)</option>
                  <option value="GBP/USD">GBP/USD (POUND)</option>
                  <option value="USD/JPY">USD/JPY (YEN)</option>
                  <option value="WTI/USD">WTI/USD (OIL)</option>
                </select>
              </div>
            </div>
          </div>
          <button onClick={() => setIsMqlModalOpen(true)} className={`px-8 lg:px-12 py-4 lg:py-5 text-slate-950 text-xs lg:text-sm font-black rounded-[2rem] transition-all flex items-center gap-4 active:scale-95 group relative overflow-hidden shadow-2xl ${isDemoMode ? 'bg-blue-500 hover:bg-blue-400 shadow-blue-500/40' : 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/40'}`}><span className="relative z-10">🚀 {isDemoMode ? 'DEPLOY DEMO' : 'DEPLOY v5.5'}</span><div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div></button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          <div className="xl:col-span-8 space-y-16">
            <BotDiagnostics />
            <IncomeForecast balance={stats.balance} />
            <StatsPanel stats={stats} history={[{name: 'Base', equity: 100000}, {name: 'W1', equity: 112000}, {name: 'W2', equity: 125000}, {name: 'W3', equity: 140000}, {name: 'W4', equity: 175000}]} />
            <VPSShutdownGuide />
            <IntegrationGuide />
            <NavigatorGuide />
            <VPSAdvisor />
            <DailyRoutine />
            <MarketRanker currentSymbol={selectedSymbol} onSelectSymbol={changeSymbol} />
            <RiskBreakdown />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="bg-slate-900/60 border border-indigo-500/20 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group backdrop-blur-3xl">
                  <div className="absolute top-0 right-0 p-12 text-indigo-500/5 text-9xl font-black group-hover:text-indigo-500/10 transition-all italic uppercase pointer-events-none">TRAIN</div>
                  <h2 className="text-white font-black text-2xl mb-10 flex items-center gap-5">
                    <span className="w-14 h-14 bg-indigo-500/10 rounded-[1.5rem] flex items-center justify-center text-2xl">🎓</span>
                    VPS SUCCESS TIPS
                  </h2>
                  <div className="space-y-10">
                    <div className="flex items-start gap-6">
                      <div className="mt-3 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
                      <div>
                        <div className="text-lg font-black text-white uppercase tracking-tighter italic">Check Weekly</div>
                        <div className="text-[13px] text-slate-500 mt-3 leading-relaxed italic">"แนะนำให้รีโมทเข้าไปดู VPS ทุกคืนวันเสาร์ เพื่อตรวจสอบว่า Windows มีการแจ้งเตือนอะไรหรือไม่ จะได้พร้อมลุยในเช้าวันจันทร์ครับ"</div>
                      </div>
                    </div>
                  </div>
               </div>
               <StrategyBattle />
            </div>
          </div>

          <div className="xl:col-span-4 space-y-12">
            <div className={`bg-slate-900/50 border rounded-[3.5rem] p-12 shadow-3xl backdrop-blur-3xl relative overflow-hidden transition-all ${isAiFallback ? 'border-amber-500/20' : isDemoMode ? 'border-blue-500/20' : 'border-white/10'}`}>
              <div className="flex justify-between items-center mb-12 relative z-10">
                <h3 className="text-white font-black text-xs flex items-center gap-4 uppercase tracking-[0.3em]"><span className={`w-3 h-3 rounded-full shadow-2xl animate-pulse ${isAiFallback ? 'bg-amber-500' : isDemoMode ? 'bg-blue-500' : 'bg-emerald-500'}`}></span> HYPER SCAN v5.5</h3>
                <div className={`text-[10px] font-black px-5 py-2.5 rounded-full border italic ${isAiFallback ? 'text-amber-500 border-amber-500/30' : isDemoMode ? 'text-blue-400 bg-blue-500/10 border-blue-500/30' : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'}`}>{cooldown > 0 ? `SYNCING ${cooldown}S` : 'READY'}</div>
              </div>
              <SignalCard signal={signal} isLoading={isLoading} onRefresh={handleFetchSignal} showRefreshBtn={false} />
            </div>
            <StrategyConsultant verdict={verdict} isLoading={isLoading} />
          </div>
        </div>
        <StrategyExplorer />
      </main>
      <footer className="mt-32 border-t border-white/5 py-20 text-center opacity-40">
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-slate-500 italic">GoldMaster Ultra Elite v5.5 // Professional SMC Trading System</p>
      </footer>
    </div>
  );
};

export default App;
