import axios from "axios";
import { inngest } from "./client";
import {PutObjectCommand} from "@aws-sdk/client-s3"
import { prisma } from "@/lib/prisma";
import { S3 } from "@/lib/s3";
import { generateAudioFromScript } from "@/functions/generate-audio-from-script";
import { transcribeAudio } from "@/functions/transcribe-audio";
import { generateImagePrompts } from "@/functions/generate-image-prompts-from";
import { generateBgm } from "@/functions/generate-bgm";
import { motionTemplatesNames } from "@/lib/data";
import { assemblyAIClient } from "@/lib/assemblyai";

export const GenerateTextToVideoData = inngest.createFunction(
  { id: "generate-text-to-video-data" },
  { event: "generate-text-to-video-data" },
  async ({ event, step }) => {
    const {userId, voiceName, videoId,  style, script} = event?.data

    const transcriptionId = await step.run("generate-audio-and-trancription", async () => {
      const audioUrl = await generateAudioFromScript(script, "ultra fast pace, commanding tone with sharp pauses", voiceName, userId, videoId)
      const transcriptId = await transcribeAudio(audioUrl, videoId)
      return transcriptId
    })


    const imagePrompts = await step.run("generate-image-prompts", async () => {
      const prompts = await generateImagePrompts(transcriptionId, style)
      return prompts
    })

    // Generate image files for the video
    const result = await Promise.all(
      imagePrompts.imagePrompts.map((item, index) => {
        return (
          step.run(
            `generate-image-${index}`,
            async () => {
              // Image generation
              const seed = Math.floor(Math.random() * 10000000)
              const imageSourceurl = `https://image.pollinations.ai/prompt/${encodeURIComponent(item.imagePrompt)}?width=${720}&height=${540}&seed=${seed}&nologo=${true}&private=${true}`
              // const res = await axios.get(url, {
              //   responseType: "arraybuffer"
              // })
              // const buffer = Buffer.from(res.data)
              // const imageKeyId = `videos/${userId}/${videoId}/${crypto.randomUUID()}.jpeg`
              // const uploadImageCommand = new PutObjectCommand({
              //   Bucket: process.env.R2_BUCKET_NAME!,
              //   Key: imageKeyId,
              //   Body: buffer,
              //   ContentType: "image/jpeg"
              // })
              // await S3.send(uploadImageCommand)
              // const imageSourceurl = `${process.env.R2_DOMAIN}/${imageKeyId}`

              const motionTemplatesName = motionTemplatesNames[index % motionTemplatesNames.length]

              // Updating the database
              const result = await prisma.video.update({where: {id: videoId}, data: {scenes: {
                create: {
                  start: item.start,
                  end: item.end,
                  number: index + 1,
                  motionTemplateId: `${motionTemplatesName.name}`,
                  imagePromt: item.imagePrompt,
                  imageUrl: imageSourceurl
                }
              }}})
              return imageSourceurl
            }
          )
        )
      })
    )
    const bgm = await step.run("generate-bgm", async () => {
      const bgm = await generateBgm(videoId)
      return bgm
    })

    return result
  },
);


export const GenerateAudioToVideoData = inngest.createFunction(
  {id: "generate-audio-to-video-data"},
  {event: "generate-audio-to-video-data"},
  async ({event, step}) => {
    const {userId, style, voiceoverUrl, videoId} = event?.data

    const transcriptionId = await step.run("generate-audio-and-trancription", async () => {
      const transcriptId = await transcribeAudio(voiceoverUrl, videoId)
      return transcriptId
    })

    const script = await step.run("generate-script-from-audiourl", async () => {
      const transcript = await assemblyAIClient.transcripts.get(transcriptionId)
      const video = await prisma.video.update({where: {id: videoId}, data: {
        script: transcript.text
      }})
      return video.script

    })

    const imagePrompts = await step.run("generate-image-prompts", async () => {
      const prompts = await generateImagePrompts(transcriptionId, style)
      return prompts
    })

    // Generate image files for the video
    const result = await Promise.all(
      imagePrompts.imagePrompts.map((item, index) => {
        return (
          step.run(
            `generate-image-${index}`,
            async () => {
              // Image generation
              const seed = Math.floor(Math.random() * 10000000)
              const imageSourceurl = `https://image.pollinations.ai/prompt/${encodeURIComponent(item.imagePrompt)}?width=${720}&height=${540}&seed=${seed}&nologo=${true}&private=${true}`
              // const res = await axios.get(url, {
              //   responseType: "arraybuffer"
              // })
              // const buffer = Buffer.from(res.data)
              // const imageKeyId = `videos/${userId}/${videoId}/${crypto.randomUUID()}.jpeg`
              // const uploadImageCommand = new PutObjectCommand({
              //   Bucket: process.env.R2_BUCKET_NAME!,
              //   Key: imageKeyId,
              //   Body: buffer,
              //   ContentType: "image/jpeg"
              // })
              // await S3.send(uploadImageCommand)
              // const imageSourceurl = `${process.env.R2_DOMAIN}/${imageKeyId}`

              const motionTemplatesName = motionTemplatesNames[index % motionTemplatesNames.length]

              // Updating the database
              const result = await prisma.video.update({where: {id: videoId}, data: {scenes: {
                create: {
                  start: item.start,
                  end: item.end,
                  number: index + 1,
                  motionTemplateId: `${motionTemplatesName.name}`,
                  imagePromt: item.imagePrompt,
                  imageUrl: imageSourceurl
                }
              }}})
              return imageSourceurl
            }
          )
        )
      })
    )
    const bgm = await step.run("generate-bgm", async () => {
      const bgm = await generateBgm(videoId)
      return bgm
    })
    return result
  }
)