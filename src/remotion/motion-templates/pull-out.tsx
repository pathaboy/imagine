"use client";
import {
  Easing,
  Img,
  interpolate,
  Audio,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
} from "remotion";
import { MotionProps } from "./enter-slide-top-down-exit-left";

export const PullOut = ({ imgSrc, duration }: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);
  const pullout = interpolate(frame, [0, totalFrames], [3, 1.2], {
    easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Audio
        src={staticFile("/audio/sfx/silence-to-whoosh.mp3")}
        startFrom={30}
        volume={0.3}
      />

      <Img
        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${pullout})`,
        }}
      />
    </div>
  );
};
