import { OpenAI } from "openai";

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true,
});

// ✅ Only the 5 best models
const topModels = [
  "meta-llama/llama-3-8b-instruct:free",
  "deepseek/deepseek-r1:free",
  "deepseek/deepseek-chat:free",
  "cognitivecomputations/dolphin3.0-r1-mistral-24b:free",
  "google/gemini-2.0-pro-exp-02-05:free",
];

export async function getFreeModels() {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/models", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
      },
    });

    const data = await response.json();
    console.log("OpenRouter API Response:", data);

    if (!Array.isArray(data.data)) {
      throw new Error("Unexpected API response format.");
    }

    // ✅ Only select models from the topModels list
    return data.data.filter((model) => topModels.includes(model.id));
  } catch (error) {
    console.error("Error fetching OpenRouter models:", error);
    return [];
  }
}

export async function getChatResponse(model, content) {
  try {
    const completion = await client.chat.completions.create({
      model: model,
      messages: [{ role: "user", content }],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error(`Error with model ${model}:`, error);
    return `Error with ${model}`;
  }
}
