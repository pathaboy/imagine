"use client";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";
import { TransitionSeries } from "@remotion/transitions";
import { addMotionToImages, MotionImage } from "../../lib/data";
import { CaptionStyleTwo } from "../caption-styles/caption-style.two";

type SixteenByNineVideoProps = {
  scenes: MotionImage[];
  captions: string;
  captionStyle: string;
  captionFont: string;
  bgmUrl: string;
  audioUrl: string;
};

export const SixteenByNineVideo: React.FC<SixteenByNineVideoProps> = ({
  audioUrl,
  bgmUrl,
  captionStyle,
  captionFont,
  scenes,
  captions,
}) => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();
  const currentTimeInMs = Math.floor((frame / fps) * 1000);
  const motionImages = addMotionToImages(scenes);
  const vol = interpolate(
    frame,
    [0, durationInFrames / 2, durationInFrames],
    [0.3, 0.2, 0.4]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
      }}
    >
      <Audio src={audioUrl} volume={1} />
      <Audio src={bgmUrl} startFrom={300} volume={vol} loop />
      <TransitionSeries>
        {motionImages?.map((item, index) => {
          const durationOfSegment = ((item.end - item.start) / 1000) * fps;
          return (
            <TransitionSeries.Sequence
              key={index}
              durationInFrames={durationOfSegment}
            >
              <SixteenNineByView>
                <item.motion.component
                  duration={item.end - item.start}
                  imgSrc={item.imageUrl}
                />
              </SixteenNineByView>
            </TransitionSeries.Sequence>
          );
        })}
      </TransitionSeries>
      <CaptionStyleTwo
        fontFamily={captionFont}
        captions={captions}
        currentTimeInMs={currentTimeInMs}
      />
    </AbsoluteFill>
  );
};

const SixteenNineByView = ({ children }: { children: React.ReactNode }) => {
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
            width: "80vw",
            aspectRatio: "16/9",
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
