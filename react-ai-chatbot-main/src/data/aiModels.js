import { getTrainData } from "./trainData";

export async function fetchAIResponses(question) {
  const models = [
      "qwen/qwq-32b:free",
      "deepseek/deepseek-r1:free",
      "meta-llama/llama-3.3-70b-instruct:free",
      "cognitivecomputations/dolphin3.0-r1-mistral-24b:free",
      "google/gemini-2.0-flash-exp:free"
  ];

  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  const baseURL = "https://openrouter.ai/api/v1/chat/completions";

  const requests = models.map(async (model) => {
      try {
          const response = await fetch(baseURL, {
              method: "POST",
              headers: {
                  "Authorization": `Bearer ${apiKey}`,
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  model: model,
                  messages: [{ role: "user", content: question }]
              })
          });

          if (!response.ok) {
              console.error(`❌ Model ${model} failed:`, response.status);
              return { model, response: "❌ Failed to fetch response" };
          }

          const data = await response.json();
          console.log(`🔹 AI Response from ${model}:`, data);

          return {
              model,
              response: data.choices?.[0]?.message?.content || "❌ No response"
          };
      } catch (error) {
          console.error(`❌ API Error: ${model}`, error);
          return { model, response: "❌ Failed to fetch response" };
      }
  });

  const results = await Promise.all(requests);

  if (!Array.isArray(results)) {
      console.error("❌ AI responses should be an array but got:", results);
      return [];
  }

  return results;
}
