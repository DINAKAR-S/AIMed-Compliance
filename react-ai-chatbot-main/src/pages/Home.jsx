import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Ensure this CSS file is styled well
import amritaLogo from "../assets/amrita png.png"; // Ensure this path matches the logo

const Home = () => {
  return (
    <div className="home-container">
      {/* College Logo */}
      <img src={amritaLogo} alt="Amrita Vishwa Vidyapeetham" className="college-logo" />

      {/* Project Title */}
      <h1 className="project-title">🚀 MedAI Compliance</h1>
      <p className="tagline">Ensuring AI Safety, Security & Compliance in Healthcare 🏥</p>

      {/* Team Information */}
      <div className="team-section">
        <h2>👨‍💻 Team Members</h2>
        <p>🎓 <b>Dinakar S</b> - CH.EN.U4CYS21013</p>
        <p>🎓 <b>Jawakar Sri</b> - CH.EN.U4CYS21025</p>
      </div>

      {/* Faculty Information */}
      <div className="faculty-section">
        <h2>🎓 Submitted To</h2>
        <p>📖 <b>Mentor:</b> Dr. K. Venkatesan (Assistant Professor)</p>
        <p>🏛️ <b>HOD:</b> Dr. Udhayakumar</p>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-section">
        <h2>📌 Explore Our AI Modules</h2>

        <div className="nav-buttons">
          <Link to="/chatbot" className="nav-btn">💬 Chatbot</Link>
          <p className="nav-description">Ask medical questions & get AI-powered responses!</p>

          <Link to="/rag" className="nav-btn">💬 MEDAI RAG Assistant</Link>
          <p className="nav-description">Upload Healthcare related PDFs and get responses</p>

          <Link to="/ai-comparison" className="nav-btn">📊 AI Model Comparison</Link>
          <p className="nav-description">Compare different AI models based on accuracy & reliability.</p>

          <Link to="/compliance-checker" className="nav-btn">🛡️ Compliance Checker</Link>
          <p className="nav-description">Ensure AI responses follow HIPAA & GDPR regulations.</p>

          <Link to="/hospital-finder" className="nav-btn">🏥 Hospital Finder</Link>
          <p className="nav-description">Find nearby hospitals based on AI suggestions.</p>

          <Link to="/regulatory-guidelines" className="nav-btn">📜 AI & Healthcare Guidelines</Link>
          <p className="nav-description">Learn about AI regulations & compliance in healthcare.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
