"use client";
import {
  Easing,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MotionProps } from "./enter-slide-top-down-exit-left";

export const ZoomOutAndPullOut = ({ imgSrc, duration }: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);

  const pullOut = interpolate(frame, [0, totalFrames], [2.6, 1], {
    easing: Easing.in(Easing.exp),
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Img
        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${pullOut})`,
        }}
      />
    </div>
  );
};
