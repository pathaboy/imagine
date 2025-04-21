"use client";
import SceneOne from "../scenes/scene-one";
import { CaptionStyleOne } from "../components/caption-styles/caption-style-one";
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
} from "remotion";
import { getFormattedSubs, images, subs } from "../lib/data";

export const MyComposition = () => {
  const { width, height, fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const currentTimeInMs = (frame / fps) * 1000;
  const formattedSubs = useMemo(() => getFormattedSubs(subs), []);

  const image = images.find(
    (item) => item.start <= currentTimeInMs && item.end >= currentTimeInMs
  );

  const textSegment = formattedSubs.find(
    (item) => item.start <= currentTimeInMs && item.end >= currentTimeInMs
  );

  const text = textSegment?.subs.map((item) => item.text).join(" ");
  return (
    <>
      <Audio src={staticFile("/audio/test-2.mp3")} volume={2} />
      <Audio src={staticFile("/audio/attitude-beats.mp3")} volume={0.5} loop />
      <FourByThreeView>
        {image?.imageSrc && (
          <Img
            src={staticFile(image?.imageSrc)}
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}

        <AbsoluteFill
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            justifyContent: textSegment?.textPosition || "center",
            fontWeight: textSegment?.textPosition === "center" ? "700" : "400",
            fontSize: textSegment?.textPosition === "center" ? "7rem" : "3rem",
            color: "white",
            paddingBottom:
              textSegment?.textPosition === "center" ? "0px" : "3rem",
          }}
        >
          <h2
            style={{
              maxWidth: "60vw",
              textAlign: "center",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            {text}
          </h2>
        </AbsoluteFill>
      </FourByThreeView>
    </>
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
