import { assemblyAIClient } from "@/lib/assemblyai";
import { getFormattedSubs } from "@/lib/data";
import { prisma } from "@/lib/prisma";

// interface Subs {
//   text: string;
//   start: number;
//   end: number;
// }

// export interface SubsObj {
//   start: number;
//   end: number;
//   textPosition?: string;
//   subs: string;
// }

// const getFormattedSubs = async (
//   inputSubs: Subs[],
//   batch: number = 3
// ) => {
//   const subsCopy = [...inputSubs];
//   const formattedSubs = [];

//   while (subsCopy.length !== 0) {
//     const batchSize = Math.min(batch, subsCopy.length);
//     const newObj: SubsObj = {
//       start: subsCopy[0].start,
//       end: subsCopy[batchSize - 1].end,
//       subs: subsCopy
//         .splice(0, batchSize)
//         .map((item) => item.text)
//         .join(" "),
//     };
//     formattedSubs.push(newObj);
//   }

//   const subsFinal = await addTextPostions(formattedSubs);
//   return subsFinal.subs;
// };

export const transcribeAudio = async (audioUrl: string, videoId: string) => {
  if (audioUrl === "") {
    throw new Error("Invalid audioUrl")
  }
  try {
    const transcript = await assemblyAIClient.transcripts.transcribe({
      audio: audioUrl
    })
    if (transcript.status === "error") {
      throw new Error(`Failed to transcribe audio: ${transcript.error}`)
    }
    const duration = (transcript.words && transcript?.words[transcript?.words?.length-1]?.end)  || 1 * 60 * 1000
    const captions = transcript.words ? transcript.words?.map((item) => {
      return {
        text: item.text,
        start: item.start,
        end: item.end
      }
    }) : []
    const formattedSubs = getFormattedSubs(captions)
    await prisma.video.update({
      where: {
        id: videoId
      },
      data: {
        transcriptionId: transcript.id,
        transcribedWords: transcript.words ? JSON.stringify(formattedSubs): "",
        totalDuration: duration + 3 * 1000 
      }
    })

    return transcript.id
  } catch (err: any) {
    console.error("Transcript error: ", err)
    throw new Error(`Failed to transcribe audio file: ${err?.message || err}`)
  }
}