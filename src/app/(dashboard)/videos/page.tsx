"use client";
import React, { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { VideoOne } from "@/remotion/videos/VideoOne";
import { redirect, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";

const VideoPage = () => {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoid");
  const [video, setVideo] = useState<any>(null);

  const session = useSession();
  if (!session.data?.user) {
    redirect("/");
  }

  useEffect(() => {
    const fetchVideoData = async () => {
      if (!videoId) return;
      try {
        const res = await axios.get(`/api/video-data?videoid=${videoId}`);
        setVideo(res.data.video);
        console.log(res.data.video);
      } catch (err) {
        console.error("Failed to fetch video:", err);
      }
    };
    fetchVideoData();
  }, [videoId]);

  if (!video) return <div>Loading video...</div>;

  const lastScene = video.scenes?.[video.scenes.length - 1];

  const inputsProps = {
    bgmUrl: video?.bgm?.bgmUrl || "",
    fps: video?.fps || 60,
    captions: video?.captions || "[]",
    captionStyle: video?.captionStyle || "default",
    scenes: video?.scenes?.map((scene) => ({
      number: scene.number,
      start: scene.start,
      end: scene.end,
      sceneTemplateId: scene.sceneTemplateId,
      images: scene.images.map((img) => ({
        number: img.number,
        url: img.url,
      })),
      vocals: scene.vocals.map((audio) => ({
        audioUrl: audio.audioUrl,
      })),
    })),
  };

  return (
    <div className="w-full h-full">
      <Player
        controls
        component={VideoOne}
        inputProps={inputsProps}
        durationInFrames={video.totalDuration * video.fps}
        compositionWidth={1280}
        compositionHeight={720}
        fps={video?.fps || 60}
      />
    </div>
  );
};

export default VideoPage;
