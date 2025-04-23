"use client";
import { AbsoluteFill, Audio, useCurrentFrame, useVideoConfig } from "remotion";
import { useEffect, useMemo, useState } from "react";
import { TransitionSeries } from "@remotion/transitions";
import { motionTemplates } from "../../lib/data";
import { CaptionStyleTwo } from "../caption-styles/caption-style.two";
import { assemblyAIClient } from "@/lib/assemblyai";
import axios from "axios";

interface FourByThreeVideoProps {
  scenes: Scene[];
  transcriptionId: string;
  captionStyle: string;
  bgmUrl: string;
  audioUrl: string;
}

interface Scene {
  number: number;
  start: number;
  end: number;
  motionTemplateId: string;
  imageUrl: string;
}

export const FourByThreeVideo = ({
  audioUrl,
  bgmUrl,
  captionStyle,
  scenes,
  transcriptionId,
}: FourByThreeVideoProps) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const currentTimeInMs = Math.floor((frame / fps) * 1000);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
      }}
    >
      <Audio src={audioUrl} volume={2} />
      <Audio src={bgmUrl} startFrom={300} volume={0.3} loop />
      <TransitionSeries>
        {scenes.map((item, index) => {
          const MotionComponent = motionTemplates.find(
            (temp) => temp.name === item.motionTemplateId
          );
          const durationOfSegment =
            Math.floor((item.end - item.start) / 1000) * fps;
          console.log(durationOfSegment);
          return (
            <TransitionSeries.Sequence
              key={index}
              durationInFrames={durationOfSegment}
            >
              <FourByThreeView>
                {MotionComponent && (
                  <MotionComponent.component
                    duration={item.start - item.start}
                    imgSrc={item.imageUrl}
                  />
                )}
              </FourByThreeView>
            </TransitionSeries.Sequence>
          );
        })}
      </TransitionSeries>
      <CaptionStyleTwo
        transcriptionId={transcriptionId}
        currentTimeInMs={currentTimeInMs}
      />
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
