import { assemblyAIClient } from "@/lib/assemblyai"
import { cameraAngles, cameraFramingTechniques, imageStyles, motionTemplatesNames, shots } from "@/lib/data"
import { gemini } from "@/lib/gemini"
import axios from "axios"


const systemImagePrompt = `
 You will be given two inputs:
1. A full video script.
2. SRT subtitle content
Your task is to map each subtitle entry (based on its time range and text) to one unique image prompt that visually represents the scene during that time in the video.
🔧 Instructions:
Parse each subtitle block from the SRT.
For each subtitle, generate exactly one descriptive image prompt with shot type, framing technique and camera angle that reflects the subtitle’s content, inferred tone, and relevant surrounding context from the full script.
Output should contain the same number of image prompts as subtitle entries. No merging or skipping.
The 'start' and 'end' times in the subtitles are in milliseconds (ms), so keep them in milliseconds in the output too
Respond with valid parsable JSON:
{
  "imagePrompts": [
    {
      "id": 1,
      "start": 1000(in ms),
      "end": 3000(in ms),
      "imagePrompt": "A dimly lit alleyway with a man hiding behind a dumpster, tension in the air, extreme-wide-shot high-angle",
      "shotSize": "extreme-wide-shot",
      "cameraAngle": "high-angle",
      "cameraMotion": "pull-out"
    },
    ...
  ]
}
⚠️ Important Constraints:
Do not include any written text, quotes, phrases, or words in the image prompt.
Image prompt guide:
A detailed scene of [SETTING], during [TIME_OF_DAY]. [DESCRIPTION_OF_ENVIRONMENT], [SPECIFIC_DETAILS ABOUT THE SCENE]. 
In the foreground, [MAIN_CHARACTER] is [ACTION], wearing [CLOTHING_DESCRIPTION]. 
Around them are [OTHER_CHARACTERS_OR_OBJECTS]. 
The atmosphere is [MOOD], with lighting that is [LIGHTING_DESCRIPTION]. 
Shot using a [CAMERA_ANGLE] and [SHOT_TYPE], framed with [FRAMING_TECHNIQUE], with emphasis on {{VISUAL_EMPHASIS}}.

Avoid describing text, signs, titles, or captions in the prompt.
Available shot types: ${shots.join(" | ")}
Available framing techniques: ${cameraFramingTechniques.join(" | ")}
Available camera angles: ${cameraAngles.join(" | ")}
Available camera motions: ${motionTemplatesNames.map(item => item.name).join(" | ")}
Select camera motions like a professional editor, avoiding the repetition of the same camera motion back-to-back.
🎯 Ensure:
One-to-one mapping between SRT entries and image prompts.
No imagePrompt contains literal quotes or any textual content.
Descriptive, vivid, cinematic, shot size, camera angle image prompts based on the scene.
All entries must be present in the output, no loss of data.
No repetition of the same camera motion back-to-back.
`

interface ImagePrompt {
  id: number
  start: number
  end: number
  imagePrompt: string
  shotSize: string
  cameraAngle: string
  cameraMotion: string
}

export const generateImagePrompts = async (transcriptionId: string, imageStyle: string) => {
  try {
    const transcript = await assemblyAIClient.transcripts.get(transcriptionId)
    const script = transcript.text
    if (!script) {
      throw new Error("Found empty script")
    }
    const srtfile = await assemblyAIClient.transcripts.subtitles(transcriptionId)

    const res = await gemini.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `
        Script: ${script}
        SRT: ${srtfile}
      `,
      config: {
        systemInstruction: systemImagePrompt
      }
    })
    const text = res.text?.replace("```json", "").replace("```", "")
    const response = JSON.parse(text || "")

    const styleTags = imageStyles.find((item, _index) => {
            return item.name.toLowerCase() === imageStyle.toLowerCase()
          })
    const imagePrompts: ImagePrompt[] = response.imagePrompts
    const enhancedImagePrompts = imagePrompts.map((item, index) => {
      return (
        {
          ...item,
          imagePrompt: item.imagePrompt + styleTags?.tags,
          start: index === 0 ? item.start: imagePrompts[index-1].end+1
        }
      )
    })
    return ({
      imagePrompts: enhancedImagePrompts
    })
  } catch (err: any) {
    console.error(`Failed to generate image prompts: ${err.message || err}`)
    throw new Error(`Failed to generate image prompts: ${err.message || err}`)
  }
}