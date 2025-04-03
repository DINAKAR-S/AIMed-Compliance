import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FaHome, FaComments, FaBalanceScale, FaHospital, FaBookOpen } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>🩺 MedAI Compliance</h1>
      </div>

      <nav className="nav-links">
        <Link to="/RAGAssistant" className="nav-item"><FaHome />RAG Assistant</Link>
        <Link to="/" className="nav-item"><FaHome /> Home</Link>
        <Link to="/chatbot" className="nav-item"><FaComments /> Chatbot</Link>
        <Link to="/ai-comparison" className="nav-item"><MdOutlineMedicalServices /> AI Comparison</Link>
        <Link to="/compliance-checker" className="nav-item"><FaBalanceScale /> Compliance Checker</Link>
        <Link to="/hospital-finder" className="nav-item"><FaHospital /> Hospital Finder</Link>
        <Link to="/regulatory-guidelines" className="nav-item"><FaBookOpen /> AI Guidelines</Link>
      </nav>
    </header>
  );
};

export default Header;
