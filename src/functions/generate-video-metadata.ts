import axios from "axios"
import { StoryMetadata } from "./generate-story-visualization"

export async function generateVideoMetadata(story: string): Promise<StoryMetadata> {
  try {
    const videoEssentialsPrompt = `You are an expert story visualizer, take the following story and provide these details in json format: 
    {
	    topic: <string>,
	    storyTheme: <string>,
	    setting: <string> (eg, farm),
	    targetAudience: <string> (eg, teen),
	    duration: <number> (in seconds),
	    narrationTone: <string> (bright, cheerful, full of energy),
	    characters: [{id: <number>, name: <string> eg (alice), age: <number>, gender: <string> eg (male), outfitUpperBody: <string> (eg, A very simple shirt), upperClothingColor: <string> (eg, red checks), outfitLowerBody: <string> (eg, very simple pants), lowerClothingColor: <string> (eg, white), hairstyle: <string> (eg, bangs), hairColor: <string> (eg, black)}]
    }
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
    return response.data
  } catch (err) {
    throw new Error(`Failed to generate video metadata. ${err}`)
  }
}