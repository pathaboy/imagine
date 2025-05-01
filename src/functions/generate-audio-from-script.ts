import { cleanText } from "@/lib/data"
import { prisma } from "@/lib/prisma"
import { S3 } from "@/lib/s3"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import axios from "axios"
import { EdgeTTS } from "@andresaya/edge-tts";


export const generateAudioFromScript = async (script: string, voiceId: string, userId: string, videoId: string) => {
  try {
    const cleanedScript = cleanText(script)
    const edge = new EdgeTTS()
    await edge.synthesize(cleanedScript, voiceId || "en-TZ-ImaniNeural", {
      rate: '0%',      
      volume: '0%',    
      pitch: '-3Hz'
    })
    const base64Audio = edge.toBase64()
    const audio = Buffer.from(base64Audio, "base64url")
    const audioKeyId = `videos/${userId}/voiceovers/${crypto.randomUUID()}.mp3`
    const uploadAudioCommand = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: audioKeyId,
      Body: audio,
      ContentType: "audio/mpeg"
    })
    await S3.send(uploadAudioCommand)
    const audioSourceurl = `${process.env.R2_DOMAIN}/${audioKeyId}`
    await prisma.video.update({
      where: {id: videoId},
      data: {
        voiceOver: {
          create: {
            audioUrl: audioSourceurl,
            voiceId: voiceId,
          }
        }
      }
    })
    return audioSourceurl
  } catch (err) {
    throw new Error(`Faild to generate audio: ${err}`)
  }
}