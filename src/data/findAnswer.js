import { getTrainData } from "./trainData";

export function findAnswer(userQuestion) {
  const trainData = getTrainData(); // Ensure data is loaded

  if (!trainData || trainData.length === 0) {
    console.warn("⚠ No training data found!");
    return "❌ No training data available!";
  }

  const lowerQuestion = userQuestion.toLowerCase().trim();

  const matchedEntry = trainData.find(entry =>
    entry.Question?.toLowerCase().includes(lowerQuestion)
  );

  if (matchedEntry) {
    console.log("✅ Found Answer:", matchedEntry.Answer);
    return matchedEntry.Answer;
  } else {
    console.warn("❌ No matching answer found.");
    return "❌ No matching answer found in dataset.";
  }
}
