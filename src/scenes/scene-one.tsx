"use client";
import { captionStyles } from "../lib/data";
import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

const SceneOne = ({
  imageurl,
  captions,
  captionComponentId,
}: {
  imageurl: string;
  captions: string;
  captionComponentId: string;
}) => {
  const Caption = captionStyles.find((item, _index) => {
    return captionComponentId === item.id;
  });
  const frame = useCurrentFrame();
  const black = interpolate(frame, [0, 30, 60, 240, 300], [0.8, 0, 0, 0, 1]);
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
        {Caption && <Caption.component captions={captions} />}
      </div>
    </AbsoluteFill>
  );
};

export default SceneOne;
