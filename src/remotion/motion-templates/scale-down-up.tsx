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
    [2, 1.2, 1.8],
    {
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
    }
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
        }}
      />
    </div>
  );
};
