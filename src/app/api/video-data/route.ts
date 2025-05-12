import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const videoId = searchParams.get("videoid")
  if (!videoId) {
    return Response.json({
      message: "No videoid passed"
    }, {status: 401})
  }
  try {
    const video = await prisma.video.findFirst({
      where: {
        id: videoId,
      },
      include: {
        bgm: true,
        voiceOver: true,
        aspectRatio: true,
        scenes: {
          orderBy: {
            number: "asc"
          }
        },
      },
    });
  if (!video) {
    return Response.json({
      message: "No video found"
    }, {status: 200})
  }
  return Response.json({
    video
  }, {status: 200})
  } catch (err) {
    console.log(err)
    return Response.json({
      message: "Failed to get video data"
    }, {status: 500})
  }
}