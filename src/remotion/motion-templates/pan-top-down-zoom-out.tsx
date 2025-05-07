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

export const PanTopToDownAndZoomOut = ({ imgSrc, duration }: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);

  const panTopDown = interpolate(frame, [0, totalFrames / 2], [0, 60], {
    easing: Easing.out(Easing.exp),
    extrapolateRight: "clamp",
  });

  const pullOut = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [1.1, 1.1, 2.1],
    {
      easing: Easing.in(Easing.exp),
    }
  );

  const rotate = interpolate(frame, [0, totalFrames], [5, -5], {
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.ease),
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
          transform: `scale(${pullOut}) rotate(${rotate}deg)`,
          transformOrigin: `${50}% ${panTopDown}%`,
        }}
      />
    </div>
  );
};
