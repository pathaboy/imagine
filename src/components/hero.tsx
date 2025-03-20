import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle, Sparkles } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import Signin from "./sign-in";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background text-foreground overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 max-sm:-top-10"
        fill="white"
      />

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Turn Your <span className="text-primary">Text</span> into Viral{" "}
          <span className="text-primary">Videos</span> with AI 🚀
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Type your ideas, and let AI generate stunning short videos with
          voiceovers, animations, and music—ready to share instantly.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Signin>
            <div className="flex items-center gap-2">
              <Sparkles size={20} /> Generate Your First Video
            </div>
          </Signin>
          <Button variant="outline" className="flex items-center gap-2">
            <PlayCircle size={20} /> Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
