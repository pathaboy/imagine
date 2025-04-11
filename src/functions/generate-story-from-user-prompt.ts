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
          content: "Craft a compelling and immersive short story of based on the user prompt. Ensure it captivates the reader with vivid storytelling, engaging characters, and a satisfying narrative arc with varios storytelling techniques. Return response in json format: {title: string, content: string}."
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