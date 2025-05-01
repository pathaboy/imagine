import { bgms } from "@/lib/data"
import { gemini } from "@/lib/gemini"
import { prisma } from "@/lib/prisma"
import axios from "axios"

export const generateBgm = async (videoId: string) => {
  try {
    const video = await prisma.video.findFirst({where: {id: videoId}})
    const bgmPrompt = `
  You are a creative sound designer. I will give you a video script and a list of background music (BGM) options. Your task is to choose the BGM that best fits the tone, emotion, and pacing of the script.
  Respond with valid parsable JSON:
  { "bgm": "<best_bgm_from_list>" }`

  const input = `
  Script: ${video?.script}
  BGM options: ${bgms.map((item) => item.name).join("|")}
  `

  const res = await gemini.models.generateContent({
        model: "gemini-2.0-flash",
        contents: input,
        config: {
          systemInstruction: bgmPrompt
        }
      })
      const text = res.text?.replace("```json", "").replace("```", "")
      const bgmObj = JSON.parse(text || "")

  const bgm: string = bgmObj.bgm
  const bgmId = bgms.find(item => item.name === bgm)
  await prisma.video.update({
    where: {
      id: videoId
    },
    data: {
      bgm: {
        connect: {
          id: bgmId?.id || 0
        }
      }
    }
  })  
  return bgm
  } catch (err: any) {
    console.log(err)
    console.log(`Failed to generate Bgm: ${err.message || err}`)
    throw new Error(`Failed to generate bgm: ${err.message || err}`)
  }
}