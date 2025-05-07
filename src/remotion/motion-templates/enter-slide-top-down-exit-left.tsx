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
  const slideDown = interpolate(frame, [0, totalFrames / 2], [-50, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });
  const slideRight = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [0, 0, 150],
    {
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.circle),
    }
  );

  const scale = interpolate(frame, [0, totalFrames], [1, 1.5], {
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.circle),
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
          transform: `translateY(${slideDown}%) translateX(${slideRight}%) scale(${scale})`,
          zIndex: 20,
          opacity: 0.9,
        }}
      />
      <Img
        src={imgSrc}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.3,
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
};
