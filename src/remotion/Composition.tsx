"use client";
import SceneOne from "../scenes/scene-one";
import { CaptionStyleOne } from "../components/caption-styles/caption-style-one";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { clockWipe } from "@remotion/transitions/clock-wipe";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import React, { useMemo } from "react";
import {
  AbsoluteFill,
  Img,
  Audio,
  useVideoConfig,
  staticFile,
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";
import { addMotionToImages, getFormattedSubs, images, subs } from "../lib/data";

export const MyComposition = () => {
  const { width, height, fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const currentTimeInMs = Math.floor((frame / fps) * 1000);
  const formattedSubs = useMemo(() => getFormattedSubs(subs), [subs]);
  const motionImages = useMemo(() => addMotionToImages(images), [images]);

  const textSegment = formattedSubs.find((item, index) => {
    return item.start <= currentTimeInMs && item.end >= currentTimeInMs;
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
      }}
    >
      <Audio src={staticFile("/audio/test-2.mp3")} volume={2} />
      <Audio
        src={staticFile("/audio/attitude-beats.mp3")}
        startFrom={300}
        volume={0.3}
        loop
      />
      <TransitionSeries>
        {motionImages.map((item, index) => {
          const durationOfSegment = ((item.end - item.start) / 1000) * fps;
          return (
            <TransitionSeries.Sequence
              key={index}
              durationInFrames={durationOfSegment}
            >
              <FourByThreeView>
                <item.motion.component
                  totalFrames={durationOfSegment}
                  imgSrc={item.imageSrc}
                />
              </FourByThreeView>
            </TransitionSeries.Sequence>
          );
        })}
      </TransitionSeries>
      <AbsoluteFill
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: textSegment?.textPosition || "center",
          fontWeight: textSegment?.textPosition === "center" ? "700" : "400",
          fontSize: textSegment?.textPosition === "center" ? "7rem" : "3rem",
          color: "white",
          paddingBottom:
            textSegment?.textPosition === "center" ? "0px" : "3rem",
        }}
      >
        <h2
          style={{
            maxWidth: "60vw",
            textAlign: "center",
            lineHeight: 1,
            marginBottom: "1rem",
          }}
        >
          {textSegment?.subs || ""}
        </h2>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const FourByThreeView = ({ children }: { children: React.ReactNode }) => {
  return (
    <AbsoluteFill>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "62vw",
            aspectRatio: "4/3",
            backgroundColor: "black",
            borderRadius: "40px",
            overflow: "clip",
          }}
        >
          {children}
        </div>
      </div>
    </AbsoluteFill>
  );
};

interface SegmentEffectProp {
  imgSrc: string;
  totalFrames: number;
}

export const SlideTopDownThenLeft = ({
  imgSrc,
  totalFrames,
}: {
  imgSrc: string;
  totalFrames: number;
}) => {
  const frame = useCurrentFrame();
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
        src={staticFile(imgSrc)}
        style={{
          width: "100%",
          height: "100%",
          opacity: opacity,
          transform: `translateY(${slideDown}%) translateX(${slideRight}%)`,
          flexShrink: 0,
        }}
      />
      <Img
        src={staticFile(imgSrc)}
        style={{
          width: "100%",
          height: "100%",
          transform: `translateY(${slideDown}%) translateX(${slideRight}%)`,
          flexShrink: 0,
          opacity: opacity,
        }}
      />
      <Img
        src={staticFile(imgSrc)}
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

export const ScaleDownFade = ({ imgSrc, totalFrames }: SegmentEffectProp) => {
  const frame = useCurrentFrame();
  const panLeft = interpolate(frame, [0, totalFrames / 3], [90, 50], {
    extrapolateRight: "clamp",
    easing: Easing.elastic(1.2),
  });

  const scale = interpolate(
    frame,
    [0, totalFrames / 3, totalFrames / 2, totalFrames],
    [1.6, 1.6, 1.6, 1],
    {
      extrapolateRight: "clamp",
      easing: Easing.elastic(1),
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
        src={staticFile(imgSrc)}
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

export const ScaleDownUp = ({ imgSrc, totalFrames }: SegmentEffectProp) => {
  const frame = useCurrentFrame();
  const scale = interpolate(
    frame,
    [0, totalFrames / 2, totalFrames],
    [1.4, 1, 4],
    {
      extrapolateRight: "clamp",
      easing: Easing.elastic(1.4),
    }
  );
  const opacity = interpolate(
    frame,
    [0, totalFrames / 3, totalFrames],
    [1, 1, 0]
  );
  return (
    <div>
      <Img
        src={staticFile(imgSrc)}
        style={{
          width: "100%",
          height: "100%",
          transform: `scale(${scale})`,
          flexShrink: 0,
          opacity: opacity,
        }}
      />
    </div>
  );
};
