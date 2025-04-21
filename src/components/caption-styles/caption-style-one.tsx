"use client";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { useMemo } from "react";

export interface Caption {
  start: number;
  end: number;
  narration: string;
}

interface CaptionStyleProps {
  captions: Caption[];
}

export const CaptionStyleOne = ({ captions }: CaptionStyleProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const caption = useMemo(() => {
    return captions.find((item) => {
      const startFrame = item.start * fps;
      const endFrame = item.end * fps;
      return frame >= startFrame && frame <= endFrame;
    });
  }, [captions, frame, fps]);

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
        {caption && (
          <h2
            style={{
              maxWidth: "80%",
              fontSize: "48px",
              lineHeight: 1.2,
              color: "#f5f5f5",
              textAlign: "center",
              fontWeight: 500,
              fontFamily: "'Georgia', 'serif'",
              background: "rgba(0, 0, 0, 0.6)",
              padding: "16px 24px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            {caption.narration}
          </h2>
        )}
      </div>
    </AbsoluteFill>
  );
};
