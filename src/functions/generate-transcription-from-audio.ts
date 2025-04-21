import { AssemblyAI } from "assemblyai";

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY!,
});

export function generateTranscriptionFromAudio(fileUrl: string) {
  return ""
}