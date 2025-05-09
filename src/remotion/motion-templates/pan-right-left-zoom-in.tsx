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

export const PanRightToLeftAndZoomIn = ({ imgSrc, duration }: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);

  const panRightLeft = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [100, 50, 50],
    {
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.exp),
    }
  );

  const zoomIn = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [1.5, 1.5, 2.1],
    {
      easing: Easing.in(Easing.exp),
      extrapolateRight: "clamp",
    }
  );

  const rotate = interpolate(frame, [0, totalFrames], [-10, 10], {
    extrapolateRight: "clamp",
    easing: Easing.circle,
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
          transform: `scale(${zoomIn}) rotate(${rotate}deg)`,
          transformOrigin: `${panRightLeft}% ${50}%`,
        }}
      />
    </div>
  );
};
