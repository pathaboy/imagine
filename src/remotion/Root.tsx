import {
  AbsoluteFill,
  cancelRender,
  Composition,
  continueRender,
  delayRender,
} from "remotion";
import "../app/globals.css";
import { SixteenByNineVideo } from "./video-templates/sixteen-by-nine";
import { demoVideo } from "../lib/data";
import { FullScreenVideo } from "./video-templates/full-screen";

export const RemotionRoot: React.FC = () => {
  const videoId = demoVideo.id;
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
      component={SixteenByNineVideo}
      defaultProps={{
        audioUrl: demoVideo.voiceOver[0].audioUrl,
        bgmUrl: demoVideo.bgm.bgmUrl,
        captionStyle: demoVideo.captionStyle,
        captions: demoVideo.transcribedWords,
        scenes: scenes,
      }}
      durationInFrames={Math.floor(
        (demoVideo.totalDuration / 1000) * demoVideo.fps + 10 * demoVideo.fps
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
      width={1280}
      height={720}
      fps={demoVideo.fps || 30}
    />
  );
};

// export const RemotionRoot: React.FC = () => {
//   return (
//     <Composition
//       id="MyComp"
//       component={MyComposition}
//       width={1280}
//       height={720}
//       fps={30}
//       durationInFrames={demoVideo.scenes[demoVideo.scenes.length - 1].end}
//     />
//   );
// };
