import React from "react";
import "../styles/AIComparison.module.css"; // ✅ Ensure this exists

const AIComparisonTable = ({ results }) => {
  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th>Model</th>
          <th>Response</th>
          <th>Accuracy (%)</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td>{result.model}</td>
            <td>{result.response}</td>
            <td>{result.accuracy.toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AIComparisonTable;
