import { assemblyAIClient } from "@/lib/assemblyai"
import { imageStyles } from "@/lib/data"
import axios from "axios"

const getImagePrompt = (script: string, srtfile: string) => {
  return (
    `
    You are given two inputs:
1. A full video script.
2. SRT subtitle content
Your task is to map each subtitle entry (based on its time range and text) to one unique image prompt that visually represents the scene during that time in the video.
🔧 Instructions:
Parse each subtitle block from the SRT.
For each subtitle, generate exactly one descriptive image prompt that reflects the subtitle’s content, inferred tone, and relevant surrounding context from the full script.
Output should contain the same number of image prompts as subtitle entries. No merging or skipping.
Convert start and end times to milliseconds.
Output format:
{
  "imagePrompts": [
    {
      "id": 1,
      "start": 1000(in ms),
      "end": 3000(in ms),
      "imagePrompt": "A dimly lit alleyway with a man hiding behind a dumpster, tension in the air"
    },
    ...
  ]
}
⚠️ Important Constraints:
Do not include any written text, quotes, phrases, or words in the image prompt.
The visual should be purely scene-based: use settings, people, objects, mood, lighting, emotions, etc.
Avoid describing text, signs, titles, or captions in the prompt.
🎯 Ensure:
One-to-one mapping between SRT entries and image prompts.
No imagePrompt contains literal quotes or any textual content.
Descriptive, vivid, cinematic image prompts based on the scene.
All entries must be present in the output, no loss of data.
Now process the following:
Script:
${script}
SRT:
${srtfile}
    `
  )
}

interface ImagePrompt {
  id: number
  start: number
  end: number
  imagePrompt: string
}

export const generateImagePrompts = async (transcriptionId: string, imageStyle: string) => {
  try {
    const transcript = await assemblyAIClient.transcripts.get(transcriptionId)
    const script = transcript.text
    if (!script) {
      throw new Error("Found empty script")
    }
    const srtfile = await assemblyAIClient.transcripts.subtitles(transcriptionId)
    const imagesPrompt = getImagePrompt(script, srtfile)
    const response = await axios.post("https://text.pollinations.ai", {
      messages: [
        {
          role: "system",
          content: imagesPrompt
        }
      ],
      seed: 10000000,
      jsonMode: true,
      model: "openai-large"
    })
    const styleTags = imageStyles.find((item, _index) => {
            return item.name.toLowerCase() === imageStyle.toLowerCase()
          })
    const imagePrompts: ImagePrompt[] = response.data.imagePrompts
    const enhancedImagePrompts = imagePrompts.map((item) => {
      return (
        {
          ...item,
          imagePrompt: item.imagePrompt + styleTags?.tags
        }
      )
    })
    console.log(response.data)
    return ({
      imagePrompts: enhancedImagePrompts
    })
  } catch (err: any) {
    console.error(`Failed to generate image prompts: ${err.message || err}`)
    throw new Error(`Failed to generate image prompts: ${err.message || err}`)
  }
}