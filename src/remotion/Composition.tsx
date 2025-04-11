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
    // <AbsoluteFill className="bg-blue-500 text-white font-bold">
    //   <TransitionSeries>
    //     {video?.scenes.map((scene, index) => {
    //       const caption = JSON.parse(video.captions);
    //       return (
    //         <TransitionSeries.Sequence
    //           key={index}
    //           durationInFrames={scene.totalFrames}
    //         >
    //           <Audio src={video.vocals[0].audioUrl} volume={1} />
    //           <Audio src={video.bgm?.bgmUrl || ""} volume={0.7} />
    //           <SceneOne
    //             imageurl={`https://image.pollinations.ai/prompt/${scene.images[0].url}`}
    //           />
    //         </TransitionSeries.Sequence>
    //       );
    //     })}
    //   </TransitionSeries>
    // </AbsoluteFill>
    <></>
  );
};
