import { inngest } from "./client";
import { prisma } from "@/lib/prisma";
import { generateAudioFromScript } from "@/functions/generate-audio-from-script";
import { transcribeAudio } from "@/functions/transcribe-audio";
import { generateImagePrompts } from "@/functions/generate-image-prompts-from";
import { generateBgm } from "@/functions/generate-bgm";
import { aspectRatios, motionTemplatesNames, videoTypes } from "@/lib/data";
import { assemblyAIClient } from "@/lib/assemblyai";

export const GenerateTextToVideoData = inngest.createFunction(
  { id: "generate-text-to-video-data" },
  { event: "generate-text-to-video-data" },
  async ({ event, step }) => {
    const {userId, voiceId, videoId, aspectRatio, style, script, videoType} = event?.data
    const vocals = videoTypes.find(item => item.videoType === videoType)
    const imageDimensions = aspectRatios.find(item => item.name === aspectRatio)
    const imageWidth = imageDimensions?.frameWidth || 720
    const imageHeight = imageDimensions?.frameHeight || 540

    const audioUrl = await step.run("generate-audio", async () => {
      const audioUrl = await generateAudioFromScript(script, voiceId, userId, videoId, {
        pitch: vocals?.narration.pitch || -20,
        rate: vocals?.narration.rate || 30,
        volume: vocals?.narration.volume || 100
      })
      return audioUrl
    })

    const transcriptionId = await step.run("generate-transcription", async () => {
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
              const imageSourceurl = `https://image.pollinations.ai/prompt/${encodeURIComponent(item.imagePrompt)}?width=${imageWidth}&height=${imageHeight}&seed=${seed}&nologo=${true}&private=${true}`
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
              await prisma.video.update({where: {id: videoId}, data: {scenes: {
                create: {
                  start: item.start,
                  end: item.end,
                  number: index + 1,
                  motionTemplateId: `${item.cameraMotion || motionTemplatesName.name}`,
                  imagePrompt: item.imagePrompt,
                  imageUrl: imageSourceurl,
                  shotSize: item.shotSize,
                  cameraAngle: item.cameraAngle,
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

    return {
      result,
      bgm,

    }
  },
);


export const GenerateAudioToVideoData = inngest.createFunction(
  {id: "generate-audio-to-video-data"},
  {event: "generate-audio-to-video-data"},
  async ({event, step}) => {
    const {style, voiceoverUrl,aspectRatio, videoId} = event?.data
    const imageDimensions = aspectRatios.find(item => item.name === aspectRatio)
    const imageWidth = imageDimensions?.frameWidth || 720
    const imageHeight = imageDimensions?.frameHeight || 540

    const transcriptionId = await step.run("generate-audio-and-trancription", async () => {
      const transcriptId = await transcribeAudio(voiceoverUrl, videoId)
      return transcriptId
    })

    await step.run("generate-script-from-audiourl", async () => {
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
              const imageSourceurl = `https://image.pollinations.ai/prompt/${encodeURIComponent(item.imagePrompt)}?width=${imageWidth}&height=${imageHeight}&seed=${seed}&nologo=${true}&private=${true}`
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
              await prisma.video.update({where: {id: videoId}, data: {scenes: {
                create: {
                  start: item.start,
                  end: item.end,
                  number: index + 1,
                  motionTemplateId: `${item.cameraMotion || motionTemplatesName.name}`,
                  imagePrompt: item.imagePrompt,
                  imageUrl: imageSourceurl,
                  shotSize : item.shotSize,
                  cameraAngle: item.cameraAngle        
                }
              }}})
              return imageSourceurl
            }
          )
        )
      })
    )
    await step.run("generate-bgm", async () => {
      const bgm = await generateBgm(videoId)
      return bgm
    })
    return result
  }
)