import React, { useState } from "react";
import { findAnswer } from "../data/findAnswer";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      setAnswer("⚠️ Please enter a question.");
      return;
    }

    setLoading(true); // Show "Searching..." message

    try {
      const response = await findAnswer(question);
      setAnswer(response);
    } catch (error) {
      console.error("❌ Error fetching answer:", error);
      setAnswer("⚠️ An error occurred while searching.");
    }

    setLoading(false); // Hide "Searching..." message
  };

  return (
    <div className="chatbot">
      <h1>💬 AI Chatbot</h1>
      <input
        type="text"
        placeholder="Ask me a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAskQuestion}>Ask</button>
      <p><strong>Answer: </strong> {loading ? "🔍 Searching..." : answer}</p>
    </div>
  );
};

export default Chatbot;
