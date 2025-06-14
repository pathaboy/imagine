"use client";
import {
  useCurrentFrame,
  interpolate,
  Easing,
  Img,
  useVideoConfig,
  staticFile,
  Video,
} from "remotion";
import { MotionProps } from "./enter-slide-top-down-exit-left";

export const ScaleDownFade = ({ imgSrc, duration }: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);

  const scale = interpolate(frame, [0, totalFrames], [2.1, 1.2], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });

  const fade = interpolate(
    frame,
    [0, totalFrames - (totalFrames - 30), totalFrames / 2, totalFrames],
    [0, 1, 1, 0.3]
  );

  const rotate = interpolate(frame, [0, totalFrames], [20, -30], {
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.exp),
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Img
        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale}) rotate(${rotate}deg)`,
          flexShrink: 0,
          opacity: fade,
        }}
      />
      {frame < 60 && (
        <Video
          src={staticFile("/assets/transitions/fire-transition-1.mp4")}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
            zIndex: 10,
            opacity: 0.7,
          }}
        />
      )}
    </div>
  );
};
