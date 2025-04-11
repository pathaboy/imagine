"use client";
import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame } from "remotion";

const SceneOne = ({ imageurl }: { imageurl: string }) => {
  const frame = useCurrentFrame();
  const black = interpolate(frame, [0, 30, 360, 420], [0.8, 0, 0, 1]);
  return (
    <AbsoluteFill>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "black",
            opacity: black,
          }}
        />
        <Img
          src={imageurl}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export default SceneOne;
