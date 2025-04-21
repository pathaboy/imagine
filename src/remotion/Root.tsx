import React from "react";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import "../app/globals.css";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Empty"
        component={MyComposition}
        durationInFrames={162 * 60}
        fps={60}
        width={1280}
        height={720}
      />
    </>
  );
};
