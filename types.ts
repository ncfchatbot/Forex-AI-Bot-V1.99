
export enum MarketSide {
  BUY = 'BUY',
  SELL = 'SELL',
  NEUTRAL = 'NEUTRAL'
}

export interface Trade {
  id: string;
  timestamp: number;
  symbol: string;
  side: MarketSide;
  entryPrice: number;
  exitPrice?: number;
  lot: number;
  pips: number;
  profit: number;
  status: 'OPEN' | 'CLOSED_TP' | 'CLOSED_SL';
}

export interface MarketSignal {
  side: MarketSide;
  confidence: number;
  reasoning: string;
  timestamp: number;
  keyFactors: string[];
}

export interface StrategyVerdict {
  successProbability: number;
  riskOfRuin: number;
  verdict: string;
  suggestions: string[];
}

export interface AccountStats {
  balance: number;
  equity: number;
  dailyProfit: number;
  winRate: number;
  totalTrades: number;
}

export interface AdvancedStrategy {
  name: string;
  concept: string;
  winRate: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pros: string[];
  cons: string[];
  efficiencyScore: number;
}

export interface IncomeForecast {
  monthlyReturn: number;
  maxDrawdown: number;
  expectedProfit: number;
  safetyScore: number;
}
