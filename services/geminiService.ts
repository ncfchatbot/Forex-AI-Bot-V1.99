
import { GoogleGenAI, Type } from "@google/genai";
import { MarketSignal, MarketSide, StrategyVerdict } from "../types";

// Helper to safely get the API key
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
      contents: `Perform a dual-layer analysis for Gold (XAU/USD).
      1. Market Sentiment: High-precision bias for a $${capital} account.
      2. Dynamic Scaling: Calculate a safe Lot size assuming 0.05 lot per $100 ratio.
      3. Strategy Check: Evaluate Strategy B (Trend Runner) with "Initial SL" + "Breakeven" + "Compounding".
      Return JSON with signal, verdict, and recommendedLot.`,
      config: {
        thinkingConfig: { thinkingBudget: 4000 },
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
      recommendedLot: data.recommendedLot || (capital / 100 * 0.05)
    };
  };

  try {
    return await callWithRetry(fetchAll);
  } catch (error: any) {
    console.warn("Analysis Error:", error);
    return {
      signal: {
        side: MarketSide.NEUTRAL, confidence: 0, reasoning: "System Initializing or Quota Limit. Please check back in a moment.",
        timestamp: Date.now(), keyFactors: ["Initializing"]
      },
      verdict: {
        successProbability: 50, riskOfRuin: 10, 
        verdict: "Ready for trade execution. Ensure SL is always active.",
        suggestions: ["Scale Lot 0.05 per $100", "Use v2.2 Auto-Compound"]
      },
      recommendedLot: Math.max(0.01, Number((capital / 100 * 0.05).toFixed(2)))
    };
  }
};
