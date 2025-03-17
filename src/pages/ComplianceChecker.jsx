import React, { useState } from "react";
import { fetchAIResponses } from "../data/aiModels";
import { checkCompliance } from "../utils/complianceChecker";
import { detectSecurityThreats } from "../utils/securityCheck";
import { detectBias } from "../utils/biasDetection";
import { generatePDFReport } from "../utils/reportGenerator";
import { Bar } from "react-chartjs-2";

const ComplianceChecker = () => {
    const [question, setQuestion] = useState("");
    const [aiResults, setAiResults] = useState([]);
    const [complianceReport, setComplianceReport] = useState([]);
    const [bestModel, setBestModel] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleCheckCompliance = async () => {
        if (!question.trim()) {
            alert("⚠ Please enter a question.");
            return;
        }

        setLoading(true);
        setError("");
        setAiResults([]);
        setComplianceReport([]);

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

            console.log("🔍 Checking compliance...");
            const { report, bestModel } = checkCompliance(aiResponses);
            setComplianceReport(report);
            setBestModel(bestModel);

            console.log("📊 Compliance Report:", report);
            console.log("🏆 Best Model:", bestModel);
        } catch (error) {
            setError(`❌ Error checking compliance: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleSecurityCheck = () => {
        console.log("🔍 Running security check...");
        const securityResults = detectSecurityThreats(aiResults);
        alert(securityResults);
    };

    const handleBiasDetection = () => {
        console.log("🔍 Detecting AI Bias...");
        const biasResults = detectBias(aiResults);
        alert(biasResults);
    };

    const handleDownloadReport = () => {
        generatePDFReport(complianceReport);
    };

    const complianceData = {
        labels: complianceReport.map((item) => item.model),
        datasets: [
            {
                label: "Compliance Score (%)",
                data: complianceReport.map((item) => item.complianceScore),
                backgroundColor: complianceReport.map((item) =>
                    item.complianceScore >= 80 ? "green" : item.complianceScore >= 50 ? "orange" : "red"
                ),
            },
        ],
    };

    return (
        <div>
            <h2>Compliance Checker</h2>
            <input 
                type="text" 
                value={question} 
                onChange={(e) => setQuestion(e.target.value)} 
                placeholder="Enter a medical question..."
            />
            <button onClick={handleCheckCompliance}>Check Compliance</button>

            {loading && <p>🔄 Checking compliance...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <h3>Results</h3>
            {complianceReport.length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Response</th>
                            <th>Compliance Score</th>
                            <th>Safety</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complianceReport.map(({ model, response, complianceScore }) => (
                            <tr key={model}>
                                <td>{model}</td>
                                <td>{response}</td>
                                <td>{complianceScore}%</td>
                                <td>
                                    {complianceScore >= 80 ? "✅ SAFE" :
                                    complianceScore >= 50 ? "⚠ PARTIALLY SAFE" :
                                    "❌ NOT SAFE"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                !loading && <p>❌ No compliance report generated.</p>
            )}

            <h3>📊 Compliance Scores</h3>
            <Bar data={complianceData} />

            <h3>🏆 Best Model: {bestModel.model} ({bestModel.complianceScore}% Compliance)</h3>

            <button onClick={handleSecurityCheck}>🔒 Security Check</button>
            <button onClick={handleBiasDetection}>⚖ Detect AI Bias</button>
            
        </div>
    );
};

export default ComplianceChecker;
