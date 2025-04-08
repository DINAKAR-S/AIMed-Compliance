// RAGAssistant.jsx
import React from "react";

const RAGAssistant = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>📄 RAG Document Assistant (PDF-based Medical Chat)</h2>
      <iframe
        src="http://192.168.112.8:8501" // 🔁 replace with actual deployed URL
        title="RAG Medical Assistant"
        width="100%"
        height="800px"
        style={{ border: "2px solid #ccc", marginTop: "1rem", borderRadius: "10px" }}
      />
    </div>
  );
};

export default RAGAssistant;
