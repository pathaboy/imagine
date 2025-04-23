"use client";
import React, { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { VideoOne } from "@/remotion/video-templates/VideoOne";
import { redirect, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import { FourByThreeVideo } from "@/remotion/video-templates/four-by-three";

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
    console.log(video);
  }, [videoId]);

  if (!video) return <div>Loading video...</div>;

  const inputsProps = {
    bgmUrl: video?.bgm?.bgmUrl || "",
    audioUrl: video.voiceOver[0]?.audioUrl || "",
    captionStyle: video?.captionStyle || "caption-style-two",
    scenes: video?.scenes?.map((scene) => ({
      number: scene.number,
      start: scene.start,
      end: scene.end,
      motionTemplateId: scene.motionTemplateId,
      imageUrl: scene.imageUrl,
    })),
    transcriptionId: video?.transcriptionId,
  };

  return (
    <div className="w-full h-full">
      <Player
        controls
        component={FourByThreeVideo}
        inputProps={inputsProps}
        durationInFrames={Math.floor(video.totalDuration / 1000) * video.fps}
        compositionWidth={1280}
        compositionHeight={720}
        fps={video?.fps || 30}
      />
    </div>
  );
};

export default VideoPage;
