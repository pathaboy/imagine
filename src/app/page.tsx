import { MyComposition } from "@/remotion/Composition";
import { Player } from "@remotion/player";
import React from "react";

const Home = () => {
  return (
    <Player
      component={MyComposition}
      compositionHeight={720}
      compositionWidth={1280}
      fps={60}
      durationInFrames={96 * 60}
      controls
    />
  );
};

export default Home;
