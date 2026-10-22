
const ai = require("./config/gemini");

async function checkModels() {
  try {
    const models = await ai.models.list();

    for await (const model of models) {
      if (model.supportedActions?.includes("generateContent")) {
        console.log(model.name);
      }
    }
  } catch (error) {
    console.log("Error:", error.status, error.message);
  }
}

checkModels();
