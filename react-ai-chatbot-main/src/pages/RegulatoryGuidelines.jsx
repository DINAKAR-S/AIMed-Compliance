import React from "react";
import "../styles/RegulatoryGuidelines.css"; // Ensure this CSS file exists

const RegulatoryGuidelines = () => {
  return (
    <div className="guidelines-container">
      <h1>🛡️ AI & Healthcare Regulatory Compliance</h1>
      
      <section>
        <h2>📜 What is Compliance in AI Healthcare?</h2>
        <p>
          AI in healthcare must follow strict regulations to ensure privacy, security, fairness, and ethical AI deployment. 
          Compliance ensures patient data protection, fairness in medical decisions, and reduces legal risks for AI usage.
        </p>
      </section>

      <section>
        <h2>⚖️ Key Regulations in AI & Healthcare</h2>

        <h3>🔒 HIPAA (Health Insurance Portability and Accountability Act)</h3>
        <p>
          - Protects patient health information (PHI) from unauthorized access or sharing.<br/>
          - AI models must encrypt and anonymize patient data to stay compliant.<br/>
          - Violations can result in heavy penalties ($50,000 per violation).
        </p>

        <h3>🌍 GDPR (General Data Protection Regulation)</h3>
        <p>
          - Applies to any organization processing EU citizens' data.<br/>
          - Requires explicit patient consent before collecting or processing data.<br/>
          - Grants users the "Right to be Forgotten," meaning AI must delete user data on request.
        </p>

        <h3>🏥 FDA AI/ML-Based Medical Devices Regulation</h3>
        <p>
          - Ensures AI-driven medical decisions meet safety and reliability standards.<br/>
          - AI models must document how decisions are made (Explainable AI - XAI).<br/>
          - Requires continuous monitoring for bias or harmful decision-making.
        </p>
      </section>

      <section>
        <h2>✅ How Our AI Ensures Compliance</h2>
        <ul>
          <li>🔹 Compliance Checker: Flags AI-generated responses that violate HIPAA/GDPR.</li>
          <li>🔹 Bias Detector: Prevents AI from making racial, gender, or socio-economic discriminatory predictions.</li>
          <li>🔹 Security Module: Blocks AI from responding to adversarial attacks or unethical queries.</li>
          <li>🔹 Explainable AI (XAI): Logs decisions to ensure transparency in AI responses.</li>
          <li>🔹 Privacy-Preserving AI: Ensures data encryption and anonymization before processing.</li>
        </ul>
      </section>

      <section>
        <h2>🚨 Risks of Non-Compliance</h2>
        <p>
          - Heavy Fines & Legal Actions ($20M+ in GDPR fines, HIPAA lawsuits, etc.)<br/>
          - Patient Trust Issues (Unsecure AI models can leak sensitive medical data.)<br/>
          - Bias & Discrimination Lawsuits (AI bias can lead to unfair medical treatments.)<br/>
        </p>
      </section>

      <section>
        <h2>📝 Next Steps & Future Improvements</h2>
        <ul>
          <li>📌 Automated Compliance Reporting: Generate PDFs for audits.</li>
          <li>📌 Real-time Compliance Monitoring: Alert admins if AI responses violate regulations.</li>
          <li>📌 Improved AI Bias Detection: Enhance fairness and accountability.</li>
        </ul>
      </section>
    </div>
  );
};

export default RegulatoryGuidelines;
