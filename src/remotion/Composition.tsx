"use client";
import { story } from "@/lib/data";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { clockWipe } from "@remotion/transitions/clock-wipe";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import React from "react";
import { AbsoluteFill, Img, Audio, useVideoConfig } from "remotion";

export const MyComposition = () => {
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill className="bg-blue-500 text-white font-bold">
      <Audio src="/tenali.mp3" volume={1} />
      <TransitionSeries>
        {story.images.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <TransitionSeries.Sequence durationInFrames={60 * 11}>
                <AbsoluteFill>
                  <Img
                    src={`https://image.pollinations.ai/prompt/${item.imageDescription}`}
                    className="w-full h-full"
                  />
                </AbsoluteFill>
              </TransitionSeries.Sequence>
              {index < story.images.length - 1 && (
                <TransitionSeries.Transition
                  presentation={wipe({ direction: "from-top" })}
                  timing={linearTiming({ durationInFrames: 60 })}
                />
              )}
            </React.Fragment>
          );
        })}
      </TransitionSeries>
    </AbsoluteFill>
  );
};
