
import React, { useState, useEffect } from 'react';
import { MarketSignal, AccountStats, StrategyVerdict } from './types.ts';
import { getUnifiedAnalysis } from './services/geminiService.ts';
import SignalCard from './components/SignalCard.tsx';
import StatsPanel from './components/StatsPanel.tsx';
import MQL5CodeModal from './components/MQL5CodeModal.tsx';
import StrategyConsultant from './components/StrategyConsultant.tsx';
import StrategyBattle from './components/StrategyBattle.tsx';
import StrategyExplorer from './components/StrategyExplorer.tsx';
import MarketRanker from './components/MarketRanker.tsx';
import IncomeForecast from './components/IncomeForecast.tsx';
import RiskBreakdown from './components/RiskBreakdown.tsx';
import IntegrationGuide from './components/IntegrationGuide.tsx';
import DailyRoutine from './components/DailyRoutine.tsx';

const App: React.FC = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('XAU/USD');
  const [signal, setSignal] = useState<MarketSignal | null>(null);
  const [verdict, setVerdict] = useState<StrategyVerdict | null>(null);
  const [recommendedLot, setRecommendedLot] = useState<number>(0.00);
  const [isLoading, setIsLoading] = useState(false);
  const [isMqlModalOpen, setIsMqlModalOpen] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const [stats, setStats] = useState<AccountStats>({
    balance: 1000.00,
    equity: 1000.00,
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
      setRecommendedLot(result.recommendedLot);
      setCooldown(30);
    } catch (e) {
      console.error("Fetch Signal Error:", e);
    } finally {
      setIsLoading(false);
    }
  };

  const changeSymbol = (symbol: string) => {
    setSelectedSymbol(symbol);
    setCooldown(0); 
    handleFetchSignal(symbol);
  };

  useEffect(() => { handleFetchSignal(); }, []);
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown(c => c - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  return (
    <div className="min-h-screen pb-32 bg-[#02040a] text-slate-200">
      <MQL5CodeModal isOpen={isMqlModalOpen} onClose={() => setIsMqlModalOpen(false)} />
      
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] bg-emerald-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="bg-slate-950/90 border-b border-emerald-400/20 backdrop-blur-2xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="relative group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 via-emerald-700 to-slate-900 rounded-[1.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.4)] group-hover:scale-105 transition-all">
                <span className="text-slate-950 font-black text-3xl italic tracking-tighter">V5</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 border-4 border-slate-950 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none flex items-center gap-4">
                GoldMaster <span className="text-emerald-400">ULTRA ELITE</span>
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></span>
                   <span className="text-[11px] font-black text-emerald-500/80 uppercase tracking-[0.2em]">Aggressive 5% Model</span>
                </div>
                <select 
                  value={selectedSymbol}
                  onChange={(e) => changeSymbol(e.target.value)}
                  className="bg-slate-900/50 text-emerald-400 text-[10px] font-black tracking-widest uppercase border border-white/10 rounded-xl px-4 py-1.5 focus:outline-none hover:bg-slate-800 transition-all cursor-pointer"
                >
                  <option value="XAU/USD">XAU/USD (GOLD)</option>
                  <option value="EUR/USD">EUR/USD (EURO)</option>
                  <option value="GBP/USD">GBP/USD (POUND)</option>
                  <option value="USD/JPY">USD/JPY (YEN)</option>
                  <option value="WTI/USD">WTI/USD (OIL)</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsMqlModalOpen(true)}
              className="px-12 py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-black rounded-[2rem] transition-all shadow-[0_20px_45px_rgba(16,185,129,0.4)] flex items-center gap-4 active:scale-95 group relative overflow-hidden"
            >
              <span className="relative z-10">🚀 DEPLOY v5.5 FINAL ALGORITHM</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-500/5 via-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 p-5 rounded-[2rem] mb-12 flex flex-wrap items-center justify-center gap-10 text-[11px] font-black text-emerald-400 uppercase tracking-[0.3em] italic shadow-2xl">
           <div className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span> High-Frequency Analysis Active</div>
           <div className="opacity-20">|</div>
           <div>Aggressive Growth: Enabled</div>
           <div className="opacity-20">|</div>
           <div>Trailing Shield: Operational</div>
           <div className="opacity-20">|</div>
           <div>Hyper-Compounding: Active</div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          <div className="xl:col-span-8 space-y-16">
            <IncomeForecast balance={stats.balance} />
            <IntegrationGuide />
            <DailyRoutine />
            <MarketRanker currentSymbol={selectedSymbol} onSelectSymbol={changeSymbol} />
            <RiskBreakdown />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="bg-slate-900/60 border border-emerald-500/20 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group backdrop-blur-3xl">
                  <div className="absolute top-0 right-0 p-12 text-emerald-500/5 text-9xl font-black group-hover:text-emerald-500/10 transition-all italic uppercase pointer-events-none">ELITE</div>
                  <h2 className="text-white font-black text-2xl mb-10 flex items-center gap-5">
                    <span className="w-14 h-14 bg-emerald-500/10 rounded-[1.5rem] flex items-center justify-center text-2xl">🛡️</span>
                    WEALTH CORE v5.5
                  </h2>
                  <div className="space-y-10">
                    <div className="flex items-start gap-6">
                      <div className="mt-3 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]"></div>
                      <div>
                        <div className="text-lg font-black text-white uppercase tracking-tighter italic">Precision Aggression</div>
                        <div className="text-[13px] text-slate-500 mt-3 leading-relaxed italic">
                          "ในเวอร์ชัน 5.5 ระบบถูกปรับจูนให้มองข้ามความผันผวนระยะสั้นและโฟกัสที่จุดเก็บกำไรคุณภาพสูงเท่านั้น"
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
               <StrategyBattle />
            </div>

            <StatsPanel stats={stats} history={[{name: 'Base', equity: 1000}, {name: 'W1', equity: 1120}, {name: 'W2', equity: 1250}, {name: 'W3', equity: 1400}, {name: 'W4', equity: 1750}]} />
          </div>

          <div className="xl:col-span-4 space-y-12">
            <div className="bg-slate-900/50 border border-white/10 rounded-[3.5rem] p-12 shadow-3xl backdrop-blur-3xl relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full"></div>
              <div className="flex justify-between items-center mb-12 relative z-10">
                <h3 className="text-white font-black text-xs flex items-center gap-4 uppercase tracking-[0.3em]">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,1)] animate-pulse"></span> 
                  HYPER SCAN v5.5
                </h3>
                <div className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-5 py-2.5 rounded-full border border-emerald-500/30 italic">
                  {cooldown > 0 ? `SYNCING ${cooldown}S` : 'READY'}
                </div>
              </div>
              <SignalCard signal={signal} isLoading={isLoading} onRefresh={handleFetchSignal} showRefreshBtn={false} />
            </div>
            
            <StrategyConsultant verdict={verdict} isLoading={isLoading} />
            
            <div className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 p-12 rounded-[3.5rem] flex flex-col gap-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5 text-6xl">📊</div>
               <div className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4">
                 <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                 Aggressive Specs
               </div>
               <div className="grid grid-cols-2 gap-10">
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-black mb-2 tracking-widest">Growth Mode</div>
                    <div className="text-white font-mono font-black text-lg">Hyper-Compounding</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase font-black mb-2 tracking-widest">Risk Model</div>
                    <div className="text-emerald-400 font-mono font-black text-lg italic">5.0% FIXED</div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <StrategyExplorer />
      </main>
    </div>
  );
};

export default App;
