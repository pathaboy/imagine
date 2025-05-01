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
import {
  addMotionToImages,
  demoVideo,
  getFormattedSubs,
  images,
  subs,
} from "../lib/data";
import { CaptionStyleTwo } from "./caption-styles/caption-style.two";
import { Volume } from "lucide-react";
import { EnterSlideTopDownExitLeft } from "./motion-templates/enter-slide-top-down-exit-left";
import { ScaleDownFade } from "./motion-templates/scale-down-fade";
import { ScaleDownUp } from "./motion-templates/scale-down-up";

export const MyComposition = () => {
  const { width, height, fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();
  const currentTimeInMs = Math.floor((frame / fps) * 1000);
  const vol = interpolate(
    frame,
    [0, durationInFrames / 2, durationInFrames],
    [0.5, 0.1, 0.5]
  );

  const scenes = demoVideo.scenes.map((item) => {
    return {
      id: item.number,
      start: item.start,
      end: item.end,
      imagePrompt: item.imagePrompt,
      imageUrl: item.imageUrl,
      motionTemplateId: item.motionTemplateId,
      shotSize: "wide-shot",
      cameraAngle: "high-angle",
    };
  });
  const motionImages = useMemo(() => addMotionToImages(scenes), [images]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "black",
      }}
    >
      <Audio
        src={staticFile("/audio/spirituality-is-entertainment.mp3")}
        playbackRate={1}
        volume={2}
      />
      <Audio
        src={staticFile("/audio/spiritual-minimalistic-hopeful-piano.mp3")}
        startFrom={300}
        volume={0.2}
        loop
      />
      <TransitionSeries>
        {motionImages.map((item, index) => {
          const durationOfSegment = item.end - item.start;
          return (
            <TransitionSeries.Sequence
              key={index}
              durationInFrames={Math.floor((durationOfSegment / 1000) * 30)}
            >
              <FourByThreeView>
                <ScaleDownUp
                  duration={durationOfSegment}
                  imgSrc={item.imageUrl}
                />
              </FourByThreeView>
            </TransitionSeries.Sequence>
          );
        })}
      </TransitionSeries>{" "}
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
