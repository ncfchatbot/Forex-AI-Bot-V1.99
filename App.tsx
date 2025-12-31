
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

const App: React.FC = () => {
  const [selectedSymbol] = useState('XAU/USD');
  const [signal, setSignal] = useState<MarketSignal | null>(null);
  const [verdict, setVerdict] = useState<StrategyVerdict | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMqlModalOpen, setIsMqlModalOpen] = useState(false);
  
  // Versions for Sync Monitoring
  const currentVersion = 'v5.7';
  const [mt5Version] = useState('v5.5'); // Simulating detection from user screenshot

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
      
      {/* 1. PERMANENT STICKY BUTTON - NEVER DISAPPEARS */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button 
          onClick={() => setIsMqlModalOpen(true)}
          className="group flex items-center gap-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 p-1 px-8 rounded-full shadow-[0_20px_50px_rgba(234,179,8,0.4)] transition-all active:scale-95 border-4 border-[#02040a]"
        >
          <div className="py-4 font-black text-lg italic tracking-tighter">📋 GET v5.7 CODE</div>
          <div className="w-10 h-10 bg-slate-950 text-yellow-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
             <span className="font-black">V7</span>
          </div>
        </button>
      </div>

      {/* 2. TOP PERFORMANCE NAVIGATION */}
      <header className="sticky top-0 z-[50] bg-[#02040a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center shadow-xl">
              <span className="text-slate-950 font-black text-xl italic">GM</span>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-white flex items-center gap-3">
                GOLDMASTER <span className="text-yellow-500 italic">ULTRA ELITE</span>
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System Live: {currentVersion}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end mr-4">
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]">MT5 Version Status</span>
              <span className={`text-[10px] font-black italic ${mt5Version === currentVersion ? 'text-emerald-500' : 'text-red-500 animate-pulse'}`}>
                {mt5Version === currentVersion ? 'FULLY SYNCED' : `OUTDATED (${mt5Version})`}
              </span>
            </div>
            <button 
              onClick={() => handleFetchSignal(true)}
              disabled={isLoading}
              className={`px-6 py-3 rounded-xl font-black text-xs uppercase transition-all flex items-center gap-3 ${
                isLoading ? 'bg-slate-800 text-slate-500' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20'
              }`}
            >
              {isLoading ? 'SYNCING AI...' : '⚡ FORCE SYNC AI'}
            </button>
          </div>
        </div>
      </header>

      {/* 3. MAIN DASHBOARD CONTENT */}
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        
        {/* TOP ROW: REAL-TIME ALERTS */}
        {mt5Version !== currentVersion && (
          <div className="mb-8 bg-red-600/10 border-2 border-red-600/20 p-6 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="text-4xl">⚠️</div>
              <div>
                <h4 className="text-white font-black uppercase italic">เวอร์ชันไม่ตรงกัน (Version Mismatch)</h4>
                <p className="text-slate-400 text-sm italic">บอทใน MT5 ของคุณยังเป็น v5.5 แต่ระบบ AI ในนี้เป็น v5.7 แนะนำให้อัปเดตโค้ดเพื่อกำไรที่เสถียรขึ้นครับ</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMqlModalOpen(true)}
              className="bg-red-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase hover:bg-red-500 transition-all shadow-xl shadow-red-600/20"
            >
              แก้ไขทันที
            </button>
          </div>
        )}

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: THE BRAIN (60%) */}
          <div className="xl:col-span-8 space-y-8">
            <StatsPanel stats={stats} history={[{name: 'Start', equity: 50000}, {name: 'v5.5', equity: 66633}, {name: 'Target', equity: 150000}]} />
            <BotDiagnostics />
            <IncomeForecast balance={stats.balance} />
            <NavigatorGuide />
          </div>

          {/* RIGHT COLUMN: LIVE ANALYSIS (40%) */}
          <div className="xl:col-span-4 space-y-8">
            <div className="sticky top-24">
              <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 backdrop-blur-3xl shadow-3xl mb-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-white font-black text-xs uppercase tracking-[0.3em]">AI Intelligence Unit</h3>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                </div>
                <SignalCard signal={signal} isLoading={isLoading} onRefresh={() => handleFetchSignal(true)} showRefreshBtn={false} />
              </div>
              <StrategyConsultant verdict={verdict} isLoading={isLoading} sideBias={signal?.side} />
              <div className="mt-8">
                <StrategyBattle />
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER INFO */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
          GoldMaster Ultra Elite Dashboard &bull; Institutional SMC Algorithm &bull; {currentVersion}
        </p>
      </footer>
    </div>
  );
};

export default App;
