export function detectSecurityThreats(aiResponses) {
    const attackIndicators = ["injection", "manipulation", "override", "bypass"];
    let threatsFound = [];

    aiResponses.forEach(({ model, response }) => {
        attackIndicators.forEach((indicator) => {
            if (response.toLowerCase().includes(indicator)) {
                threatsFound.push(`⚠ Security risk detected in ${model}: ${indicator}`);
            }
        });
    });

    return threatsFound.length > 0 ? threatsFound.join("\n") : "✅ No security threats detected.";
}
