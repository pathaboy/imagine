"use client";

import { Button } from "@/components/ui/button";
import {
  Captions,
  Clapperboard,
  MicVocal,
  Palette,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import axios from "axios";
import { captionStyles, imageStyles, vocals } from "@/lib/data";
import Image from "next/image";

const VideoGenForm = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [style, setStyle] = useState("anime");
  const [voiceName, setVoiceName] = useState("alloy");

  const handleVideoGeneration = async () => {
    const response = await axios.post("/api/generate-video", {
      videoDetails: {
        userPrompt,
        style,
        voiceName,
      },
    });
  };

  return (
    <div className="w-full max-w-2xl rounded-xl flex flex-col gap-4 justify-center p-3 shadow-xl">
      <h1 className="text-center text-3xl text-balance">
        💡 Think. 🎬 Generate. 🌍 Share.
      </h1>

      <form className="bg-blue-950/10 min-h-10 border rounded-xl p-3 flex flex-col gap-3">
        <textarea
          onChange={(e) => {
            setUserPrompt(e.target.value);
          }}
          minLength={10}
          className="bg-inherit w-full h-24 focus:outline-none rounded-xl p-2 resize-none"
          placeholder="Create a video on 3 life lessons by Bhagat Singh."
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === "Enter") {
              handleVideoGeneration();
            }
          }}
        />
        <div className="flex justify-between">
          <div className="flex gap-1">
            {/* Palette Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-primary transition-colors p-2">
                  <Palette width={25} />
                </button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-4xl text-center h-full overflow-y-visible">
                <DialogHeader>
                  <DialogTitle>Choose Style of Images</DialogTitle>
                  <p>Select the style you want for your generated images.</p>
                </DialogHeader>

                <div className="w-full p-2 flex justify-center sm:justify-start gap-4 h-full flex-wrap overflow-y-scroll">
                  {imageStyles.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`cursor-pointer max-sm:w-[70%] w-[40%] aspect-square rounded-md ${
                          style === item.name ? "border-4 border-primary" : ""
                        }`}
                        style={{
                          backgroundImage: `url('${item.imageUrl}')`,
                          backgroundSize: "cover",
                        }}
                        onClick={() => {
                          setStyle(item.name);
                        }}
                      >
                        <h1 className="bg-black/60 text-xl font-bold text-white rounded-t-md tracking-tighter">
                          {item.name}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>

            {/* Video Template Modal */}
            {/* <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary transition-colors p-2">
                    <Clapperboard />
                  </button>
                </DialogTrigger>
                <DialogContent className="w-full max-w-4xl text-center h-full overflow-y-visible">
                  <DialogHeader>
                    <DialogTitle>Select Video Template</DialogTitle>
                  </DialogHeader>
                  <p>Pick a template that fits your content.</p>
                </DialogContent>
              </Dialog> */}

            {/* Voice Over Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-primary transition-colors p-2">
                  <MicVocal />
                </button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-4xl text-center h-full overflow-y-visible">
                <DialogHeader>
                  <DialogTitle>Choose a Voice Over</DialogTitle>
                  <p>Pick a voice style for narration.</p>
                </DialogHeader>
                <div className="w-full p-4 flex justify-center sm:justify-start gap-4 h-full flex-wrap overflow-y-scroll">
                  {vocals.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setVoiceName(item.voice)}
                      className={`flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 transition-all duration-300 ${
                        item.voice === voiceName
                          ? "border-4 border-primary"
                          : ""
                      }`}
                    >
                      <span className="text-lg font-semibold text-gray-700">
                        {item.voice}
                      </span>
                      <audio controls className="w-48">
                        <source src={item.previewUrl} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            {/* Captions Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-primary transition-colors p-2">
                  <Captions />
                </button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-4xl text-center h-full overflow-y-visible">
                <DialogHeader>
                  <DialogTitle>Customize Captions</DialogTitle>
                  <p>Enable captions and adjust their settings.</p>
                </DialogHeader>
                <div className="w-full p-2 flex justify-center sm:justify-start items-start gap-4 h-full flex-wrap overflow-y-scroll">
                  {captionStyles.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => {
                          setStyle(item.name);
                        }}
                      >
                        <Image
                          src={item.previewUrl}
                          alt={item.name}
                          width={300}
                          height={100}
                        />
                      </div>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Button
            onClick={(e) => {
              e.preventDefault();
              handleVideoGeneration();
            }}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow-md active:scale-95 transition-all"
          >
            <Sparkles size={18} />
            Generate
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VideoGenForm;
