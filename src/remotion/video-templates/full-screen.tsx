"use client";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React from "react";
import { TransitionSeries } from "@remotion/transitions";
import { addMotionToImages, MotionImage } from "../../lib/data";
import { CaptionStyleOne } from "../caption-styles/caption-style-one";

const FullScreenView = ({ children }: { children: React.ReactNode }) => {
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
        {children}
      </div>
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
            width: "100vw",
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

const SixteenByNineView = ({ children }: { children: React.ReactNode }) => {
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

const screenSizes = [
  {
    id: 1,
    name: "video-full-screen",
    component: FullScreenView,
  },
  {
    id: 2,
    name: "mobile-full-screen",
    component: FullScreenView,
  },
  {
    id: 3,
    name: "video-sixteen-by-nine",
    component: SixteenByNineView,
  },
  {
    id: 4,
    name: "mobile-four-by-three",
    component: FourByThreeView,
  },
];

const Screen = ({
  videoSize,
  children,
}: {
  videoSize: string;
  children: React.ReactNode;
}) => {
  const ScreenView =
    screenSizes.find((item) => item.name === videoSize)?.component ||
    FullScreenView;
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
        <ScreenView>{children}</ScreenView>
      </div>
    </AbsoluteFill>
  );
};

type FullScreenVideoProps = {
  scenes: MotionImage[];
  captions: string;
  captionStyle: string;
  captionFont: string;
  bgmUrl: string;
  audioUrl: string;
  videoSize: string;
};

export const FullScreenVideo: React.FC<FullScreenVideoProps> = ({
  audioUrl,
  bgmUrl,
  captionFont,
  scenes,
  captions,
  videoSize,
}) => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();
  const currentTimeInMs = Math.floor((frame / fps) * 1000);
  const motionImages = addMotionToImages(scenes);
  const vol = interpolate(
    frame,
    [0, durationInFrames / 2, durationInFrames],
    [0.2, 0, 0.3]
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
              <Screen videoSize={videoSize}>
                <item.motion.component
                  duration={item.end - item.start}
                  imgSrc={item.imageUrl}
                />
              </Screen>
            </TransitionSeries.Sequence>
          );
        })}
      </TransitionSeries>
      <CaptionStyleOne
        fontFamily={captionFont}
        captions={captions}
        currentTimeInMs={currentTimeInMs}
      />
    </AbsoluteFill>
  );
};
