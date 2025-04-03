import { OpenAI } from "openai";

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.VITE_DEEPSEEK_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export class DeepSeekAssistant {
  async chat(content) {
    try {
      const completion = await client.chat.completions.create({
        model: "deepseek/deepseek-r1:free",
        messages: [{ role: "user", content }],
      });
      return completion.choices[0].message.content;
    } catch (error) {
      console.error("DeepSeek AI Error:", error);
      return "DeepSeek AI failed.";
    }
  }
}
