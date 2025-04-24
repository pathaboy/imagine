"use client";
import axios from "axios";
import { getFormattedSubs, subs } from "../../lib/data";
import { useEffect, useMemo, useState } from "react";
import { AbsoluteFill } from "remotion";

export const CaptionStyleTwo = ({
  currentTimeInMs,
  transcriptionId,
}: {
  currentTimeInMs: number;
  transcriptionId: string;
}) => {
  const [transcribedWords, setTranscribedWords] = useState([]);
  console.log("Inside caption compoentn");
  console.log(transcribedWords);

  useEffect(() => {
    const fetchSubtitles = async () => {
      const res = await axios.get(
        `/api/subtitles?transcriptionId=${transcriptionId}`
      );
      console.log(res.data);
      const subs = res.data.transcribedWords;
      console.log("Hit inside transribed word");
      console.log(res.data);
      setTranscribedWords(subs);
    };
    fetchSubtitles();
  }, [transcriptionId]);
  const formattedSubs = useMemo(
    () => getFormattedSubs(transcribedWords),
    [transcribedWords]
  );
  const textSegment = formattedSubs.find((item, index) => {
    return item.start <= currentTimeInMs && item.end >= currentTimeInMs;
  });

  return (
    <AbsoluteFill
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: textSegment?.textPosition || "center",
        fontWeight: textSegment?.textPosition === "center" ? "700" : "400",
        fontSize: textSegment?.textPosition === "center" ? "7rem" : "3rem",
        color: "white",
        paddingBottom: textSegment?.textPosition === "center" ? "0px" : "3rem",
      }}
    >
      <h2
        style={{
          maxWidth: "60vw",
          textAlign: "center",
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        {textSegment?.subs || ""}
      </h2>
    </AbsoluteFill>
  );
};
