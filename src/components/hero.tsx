import React from "react";
import VideoGenForm from "./video-gen-form";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-start text-center px-6 bg-background text-foreground overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 max-sm:-top-10"
        fill="white"
      />
      <div className="max-w-3xl mt-12 md:mt-20">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Turn Your <span className="text-primary">Text</span> into Viral{" "}
          <span className="text-primary">Videos</span> 🚀
        </h1>
        <p className="mt-4 md:mt-6 text-lg text-muted-foreground md:text-2xl text-balance">
          Type your ideas, and let our Editor generate stunning short videos
          with voiceovers, animations, and music.
        </p>
        <div className="w-full mt-6 sm:mt-12  flex justify-center">
          <VideoGenForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
