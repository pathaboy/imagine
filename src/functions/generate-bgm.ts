import { bgms } from "@/lib/data"
import { prisma } from "@/lib/prisma"
import axios from "axios"

export const generateBgm = async (script: string, videoId: string) => {
  if (!script) {
    throw new Error("No script passed for bgm generation")
  }
  try {
    const bgmPrompt = `
  You are a creative sound designer. I will give you a video script and a list of background music (BGM) options. Your task is to choose the BGM that best fits the tone, emotion, and pacing of the script.
  Respond only in JSON format as:
  { "bgm": "<best_bgm_from_list>" }
  Here is the script:
  ${script}
  Here are the BGM options:
  ${bgms.map((item) => item.name).join("|")}
  `
  const response = await axios.post("https://text.pollinations.ai", {
    model: "gemini",
    seed: 10000000,
    jsonMode: true,
    messages: [
      {
        role: "system",
        content: bgmPrompt
      },
    ]
  })
  const bgm: string = response.data.bgm
  await prisma.video.update({
    where: {
      id: videoId
    },
    data: {
      bgm: {
        connect: {
          name: bgm
        }
      }
    }
  })  
  return bgm
  } catch (err: any) {
    console.log(`Failed to generate Bgm: ${err.message || err}`)
    throw new Error(`Failed to generate bgm: ${err.message || err}`)
  }
}