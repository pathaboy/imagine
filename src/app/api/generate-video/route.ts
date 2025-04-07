import { generateStoryFromUserPrompt } from "@/functions/generate-story-from-user-prompt";
import { generateStoryVisualization } from "@/functions/generate-story-visualization";
import { generateVideoMetadata } from "@/functions/generate-video-metadata";
import { prisma } from "@/lib/prisma";
import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {videoDetails} = await req.json()
    console.log( videoDetails.userPrompt)
    console.log(videoDetails.style)
    console.log(videoDetails.voiceName)
    const story = await generateStoryFromUserPrompt(videoDetails.userPrompt)
    const videoMetadata = await generateVideoMetadata(story.content)
    const storyVisualization = await generateStoryVisualization({
      story: story,
      storyMetadata: videoMetadata,
      imageStyle: videoDetails.style || "ghibli"
    })
    
    return Response.json({
      data: videoDetails
    }, {status: 200})
  } catch (err) {
    console.error(err)
    return Response.json({
      message: "Failed to create video, try again",
    }, {status: 500})
  }
}