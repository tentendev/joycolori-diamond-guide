import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const BASE_INSTRUCTION = `You are the "Joycolori Lab-Grown Diamond Concierge", a world-class gemologist and expert in sustainable luxury.
Your goal is to assist customers in understanding Lab-Grown Diamonds (also known as Lab-Created or Cultivated Diamonds).
CRITICAL: Emphasize that Lab-Grown diamonds are chemically, physically, and optically IDENTICAL to mined diamonds. They are not fakes or cubic zirconia. They are real diamonds.
Highlights: Sustainable, ethical (no mining), and better value (30-40% more carats for the same budget).
Your tone is sophisticated, elegant, reassuring, and eco-conscious.
If asked about certification, STRONGLY recommend IGI (International Gemological Institute) as the gold standard for lab-grown diamond grading, though GIA is also acceptable.
Focus on "Joycolori" as the brand.
`;

export const sendMessageToGemini = async (
  message: string, 
  history: { role: string; parts: { text: string }[] }[] = [],
  language: Language = 'en'
): Promise<string> => {
  try {
    const langInstruction = language === 'zh-TW' 
      ? ' IMPORTANT: You MUST reply in Traditional Chinese (繁體中文). Use Taiwanese terminology (e.g., 車工 for Cut, 淨度 for Clarity, 培育鑽石 for Lab-Grown).' 
      : ' Reply in English.';

    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: BASE_INSTRUCTION + langInstruction,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || (language === 'zh-TW' ? "很抱歉，我現在思緒有點混亂。請您再說一次好嗎？" : "I apologize, I'm having a momentary lapse in clarity. Could you please rephrase that?");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'zh-TW' 
      ? "我目前無法查閱我的參考資料。請稍後再試。"
      : "I am currently unable to access my reference materials. Please try again in a moment.";
  }
};

export const generateTipImage = async (prompt: string): Promise<string | null> => {
  try {
    // Enforcing the specific "Joycolori Doodle" style based on user references
    // Style: Hand-drawn, black outlines, white background, touches of Tiffany Blue/Cyan.
    const styleInstruction = "Style: Hand-drawn doodle, thick black marker lines, minimalist, white background, flat design, cute. Color palette: Black outlines, white fill, with accents of Tiffany Blue (#81D8D0) or light cyan.";
    const styledPrompt = `${styleInstruction} Subject: ${prompt}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: styledPrompt },
        ],
      },
      config: {
        // No system instruction for image models usually, keeping it simple
      }
    });

    if (response.candidates && response.candidates.length > 0) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};