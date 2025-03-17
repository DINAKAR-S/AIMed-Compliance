import React, { useState, useEffect } from "react";
import { findAnswer } from "../data/findAnswer.js";  // ✅ Correct import
import { loadTrainData } from "../data/trainData.js";

const Chatbot = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("🔄 Loading dataset...");
        loadTrainData()
            .then(() => console.log("✅ Dataset Loaded."))
            .catch((err) => console.error("❌ Dataset Load Failed:", err));
    }, []);

    const handleAskQuestion = async () => {
        if (!question.trim()) {
            alert("⚠ Please enter a question.");
            return;
        }

        setLoading(true);
        setAnswer("");

        try {
            console.log("🔄 Searching for answer...");
            const response = await findAnswer(question);
            setAnswer(response);
            console.log("✅ Answer:", response);
        } catch (error) {
            setAnswer("❌ Error fetching answer.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Chatbot</h2>
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask a question..." />
            <button onClick={handleAskQuestion}>Ask</button>

            {loading && <p>🔄 Searching...</p>}
            {answer && <p><strong>💬 Answer:</strong> {answer}</p>}
        </div>
    );
};

export default Chatbot;
