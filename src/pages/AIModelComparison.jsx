import React, { useState, useEffect } from "react";
import { fetchAIResponses } from "../data/aiModels.js";
import { evaluateModels } from "../data/evaluateModels.js";
import { getTrainData, loadTrainData } from "../data/trainData.js"; 
import { Bar } from "react-chartjs-2"; // 📊 Import Chart.js
import "chart.js/auto"; 

const AIModelComparison = () => {
    const [question, setQuestion] = useState("");
    const [aiResults, setAiResults] = useState([]);
    const [comparisonReport, setComparisonReport] = useState([]);
    const [bestModel, setBestModel] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // ✅ Load dataset when page loads
    useEffect(() => {
        console.log("🔄 Loading dataset for AI Model Comparison...");
        loadTrainData();
        console.log("📊 Dataset in AIModelComparison:", getTrainData());
    }, []);

    const handleCompare = async () => {
        if (!question.trim()) {
            alert("⚠ Please enter a question.");
            return;
        }

        setLoading(true);
        setError("");
        setAiResults([]);
        setComparisonReport([]);

        try {
            console.log("🔄 Fetching AI responses...");
            const aiResponses = await fetchAIResponses(question);

            if (!Array.isArray(aiResponses) || aiResponses.length === 0) {
                setError("❌ AI responses are empty or invalid.");
                setLoading(false);
                return;
            }

            setAiResults(aiResponses);
            console.log("✅ AI Responses:", aiResponses);

            console.log("🔍 Evaluating responses...");
            const { report, bestModel } = evaluateModels(question, aiResponses);
            setComparisonReport(report);
            setBestModel(bestModel);

            console.log("📊 Report:", report);
            console.log("🏆 Best Model:", bestModel);
        } catch (error) {
            setError(`❌ Error comparing AI models: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    // 📊 Prepare data for Chart.js
    const chartData = {
        labels: comparisonReport.map((res) => res.model),
        datasets: [
            {
                label: "Accuracy (%)",
                data: comparisonReport.map((res) => res.accuracy),
                backgroundColor: comparisonReport.map((res) =>
                    res.model === bestModel?.model ? "green" : "blue"
                ), // ✅ Best model in green
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <h2>AI Model Comparison</h2>
            <input 
                type="text" 
                value={question} 
                onChange={(e) => setQuestion(e.target.value)} 
                placeholder="Enter a question..." 
            />
            <button onClick={handleCompare} disabled={loading}>
                {loading ? "🔄 Comparing..." : "Compare Models"}
            </button>

            {loading && <p>🔄 Comparing models...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <h3>Results</h3>
            {comparisonReport.length > 0 ? (
                <>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Response</th>
                                <th>Accuracy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonReport.map(({ model, response, accuracy }) => (
                                <tr key={model}>
                                    <td>{model}</td>
                                    <td>{response}</td>
                                    <td>{accuracy}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* 📊 Accuracy Bar Chart */}
                    <h3>📊 AI Model Accuracy</h3>
                    <Bar data={chartData} />
                </>
            ) : (
                !loading && <p>❌ No matching answer in dataset.</p>
            )}

            {bestModel && (
                <h3>🏆 Best Model: {bestModel.model} ({bestModel.accuracy}%)</h3>
            )}
        </div>
    );
};

export default AIModelComparison;
