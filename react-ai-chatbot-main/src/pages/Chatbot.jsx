import React, { useState, useEffect } from "react";
import { findAnswer } from "../data/findAnswer.js";
import { loadTrainData } from "../data/trainData.js";
import "../styles/Chatbot.module.css";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTrainData().then(() => {
      setLoading(false);
    });
  }, []);

  const handleAskQuestion = () => {
    if (!question.trim()) {
      setResponse("⚠️ Please enter a question.");
      return;
    }

    if (loading) {
      setResponse("⚠️ Dataset is still loading. Please wait...");
      return;
    }

    const answer = findAnswer(question);
    setResponse(answer);
  };

  return (
    <div className="chatbot-container">
      <h2>🧠 AI Chatbot</h2>
      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAskQuestion}>Ask</button>
      <p className="chatbot-response">💬 {response}</p>
    </div>
  );
};

export default Chatbot;
