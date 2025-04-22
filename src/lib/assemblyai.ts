import { AssemblyAI } from "assemblyai";

export const assemblyAIClient = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY!,
});
