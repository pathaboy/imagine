import { imageStyles } from "@/lib/data"
import axios from "axios"

interface Scene {
    id: number
    start: number
    end: number
    narration: string
    imagePrompt: string
}

interface Character {
  id: number
  name: string
  age: number
  gender: string
  outfitUpperBody: string
  upperClothingColor: string
  outfitLowerBody: string
  lowerClothingColor: string
  hairstyle: string
  hairColor: string
}

export interface StoryMetadata {
  bgm: string
  topic: string
  storyTheme: string
  setting: string
  targetAudience: string
  duration: number // in seconds
  narrationTone: string
  characters: Character[]
}

interface StoryVisualization {
  storyMetadata: StoryMetadata
  story: {
    title: string
    content: string
  }
  imageStyle: string
}

interface StoryVisualizationFormat {
  title: string
  duration: number
  narrationTone: string
  script: Scene[]
}

export async function generateStoryVisualization({storyMetadata, story, imageStyle}: StoryVisualization) {
  try {
    const storyVisualizationPrompt = `
      Story Visualization framework:
      Section 1: 
      ${storyMetadata}
      Section 2: Story Structuring Guidelines
        0: Story: ${story.content}
        1: Segment the story into 5 seconds segments/narration (~6-7 words per 5 seconds) with strong narrative arc with a clear beginning/setup/intro, conflict/story, climax, and resolution/conclusion/moral.
        2: Each scene must contain:
          - Narration text (~6-7 words) (storytelling segment)(with punctuations marks for better narrative effect.
          - Image prompt (visual description).
        3. Ensure character consistency across all scenes.
        4. Use concise & structured image prompts for generating visuals.
        5. Image prompts must be limited to two lines, using commas only for separation.
        Image Prompt Framework:
          [Character Name], [Facial Expression (with intensity if needed)], [Action (with movement details if applicable)], [Position in the scene if multiple characters]. [Background Description (Include setting, atmosphere, lighting, and mood)], [Perspective & Camera Angle (e.g., close-up, full-body, dynamic shot)].
        6. Response json format: 
          {
            title: “My title”,
            duration: 600,
            narrationTone: “”,
            script: [
              { 
                id: 1,
                start: in secs,
                end: in secs,
                narration: “” (with punctuation marks for better text to speech),
                imagePrompt: [Character Name], [Facial Expression (with intensity if needed)], [Action (with movement details if applicable)], [Position in the scene if multiple characters]. [Background Description (Include setting, atmosphere, lighting, and mood)], [Perspective & Camera Angle (e.g., close-up, full-body, dynamic shot)].
              }
            ]
          }
    `
    const response = await axios.post("https://text.pollinations.ai", {
      model: "gemini",
      seed: 10000000,
      jsonMode: true,
      messages: [
        {
          role: "system",
          content: storyVisualizationPrompt
        },
      ]
    })
    const storyVisualization: StoryVisualizationFormat = response.data
    const script: Scene[] = storyVisualization.script

    const scriptWithEnhancedImagePrompts = script.map((item) => {
      let image = item.imagePrompt.toLowerCase()

      // Add character details to image prompt
      storyMetadata.characters.forEach((character) => {
        image = image.replace(character.name.toLowerCase(), `${character.name}, ${character.age} years old, ${character.gender}, ${character.hairColor} ${character.hairstyle} hair, ${character.outfitUpperBody} ${character.upperClothingColor}, ${character.outfitLowerBody} ${character.lowerClothingColor}`)
      })

      const styleTags = imageStyles.find((item) => {
        return item.name.toLowerCase() === imageStyle.toLowerCase()
      })
      // Add image style to the prompt
      image = image + styleTags?.tags

      return (
        {
          ...item,
          imagePrompt: image
        }
      )
    })

    return (
      {
        ...storyVisualization,
        script: scriptWithEnhancedImagePrompts,

      }
    )
  } catch (err) {
    throw new Error(`Failed to generate story visualization. ${err}`)
  }
}