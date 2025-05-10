import { auth } from "@/auth";
import { generateScriptFromUserPrompt } from "@/functions/generate-script-from-user-prompt";
import { generateStoryVisualization } from "@/functions/generate-story-visualization";
import { generateVideoMetadata } from "@/functions/generate-video-metadata";
import { inngest } from "@/inngest/client";
import { prisma } from "@/lib/prisma";
import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.id) {
    return Response.json({
      status: "Unauthorized"
    }, {status: 401})
  }
  try {
    const {videoDetails} = await req.json()
    console.log(videoDetails)
    console.log(videoDetails.videoType)
    
    if (!videoDetails.voiceoverUrl) {
      const script = await generateScriptFromUserPrompt(videoDetails.userPrompt, videoDetails.videoType)
      const video = await prisma.video.create({
        data: {
          prompt: videoDetails.userPrompt,
          script: script.content,
          title: script.title,
          imageStyle: videoDetails.style,
          captionFont: videoDetails.captionFont,
          thumbnailUrl: "",
          aspectRatio: {
            connect: {
              name: videoDetails.aspectRatio
            }
          },
          user: {
            connect: {
              id: session?.user?.id
            }
          },
        },
      })
      const result = await inngest.send({
        name: "generate-text-to-video-data",
        data: {
          userId: session.user.id,
          videoId: video.id,
          voiceId: videoDetails.voiceId,
          style: videoDetails.style,
          script: script.content,
          aspectRatio: videoDetails.aspectRatio,
          videoType: videoDetails.videoType
        }
      })
      return Response.json({
        result
      }, {status: 200})
    } else {
      const video = await prisma.video.create({
        data: {
          prompt: videoDetails.userPrompt,
          title: videoDetails.userPrompt,
          imageStyle: videoDetails.style,
          captionFont: videoDetails.captionFont,
          thumbnailUrl: "",
          voiceOver: {
            create: {
              audioUrl: videoDetails.voiceoverUrl,
              voiceId: "custom"
            }
          },
          aspectRatio: {
            connect: {
              name: videoDetails.aspectRatio
            }
          },
          user: {
            connect: {
              id: session?.user?.id
            }
          },
        },
      })
      const result = await inngest.send({
        name: "generate-audio-to-video-data",
        data: {
          userId: session.user.id,
          style: videoDetails.style,
          voiceoverUrl: videoDetails.voiceoverUrl,
          videoId: video.id,
          aspectRatio: videoDetails.aspectRatio
        }
      })
      return Response.json({
        result
      }, {status: 200})
    }
    
  } catch (err) {
    console.error(err)
    return Response.json({
      message: "Failed to create video, try again",
    }, {status: 500})
  }
}