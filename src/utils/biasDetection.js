export function detectBias(aiResponses) {
    const biasKeywords = ["gender", "race", "discrimination", "privilege", "inequality"];
    let biasFlags = [];

    aiResponses.forEach(({ model, response }) => {
        biasKeywords.forEach((keyword) => {
            if (response.toLowerCase().includes(keyword)) {
                biasFlags.push(`⚠ Potential bias detected in ${model}: ${keyword}`);
            }
        });
    });

    return biasFlags.length > 0 ? biasFlags.join("\n") : "✅ No bias detected.";
}
