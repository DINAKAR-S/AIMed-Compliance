export const healthcareRegulations = [
    // 🏥 **HIPAA Compliance (Health Insurance Portability and Accountability Act)**
    {
        rule: "HIPAA Privacy Rule Violation",
        keywords: [
            "patient data", "PHI", "protected health information", "medical records",
            "disclose patient info", "confidentiality breach", "unauthorized access"
        ]
    },
    {
        rule: "HIPAA Security Rule Violation",
        keywords: [
            "data encryption", "secure storage", "network security", "access control",
            "data leak", "privacy breach", "cyber attack", "unauthorized access"
        ]
    },
    {
        rule: "HIPAA Data Breach Notification Failure",
        keywords: [
            "report breach", "data exposure", "data loss", "breach notification",
            "unreported incident", "failure to notify"
        ]
    },

    // 🌍 **GDPR (General Data Protection Regulation - EU)**
    {
        rule: "GDPR Right to be Forgotten Violation",
        keywords: [
            "delete patient data", "forget my information", "data removal request",
            "remove my medical history", "erase health records"
        ]
    },
    {
        rule: "GDPR Consent Violation",
        keywords: [
            "data without consent", "user agreement", "no permission given",
            "without patient approval", "consent not obtained"
        ]
    },
    {
        rule: "GDPR Data Processing Violation",
        keywords: [
            "sell health data", "third-party sharing", "data processing agreement",
            "data transfer outside EU", "data retention policy"
        ]
    },

    // 🏛 **FDA Regulations (US Food & Drug Administration)**
    {
        rule: "Unauthorized Medical Device Use",
        keywords: [
            "unapproved device", "medical device safety", "FDA clearance",
            "not FDA-approved", "device failure", "recall", "experimental equipment"
        ]
    },
    {
        rule: "Misleading Drug Claims",
        keywords: [
            "cure cancer", "miracle drug", "no side effects", "100% effective",
            "unapproved drug", "non-FDA approved", "misleading pharma"
        ]
    },
    {
        rule: "Failure to Report Adverse Drug Reactions",
        keywords: [
            "no side effects reported", "adverse event hiding", "did not report",
            "undocumented reaction", "covering up side effects"
        ]
    },

    // 🏥 **WHO Guidelines (World Health Organization)**
    {
        rule: "Inaccurate COVID-19 Information",
        keywords: [
            "COVID-19 fake cure", "pandemic hoax", "COVID misinformation",
            "5G causes COVID", "COVID vaccine microchip", "unproven COVID treatment"
        ]
    },
    {
        rule: "Incorrect Disease Transmission Info",
        keywords: [
            "disease spreads via air", "coughing transmits AIDS",
            "mosquitoes spread HIV", "incorrect transmission"
        ]
    },
    {
        rule: "False Public Health Recommendations",
        keywords: [
            "no masks needed", "ignore handwashing", "herd immunity works alone",
            "quarantine is useless", "vaccines cause autism", "natural immunity is enough"
        ]
    },

    // 🏢 **Healthcare Financial Regulations**
    {
        rule: "Medicare Fraud",
        keywords: [
            "fake billing", "insurance scam", "fraudulent claim", "overcharging patients",
            "billing for unperformed services", "Medicaid fraud", "financial abuse"
        ]
    },
    {
        rule: "False Medical Insurance Claims",
        keywords: [
            "insurance scam", "fake claim", "false reimbursement",
            "non-existent procedure", "fraudulent documentation"
        ]
    },

    // 🏥 **Medical Ethics Violations**
    {
        rule: "Violation of Medical Ethics",
        keywords: [
            "force treatment", "deny treatment based on race",
            "discriminate in healthcare", "unethical practice"
        ]
    },
    {
        rule: "Clinical Trial Misconduct",
        keywords: [
            "fake clinical trial", "unapproved experiment", "no patient consent",
            "manipulated results", "placebo without disclosure"
        ]
    },

    // 🔐 **Cybersecurity & Data Protection in Healthcare**
    {
        rule: "Failure to Encrypt Patient Data",
        keywords: [
            "unencrypted data", "plaintext medical records", "no encryption",
            "data stolen", "weak security", "leaked hospital records"
        ]
    },
    {
        rule: "Unauthorized AI Decisions in Treatment",
        keywords: [
            "AI determines diagnosis", "robot makes final decision", "automated treatment plan",
            "AI-only decision", "doctor not involved in AI recommendations"
        ]
    },
    {
        rule: "AI Bias in Medical Decision-Making",
        keywords: [
            "racial bias in AI", "sexist AI decisions", "discriminatory diagnosis",
            "machine learning bias", "biased AI model"
        ]
    },

    // 🏥 **International Health Regulations (IHR)**
    {
        rule: "Failure to Report Epidemic Outbreaks",
        keywords: [
            "hide outbreak", "not reporting cases", "pandemic cover-up",
            "delayed virus detection", "misleading outbreak data"
        ]
    },
    {
        rule: "Non-Compliance with International Vaccination Guidelines",
        keywords: [
            "anti-vaccine propaganda", "vaccination ban", "no need for vaccines",
            "vaccine misinformation", "dangerous vaccine claims"
        ]
    },

    // 📚 **Medical Research Regulations**
    {
        rule: "Failure to Obtain Informed Consent in Research",
        keywords: [
            "no consent research", "human trials without consent",
            "experiments on patients", "non-disclosed research"
        ]
    },
    {
        rule: "Plagiarism in Medical Research",
        keywords: [
            "copied research paper", "fake study", "plagiarized medical journal",
            "misleading publication", "manipulated study results"
        ]
    },

    // 💉 **Pharmaceutical Regulations**
    {
        rule: "Illegal Drug Distribution",
        keywords: [
            "sell prescription drugs", "buy medicine without prescription",
            "black market medicine", "unlicensed pharmacy", "illegal drug trade"
        ]
    },
    {
        rule: "Fake Medication Warning",
        keywords: [
            "counterfeit drugs", "fake medicine", "low-quality pharmaceuticals",
            "expired drugs being sold", "pharmacy fraud"
        ]
    },

    // 🏥 **Emergency Response & Patient Rights**
    {
        rule: "Refusal of Emergency Treatment",
        keywords: [
            "denied emergency care", "ER turned away patient", "refused ambulance service",
            "emergency neglect", "hospital refused admission"
        ]
    },
    {
        rule: "Failure to Maintain Medical Facilities Standards",
        keywords: [
            "dirty hospital", "unsafe surgery room", "contaminated medical equipment",
            "poor hygiene in hospital", "expired medical supplies"
        ]
    },
];

