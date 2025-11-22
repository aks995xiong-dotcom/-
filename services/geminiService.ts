import { GoogleGenAI, Chat } from "@google/genai";

// Add type declaration to satisfy TypeScript build
declare const process: {
  env: {
    API_KEY: string;
  }
};

const SYSTEM_INSTRUCTION = `
你是一位专业的恋爱导师和情感专家，名叫“LoveGuide AI”。
你的性格：温暖、富有同理心、客观、幽默且实用。
你的任务：
1. 解答用户关于恋爱、约会、聊天、两性相处的问题。
2. 在用户感到沮丧时提供情绪价值和安慰。
3. 提供具体的、可执行的建议，而不仅仅是空泛的理论。
4. 如果用户表现出极端的心理困扰或危险倾向，请温柔地建议寻求专业心理医生的帮助。

回答风格：
- 像朋友一样交谈，不要过于机械。
- 适当使用Emoji增加亲和力。
- 保持简洁，重点突出。
`;

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    // @ts-ignore - Env var injected by Vite
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      throw new Error("API Key not found");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7, 
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "抱歉，我现在有点走神，请再说一遍？";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};