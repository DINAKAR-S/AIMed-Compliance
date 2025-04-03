export function checkCompliance(aiResponses) {
    const regulations = {
        HIPAA: ["patient data", "medical records", "PHI", "protected health information"],
        GDPR: ["user consent", "data protection", "personal data"],
        FDA: ["drug approvals", "unapproved treatment", "medical device safety"],
        WHO: ["pandemic response", "public health guidelines"]
    };

    let report = [];
    let bestModel = { model: "", complianceScore: 0, accuracy: 0 };

    aiResponses.forEach(({ model, response, accuracy }) => {
        let complianceScore = 100;
        let violations = [];

        Object.entries(regulations).forEach(([law, keywords]) => {
            keywords.forEach(keyword => {
                if (response.toLowerCase().includes(keyword)) {
                    violations.push(`⚠ ${law} Violation: ${keyword}`);
                    complianceScore -= 10;
                }
            });
        });

        report.push({ model, response, complianceScore, accuracy });

        if (complianceScore > bestModel.complianceScore) {
            bestModel = { model, complianceScore, accuracy };
        }
    });

    return { report, bestModel };
}
