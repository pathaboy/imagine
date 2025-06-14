"use client";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import React, { useEffect, useMemo, useState } from "react";
import { TransitionSeries } from "@remotion/transitions";
import { addMotionToImages, MotionImage } from "../../lib/data";
import { CaptionStyleOne } from "../caption-styles/caption-style-one";
import {
  ArrowLeft,
  Check,
  CheckCheck,
  SendHorizontal,
  Smile,
} from "lucide-react";
import Battery2Bar from "@mui/icons-material/Battery2Bar";
import SignalCellular2Bar from "@mui/icons-material/SignalCellular2Bar";
import NetworkWifi from "@mui/icons-material/NetworkWifi";
import Videocam from "@mui/icons-material/VideocamOutlined";
import Call from "@mui/icons-material/CallOutlined";
import MoreVert from "@mui/icons-material/MoreVert";
import Send from "@mui/icons-material/Send";
import AttachFile from "@mui/icons-material/AttachFile";

type FullScreenVideoProps = {
  scenes: MotionImage[];
  captions: string;
  captionStyle: string;
  captionFont: string;
  bgmUrl: string;
  audioUrl: string;
  videoSize: string
};

const chatInterval = 30 * 3;

export const WhatsappDiaries: React.FC<FullScreenVideoProps> = ({
  audioUrl,
  bgmUrl,
  captionFont,
  scenes,
  captions,
}) => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <Img
        src={staticFile("/assets/images/whatsapp-bg.png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <AbsoluteFill>
        <WhatsappScreen />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

type Message = {
  from: string;
  text: string;
  time: string;
};

const WhatsappScreen = () => {
  const messages = [
    {
      from: "me",
      text: "Broooo... emergency!",
      time: "10:00 AM",
      start: 0,
      end: 3000,
    },
    {
      from: "other",
      text: "Again? What did you do this time? 😤",
      time: "10:02 AM",
      start: 3001,
      end: 6000,
    },
    {
      from: "me",
      text: "Locked myself in the bathroom... WITH a chicken 🐔",
      time: "10:03 AM",
      start: 6001,
      end: 9000,
    },
    {
      from: "other",
      text: "WHAT? Why is there a chicken in your bathroom?",
      time: "10:03 AM",
      start: 9001,
      end: 12000,
    },
    {
      from: "me",
      text: "Long story... but it’s angry. Very angry.",
      time: "10:04 AM",
      start: 12001,
      end: 15000,
    },
    {
      from: "me",
      text: "It's been staring at me for 10 minutes straight. No blink. 😳",
      time: "10:05 AM",
      start: 15001,
      end: 18000,
    },
    {
      from: "other",
      text: "Bro are you hallucinating again? Did you drink that expired Red Bull?",
      time: "10:06 AM",
      start: 18001,
      end: 21000,
    },
    {
      from: "me",
      text: "No bro. This bird just pecked at the flush button 💀",
      time: "10:07 AM",
      start: 21001,
      end: 24000,
    },
    {
      from: "other",
      text: "IT KNOWS TECHNOLOGY???",
      time: "10:07 AM",
      start: 24001,
      end: 27000,
    },
    {
      from: "me",
      text: "I'm naming him... Chick Norris 🐔🥋",
      time: "10:08 AM",
      start: 27001,
      end: 30000,
    },
    {
      from: "other",
      text: "I swear if you die like this, I’m not explaining this at your funeral.",
      time: "10:09 AM",
      start: 30001,
      end: 33000,
    },
    {
      from: "me",
      text: "He's moving closer. Send backup. And corn. Preferably buttered. 😭",
      time: "10:10 AM",
      start: 33001,
      end: 36000,
    },
    {
      from: "other",
      text: "I'm screen-recording this. Netflix series incoming 🎥🐓",
      time: "10:10 AM",
      start: 36001,
      end: 39000,
    },
  ];

  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const noOfMessagesSent = Math.floor(frame / chatInterval);

  const messagesSent = useMemo(() => {
    return messages.filter((item, index) => index <= noOfMessagesSent);
  }, [noOfMessagesSent]);

  const currentMessage = messagesSent[messagesSent.length - 1];
  const writingText = currentMessage.text;
  const currentTime = currentMessage.time;

  return (
    <div>
      <Audio src={staticFile("/audio/ambience-sfx/morning-ambience.mp3")} />
      <Series>
        {messages.map((item, index) => {
          const MeAudio = (
            <Audio
              src={staticFile(
                "/audio/whatsapp-sounds/whatsapp-message-sent-sound.mp3"
              )}
            />
          );
          const OtherAudio = (
            <Audio
              src={staticFile(
                "/audio/whatsapp-sounds/whatsapp-incoming-chat-sound.mp3"
              )}
            />
          );
          return (
            <Series.Sequence
              durationInFrames={Math.floor(
                ((item.end - item.start) / 1000) * fps
              )}
            >
              {messagesSent[messagesSent.length - 1].from === "me"
                ? MeAudio
                : OtherAudio}
              <div className="w-full flex justify-center items-center">
                <div
                  style={{
                    aspectRatio: "9/16",
                  }}
                >
                  <div className="w-full h-full flex flex-col shadow-xl rounded-md overflow-hidden">
                    {/* Top status bar */}
                    <div className="bg-black text-white text-lg px-3 py-1 flex justify-between items-center font-mono">
                      <div className="flex items-center gap-1">
                        <span>{currentTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>Jio</span>
                        <span>4G</span>
                        <NetworkWifi fontSize="small" />
                        <SignalCellular2Bar fontSize="small" />
                        <Battery2Bar fontSize="small" />
                      </div>
                    </div>

                    {/* Header */}
                    <div
                      className="bg-[#075e54] text-white p-2 flex items-center justify-between gap-3"
                      style={{
                        fontFamily: "Inter",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <ArrowLeft size={30} />
                          <Img
                            src={staticFile("/assets/images/jonny.jpeg")}
                            className="w-12 h-12 rounded-full bg-white/20"
                          />
                        </div>

                        <div className="flex flex-col">
                          <span className="text-[22px] leading-tight">
                            Jonny
                          </span>
                          <span className="text-md leading-none">online</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Videocam
                          style={{
                            fontSize: "2.5rem",
                          }}
                        />
                        <Call style={{ fontSize: "2rem" }} />
                        <MoreVert style={{ fontSize: "2rem" }} />
                      </div>
                    </div>

                    {/* Chat body */}
                    <div
                      className="flex-1 overflow-y-auto p-3 space-y-2"
                      style={{
                        fontFamily: "Inter",
                      }}
                    >
                      {messagesSent.map((msg: any, i: number) => (
                        <div
                          key={i}
                          className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
                        >
                          {msg.from === "me" ? (
                            <div>
                              <MyChatUI message={msg.text} time={msg.time} />
                            </div>
                          ) : (
                            <div>
                              <OthersChatUI
                                message={msg.text}
                                time={msg.time}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Message input mock (non-functional) */}
                    <div className=" p-2 flex items-center gap-2">
                      <div className="bg-white rounded-full flex items-center gap-3 w-[90%] p-2 text-xl">
                        <Smile size={40} />
                        <div className="relative w-full">
                          <input
                            placeholder="Message"
                            value={writingText}
                            readOnly
                            className="text-3xl rounded-full w-full p-1 bg-inherit text-transparent caret-white border-none focus:outline-none"
                            style={{
                              filter: "blur(8px)", // Makes it unreadable
                              textShadow: "0 0 1px #000", // Creates pixel-y look
                            }}
                          />
                          <div className="absolute inset-0 bg-transparent pointer-events-none" />
                        </div>
                        <AttachFile style={{ fontSize: "2rem" }} />
                      </div>
                      <div className="text-xl w-[9%] aspect-square rounded-full bg-green-500 flex justify-center items-center">
                        <Send
                          style={{
                            fontSize: "2rem",
                            marginLeft: "4px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Series.Sequence>
          );
        })}
      </Series>
    </div>
  );
};

export default WhatsappScreen;

type ChatUIProps = {
  message: string;
  time: string;
};

const MyChatUI = ({ message, time }: ChatUIProps) => {
  return (
    <div>
      <div className="relative bg-[#005c4b] text-white px-4 py-2 rounded-xl max-w-xs text-base leading-snug">
        {/* Tail Notch on top-right */}
        <div className="absolute -right-3 top-0 w-0 h-0 border-t-[0px] border-t-transparent border-l-[20px] border-l-[#005c4b] border-b-[16px] border-b-transparent" />

        <div className="mb-3 min-w-20">{message}</div>
        <div className="flex items-center gap-1 text-[10px] text-white/70 absolute bottom-1 right-2">
          <span>{time}</span>
          <CheckCheck size={18} color="#53bdeb" />
        </div>
      </div>
    </div>
  );
};

const OthersChatUI = ({ message, time }: ChatUIProps) => {
  return (
    <div>
      <div className="flex justify-start px-4 py-2 relative">
        <div className="relative bg-[#2a2a2a] text-white px-4 py-2 rounded-xl max-w-xs text-base leading-snug">
          {/* Tail Notch */}
          <div className="absolute -left-3 top-0 w-0 h-0 border-t-[0px] border-t-transparent border-r-[20px] border-r-[#2a2a2a] border-b-[16px] border-b-transparent" />

          <span className="min-w-20">{message}</span>
          <div className="text-[10px] text-white/60 text-right mt-1">
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};
