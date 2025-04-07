import axios from "axios"

interface Story {
  title: string
  content: string
}

export async function generateStoryFromUserPrompt(prompt: string): Promise<Story> {
  try {
    const response = await axios.post("https://text.pollinations.ai", {
      messages: [
        {
          role: "system",
          content: "Craft a compelling and immersive short story of about 180 secs, based on the user prompt. Ensure it captivates the reader with vivid storytelling, engaging characters, and a satisfying narrative arc. Return response in json format: {title: string, content: string}."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "openai",
      seed: 10000000,
      jsonMode: true
    })
    console.log(response.data.content)
    return (
      {
        title: response.data.title,
        content: response.data.content
      }
    )
  } catch (err) {
    throw new Error(`Failed to generate a story from user prompt: ${err}` )
  }
}