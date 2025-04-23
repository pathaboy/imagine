"use client";
import {
  useCurrentFrame,
  interpolate,
  Easing,
  Img,
  staticFile,
  useVideoConfig,
} from "remotion";

export interface MotionProps {
  imgSrc: string;
  duration: number; // in ms
}

export const EnterSlideTopDownExitLeft = ({
  imgSrc,
  duration,
}: MotionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const totalFrames = Math.floor((duration / 1000) * fps);
  const slideDown = interpolate(frame, [0, totalFrames / 5], [-100, 0], {
    extrapolateRight: "clamp",
    easing: Easing.elastic(1),
  });
  const slideRight = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [0, 0, -300],
    {
      extrapolateRight: "clamp",
      easing: Easing.elastic(1),
    }
  );
  const opacity = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [1, 0.5, 0]
  );
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <Img
        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          opacity: opacity,
          transform: `translateY(${slideDown}%) translateX(${slideRight}%)`,
          flexShrink: 0,
        }}
      />
      <Img
        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          transform: `translateY(${slideDown}%) translateX(${slideRight}%)`,
          flexShrink: 0,
          opacity: opacity,
        }}
      />
      <Img
        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          transform: `translateY(${slideDown}%) translateX(${slideRight}%)`,
          flexShrink: 0,
          opacity: opacity,
        }}
      />
    </div>
  );
};
