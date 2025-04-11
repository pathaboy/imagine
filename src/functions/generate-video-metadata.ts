import axios from "axios"
import { StoryMetadata } from "./generate-story-visualization"
import { bgms } from "@/lib/data"

export async function generateVideoMetadata(story: string): Promise<StoryMetadata> {
  try {
    const videoEssentialsPrompt = `You are an expert story visualizer, take the following story and provide these details in json format: 
    {
	    topic: <string>,
	    storyTheme: <string>,
      bgm: <string>,
	    setting: <string> (eg, farm),
	    targetAudience: <string> (eg, teen),
	    duration: <number> (in seconds),
	    narrationTone: <string> (bright, cheerful, full of energy),
	    characters: [{id: <number>, name: <string> eg (alice), age: <number>, gender: <string> eg (male), outfitUpperBody: <string> (eg, A very simple shirt), upperClothingColor: <string> (eg, red checks), outfitLowerBody: <string> (eg, very simple pants), lowerClothingColor: <string> (eg, white), hairstyle: <string> (eg, bangs), hairColor: <string> (eg, black)}]
    }
      Note: Available options for bgm are ${bgms.map((item) => item.name).join("|")}
      `

    const response = await axios.post("https://text.pollinations.ai", {
      model: "openai",
      seed: 10000000,
      jsonMode: true,
      messages: [
        {
          role: "system",
          content: videoEssentialsPrompt
        },
        {
          role: "user",
          content: story
        }
      ]
    })
    console.log(response.data)
    // const cleanedData = response.data.replace("Alimentado por las API de texto gratuitas de Pollinations.AI. [Apoya nuestra misión](https://pollinations.ai/redirect/kofi) para mantener la inteligencia artificial accesible para todos.", "")
    return response.data
  } catch (err) {
    throw new Error(`Failed to generate video metadata. ${err}`)
  }
}