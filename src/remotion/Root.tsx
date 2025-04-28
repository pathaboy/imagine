import React, { useEffect, useState } from "react";
import { AbsoluteFill, Composition } from "remotion";
import "../app/globals.css";
import { FourByThreeVideo } from "./video-templates/four-by-three";
import axios from "axios";
import { addMotionToImages, demoVideo, MotionImage } from "../lib/data";

export const RemotionRoot: React.FC = () => {
  const videoId = demoVideo.id;

  const scenes = demoVideo.scenes.map((item) => {
    return {
      id: item.number,
      start: item.start,
      end: item.end,
      imagePrompt: item.imagePromt,
      imageUrl: item.imageUrl,
      motionTemplateId: item.motionTemplateId,
    };
  });

  return (
    <Composition
      id="MyComp"
      component={FourByThreeVideo}
      defaultProps={{
        audioUrl: demoVideo.voiceOver[0].audioUrl,
        bgmUrl: demoVideo.bgm,
        captionStyle: demoVideo.captionStyle,
        captions: demoVideo.transcribedWords,
        scenes: scenes,
      }}
      durationInFrames={Math.floor(
        (demoVideo.totalDuration / 1000) * demoVideo.fps
      )}
      width={1280}
      height={720}
      fps={demoVideo.fps || 30}
    />
  );
};

type MyProps = {
  one: string;
  two: string;
};

const MComposition: React.FC<MyProps> = ({ one, two }) => {
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "4rem",
        }}
      >
        {one} {two}
      </h1>
    </AbsoluteFill>
  );
};
