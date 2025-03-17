import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import ComplianceChecker from "./pages/ComplianceChecker";
import AIModelComparison from "./pages/AIModelComparison";
import HospitalFinder from "./pages/HospitalFinder"; // ✅ Ensure this file exists

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/compliance-checker" element={<ComplianceChecker />} />
                    <Route path="/ai-comparison" element={<AIModelComparison />} />
                    <Route path="/hospital-finder" element={<HospitalFinder />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
