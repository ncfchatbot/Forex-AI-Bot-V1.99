
import { GoogleGenAI, Type } from "@google/genai";
import { MarketSignal, MarketSide, StrategyVerdict } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeMarketSentiment = async (symbol: string): Promise<MarketSignal> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Perform a detailed fundamental analysis for ${symbol} (Gold vs USD). 
      Consider US Economic data (CPI, Non-Farm Payrolls, Interest Rates), Geopolitical tensions, and Central Bank actions.
      Output a recommendation for a scalping strategy (TP 50 pips, SL 100 pips).`,
      config: {
        thinkingConfig: { thinkingBudget: 4000 },
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            side: {
              type: Type.STRING,
              description: "The recommended trading side: BUY, SELL, or NEUTRAL",
            },
            confidence: {
              type: Type.NUMBER,
              description: "Confidence level from 0 to 100",
            },
            reasoning: {
              type: Type.STRING,
              description: "Short summary of the analysis",
            },
            keyFactors: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Key economic factors driving this decision",
            },
          },
          required: ["side", "confidence", "reasoning", "keyFactors"],
        },
      },
    });

    const result = JSON.parse(response.text);
    return {
      ...result,
      timestamp: Date.now(),
      side: result.side as MarketSide
    };
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return {
      side: MarketSide.NEUTRAL,
      confidence: 0,
      reasoning: "Error analyzing market data. Please try again later.",
      timestamp: Date.now(),
      keyFactors: []
    };
  }
};

export const evaluateStrategy = async (capital: number, target: number, tp: number, sl: number): Promise<StrategyVerdict> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Critique this Forex strategy: Capital $${capital}, Daily Target $${target}, TP ${tp} pips, SL ${sl} pips on XAUUSD with 0.01 lot. 
      Analyze the mathematical probability of success and the risk of ruin. Be realistic and professional.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            successProbability: { type: Type.NUMBER },
            riskOfRuin: { type: Type.NUMBER },
            verdict: { type: Type.STRING },
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["successProbability", "riskOfRuin", "verdict", "suggestions"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    return {
      successProbability: 10,
      riskOfRuin: 90,
      verdict: "System error in analysis. High risk due to aggressive target.",
      suggestions: ["Reduce target to 5-10% daily", "Use wider SL for Gold volatility"]
    };
  }
};
