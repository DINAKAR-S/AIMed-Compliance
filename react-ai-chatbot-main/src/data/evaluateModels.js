import { getTrainData } from "./trainData.js";

// ✅ Function to calculate similarity using Jaccard Index
function calculateSimilarity(str1, str2) {
    const set1 = new Set(str1.toLowerCase().split(/\s+/));
    const set2 = new Set(str2.toLowerCase().split(/\s+/));

    const intersection = new Set([...set1].filter(word => set2.has(word))).size;
    const union = set1.size + set2.size - intersection;

    return union === 0 ? 0 : (intersection / union) * 100; // Returns percentage similarity
}

// ✅ Function to evaluate AI model responses
export function evaluateModels(question, aiResponses) {
    const dataset = getTrainData();

    console.log("📊 Dataset in AI Comparison:", dataset);

    if (!Array.isArray(dataset) || dataset.length === 0) {
        console.error("❌ ERROR: Dataset is empty or not loaded!");
        return { report: [], bestModel: { model: "❌ No model", accuracy: 0 } };
    }

    // ✅ Find the correct answer from dataset
    const matchedEntry = dataset.find(entry => entry.Question.toLowerCase().includes(question.toLowerCase()));

    if (!matchedEntry) {
        console.warn("❌ No matching question in dataset.");
        return { report: [], bestModel: { model: "❌ No model", accuracy: 0 } };
    }

    const correctAnswer = matchedEntry.Answer.toLowerCase();
    console.log("✅ Found Correct Answer:", correctAnswer);

    // ✅ Compare AI responses using similarity
    const report = aiResponses.map(({ model, response }) => {
        const aiResponse = response.toLowerCase();
        const accuracy = calculateSimilarity(aiResponse, correctAnswer);
        return { model, response, accuracy };
    });

    // ✅ Find the best-performing model
    const bestModel = report.reduce((prev, curr) => (prev.accuracy > curr.accuracy ? prev : curr), { model: "❌ No best model", accuracy: 0 });

    return { report, bestModel };
}
