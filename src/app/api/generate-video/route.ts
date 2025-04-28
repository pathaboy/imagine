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
    
    if (!videoDetails.voiceoverUrl) {
      const script = await generateScriptFromUserPrompt(videoDetails.userPrompt)
      const video = await prisma.video.create({
        data: {
          prompt: videoDetails.userPrompt,
          script: script.content,
          title: script.title,
          imageStyle: videoDetails.style,
          captionStyle: videoDetails.captionStyle,
          thumbnailUrl: "",
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
          voiceName: videoDetails.voiceName,
          style: videoDetails.style,
          script: script.content
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
          captionStyle: videoDetails.captionStyle,
          thumbnailUrl: "",
          voiceOver: {
            create: {
              audioUrl: videoDetails.voiceoverUrl,
              narrationTone: "",
              voiceId: ""
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
          voiceName: videoDetails.voiceName,
          style: videoDetails.style,
          voiceoverUrl: videoDetails.voiceoverUrl,
          videoId: video.id,
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