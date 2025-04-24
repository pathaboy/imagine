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
        durationInFrames={30 * 193}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
