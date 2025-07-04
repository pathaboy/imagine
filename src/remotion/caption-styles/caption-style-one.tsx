"use client";
import { AbsoluteFill } from "remotion";
import { CaptionsType } from "./caption-style.two";

export const CaptionStyleOne = ({
  captions,
  currentTimeInMs,
  fontFamily,
}: CaptionsType) => {
  const transcribedWords = JSON.parse(captions);
  const textSegment = transcribedWords.find((item: any) => {
    return item.start <= currentTimeInMs && item.end >= currentTimeInMs;
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          padding: "24px",
        }}
      >
        <h2
          style={{
            maxWidth: "80%",
            fontSize: "48px",
            lineHeight: 1.2,
            color: "#f5f5f5",
            textAlign: "center",
            fontWeight: 500,
            fontFamily: fontFamily,
            background: "rgba(0, 0, 0, 0.6)",
            padding: "16px 24px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          {textSegment?.subs || ""}
        </h2>
      </div>
    </AbsoluteFill>
  );
};
