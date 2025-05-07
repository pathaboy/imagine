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
    [0, totalFrames / 3, totalFrames / 2, totalFrames],
    [2.1, 1.8, 1.1, 1.8],
    {
      extrapolateRight: "clamp",
      easing: Easing.in(Easing.exp),
    }
  );

  const rotate = interpolate(frame, [0, totalFrames], [-180, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
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
          transform: `scale(${scale}) rotate(${rotate}deg)`,
          flexShrink: 0,
        }}
      />
    </div>
  );
};
