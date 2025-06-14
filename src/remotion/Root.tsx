import { Composition } from "remotion";
import "../app/globals.css";
import { demoVideo } from "../lib/data";
import WhatsappScreen, {
  WhatsappDiaries,
} from "./video-templates/whatsapp-diaries";
import { FullScreenVideo } from "./video-templates/full-screen";

export const RemotionRoot: React.FC = () => {
  const scenes = demoVideo?.scenes.map((item) => {
    return {
      id: item.number,
      start: item.start,
      end: item.end,
      imagePrompt: item.imagePrompt,
      imageUrl: item.imageUrl,
      motionTemplateId: item.motionTemplateId,
      shotSize: "wide-shot",
      cameraAngle: "high-angle",
    };
  });

  return (
    <Composition
      id="MyComp"
      component={FullScreenVideo}
      defaultProps={{
        audioUrl: demoVideo.voiceOver[0].audioUrl,
        bgmUrl: demoVideo.bgm.bgmUrl,
        captionStyle: demoVideo.captionStyle,
        captionFont: "Kavoon",
        captions: demoVideo.transcribedWords,
        scenes: scenes,
        videoSize: demoVideo.aspectRatio.name,
      }}
      durationInFrames={Math.floor(
        (demoVideo.totalDuration / 1000) * demoVideo.fps
      )}
      // calculateMetadata={async () => {
      //   const data = await fetchVideoData(videoId);
      //   const fetchedScenes = data.video?.scenes.map((item: any) => {
      //     return {
      //       id: item.number,
      //       start: item.start,
      //       end: item.end,
      //       imagePrompt: item.imagePromt,
      //       imageUrl: item.imageUrl,
      //       motionTemplateId: item.motionTemplateId,
      //       shotSize: "wide-shot",
      //       cameraAngle: "high-angle",
      //     };
      //   });
      //   return {
      //     fps: data.video.fps,
      //     durationInFrames: Math.floor(
      //       (data.video.totalDuration / 1000) * data.video.fps +
      //         10 * data.video.fps
      //     ),
      //     width: data.video.aspectRatio.width,
      //     height: data.video.aspectRatio.height,
      //     defaultOutName: data.video.id || "comp",
      //     props: {
      //       audioUrl: data.video.voiceOver[0].audioUrl,
      //       bgmUrl: data.video.bgm,
      //       captionStyle: data.video.captionStyle,
      //       captions: data.video.transcribedWords,
      //       scenes: fetchedScenes,
      //     },
      //   };
      // }}
      height={demoVideo.aspectRatio.height}
      width={demoVideo.aspectRatio.width}
      fps={demoVideo.fps || 30}
    />
  );
};
