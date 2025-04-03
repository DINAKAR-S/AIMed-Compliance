import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";  // ✅ Ensure this file exists
import Home from "./pages/Home";  
import AIModelComparison from "./pages/AIModelComparison";
import Chatbot from "./pages/Chatbot";
import ComplianceChecker from "./pages/ComplianceChecker";  // ✅ Add this
import HospitalFinder from "./pages/HospitalFinder";  // ✅ Add this
import RegulatoryGuidelines from "./pages/RegulatoryGuidelines";
import RAGAssistant from "./pages/RAGAssistant"; // ✅ Add this line

import "./styles/global.css";  // ✅ Ensure this file exists

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/RAGAssistant" element={<RAGAssistant />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="ai-comparison" element={<AIModelComparison />} />
          <Route path="compliance-checker" element={<ComplianceChecker />} />
          <Route path="hospital-finder" element={<HospitalFinder />} />
          <Route path="regulatory-guidelines" element={<RegulatoryGuidelines />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
