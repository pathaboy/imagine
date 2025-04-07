"use client";
import SceneOne from "../scenes/scene-one";
import { CaptionStyleOne } from "../components/caption-styles/caption-style-one";
import { story } from "../lib/data";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { clockWipe } from "@remotion/transitions/clock-wipe";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import React from "react";
import { AbsoluteFill, Img, Audio, useVideoConfig, staticFile } from "remotion";

export const MyComposition = () => {
  const { width, height, fps } = useVideoConfig();

  return (
    <AbsoluteFill className="bg-blue-500 text-white font-bold">
      <TransitionSeries>
        {story.script.map((item, index) => {
          return (
            <TransitionSeries.Sequence key={index} durationInFrames={5 * fps}>
              <Audio src={staticFile(item.audio)} volume={1} />
              <SceneOne
                captions={item.narration}
                imageurl={`https://image.pollinations.ai/prompt/${item.imagePrompt}`}
                captionComponentId="caption-style-one"
              />
            </TransitionSeries.Sequence>
          );
        })}
      </TransitionSeries>
    </AbsoluteFill>
  );
};
