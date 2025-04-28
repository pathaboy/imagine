import { cleanTextForUrl, getVoicePrompt } from "@/lib/data"
import { prisma } from "@/lib/prisma"
import { S3 } from "@/lib/s3"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import axios from "axios"

export const generateAudioFromScript = async (script: string, tone: string, voiceName: string, userId: string, videoId: string) => {
  try {
    const cleanedScript = cleanTextForUrl(script)
    const audioPrompt = getVoicePrompt(script, tone)
    const audioResponse = await axios.get(`https://text.pollinations.ai/${encodeURIComponent(cleanedScript)}?model=openai-audio&voice=${voiceName}`, {
                responseType: "arraybuffer"
              })
    const audio = Buffer.from(audioResponse.data)
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
            narrationTone: tone,
            voiceId: voiceName
          }
        }
      }
    })
    return audioSourceurl
  } catch (err) {
    throw new Error(`Faild to generate audio: ${err}`)
  }
}