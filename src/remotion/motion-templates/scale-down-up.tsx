"use client";
import {
  useCurrentFrame,
  interpolate,
  Easing,
  Img,
  useVideoConfig,
} from "remotion";
import { MotionProps } from "./enter-slide-top-down-exit-left";

export const ScaleDownUp = ({ imgSrc, duration }: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);
  const scale = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [1.4, 1, 4],
    {
      extrapolateRight: "clamp",
      easing: Easing.elastic(1.4),
    }
  );
  const opacity = interpolate(
    frame,
    [0, totalFrames / 3, totalFrames],
    [1, 1, 0]
  );
  return (
    <div>
      <Img
        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale})`,
          flexShrink: 0,
          opacity: opacity,
        }}
      />
    </div>
  );
};
