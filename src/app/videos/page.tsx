"use client";
import React, { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { redirect, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import { SixteenByNineVideo } from "@/remotion/video-templates/sixteen-by-nine";

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
      } catch (err) {
        console.error("Failed to fetch video:", err);
      }
    };
    fetchVideoData();
  }, [videoId]);

  console.log(video);
  if (!video) return <div>Loading video...</div>;

  const inputsProps = {
    bgmUrl: video?.bgm?.bgmUrl || "",
    audioUrl: video.voiceOver[0]?.audioUrl || "",
    captionStyle: video?.captionStyle || "caption-style-two",
    captionFont: video?.captionFont,
    scenes: video?.scenes?.map((scene: any) => ({
      number: scene.number,
      start: scene.start,
      end: scene.end,
      motionTemplateId: scene.motionTemplateId,
      imageUrl: scene.imageUrl,
    })),
    captions: video?.transcribedWords,
  };

  return (
    <div className="w-full h-full">
      <Player
        controls
        component={SixteenByNineVideo}
        inputProps={inputsProps}
        durationInFrames={
          Math.floor(video.totalDuration / 1000) * video.fps || 3 * 60 * 30
        }
        compositionWidth={video.aspectRatio.width}
        compositionHeight={video.aspectRatio.height}
        fps={video?.fps || 30}
      />
    </div>
  );
};

export default VideoPage;
