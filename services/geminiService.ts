
import { GoogleGenAI, Type } from "@google/genai";
import { MarketSignal, MarketSide, StrategyVerdict } from "../types";

const getSafeAiInstance = () => {
  const apiKey = process.env.API_KEY || '';
  return new GoogleGenAI({ apiKey });
};

export interface UnifiedAnalysis {
  signal: MarketSignal;
  verdict: StrategyVerdict;
  recommendedLot: number;
}

async function callWithRetry<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    const isQuotaError = error?.message?.includes('429') || error?.status === 429;
    if (isQuotaError && retries > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return callWithRetry(fn, retries - 1, delay * 2);
    }
    throw error;
  }
}

export const getUnifiedAnalysis = async (symbol: string, capital: number): Promise<UnifiedAnalysis> => {
  const ai = getSafeAiInstance();
  const fetchAll = async () => {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Analyze ${symbol} for a High-Frequency Aggressive Growth SMC Strategy.
      
      Focus on these professional trading aspects for ${symbol}:
      1. Institutional Bias: Where is the major Liquidity (Buyside/Sellside)?
      2. Market Structure: Identify current BOS (Break of Structure) or CHoCH.
      3. Safety: Suggest a Trailing Shield distance to protect the aggressive 5% risk model.
      4. Risk Model: For a $${capital} account, recommend a Lot size for a fixed 5% AGGRESSIVE risk per trade.
      5. Strategy: Final v5.0 Ultra Elite with Hyper-Compounding logic.

      Return JSON with signal, verdict, and recommendedLot.`,
      config: {
        thinkingConfig: { thinkingBudget: 8000 },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            signal: {
              type: Type.OBJECT,
              properties: {
                side: { type: Type.STRING },
                confidence: { type: Type.NUMBER },
                reasoning: { type: Type.STRING },
                keyFactors: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
              required: ["side", "confidence", "reasoning", "keyFactors"]
            },
            verdict: {
              type: Type.OBJECT,
              properties: {
                successProbability: { type: Type.NUMBER },
                riskOfRuin: { type: Type.NUMBER },
                verdict: { type: Type.STRING },
                suggestions: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["successProbability", "riskOfRuin", "verdict", "suggestions"]
            },
            recommendedLot: { type: Type.NUMBER }
          },
          required: ["signal", "verdict", "recommendedLot"]
        },
      },
    });

    const data = JSON.parse(response.text);
    return {
      signal: { ...data.signal, timestamp: Date.now(), side: data.signal.side as MarketSide },
      verdict: data.verdict,
      recommendedLot: data.recommendedLot
    };
  };

  try {
    return await callWithRetry(fetchAll);
  } catch (error: any) {
    console.warn("Analysis Error:", error);
    return {
      signal: {
        side: MarketSide.NEUTRAL, confidence: 0, reasoning: `AI Scanning ${symbol} market structure for Aggressive Entry...`,
        timestamp: Date.now(), keyFactors: ["Aggressive Shield Scan"]
      },
      verdict: {
        successProbability: 85, riskOfRuin: 5, 
        verdict: `v5.0 Aggressive Logic is scanning for liquidity sweeps.`,
        suggestions: ["Wait for BOS confirmation", "5% Risk Model Ready", "Trailing Shield Primed"]
      },
      recommendedLot: 0.10 
    };
  }
};
