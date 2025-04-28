import { assemblyAIClient } from "@/lib/assemblyai";
import { prisma } from "@/lib/prisma";

export const transcribeAudio = async (audioUrl: string, videoId: string) => {
  if (audioUrl === "") {
    throw new Error("Invalid audioUrl")
  }
  try {
    const transcript = await assemblyAIClient.transcripts.transcribe({
      audio: audioUrl
    })
    if (transcript.status === "error") {
      throw new Error(`Failed to transcribe audio: ${transcript.error}`)
    }
    const duration = (transcript.words && transcript?.words[transcript?.words?.length-1]?.end)  || 1 * 60 * 1000
    await prisma.video.update({
      where: {
        id: videoId
      },
      data: {
        transcriptionId: transcript.id,
        transcribedWords: transcript.words ? JSON.stringify(transcript.words): "",
        totalDuration: duration + 10 * 1000 
      }
    })

    return transcript.id
  } catch (err: any) {
    console.error("Transcript error: ", err)
    throw new Error(`Failed to transcribe audio file: ${err?.message || err}`)
  }
}