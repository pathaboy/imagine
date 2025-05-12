"use client";

import { Button } from "@/components/ui/button";
import {
  Captions,
  Clapperboard,
  Frame,
  Link,
  Loader,
  MicVocal,
  Palette,
  Sparkles,
} from "lucide-react";
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import {
  aspectRatios,
  captionFonts,
  imageStyles,
  videoTypes,
  vocals,
} from "@/lib/data";
import { useSession } from "next-auth/react";
import Signin from "./sign-in";
import { useRouter } from "next/navigation";

const VideoGenForm = () => {
  const router = useRouter();
  const session = useSession();
  const [userPrompt, setUserPrompt] = useState("");
  const [style, setStyle] = useState("anime");
  const [voiceId, setVoiceId] = useState("en-TZ-ImaniNeural");
  const [captionFont, setCaptionFont] = useState("Kavoon");
  const [aspectRatio, setAspectRatio] = useState("video-sixteen-by-nine");
  const [videoType, setVideoType] = useState("motivational-laws");
  const voiceOver = useRef<HTMLInputElement>(null);
  const [voiceoverUrl, setVoiceoverUrl] = useState("");
  const [uploadingAudio, setUploadingAudio] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingAudio(true);
    const res = await axios.post("/api/get-presigned-url", {
      fileName: file.name,
      fileType: file.type,
    });
    const url = res.data.url as string;
    const publicUrl = res.data.publicUrl;
    const uploadRes = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });
    setUploadingAudio(false);

    if (uploadRes.ok) {
      setVoiceoverUrl(publicUrl);
    } else {
      console.error("Upload failed");
    }
  };

  const handleVideoGeneration = async () => {
    try {
      setLoading(true);
      await axios.post("/api/generate-video", {
        videoDetails: {
          userPrompt,
          style,
          voiceId,
          captionFont,
          voiceoverUrl,
          aspectRatio,
          videoType,
        },
      });
      router.push("/my-videos");
    } catch (err: any) {
      console.error(err.message || err);
    } finally {
      setLoading(false);
    }
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
          minLength={3}
          className="bg-inherit w-full h-24 focus:outline-none rounded-xl p-2 resize-none"
          placeholder="Life is beautiful"
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === "Enter") {
              handleVideoGeneration();
            }
          }}
        />
        <div className="flex justify-between">
          <div className="flex gap-1 flex-wrap">
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

            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-primary transition-colors p-2">
                  {uploadingAudio ? (
                    <Loader className="animate-spin" />
                  ) : (
                    <Link />
                  )}
                </button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-2xl text-center h-auto overflow-y-visible">
                <DialogHeader>
                  <DialogTitle>Upload Audio File</DialogTitle>
                </DialogHeader>
                <p className="mb-4 text-muted-foreground">
                  Choose voiceover audio file (MP3) to use in your project.
                </p>
                <input
                  type="file"
                  ref={voiceOver}
                  accept="audio/*"
                  className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-white hover:file:bg-primary/90"
                  onChange={handleFileChange}
                />
              </DialogContent>
            </Dialog>

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
                      onClick={() => setVoiceId(item.voiceId)}
                      className={`flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 transition-all duration-300 ${
                        item.voiceId === voiceId
                          ? "border-4 border-primary"
                          : ""
                      }`}
                    >
                      <span className="text-lg font-semibold text-gray-700">
                        {item.name}
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
                <div className="w-full p-2 grid grid-cols-2 sm:grid-cols-3 place-items-center gap-4 h-full overflow-y-scroll">
                  {captionFonts.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`cursor-pointer w-full aspect-video flex justify-center items-center bg-black text-white ${
                          item.fontFamily === captionFont
                            ? "border-4 border-primary"
                            : ""
                        }`}
                        style={{
                          fontFamily: item.fontFamily,
                          fontWeight: 600,
                        }}
                        onClick={() => {
                          setCaptionFont(item.fontFamily);
                        }}
                      >
                        Hello, welcome to my world
                      </div>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>

            {/* Aspect ratio Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-primary transition-colors p-2">
                  <Frame />
                </button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-4xl text-center h-full overflow-y-visible">
                <DialogHeader>
                  <DialogTitle>Choose the Aspect ratio</DialogTitle>
                </DialogHeader>
                <div className="w-full p-2 flex justify-center sm:justify-start items-start gap-4 h-full flex-wrap overflow-y-scroll">
                  {aspectRatios.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`cursor-pointer ${
                          item.name === aspectRatio
                            ? "border-4 border-primary"
                            : ""
                        }`}
                        onClick={() => {
                          setAspectRatio(item.name);
                        }}
                      >
                        <item.component />
                      </div>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>
            {/* Video type Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-primary transition-colors p-2">
                  <Clapperboard />
                </button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-4xl text-center h-full overflow-y-visible">
                <DialogHeader>
                  <DialogTitle>Choose the style of video:</DialogTitle>
                </DialogHeader>
                <div className="w-full p-2 grid grid-cols-2 sm:grid-cols-3 place-items-center gap-4 h-full overflow-y-scroll">
                  {videoTypes.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`cursor-pointer w-full aspect-video flex justify-center items-center bg-black text-white ${
                          item.videoType === videoType
                            ? "border-4 border-primary"
                            : ""
                        }`}
                        onClick={() => {
                          setVideoType(item.videoType);
                        }}
                      >
                        {item.videoType.split("-").join(" ")}
                      </div>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {session.data?.user?.email ? (
            <Button
              disabled={userPrompt.length <= 3 || loading}
              onClick={(e) => {
                e.preventDefault();
                handleVideoGeneration();
              }}
              className="flex disabled:bg-gray-600 disabled:cursor-not-allowed items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow-md active:scale-95 transition-all"
            >
              <Sparkles size={18} />
              Generate
            </Button>
          ) : (
            <Signin>Create</Signin>
          )}
        </div>
      </form>
    </div>
  );
};

export default VideoGenForm;
