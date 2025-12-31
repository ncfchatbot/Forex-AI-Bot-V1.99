
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
  const [isEcoMode, setIsEcoMode] = useState(true); // Default to Eco-Mode to save money
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

  const handleFetchSignal = async (symbol: string = selectedSymbol, force: boolean = false) => {
    // ถ้าอยู่ในโหมด Eco และไม่ได้กด Force (ปุ่ม Manual) ให้ใช้ Local Data แทน
    if (isEcoMode && !force) {
      setIsAiFallback(true);
      setSignal({
        side: MarketSide.NEUTRAL,
        confidence: 0,
        reasoning: "API ECO-MODE ACTIVE: Press 'SYNC' to get live AI analysis (est. ฿0.05/call)",
        timestamp: Date.now(),
        keyFactors: ["Eco-Mode Active"]
      });
      return;
    }

    if (cooldown > 0 || isLoading) return;
    setIsLoading(true);
    try {
      const result = await getUnifiedAnalysis(symbol, stats.balance);
      setSignal(result.signal);
      setVerdict(result.verdict);
      setIsAiFallback(!!result.isFallback);
      setCooldown(600); // 10 Minutes Cooldown to prevent high costs
    } catch (e) {
      console.error("Fetch Error:", e);
      setIsAiFallback(true);
    } finally {
      setIsLoading(false);
    }
  };

  const changeSymbol = (symbol: string) => {
    setSelectedSymbol(symbol);
    // เมื่อสลับคู่เงิน จะไม่โหลด AI ทันทีเพื่อประหยัดเงิน ให้ผู้ใช้กด Sync เอง
    setSignal(null);
    setVerdict(null);
    setCooldown(0);
  };

  useEffect(() => { 
    if ((window as any).hideAppLoader) {
      (window as any).hideAppLoader();
    }
    // ไม่โหลด AI อัตโนมัติในตอนเริ่ม เพื่อประหยัดเงิน
  }, []);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown(c => c - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  return (
    <div className={`min-h-screen pb-32 transition-colors duration-700 bg-[#02040a]`}>
      <MQL5CodeModal isOpen={isMqlModalOpen} onClose={() => setIsMqlModalOpen(false)} />
      
      {/* Cost Saver Banner */}
      <div className="bg-blue-600/10 border-b border-blue-500/20 py-2 text-center text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] relative z-50 italic">
        🛡️ API BILLING PROTECTED: Manual Sync Mode Active (฿0.00 Automatic Cost)
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-15%] right-[-10%] w-[70%] h-[70%] blur-[150px] rounded-full transition-colors duration-1000 bg-emerald-600/10`}></div>
        <div className={`absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] blur-[150px] rounded-full transition-colors duration-1000 bg-blue-600/10`}></div>
      </div>

      <div className={`bg-slate-950/90 border-b backdrop-blur-2xl sticky top-0 z-40 border-emerald-400/20`}>
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="relative group">
              <div className={`w-16 h-16 bg-gradient-to-br rounded-[1.5rem] flex items-center justify-center shadow-2xl group-hover:scale-105 transition-all from-emerald-400 via-emerald-700 to-slate-900 shadow-emerald-500/40`}>
                <span className="text-slate-950 font-black text-3xl italic tracking-tighter">V5</span>
              </div>
              <div className={`absolute -bottom-1 -right-1 w-6 h-6 border-4 border-slate-950 rounded-full animate-pulse bg-emerald-500`}></div>
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none flex items-center gap-4">
                GoldMaster <span className={'text-emerald-400'}>ULTRA ELITE</span>
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${isEcoMode ? 'bg-blue-500/20 border-blue-500/40 text-blue-400' : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'}`}>
                  {isEcoMode ? '🌿 API ECO-MODE' : '🌐 FULL CLOUD SYNC'}
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
          
          <div className="flex items-center gap-4">
             <div className="text-right mr-4 hidden md:block">
                <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Manual AI Call</div>
                <div className="text-[11px] font-black text-blue-400 italic">~ ฿0.05 / Sync</div>
             </div>
             <button 
                onClick={() => handleFetchSignal(selectedSymbol, true)} 
                disabled={isLoading || cooldown > 0}
                className={`px-8 lg:px-12 py-4 lg:py-5 text-slate-950 text-xs lg:text-sm font-black rounded-[2rem] transition-all flex items-center gap-4 active:scale-95 group relative overflow-hidden shadow-2xl ${cooldown > 0 ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/40'}`}
             >
                <span className="relative z-10">
                  {isLoading ? 'ANALYZING...' : cooldown > 0 ? `SYNC IN ${Math.floor(cooldown / 60)}M ${cooldown % 60}S` : '⚡ MANUAL AI SYNC'}
                </span>
                {cooldown === 0 && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
             </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        {/* Billing Info Alert */}
        <div className="mb-12 bg-indigo-500/5 border border-indigo-500/20 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-inner">
           <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-3xl">💡</div>
           <div className="flex-1">
              <h4 className="text-indigo-400 font-black text-sm uppercase mb-2 tracking-widest italic">คำแนะนำการประหยัดค่า API (Budget Saver)</h4>
              <p className="text-slate-400 text-[12px] italic leading-relaxed">
                "หน้าเว็บนี้คือ <b>Dashboard วิเคราะห์เสริม</b> เท่านั้น บอทใน MT5 ของคุณจะยังคงเทรดอัตโนมัติ 24 ชม. แม้คุณจะไม่กด Sync ในนี้ <br/>
                แนะนำให้กด Sync เฉพาะตอนที่คุณต้องการ 'ปรึกษา AI' ก่อนตัดสินใจสำคัญครับ ยอด 16 บาทที่คุณเห็นจะลดลงจนแทบไม่เหลือครับ"
              </p>
           </div>
           <div className="flex flex-col gap-2">
              <button 
                onClick={() => setIsEcoMode(!isEcoMode)}
                className={`px-6 py-2 rounded-full text-[10px] font-black border transition-all ${isEcoMode ? 'bg-blue-500 text-slate-950 border-blue-400' : 'bg-transparent text-slate-500 border-white/10'}`}
              >
                {isEcoMode ? '✓ ECO-MODE ON' : 'ECO-MODE OFF'}
              </button>
           </div>
        </div>

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
          </div>

          <div className="xl:col-span-4 space-y-12">
            <div className={`bg-slate-900/50 border rounded-[3.5rem] p-12 shadow-3xl backdrop-blur-3xl relative overflow-hidden transition-all ${isAiFallback ? 'border-amber-500/20' : 'border-white/10'}`}>
              <div className="flex justify-between items-center mb-12 relative z-10">
                <h3 className="text-white font-black text-xs flex items-center gap-4 uppercase tracking-[0.3em]"><span className={`w-3 h-3 rounded-full shadow-2xl animate-pulse ${isAiFallback ? 'bg-amber-500' : 'bg-emerald-500'}`}></span> HYPER SCAN v5.5</h3>
                <div className={`text-[10px] font-black px-5 py-2.5 rounded-full border italic ${isAiFallback ? 'text-amber-500 border-amber-500/30' : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'}`}>{cooldown > 0 ? `SYNC IN ${Math.floor(cooldown / 60)}M` : 'READY'}</div>
              </div>
              <SignalCard signal={signal} isLoading={isLoading} onRefresh={() => handleFetchSignal(selectedSymbol, true)} showRefreshBtn={true} />
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
