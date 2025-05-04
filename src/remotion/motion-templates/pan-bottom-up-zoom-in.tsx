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

export const PanBottomToUpAndZoomIn = ({ imgSrc, duration }: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);
  const panBottomUp = interpolate(frame, [0, totalFrames / 2], [100, 50], {
    extrapolateRight: "clamp",
  });

  const zoomIn = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [1.5, 1.5, 3],
    {
      easing: Easing.in(Easing.ease),
    }
  );
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
          transform: `scale(${zoomIn})`,
          transformOrigin: `${50}% ${panBottomUp}%`,
        }}
      />
    </div>
  );
};
