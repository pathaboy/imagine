import { auth } from "@/auth";
import { generateStoryFromUserPrompt } from "@/functions/generate-story-from-user-prompt";
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
    console.log( videoDetails.userPrompt)
    console.log(videoDetails.style)
    console.log(videoDetails.voiceName)
    console.log(videoDetails.captionStyle)
    
    const story = await generateStoryFromUserPrompt(videoDetails.userPrompt)
    const videoMetadata = await generateVideoMetadata(story.content)
    const videoVisualization = await generateStoryVisualization({
      story: story,
      storyMetadata: videoMetadata,
      imageStyle: videoDetails.style || "ghibli"
    })

    const narrationScript = videoVisualization.script.map((item,_index)=> {
      return (
        {
          start: item.start,
          end: item.end,
          narration: item.narration
        }
      )
    })

    console.log("hIT HERE")

    const video = await prisma.video.create({
      data: {
        prompt: videoDetails.userPrompt,
        imageStyle: videoDetails.style,
        captionStyle: videoDetails.captionStyle,
        captions: JSON.stringify(narrationScript),
        totalDuration: narrationScript[narrationScript.length-1].end,
        thumbnailUrl: "",
        bgm: {
          connect: {
            name: videoMetadata.bgm
          }
        },
        user: {
          connect: {
            id: session?.user?.id
          }
        },
      },
    })

    console.log("Hit here 2")

    const result = await inngest.send({
      name: "generate-video-data",
      data: {
        userId: session.user.id,
        videoId: video.id,
        voiceName: videoDetails.voiceName,
        videoVisualization
      }
    })
    return Response.json({
      result
    }, {status: 200})
  } catch (err) {
    console.error(err)
    return Response.json({
      message: "Failed to create video, try again",
    }, {status: 500})
  }
}