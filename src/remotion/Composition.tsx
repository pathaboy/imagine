"use client";
import SceneOne from "../scenes/scene-one";
import { CaptionStyleOne } from "./caption-styles/caption-style-one";
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
import { CaptionStyleTwo } from "./caption-styles/caption-style.two";

export const MyComposition = () => {
  const { width, height, fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const currentTimeInMs = Math.floor((frame / fps) * 1000);
  // const motionImages = useMemo(() => addMotionToImages(images), [images]);

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
      {/* <TransitionSeries>
        {motionImages.map((item, index) => {
          const durationOfSegment = item.end - item.start;
          return (
            <TransitionSeries.Sequence
              key={index}
              durationInFrames={durationOfSegment}
            >
              <FourByThreeView>
                <item.motion.component
                  duration={durationOfSegment}
                  imgSrc={item.imageUrl}
                />
              </FourByThreeView>
            </TransitionSeries.Sequence>
          );
        })}
      </TransitionSeries> */}
      {/* <CaptionStyleTwo
        transcriptionId=""
        currentTimeInMs={currentTimeInMs}
      /> */}
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
