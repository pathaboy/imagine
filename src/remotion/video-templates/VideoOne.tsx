"use client";
import { Caption } from "@/remotion/caption-styles/caption-style-one";
import { captionStyles } from "@/lib/data";
import SceneOne from "@/scenes/scene-one";
import { TransitionSeries } from "@remotion/transitions";
import { AbsoluteFill, Audio } from "remotion";

interface Image {
  number: number;
  url: string;
}

interface Vocal {
  audioUrl: string;
}

interface Scene {
  number: number;
  start: number;
  end: number;
  sceneTemplateId: string;
  images: Image[];
  vocals: Vocal[];
}

interface VideoOneProps {
  fps: number;
  scenes: Scene[];
  captions: string;
  captionStyle: string;
  bgmUrl: string;
}

export const VideoOne = ({
  bgmUrl,
  captionStyle,
  captions,
  scenes,
  fps,
}: VideoOneProps) => {
  console.log(bgmUrl, captionStyle, scenes);
  const Caption = captionStyles.find((item, _index) => {
    return captionStyle === item.id;
  });
  const parsedCaptions: Caption[] = JSON.parse(captions);
  return (
    <AbsoluteFill className="bg-blue-500 text-white font-bold">
      <Audio src={bgmUrl} startFrom={120} volume={0.3} loop />
      <TransitionSeries>
        {scenes.map((scene, index) => {
          console.log(scene.end);
          console.log(scene.start);
          return (
            <TransitionSeries.Sequence
              key={index}
              durationInFrames={(scene.end - scene.start) * 60}
            >
              <Audio src={scene.vocals[0].audioUrl} volume={1} />
              <SceneOne imageurl={scene.images[0].url} />
            </TransitionSeries.Sequence>
          );
        })}
      </TransitionSeries>
      {Caption && <Caption.component captions={parsedCaptions} />}
    </AbsoluteFill>
  );
};
