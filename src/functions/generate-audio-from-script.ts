import { cleanText } from "@/lib/data"
import { prisma } from "@/lib/prisma"
import { S3 } from "@/lib/s3"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { EdgeTTS } from "@/lib/edge"

type VocalParams = {
  pitch: number
  rate: number
  volume: number
}
export const generateAudioFromScript = async (script: string, voiceId: string, userId: string, videoId: string, vocals: VocalParams) => {
  try {
    const cleanedScript = cleanText(script)
    const edge = new EdgeTTS()
    await edge.synthesize(cleanedScript, voiceId || "en-TZ-ImaniNeural", {
      rate: `${vocals.rate}%` ||  '15%',      
      volume: `${vocals.volume}%` || '100%',    
      pitch: `${vocals.rate}Hz` || '10Hz'
    })
    const audio = edge.toRaw()
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