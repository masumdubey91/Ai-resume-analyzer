// const ai = require("../config/gemini")

// const analysisResume = async (resumeText) => {
//     try {


//         const response = await ai.models.generateContent({
//            model: "gemini-3.6-flash",
//             contents: `
//             You are an expert ATS Resume Analyzer and Senior Technical Recruiter.

// Analyze the following resume carefully.

// Resume:
// ${resumeText}

// Instructions:
// 1. Read the complete resume carefully.
// 2. Do not assume any information that is not present in the resume.
// 3. Base every conclusion only on the information available in the resume.
// 4. Do not invent skills, experience, certifications, or achievements.
// 5. Give a realistic ATS score out of 100 and explain the reasons.
// 6. Write a short professional summary in almost 200 words.
// 7. Identify technical skills.
// 8. Identify soft skills:
// - Return exactly 5 soft skills.
// 9. List the candidate's strengths:
// - Return exactly 5 strengths.
// 10. List the candidate's weaknesses:
// - Return exactly 5 weaknesses.
// 11. Suggest missing skills that can improve the resume:
// - Return exactly 5 missing skills.
// 12. Improvement Suggestions:
// - Return exactly 5 suggestions.
// 13. Generate 5 interview questions based on the resume.
// 14. Return ONLY valid JSON.
// 15. Do not use markdown.
// 16. Do not wrap the response in markdown code blocks.
// 17. Do not write any explanation before or after the JSON.

// Return the response in this exact format:

// {
//   "atsScore": {
//     "score": 0,
//     "reason": []
//   },
//   "summary": "",
//   "technicalSkills": [],
//   "softSkills": [],
//   "strengths": [],
//   "weaknesses": [],
//   "missingSkills": [],
//   "improvementSuggestions": [],
//   "interviewQuestions": []
// }
// `
            
//         })
//         const analysis= JSON.parse(response.text)
//         return analysis;
//         console.log(response);
// console.log(response.text);
// console.log(typeof response.text);
//     }

//     catch (error) {
//         throw error
//     }
// }
// module.exports = analysisResume;
const ai = require("../config/gemini");

const analysisResume = async (resumeText) => {
    const maxRetries = 2;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            const response = await ai.interactions.create({
                model: "gemini-3.8-flash",
                input: `
You are an expert ATS Resume Analyzer and Senior Technical Recruiter.

Analyze the following resume carefully.

Resume:
${resumeText}

Instructions:
1. Read the complete resume carefully.
2. Do not assume information that is not present in the resume.
3. Base every conclusion only on the resume.
4. Do not invent skills, experience, certifications, or achievements.
5. Give a realistic ATS score out of 100 and explain the reasons.
6. Write a professional summary of approximately 200 words.
7. Identify technical skills.
8. Return exactly 5 soft skills.
9. Return exactly 5 strengths.
10. Return exactly 5 weaknesses.
11. Return exactly 5 missing skills that could improve the resume.
12. Return exactly 5 improvement suggestions.
13. Generate exactly 5 interview questions based on the resume.
14. Return only valid JSON, without Markdown or code fences.

Return this exact JSON structure:
{
  "atsScore": {
    "score": 0,
    "reason": []
  },
  "summary": "",
  "technicalSkills": [],
  "softSkills": [],
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "improvementSuggestions": [],
  "interviewQuestions": []
}
                `
            });

            const output = response.output_text;

            if (!output) {
                throw new Error("Gemini returned an empty response.");
            }

            const cleanedOutput = output
                .replace(/^```(?:json)?\s*/i, "")
                .replace(/\s*```$/i, "")
                .trim();

            const analysis = JSON.parse(cleanedOutput);

            return analysis;

        } catch (error) {
            const message = error.message || "";
            const status = error.status || error.statusCode;
            const isTemporaryError =
                status === 503 ||
                status === 502 ||
                status === 504 ||
                /high demand|overloaded|temporarily unavailable/i.test(message);

            // Retry only temporary service errors, not daily quota errors.
            if (isTemporaryError && attempt < maxRetries) {
                const delay = 3000 * (attempt + 1);
                console.warn(
                    `Gemini temporarily unavailable. Retry ${attempt + 1}/${maxRetries} in ${delay / 1000}s.`
                );

                await new Promise((resolve) => setTimeout(resolve, delay));
                continue;
            }

            console.error("Resume analysis failed:", message);
            throw error;
        }
    }
};

module.exports = analysisResume;
