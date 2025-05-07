"use client";
import { AbsoluteFill } from "remotion";
import { useVideoConfig } from "remotion";

export type CaptionsType = {
  currentTimeInMs: number;
  captions: string;
};

export const CaptionStyleTwo = ({
  currentTimeInMs,
  captions,
}: CaptionsType) => {
  const transcribedWords = JSON.parse(captions);
  const textSegment = transcribedWords.find((item: any) => {
    return item.start <= currentTimeInMs && item.end >= currentTimeInMs;
  });
  const { width } = useVideoConfig();

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
        fontFamily: "Kavoon, cursive",
      }}
    >
      <h2
        style={{
          width: width > 800 ? "60vw" : "100%",
          textAlign: "center",
          lineHeight: 1,
          marginBottom: "2rem",
          textShadow: "3px 3px 0 #000, 6px 6px 0 #800",
          letterSpacing: "2px",
          textWrap: "wrap",
        }}
      >
        {textSegment?.subs || ""}
      </h2>
    </AbsoluteFill>
  );
};
