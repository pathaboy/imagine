import { SubsObj } from "@/lib/data";
import { gemini } from "@/lib/gemini";

export async function addTextPostions(
  subs: SubsObj[]
): Promise<{ subs: SubsObj[] }> {
  const textPositionSystemPrompt = `
   You will be given an subtitles array:
  Your task is to add textPosition to each subtitle entry (based on text) to enhance visual experience.
  🔧 Instructions:
  You are an expert in placing subtitles that user's love to watch with unique and dynamic positions.
  Center text only for important content like sub section titles like law names, intro, ending.
  Output should contain the same number of subtitle entries. No merging or skipping.
  Respond with valid parsable JSON:
  {
    "subtitles": [
      {
         "start": 1000,
         "end: 3000,
         "textPosition": "bottom-center",
         "subs": "Hello welcome to the channel"
      },
      ...
    ]
  }
  ⚠️ Important Constraints:
  Available text positions: top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | center
  All entries must be present in the output, no loss of data.
  `;
  try {
    const res = await gemini.models.generateContent({
      model: "gemini-2.0-flash",
      contents: JSON.stringify(subs),
      config: {
        systemInstruction: textPositionSystemPrompt,
      },
    });
    const text = res.text?.replace("```json", "").replace("```", "");
    const resObj = JSON.parse(text || "");
    const subsArray: SubsObj[] = resObj.subtitles;

    return {
      subs: subsArray,
    };
  } catch (err) {
    console.error(err);
    throw new Error(`Failed to generate a story from user prompt`);
  }
}
