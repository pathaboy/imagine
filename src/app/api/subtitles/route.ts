import { auth } from "@/auth";
import { assemblyAIClient } from "@/lib/assemblyai";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const params= req.nextUrl.searchParams
    const transcriptionId = params.get("transcriptionId")
    if (!transcriptionId) {
      return Response.json({
        success: false,
        message: "Invalid transcriptionId"
      }, {status: 400})
    }
    const transcription = await assemblyAIClient.transcripts.get(transcriptionId)
    if (transcription.status === "error") {
      throw new Error(`Failed to fetch transcription: ${transcription.error}`)
    }
    return Response.json({
      success: true,
      transcribedWords: transcription.words
    })
  } catch (err: any) {
    return Response.json({
      success: false,
      message: "Failed to fetch transcriptions"
    }, {status: 500})
  }
  
}