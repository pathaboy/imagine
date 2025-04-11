import axios from "axios";
import { inngest } from "./client";
import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3"
import { getVoicePrompt } from "@/lib/data";
import { prisma } from "@/lib/prisma";

const S3 =  new S3Client({
  region: "auto",
  endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!
  },
  requestChecksumCalculation: "WHEN_REQUIRED",
  responseChecksumValidation: "WHEN_REQUIRED"
})

export const GenerateVideoData = inngest.createFunction(
  { id: "generate-video-data" },
  { event: "generate-video-data" },
  async ({ event, step }) => {
    const {userId, voiceName, videoId,  videoVisualization} = event?.data

    // Generate audio and image files for the video
    const result = await Promise.all(
      videoVisualization.script.map((item: any, index: number) => {
        return (
          step.run(
            `generate-audio-image-${index}`,
            async () => {
              // Audio generation
              const audioPrompt = getVoicePrompt(item.narration, videoVisualization.narrationTone)
              const audioResponse = await axios.get(`https://text.pollinations.ai/${encodeURIComponent(audioPrompt)}?model=openai-audio&voice=${voiceName}`, {
                responseType: "arraybuffer"
              })
              const audio = Buffer.from(audioResponse.data)
              const audioKeyId = `videos/${userId}/${videoId}/${crypto.randomUUID()}.mp3`
              const uploadAudioCommand = new PutObjectCommand({
                Bucket: process.env.R2_BUCKET_NAME!,
                Key: audioKeyId,
                Body: audio,
                ContentType: "audio/mpeg"
              })
              await S3.send(uploadAudioCommand)
              const audioSourceurl = `${process.env.R2_DOMAIN}/${audioKeyId}`

              // Image generation
              const seed = Math.floor(Math.random() * 10000000)
              const res = await axios.get(`https://image.pollinations.ai/prompt/${encodeURIComponent(item.imagePrompt)}?width=${1280}&height=${720}&seed=${seed}&nologo=${true}&private=${true}`, {
                responseType: "arraybuffer"
              })
              const buffer = Buffer.from(res.data)
              const imageKeyId = `videos/${userId}/${videoId}/${crypto.randomUUID()}.jpg`
              const uploadImageCommand = new PutObjectCommand({
                Bucket: process.env.R2_BUCKET_NAME!,
                Key: imageKeyId,
                Body: buffer,
                ContentType: "image/jpeg"
              })
              await S3.send(uploadImageCommand)
              const imageSourceurl = `${process.env.R2_DOMAIN}/${imageKeyId}`

              // Updating the database
              const result = await prisma.video.update({where: {id: videoId}, data: {scenes: {
                create: {
                  start: item.start,
                  end: item.end,
                  number: index + 1,
                  sceneTemplateId: "scene-template-1",
                  vocals: {
                    create: {
                      narrationTone: videoVisualization.narrationTone,
                      audioUrl: audioSourceurl
                    }
                  },
                  images: {
                    create: {
                      number: 1,
                      prompt: item.imagePrompt,
                      url: imageSourceurl
                    }
                  }
                }
              }}})
            }
          )
        )
      })
    )

    
    return result
  },
);
