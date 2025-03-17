import React, { useState } from "react";
import { findAnswer } from "../../data/findAnswer"; // ✅ Fix the import path

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleAskQuestion = async () => {
    const answer = await findAnswer(userInput);
    setResponse(answer);
  };

  return (
    <div className="chatbot-container">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask me a question..."
      />
      <button onClick={handleAskQuestion}>Ask</button>
      <p className="chatbot-response"><strong>Answer:</strong> {response}</p>
    </div>
  );
};

export default Chatbot;
s