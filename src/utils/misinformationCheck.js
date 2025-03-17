export const misinformationPatterns = [
    {
        pattern: /5G causes COVID/i,
        issue: "⚠ Fake COVID-19 information."
    },
    {
        pattern: /vaccines cause autism/i,
        issue: "⚠ Proven vaccine misinformation."
    },
    {
        pattern: /cure cancer/i,
        issue: "⚠ Misleading claim about cancer treatment."
    },
    {
        pattern: /natural immunity is enough/i,
        issue: "⚠ Ignoring vaccination importance."
    }
];

export const detectMisinformation = (aiResponse) => {
    let findings = [];

    misinformationPatterns.forEach(({ pattern, issue }) => {
        if (pattern.test(aiResponse)) {
            findings.push(issue);
        }
    });

    return findings.length ? findings : ["✅ No misinformation detected."];
};
