"use client";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React, { useEffect, useMemo, useState } from "react";
import { TransitionSeries } from "@remotion/transitions";
import {
  addMotionToImages,
  MotionImage,
  motionTemplates,
} from "../../lib/data";
import { CaptionStyleTwo } from "../caption-styles/caption-style.two";
import { assemblyAIClient } from "@/lib/assemblyai";
import axios from "axios";
import { PullOut } from "../motion-templates/pull-out";
import { EnterSlideTopDownExitLeft } from "../motion-templates/enter-slide-top-down-exit-left";
import { ScaleDownUp } from "../motion-templates/scale-down-up";
import { ScaleDownFade } from "../motion-templates/scale-down-fade";

type FourByThreeVideoProps = {
  scenes: MotionImage[];
  captions: string;
  captionStyle: string;
  bgmUrl: string;
  audioUrl: string;
};

export const FourByThreeVideo: React.FC<FourByThreeVideoProps> = ({
  audioUrl,
  bgmUrl,
  captionStyle,
  scenes,
  captions,
}) => {
  console.log(audioUrl);
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
          const durationOfSegment =
            Math.floor((item.end - item.start) / 1000) * fps;
          return (
            <TransitionSeries.Sequence
              key={index}
              durationInFrames={durationOfSegment}
            >
              <FourByThreeView>
                <item.motion.component
                  duration={item.end - item.start}
                  imgSrc={item.imageUrl}
                />
              </FourByThreeView>
            </TransitionSeries.Sequence>
          );
        })}
      </TransitionSeries>
      <CaptionStyleTwo captions={captions} currentTimeInMs={currentTimeInMs} />
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
