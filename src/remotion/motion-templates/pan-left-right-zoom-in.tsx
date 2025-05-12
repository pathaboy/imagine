"use client";
import {
  Easing,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MotionProps } from "./enter-slide-top-down-exit-left";

export const PanLeftToRightAndZoomIn = ({ imgSrc, duration }: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);

  const panLeftRight = interpolate(frame, [0, totalFrames / 2], [0, 50], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });

  const zoomIn = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [1.5, 1.5, 2.1],
    {
      extrapolateRight: "clamp",
      easing: Easing.in(Easing.exp),
    }
  );

  const rotate = interpolate(frame, [0, totalFrames], [-15, 10], {
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
          transformOrigin: `${panLeftRight}% ${50}%`,
        }}
      />
    </div>
  );
};
