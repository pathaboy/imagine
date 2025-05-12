"use client";
import {
  Easing,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MotionProps } from "./enter-slide-top-down-exit-left";

export const PullOut = ({ imgSrc, duration }: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);

  const pullout = interpolate(frame, [0, totalFrames], [2.5, 1.5], {
    easing: Easing.out(Easing.exp),
  });

  const rotate = interpolate(frame, [0, totalFrames], [-10, 30], {
    extrapolateRight: "clamp",
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
          transform: `scale(${pullout}) rotate(${rotate}deg)`,
        }}
      />
    </div>
  );
};
