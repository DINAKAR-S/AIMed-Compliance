export async function compareAIModels(question) {
    const models = [
        "qwen/qwq-32b:free",
        "deepseek/deepseek-r1-distill-llama-70b:free",
        "meta-llama/llama-3.3-70b-instruct:free",
        "cognitivecomputations/dolphin3.0-r1-mistral-24b:free",
        "google/gemini-2.5-pro-exp-03-25:free"
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
                throw new Error(`Model ${model} failed`);
            }
  
            const data = await response.json();
            return {
                model: model,
                response: data.choices[0]?.message?.content || "No response"
            };
        } catch (error) {
            console.error(`Error fetching from ${model}:`, error);
            return {
                model: model,
                response: "❌ Failed to fetch response"
            };
        }
    });
  
    return Promise.all(requests);
  }
  
