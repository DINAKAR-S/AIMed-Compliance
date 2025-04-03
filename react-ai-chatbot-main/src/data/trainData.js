// import Papa from "papaparse";

// let trainData = [];

// export async function loadTrainData() {
//     const response = await fetch("/train.csv");  // Ensure correct path
//     const csvText = await response.text();
    
//     Papa.parse(csvText, {
//         header: true,
//         skipEmptyLines: true,
//         complete: (results) => {
//             if (results.data.length === 0) {
//                 console.error("⚠ Dataset is empty or not loaded correctly.");
//             } else {
//                 trainData = results.data;
//                 console.log("✅ Dataset loaded:", trainData);
//             }
//         },
//         error: (error) => {
//             console.error("❌ Error loading dataset:", error);
//         }
//     });
// }

// export function getTrainData() {
//     return trainData;
// }

import Papa from "papaparse";

let trainData = [];

export async function loadTrainData() {
    const response = await fetch("/train.csv");  // Ensure correct path
    const csvText = await response.text();
    
    Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
            if (results.data.length === 0) {
                console.error("⚠ Dataset is empty or not loaded correctly.");
            } else {
                trainData = results.data;
                console.log("✅ Dataset loaded:", trainData);
            }
        },
        error: (error) => {
            console.error("❌ Error loading dataset:", error);
        }
    });
}

export function getTrainData() {
    return trainData;
}
