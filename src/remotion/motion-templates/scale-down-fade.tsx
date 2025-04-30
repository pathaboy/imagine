"use client";
import {
  useCurrentFrame,
  interpolate,
  Easing,
  Img,
  useVideoConfig,
} from "remotion";
import { MotionProps } from "./enter-slide-top-down-exit-left";

export const ScaleDownFade = ({ imgSrc, duration }: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);
  const panLeft = interpolate(frame, [0, totalFrames / 3], [90, 50], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });

  const scale = interpolate(
    frame,
    [0, totalFrames / 3, totalFrames / 2, totalFrames],
    [1.6, 1.6, 1.6, 1],
    {
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.ease),
    }
  );

  const fade = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [1, 1, 0.3]
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
          transformOrigin: `${panLeft}% 50%`,
          // opacity: fade,
        }}
      />
    </div>
  );
};
