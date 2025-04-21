import { gemini } from "@/lib/gemini"
import axios from "axios"

interface Story {
  title: string
  content: string
}

export async function generateStoryFromUserPrompt(prompt: string): Promise<Story> {
  try {
    // const res = await gemini.models.generateContent({
    //   model: "gemini-2.0-flash",
    //   contents: `Craft a compelling and immersive narrative script of a story of based on the user prompt. Ensure it captivates the reader with vivid storytelling, engaging characters. Return response in json format: {title: string, content: string}. User prompt: ${prompt}`,
    // })
    // console.log(res.text)

    const response = await axios.post("https://text.pollinations.ai", {
      messages: [
        {
          role: "system",
          content: "Generate a powerful and emotionally immersive short story inspired by the user's prompt. The story should feature engaging characters, vivid world-building, and a strong narrative arc with a clear beginning, conflict, climax, and resolution/conclusion/moral. Write it in a cinematic and visual storytelling style, suitable for narration in a YouTube video. Keep the tone impactful and the pacing tight to maintain audience attention. Return response in json format: {title: string, content: string}."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      seed: 10000000,
      jsonMode: true,
      model: "openai"
    })
    console.log(response.data.content)
    return (
      {
        title: response.data.title,
        content: response.data.content
      }
    )
  } catch (err) {
    console.error(err)
    throw new Error(`Failed to generate a story from user prompt` )
  }
}