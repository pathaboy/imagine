import { CaptionStyleOne } from "../remotion/caption-styles/caption-style-one";
import React from "react";
import {
  EnterSlideTopDownExitLeft,
  MotionProps,
} from "../remotion/motion-templates/enter-slide-top-down-exit-left";
import { ScaleDownFade } from "../remotion/motion-templates/scale-down-fade";
import { ScaleDownUp } from "../remotion/motion-templates/scale-down-up";
import { CaptionStyleTwo } from "../remotion/caption-styles/caption-style.two";
import { PullOut } from "../remotion/motion-templates/pull-out";
import axios from "axios";
import { ZoomOutAndPullOut } from "../remotion/motion-templates/zoom-out-and-pull-out";
import { PanBottomToUpAndZoomOut } from "../remotion/motion-templates/pan-bottom-up-zoom-out";
import { PanTopToDownAndZoomOut } from "../remotion/motion-templates/pan-top-down-zoom-out";
import { PanRightToLeftAndZoomOut } from "../remotion/motion-templates/pan-right-left-zoom-out";
import { PanLeftToRightAndZoomOut } from "../remotion/motion-templates/pan-left-right-zoom-out";
import { PanBottomToUpAndZoomIn } from "../remotion/motion-templates/pan-bottom-up-zoom-in";
import { PanLeftToRightAndZoomIn } from "../remotion/motion-templates/pan-left-right-zoom-in";
import { PanRightToLeftAndZoomIn } from "../remotion/motion-templates/pan-right-left-zoom-in";
import { PanTopToDownAndZoomIn } from "../remotion/motion-templates/pan-top-down-zoom-in";
import { VideoFullScreen } from "@/components/aspect-ratio-illustration/video-full-screen";
import { MobileFullScreen } from "@/components/aspect-ratio-illustration/mobile-full-screen";
import { VideoSixteenByNine } from "@/components/aspect-ratio-illustration/video-sixteen-by-nine";
import { Component } from "lucide-react";
import { MobileFourByThree } from "@/components/aspect-ratio-illustration/mobile-four-by-three";

export const subs = [
  { text: "You", start: 80, end: 192, confidence: 0.99776, speaker: null },
  { text: "want", start: 192, end: 328, confidence: 0.99926, speaker: null },
  { text: "it", start: 336, end: 472, confidence: 0.99807, speaker: null },
  { text: "all.", start: 496, end: 1064, confidence: 0.93182, speaker: null },
  { text: "The", start: 1232, end: 1560, confidence: 0.92378, speaker: null },
  { text: "car,", start: 1600, end: 2040, confidence: 0.99969, speaker: null },
  { text: "the", start: 2160, end: 2392, confidence: 0.99953, speaker: null },
  {
    text: "house,",
    start: 2416,
    end: 2888,
    confidence: 0.99996,
    speaker: null,
  },
  { text: "the", start: 3024, end: 3320, confidence: 0.9995, speaker: null },
  {
    text: "brand.",
    start: 3360,
    end: 3992,
    confidence: 0.99993,
    speaker: null,
  },
  { text: "But", start: 4176, end: 4472, confidence: 0.99977, speaker: null },
  { text: "what", start: 4496, end: 4632, confidence: 0.99993, speaker: null },
  { text: "if", start: 4656, end: 4792, confidence: 0.99997, speaker: null },
  { text: "I", start: 4816, end: 5000, confidence: 0.99957, speaker: null },
  { text: "told", start: 5040, end: 5240, confidence: 0.99994, speaker: null },
  { text: "you", start: 5280, end: 5672, confidence: 0.9626, speaker: null },
  { text: "owning", start: 5776, end: 6184, confidence: 0.9985, speaker: null },
  { text: "is", start: 6232, end: 6392, confidence: 0.99979, speaker: null },
  { text: "the", start: 6416, end: 6552, confidence: 0.99975, speaker: null },
  { text: "trap,", start: 6576, end: 7144, confidence: 0.99748, speaker: null },
  { text: "not", start: 7272, end: 7512, confidence: 0.99988, speaker: null },
  { text: "the", start: 7536, end: 7672, confidence: 0.9998, speaker: null },
  {
    text: "prize?",
    start: 7696,
    end: 8376,
    confidence: 0.63349,
    speaker: null,
  },
  { text: "What", start: 8568, end: 8872, confidence: 0.99931, speaker: null },
  { text: "if", start: 8896, end: 9080, confidence: 0.62243, speaker: null },
  { text: "your", start: 9120, end: 9320, confidence: 0.99742, speaker: null },
  { text: "dream", start: 9360, end: 9896, confidence: 0.66628, speaker: null },
  { text: "is", start: 10008, end: 10328, confidence: 0.99969, speaker: null },
  {
    text: "debt",
    start: 10384,
    end: 10984,
    confidence: 0.99459,
    speaker: null,
  },
  {
    text: "dressed",
    start: 11112,
    end: 11576,
    confidence: 0.999,
    speaker: null,
  },
  { text: "as", start: 11608, end: 11752, confidence: 0.99984, speaker: null },
  {
    text: "freedom?",
    start: 11776,
    end: 12540,
    confidence: 0.99986,
    speaker: null,
  },
  {
    text: "Here's",
    start: 12880,
    end: 13336,
    confidence: 0.62046,
    speaker: null,
  },
  { text: "the", start: 13368, end: 13512, confidence: 0.99993, speaker: null },
  {
    text: "truth.",
    start: 13536,
    end: 13784,
    confidence: 0.99097,
    speaker: null,
  },
  {
    text: "Nobody",
    start: 13832,
    end: 14216,
    confidence: 0.95482,
    speaker: null,
  },
  {
    text: "whispers.",
    start: 14248,
    end: 14888,
    confidence: 0.75324,
    speaker: null,
  },
  { text: "You", start: 14984, end: 15192, confidence: 0.98703, speaker: null },
  {
    text: "don't",
    start: 15216,
    end: 15416,
    confidence: 0.99392,
    speaker: null,
  },
  { text: "own", start: 15448, end: 15640, confidence: 0.99999, speaker: null },
  {
    text: "what",
    start: 15680,
    end: 15928,
    confidence: 0.99998,
    speaker: null,
  },
  {
    text: "owns",
    start: 15984,
    end: 16296,
    confidence: 0.99842,
    speaker: null,
  },
  {
    text: "you.",
    start: 16328,
    end: 16712,
    confidence: 0.99981,
    speaker: null,
  },
  { text: "And", start: 16816, end: 17080, confidence: 0.59104, speaker: null },
  { text: "that", start: 17120, end: 17320, confidence: 0.9999, speaker: null },
  {
    text: "chain",
    start: 17360,
    end: 17624,
    confidence: 0.8807,
    speaker: null,
  },
  { text: "is", start: 17672, end: 17880, confidence: 0.99992, speaker: null },
  {
    text: "tighter",
    start: 17920,
    end: 18216,
    confidence: 0.99998,
    speaker: null,
  },
  {
    text: "than",
    start: 18248,
    end: 18392,
    confidence: 0.99994,
    speaker: null,
  },
  { text: "you", start: 18416, end: 18552, confidence: 0.99987, speaker: null },
  {
    text: "think.",
    start: 18576,
    end: 19140,
    confidence: 0.9999,
    speaker: null,
  },
  {
    text: "Most",
    start: 19440,
    end: 19800,
    confidence: 0.99996,
    speaker: null,
  },
  {
    text: "people",
    start: 19840,
    end: 20136,
    confidence: 0.99999,
    speaker: null,
  },
  {
    text: "fail",
    start: 20208,
    end: 20488,
    confidence: 0.99968,
    speaker: null,
  },
  {
    text: "because",
    start: 20544,
    end: 20760,
    confidence: 0.99996,
    speaker: null,
  },
  { text: "they", start: 20800, end: 20952, confidence: 0.9996, speaker: null },
  {
    text: "confuse",
    start: 20976,
    end: 21384,
    confidence: 0.95992,
    speaker: null,
  },
  {
    text: "ownership",
    start: 21432,
    end: 21896,
    confidence: 0.99998,
    speaker: null,
  },
  {
    text: "with",
    start: 21928,
    end: 22168,
    confidence: 0.99993,
    speaker: null,
  },
  {
    text: "security.",
    start: 22224,
    end: 22820,
    confidence: 0.99812,
    speaker: null,
  },
  {
    text: "They",
    start: 23120,
    end: 23480,
    confidence: 0.99973,
    speaker: null,
  },
  {
    text: "bury",
    start: 23520,
    end: 23944,
    confidence: 0.99995,
    speaker: null,
  },
  {
    text: "themselves",
    start: 23992,
    end: 24472,
    confidence: 0.99994,
    speaker: null,
  },
  {
    text: "under",
    start: 24536,
    end: 24760,
    confidence: 0.99982,
    speaker: null,
  },
  {
    text: "bills,",
    start: 24800,
    end: 25440,
    confidence: 0.9968,
    speaker: null,
  },
  {
    text: "lows,",
    start: 25560,
    end: 26192,
    confidence: 0.88857,
    speaker: null,
  },
  {
    text: "keepsakes.",
    start: 26256,
    end: 27140,
    confidence: 0.99511,
    speaker: null,
  },
  {
    text: "Mistaking",
    start: 27560,
    end: 28240,
    confidence: 0.88798,
    speaker: null,
  },
  {
    text: "possession",
    start: 28320,
    end: 28864,
    confidence: 0.99952,
    speaker: null,
  },
  { text: "for", start: 28912, end: 29168, confidence: 0.99924, speaker: null },
  {
    text: "power.",
    start: 29224,
    end: 29776,
    confidence: 0.98391,
    speaker: null,
  },
  {
    text: "Forgetting",
    start: 29928,
    end: 30496,
    confidence: 0.99384,
    speaker: null,
  },
  {
    text: "that",
    start: 30528,
    end: 30720,
    confidence: 0.99973,
    speaker: null,
  },
  {
    text: "real",
    start: 30760,
    end: 31056,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "power",
    start: 31128,
    end: 31408,
    confidence: 0.99996,
    speaker: null,
  },
  { text: "is", start: 31464, end: 31680, confidence: 0.99942, speaker: null },
  {
    text: "light.",
    start: 31720,
    end: 32300,
    confidence: 0.99742,
    speaker: null,
  },
  {
    text: "That",
    start: 32840,
    end: 33152,
    confidence: 0.99958,
    speaker: null,
  },
  {
    text: "internal",
    start: 33176,
    end: 33696,
    confidence: 0.99888,
    speaker: null,
  },
  {
    text: "weight.",
    start: 33728,
    end: 34224,
    confidence: 0.98318,
    speaker: null,
  },
  {
    text: "It's",
    start: 34352,
    end: 34736,
    confidence: 0.96476,
    speaker: null,
  },
  {
    text: "fear.",
    start: 34768,
    end: 35392,
    confidence: 0.98968,
    speaker: null,
  },
  {
    text: "Fear",
    start: 35536,
    end: 35936,
    confidence: 0.99933,
    speaker: null,
  },
  { text: "of", start: 35968, end: 36112, confidence: 0.99965, speaker: null },
  {
    text: "letting",
    start: 36136,
    end: 36416,
    confidence: 0.99991,
    speaker: null,
  },
  { text: "go.", start: 36448, end: 36736, confidence: 0.99939, speaker: null },
  {
    text: "Fear",
    start: 36808,
    end: 37056,
    confidence: 0.99877,
    speaker: null,
  },
  { text: "of", start: 37088, end: 37280, confidence: 0.9851, speaker: null },
  {
    text: "being",
    start: 37320,
    end: 37520,
    confidence: 0.99974,
    speaker: null,
  },
  {
    text: "naked",
    start: 37560,
    end: 37936,
    confidence: 0.99971,
    speaker: null,
  },
  { text: "in", start: 37968, end: 38064, confidence: 0.9997, speaker: null },
  { text: "the", start: 38072, end: 38240, confidence: 0.99946, speaker: null },
  {
    text: "world.",
    start: 38280,
    end: 38860,
    confidence: 0.99899,
    speaker: null,
  },
  {
    text: "That's",
    start: 39240,
    end: 39696,
    confidence: 0.99755,
    speaker: null,
  },
  {
    text: "what",
    start: 39728,
    end: 39920,
    confidence: 0.99987,
    speaker: null,
  },
  {
    text: "owns",
    start: 39960,
    end: 40208,
    confidence: 0.99916,
    speaker: null,
  },
  {
    text: "you.",
    start: 40224,
    end: 40736,
    confidence: 0.99763,
    speaker: null,
  },
  {
    text: "Atomic",
    start: 40888,
    end: 41504,
    confidence: 0.81499,
    speaker: null,
  },
  { text: "Law", start: 41552, end: 41856, confidence: 0.99557, speaker: null },
  { text: "1.", start: 41928, end: 42304, confidence: 0.90957, speaker: null },
  { text: "The", start: 42392, end: 42592, confidence: 0.99565, speaker: null },
  {
    text: "leash",
    start: 42616,
    end: 42960,
    confidence: 0.9272,
    speaker: null,
  },
  { text: "of", start: 43040, end: 43280, confidence: 0.99949, speaker: null },
  {
    text: "Liability",
    start: 43320,
    end: 44176,
    confidence: 0.63604,
    speaker: null,
  },
  {
    text: "Meet",
    start: 44368,
    end: 44720,
    confidence: 0.85503,
    speaker: null,
  },
  { text: "Amir", start: 44760, end: 45616, confidence: 0.974, speaker: null },
  {
    text: "Bought",
    start: 45808,
    end: 46128,
    confidence: 0.99966,
    speaker: null,
  },
  { text: "the", start: 46144, end: 46272, confidence: 0.99977, speaker: null },
  {
    text: "flashiest",
    start: 46296,
    end: 46896,
    confidence: 0.74224,
    speaker: null,
  },
  { text: "car", start: 46928, end: 47120, confidence: 0.99979, speaker: null },
  { text: "on", start: 47160, end: 47360, confidence: 0.99958, speaker: null },
  {
    text: "credit",
    start: 47400,
    end: 48176,
    confidence: 0.98413,
    speaker: null,
  },
  {
    text: "every",
    start: 48368,
    end: 48720,
    confidence: 0.99954,
    speaker: null,
  },
  {
    text: "month.",
    start: 48760,
    end: 49008,
    confidence: 0.99984,
    speaker: null,
  },
  { text: "His", start: 49064, end: 49280, confidence: 0.99965, speaker: null },
  {
    text: "paycheck",
    start: 49320,
    end: 49904,
    confidence: 0.66528,
    speaker: null,
  },
  {
    text: "vanished.",
    start: 49952,
    end: 50704,
    confidence: 0.86369,
    speaker: null,
  },
  { text: "Car", start: 50832, end: 51168, confidence: 0.98267, speaker: null },
  {
    text: "payment,",
    start: 51224,
    end: 51752,
    confidence: 0.99814,
    speaker: null,
  },
  {
    text: "insurance,",
    start: 51856,
    end: 52696,
    confidence: 0.99636,
    speaker: null,
  },
  {
    text: "repairs.",
    start: 52808,
    end: 53752,
    confidence: 0.99873,
    speaker: null,
  },
  {
    text: "Freedom.",
    start: 53896,
    end: 54712,
    confidence: 0.99522,
    speaker: null,
  },
  { text: "No.", start: 54856, end: 55352, confidence: 0.99892, speaker: null },
  { text: "He", start: 55456, end: 55720, confidence: 0.99876, speaker: null },
  { text: "was", start: 55760, end: 55960, confidence: 0.99987, speaker: null },
  {
    text: "chained.",
    start: 56000,
    end: 56584,
    confidence: 0.99921,
    speaker: null,
  },
  {
    text: "Slave",
    start: 56712,
    end: 57144,
    confidence: 0.99701,
    speaker: null,
  },
  { text: "to", start: 57192, end: 57352, confidence: 0.99953, speaker: null },
  { text: "the", start: 57376, end: 57560, confidence: 0.89339, speaker: null },
  {
    text: "status",
    start: 57600,
    end: 57944,
    confidence: 0.99927,
    speaker: null,
  },
  {
    text: "symbol.",
    start: 57992,
    end: 58632,
    confidence: 0.9994,
    speaker: null,
  },
  { text: "He", start: 58776, end: 59032, confidence: 0.99963, speaker: null },
  {
    text: "broke",
    start: 59056,
    end: 59256,
    confidence: 0.99977,
    speaker: null,
  },
  { text: "the", start: 59288, end: 59432, confidence: 0.99976, speaker: null },
  {
    text: "leash",
    start: 59456,
    end: 59752,
    confidence: 0.99968,
    speaker: null,
  },
  { text: "of", start: 59816, end: 59992, confidence: 0.99981, speaker: null },
  {
    text: "liability",
    start: 60016,
    end: 60472,
    confidence: 0.99958,
    speaker: null,
  },
  {
    text: "when",
    start: 60536,
    end: 60712,
    confidence: 0.99978,
    speaker: null,
  },
  { text: "he", start: 60736, end: 60920, confidence: 0.99979, speaker: null },
  {
    text: "sold",
    start: 60960,
    end: 61176,
    confidence: 0.99903,
    speaker: null,
  },
  { text: "it.", start: 61208, end: 61400, confidence: 0.99969, speaker: null },
  { text: "And", start: 61440, end: 61688, confidence: 0.88034, speaker: null },
  {
    text: "walked",
    start: 61744,
    end: 62056,
    confidence: 0.99985,
    speaker: null,
  },
  {
    text: "away,",
    start: 62088,
    end: 62616,
    confidence: 0.99797,
    speaker: null,
  },
  {
    text: "cash",
    start: 62768,
    end: 63144,
    confidence: 0.98836,
    speaker: null,
  },
  { text: "in", start: 63192, end: 63400, confidence: 0.99989, speaker: null },
  {
    text: "hand.",
    start: 63440,
    end: 63832,
    confidence: 0.99912,
    speaker: null,
  },
  { text: "No", start: 63936, end: 64200, confidence: 0.99891, speaker: null },
  {
    text: "debt.",
    start: 64240,
    end: 64792,
    confidence: 0.94946,
    speaker: null,
  },
  {
    text: "True",
    start: 64936,
    end: 65256,
    confidence: 0.99915,
    speaker: null,
  },
  {
    text: "ownership",
    start: 65288,
    end: 65832,
    confidence: 0.99994,
    speaker: null,
  },
  {
    text: "starts",
    start: 65896,
    end: 66392,
    confidence: 0.99968,
    speaker: null,
  },
  {
    text: "where",
    start: 66456,
    end: 66680,
    confidence: 0.99915,
    speaker: null,
  },
  {
    text: "debt",
    start: 66720,
    end: 67080,
    confidence: 0.83479,
    speaker: null,
  },
  {
    text: "ends.",
    start: 67160,
    end: 67820,
    confidence: 0.99684,
    speaker: null,
  },
  {
    text: "Atomic",
    start: 68320,
    end: 68936,
    confidence: 0.65013,
    speaker: null,
  },
  { text: "Law", start: 68968, end: 69256, confidence: 0.99764, speaker: null },
  {
    text: "two.",
    start: 69328,
    end: 69656,
    confidence: 0.80254,
    speaker: null,
  },
  { text: "The", start: 69728, end: 69960, confidence: 0.97049, speaker: null },
  {
    text: "Asset",
    start: 70000,
    end: 70472,
    confidence: 0.5505,
    speaker: null,
  },
  {
    text: "Illusion.",
    start: 70536,
    end: 71256,
    confidence: 0.72525,
    speaker: null,
  },
  {
    text: "Sarah",
    start: 71368,
    end: 71944,
    confidence: 0.70436,
    speaker: null,
  },
  {
    text: "inherited",
    start: 71992,
    end: 72504,
    confidence: 0.98144,
    speaker: null,
  },
  { text: "her", start: 72552, end: 72760, confidence: 0.99936, speaker: null },
  {
    text: "family",
    start: 72800,
    end: 73144,
    confidence: 0.99987,
    speaker: null,
  },
  {
    text: "home,",
    start: 73232,
    end: 73528,
    confidence: 0.99988,
    speaker: null,
  },
  { text: "but", start: 73584, end: 73848, confidence: 0.97924, speaker: null },
  {
    text: "called",
    start: 73904,
    end: 74120,
    confidence: 0.99928,
    speaker: null,
  },
  { text: "it", start: 74160, end: 74312, confidence: 0.99954, speaker: null },
  { text: "a", start: 74336, end: 74472, confidence: 0.9983, speaker: null },
  {
    text: "gold",
    start: 74496,
    end: 74728,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "mine.",
    start: 74784,
    end: 75480,
    confidence: 0.38804,
    speaker: null,
  },
  {
    text: "Truth.",
    start: 75640,
    end: 76424,
    confidence: 0.95331,
    speaker: null,
  },
  { text: "It", start: 76552, end: 76792, confidence: 0.99762, speaker: null },
  { text: "was", start: 76816, end: 76904, confidence: 0.9999, speaker: null },
  { text: "a", start: 76912, end: 77032, confidence: 0.99914, speaker: null },
  {
    text: "money",
    start: 77056,
    end: 77288,
    confidence: 0.99968,
    speaker: null,
  },
  {
    text: "pit.",
    start: 77344,
    end: 77882,
    confidence: 0.99882,
    speaker: null,
  },
  {
    text: "Property",
    start: 78016,
    end: 78454,
    confidence: 0.96721,
    speaker: null,
  },
  {
    text: "taxes,",
    start: 78502,
    end: 78982,
    confidence: 0.99976,
    speaker: null,
  },
  {
    text: "repairs,",
    start: 79046,
    end: 79750,
    confidence: 0.99898,
    speaker: null,
  },
  {
    text: "endless",
    start: 79830,
    end: 80262,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "upkeep.",
    start: 80326,
    end: 81190,
    confidence: 0.99946,
    speaker: null,
  },
  { text: "She", start: 81350, end: 81670, confidence: 0.99953, speaker: null },
  {
    text: "lived",
    start: 81710,
    end: 82006,
    confidence: 0.9997,
    speaker: null,
  },
  {
    text: "paycheck",
    start: 82038,
    end: 82486,
    confidence: 0.99698,
    speaker: null,
  },
  { text: "to", start: 82518, end: 82662, confidence: 0.99964, speaker: null },
  {
    text: "paycheck,",
    start: 82686,
    end: 83270,
    confidence: 0.99466,
    speaker: null,
  },
  {
    text: "trapped",
    start: 83350,
    end: 83638,
    confidence: 0.99932,
    speaker: null,
  },
  { text: "in", start: 83654, end: 83830, confidence: 0.99418, speaker: null },
  {
    text: "illusion.",
    start: 83870,
    end: 84566,
    confidence: 0.99758,
    speaker: null,
  },
  {
    text: "Until",
    start: 84678,
    end: 85046,
    confidence: 0.99781,
    speaker: null,
  },
  { text: "she", start: 85118, end: 85350, confidence: 0.99987, speaker: null },
  {
    text: "flipped",
    start: 85390,
    end: 85718,
    confidence: 0.9976,
    speaker: null,
  },
  { text: "it.", start: 85734, end: 86006, confidence: 0.99971, speaker: null },
  {
    text: "Invested",
    start: 86078,
    end: 86646,
    confidence: 0.99988,
    speaker: null,
  },
  { text: "the", start: 86678, end: 86822, confidence: 0.99982, speaker: null },
  {
    text: "profit",
    start: 86846,
    end: 87302,
    confidence: 0.99901,
    speaker: null,
  },
  { text: "and", start: 87366, end: 87638, confidence: 0.90436, speaker: null },
  {
    text: "gained",
    start: 87694,
    end: 88070,
    confidence: 0.9895,
    speaker: null,
  },
  {
    text: "real",
    start: 88150,
    end: 88438,
    confidence: 0.99996,
    speaker: null,
  },
  {
    text: "assets.",
    start: 88494,
    end: 89270,
    confidence: 0.96414,
    speaker: null,
  },
  {
    text: "Cash",
    start: 89430,
    end: 89814,
    confidence: 0.99344,
    speaker: null,
  },
  {
    text: "flow",
    start: 89862,
    end: 90406,
    confidence: 0.96634,
    speaker: null,
  },
  {
    text: "options,",
    start: 90518,
    end: 91350,
    confidence: 0.99961,
    speaker: null,
  },
  {
    text: "breathing",
    start: 91510,
    end: 92054,
    confidence: 0.99441,
    speaker: null,
  },
  {
    text: "room.",
    start: 92102,
    end: 92598,
    confidence: 0.99737,
    speaker: null,
  },
  {
    text: "Assets",
    start: 92734,
    end: 93222,
    confidence: 0.9993,
    speaker: null,
  },
  {
    text: "don't",
    start: 93286,
    end: 93526,
    confidence: 0.99828,
    speaker: null,
  },
  {
    text: "drain",
    start: 93558,
    end: 93814,
    confidence: 0.99633,
    speaker: null,
  },
  {
    text: "you,",
    start: 93862,
    end: 94358,
    confidence: 0.99881,
    speaker: null,
  },
  {
    text: "they",
    start: 94494,
    end: 94838,
    confidence: 0.99724,
    speaker: null,
  },
  {
    text: "feed",
    start: 94894,
    end: 95174,
    confidence: 0.99975,
    speaker: null,
  },
  {
    text: "you.",
    start: 95222,
    end: 95622,
    confidence: 0.99842,
    speaker: null,
  },
  {
    text: "Spot",
    start: 95726,
    end: 96086,
    confidence: 0.99522,
    speaker: null,
  },
  { text: "the", start: 96118, end: 96262, confidence: 0.99983, speaker: null },
  {
    text: "illusion.",
    start: 96286,
    end: 96918,
    confidence: 0.8138,
    speaker: null,
  },
  {
    text: "Escape",
    start: 97014,
    end: 97542,
    confidence: 0.98239,
    speaker: null,
  },
  { text: "the", start: 97606, end: 97830, confidence: 0.9934, speaker: null },
  {
    text: "sinkhole.",
    start: 97870,
    end: 98790,
    confidence: 0.72427,
    speaker: null,
  },
  {
    text: "Atomic",
    start: 98950,
    end: 99526,
    confidence: 0.56087,
    speaker: null,
  },
  { text: "law", start: 99558, end: 99798, confidence: 0.99664, speaker: null },
  { text: "3.", start: 99854, end: 100262, confidence: 0.72894, speaker: null },
  {
    text: "The",
    start: 100366,
    end: 100582,
    confidence: 0.97952,
    speaker: null,
  },
  {
    text: "ritual",
    start: 100606,
    end: 100966,
    confidence: 0.99952,
    speaker: null,
  },
  {
    text: "of",
    start: 100998,
    end: 101190,
    confidence: 0.99779,
    speaker: null,
  },
  {
    text: "Release.",
    start: 101230,
    end: 101814,
    confidence: 0.9186,
    speaker: null,
  },
  {
    text: "Carlos",
    start: 101982,
    end: 102582,
    confidence: 0.65087,
    speaker: null,
  },
  {
    text: "carried",
    start: 102646,
    end: 102918,
    confidence: 0.97919,
    speaker: null,
  },
  { text: "a", start: 102934, end: 103062, confidence: 0.99957, speaker: null },
  {
    text: "backpack",
    start: 103086,
    end: 103622,
    confidence: 0.59208,
    speaker: null,
  },
  {
    text: "stuffed",
    start: 103686,
    end: 104242,
    confidence: 0.97411,
    speaker: null,
  },
  {
    text: "with",
    start: 104326,
    end: 104570,
    confidence: 0.99472,
    speaker: null,
  },
  {
    text: "souvenirs",
    start: 104610,
    end: 105226,
    confidence: 0.99925,
    speaker: null,
  },
  {
    text: "from",
    start: 105258,
    end: 105450,
    confidence: 0.99966,
    speaker: null,
  },
  {
    text: "failures.",
    start: 105490,
    end: 106202,
    confidence: 0.99548,
    speaker: null,
  },
  {
    text: "Loans.",
    start: 106346,
    end: 106794,
    confidence: 0.99942,
    speaker: null,
  },
  {
    text: "He",
    start: 106842,
    end: 107002,
    confidence: 0.99984,
    speaker: null,
  },
  {
    text: "took",
    start: 107026,
    end: 107402,
    confidence: 0.99993,
    speaker: null,
  },
  {
    text: "things",
    start: 107506,
    end: 107818,
    confidence: 0.99973,
    speaker: null,
  },
  {
    text: "he",
    start: 107874,
    end: 108042,
    confidence: 0.99956,
    speaker: null,
  },
  {
    text: "needed.",
    start: 108066,
    end: 108586,
    confidence: 0.99794,
    speaker: null,
  },
  {
    text: "Bank",
    start: 108698,
    end: 109018,
    confidence: 0.99998,
    speaker: null,
  },
  {
    text: "statements.",
    start: 109074,
    end: 109546,
    confidence: 0.9959,
    speaker: null,
  },
  {
    text: "Screaming.",
    start: 109578,
    end: 110410,
    confidence: 0.99298,
    speaker: null,
  },
  {
    text: "One",
    start: 110570,
    end: 110890,
    confidence: 0.99953,
    speaker: null,
  },
  {
    text: "night,",
    start: 110930,
    end: 111274,
    confidence: 0.99999,
    speaker: null,
  },
  {
    text: "after",
    start: 111362,
    end: 111706,
    confidence: 0.99996,
    speaker: null,
  },
  {
    text: "months",
    start: 111778,
    end: 112010,
    confidence: 0.99987,
    speaker: null,
  },
  {
    text: "of",
    start: 112050,
    end: 112202,
    confidence: 0.99995,
    speaker: null,
  },
  {
    text: "anxiety,",
    start: 112226,
    end: 113050,
    confidence: 0.75415,
    speaker: null,
  },
  {
    text: "he",
    start: 113210,
    end: 113530,
    confidence: 0.99968,
    speaker: null,
  },
  {
    text: "burned",
    start: 113570,
    end: 113962,
    confidence: 0.96651,
    speaker: null,
  },
  {
    text: "that",
    start: 114026,
    end: 114298,
    confidence: 0.99962,
    speaker: null,
  },
  {
    text: "bag.",
    start: 114354,
    end: 114970,
    confidence: 0.9994,
    speaker: null,
  },
  {
    text: "He",
    start: 115130,
    end: 115402,
    confidence: 0.99966,
    speaker: null,
  },
  {
    text: "didn't",
    start: 115426,
    end: 115626,
    confidence: 0.97853,
    speaker: null,
  },
  {
    text: "just",
    start: 115658,
    end: 115850,
    confidence: 0.99994,
    speaker: null,
  },
  {
    text: "destroy",
    start: 115890,
    end: 116394,
    confidence: 0.99976,
    speaker: null,
  },
  {
    text: "stuff.",
    start: 116442,
    end: 116890,
    confidence: 0.95229,
    speaker: null,
  },
  {
    text: "He",
    start: 116970,
    end: 117210,
    confidence: 0.99955,
    speaker: null,
  },
  {
    text: "extinguished",
    start: 117250,
    end: 117914,
    confidence: 0.9994,
    speaker: null,
  },
  {
    text: "limitation.",
    start: 117962,
    end: 118906,
    confidence: 0.99128,
    speaker: null,
  },
  {
    text: "That",
    start: 119098,
    end: 119402,
    confidence: 0.99206,
    speaker: null,
  },
  {
    text: "ritual.",
    start: 119426,
    end: 120122,
    confidence: 0.99592,
    speaker: null,
  },
  { text: "A", start: 120266, end: 120522, confidence: 0.98561, speaker: null },
  {
    text: "rebirth.",
    start: 120546,
    end: 121402,
    confidence: 0.98392,
    speaker: null,
  },
  {
    text: "Ownership",
    start: 121546,
    end: 122154,
    confidence: 0.99982,
    speaker: null,
  },
  {
    text: "is",
    start: 122202,
    end: 122362,
    confidence: 0.99962,
    speaker: null,
  },
  {
    text: "not",
    start: 122386,
    end: 122522,
    confidence: 0.99898,
    speaker: null,
  },
  {
    text: "about",
    start: 122546,
    end: 122778,
    confidence: 0.99982,
    speaker: null,
  },
  {
    text: "holding",
    start: 122834,
    end: 123194,
    confidence: 0.99978,
    speaker: null,
  },
  {
    text: "tight.",
    start: 123242,
    end: 123706,
    confidence: 0.99734,
    speaker: null,
  },
  {
    text: "It's",
    start: 123818,
    end: 124186,
    confidence: 0.565,
    speaker: null,
  },
  {
    text: "about",
    start: 124218,
    end: 124458,
    confidence: 0.99985,
    speaker: null,
  },
  {
    text: "knowing",
    start: 124514,
    end: 124922,
    confidence: 0.9997,
    speaker: null,
  },
  {
    text: "when",
    start: 124986,
    end: 125258,
    confidence: 0.99977,
    speaker: null,
  },
  { text: "to", start: 125314, end: 125482, confidence: 0.9996, speaker: null },
  {
    text: "let",
    start: 125506,
    end: 125738,
    confidence: 0.99988,
    speaker: null,
  },
  {
    text: "go.",
    start: 125794,
    end: 126202,
    confidence: 0.99713,
    speaker: null,
  },
  {
    text: "To",
    start: 126306,
    end: 126570,
    confidence: 0.99892,
    speaker: null,
  },
  {
    text: "grow.",
    start: 126610,
    end: 127190,
    confidence: 0.99883,
    speaker: null,
  },
  {
    text: "Cut",
    start: 129250,
    end: 129658,
    confidence: 0.99256,
    speaker: null,
  },
  {
    text: "your",
    start: 129714,
    end: 129882,
    confidence: 0.99577,
    speaker: null,
  },
  {
    text: "subscriptions",
    start: 129906,
    end: 130522,
    confidence: 0.95133,
    speaker: null,
  },
  {
    text: "till",
    start: 130586,
    end: 130778,
    confidence: 0.92962,
    speaker: null,
  },
  {
    text: "your",
    start: 130794,
    end: 130970,
    confidence: 0.99292,
    speaker: null,
  },
  {
    text: "bank",
    start: 131010,
    end: 131210,
    confidence: 0.99808,
    speaker: null,
  },
  {
    text: "account",
    start: 131250,
    end: 131546,
    confidence: 0.99977,
    speaker: null,
  },
  {
    text: "breathes.",
    start: 131618,
    end: 132538,
    confidence: 0.68039,
    speaker: null,
  },
  {
    text: "Rent.",
    start: 132714,
    end: 133114,
    confidence: 0.99304,
    speaker: null,
  },
  {
    text: "Before",
    start: 133162,
    end: 133370,
    confidence: 0.9998,
    speaker: null,
  },
  {
    text: "you",
    start: 133410,
    end: 133658,
    confidence: 0.99916,
    speaker: null,
  },
  {
    text: "buy,",
    start: 133714,
    end: 134122,
    confidence: 0.73019,
    speaker: null,
  },
  {
    text: "test",
    start: 134226,
    end: 134538,
    confidence: 0.99635,
    speaker: null,
  },
  {
    text: "your",
    start: 134594,
    end: 134810,
    confidence: 0.97386,
    speaker: null,
  },
  {
    text: "freedom.",
    start: 134850,
    end: 135242,
    confidence: 0.99909,
    speaker: null,
  },
  {
    text: "First.",
    start: 135306,
    end: 135962,
    confidence: 0.99956,
    speaker: null,
  },
  {
    text: "Automate.",
    start: 136146,
    end: 136794,
    confidence: 0.8754,
    speaker: null,
  },
  {
    text: "Savings.",
    start: 136842,
    end: 137498,
    confidence: 0.99964,
    speaker: null,
  },
  {
    text: "Not",
    start: 137594,
    end: 137898,
    confidence: 0.99856,
    speaker: null,
  },
  {
    text: "spending.",
    start: 137954,
    end: 138826,
    confidence: 0.98652,
    speaker: null,
  },
  {
    text: "Ask",
    start: 139018,
    end: 139370,
    confidence: 0.88024,
    speaker: null,
  },
  {
    text: "yourself",
    start: 139410,
    end: 139850,
    confidence: 0.99878,
    speaker: null,
  },
  {
    text: "daily",
    start: 139930,
    end: 140474,
    confidence: 0.79686,
    speaker: null,
  },
  {
    text: "what",
    start: 140602,
    end: 140938,
    confidence: 0.99929,
    speaker: null,
  },
  {
    text: "owes",
    start: 140994,
    end: 141354,
    confidence: 0.15321,
    speaker: null,
  },
  {
    text: "me.",
    start: 141402,
    end: 141562,
    confidence: 0.99986,
    speaker: null,
  },
  {
    text: "Today.",
    start: 141586,
    end: 142150,
    confidence: 0.99865,
    speaker: null,
  },
  {
    text: "Declutter",
    start: 142770,
    end: 143434,
    confidence: 0.87716,
    speaker: null,
  },
  {
    text: "your",
    start: 143482,
    end: 143690,
    confidence: 0.99867,
    speaker: null,
  },
  {
    text: "life",
    start: 143730,
    end: 143978,
    confidence: 0.99996,
    speaker: null,
  },
  {
    text: "like",
    start: 144034,
    end: 144250,
    confidence: 0.99931,
    speaker: null,
  },
  {
    text: "your",
    start: 144290,
    end: 144442,
    confidence: 0.99917,
    speaker: null,
  },
  {
    text: "sanity",
    start: 144466,
    end: 144922,
    confidence: 0.99997,
    speaker: null,
  },
  {
    text: "depends",
    start: 144986,
    end: 145338,
    confidence: 0.99996,
    speaker: null,
  },
  {
    text: "on",
    start: 145354,
    end: 145530,
    confidence: 0.97398,
    speaker: null,
  },
  {
    text: "it.",
    start: 145570,
    end: 146058,
    confidence: 0.99913,
    speaker: null,
  },
  {
    text: "Because",
    start: 146194,
    end: 146490,
    confidence: 0.99631,
    speaker: null,
  },
  {
    text: "it",
    start: 146530,
    end: 146730,
    confidence: 0.99986,
    speaker: null,
  },
  {
    text: "does.",
    start: 146770,
    end: 147354,
    confidence: 0.99469,
    speaker: null,
  },
  {
    text: "You",
    start: 147522,
    end: 147802,
    confidence: 0.99924,
    speaker: null,
  },
  {
    text: "are",
    start: 147826,
    end: 148010,
    confidence: 0.9994,
    speaker: null,
  },
  {
    text: "not",
    start: 148050,
    end: 148202,
    confidence: 0.99995,
    speaker: null,
  },
  {
    text: "your",
    start: 148226,
    end: 148458,
    confidence: 0.99836,
    speaker: null,
  },
  {
    text: "possessions.",
    start: 148514,
    end: 149418,
    confidence: 0.82378,
    speaker: null,
  },
  {
    text: "You",
    start: 149594,
    end: 149882,
    confidence: 0.99968,
    speaker: null,
  },
  {
    text: "are",
    start: 149906,
    end: 150042,
    confidence: 0.99992,
    speaker: null,
  },
  {
    text: "the",
    start: 150066,
    end: 150202,
    confidence: 0.99967,
    speaker: null,
  },
  {
    text: "master",
    start: 150226,
    end: 150618,
    confidence: 0.62241,
    speaker: null,
  },
  {
    text: "of",
    start: 150634,
    end: 150762,
    confidence: 0.99916,
    speaker: null,
  },
  {
    text: "your",
    start: 150786,
    end: 150970,
    confidence: 0.9994,
    speaker: null,
  },
  {
    text: "choices.",
    start: 151010,
    end: 151850,
    confidence: 0.99952,
    speaker: null,
  },
  {
    text: "Not",
    start: 152010,
    end: 152282,
    confidence: 0.99977,
    speaker: null,
  },
  {
    text: "the",
    start: 152306,
    end: 152442,
    confidence: 0.9999,
    speaker: null,
  },
  {
    text: "prisoner",
    start: 152466,
    end: 152858,
    confidence: 0.99989,
    speaker: null,
  },
  {
    text: "of",
    start: 152874,
    end: 153002,
    confidence: 0.99983,
    speaker: null,
  },
  {
    text: "your",
    start: 153026,
    end: 153210,
    confidence: 0.99953,
    speaker: null,
  },
  {
    text: "things.",
    start: 153250,
    end: 153830,
    confidence: 0.99986,
    speaker: null,
  },
  {
    text: "Don't",
    start: 154130,
    end: 154554,
    confidence: 0.992,
    speaker: null,
  },
  {
    text: "own",
    start: 154602,
    end: 154810,
    confidence: 0.99998,
    speaker: null,
  },
  {
    text: "the",
    start: 154850,
    end: 155002,
    confidence: 0.99986,
    speaker: null,
  },
  {
    text: "weight,",
    start: 155026,
    end: 155562,
    confidence: 0.97292,
    speaker: null,
  },
  {
    text: "own",
    start: 155706,
    end: 156010,
    confidence: 0.99978,
    speaker: null,
  },
  {
    text: "the",
    start: 156050,
    end: 156202,
    confidence: 0.99971,
    speaker: null,
  },
  {
    text: "freedom.",
    start: 156226,
    end: 157002,
    confidence: 0.99949,
    speaker: null,
  },
  {
    text: "Become",
    start: 157146,
    end: 157498,
    confidence: 0.99978,
    speaker: null,
  },
  {
    text: "the",
    start: 157554,
    end: 157722,
    confidence: 0.99974,
    speaker: null,
  },
  {
    text: "one",
    start: 157746,
    end: 157930,
    confidence: 0.99986,
    speaker: null,
  },
  {
    text: "who",
    start: 157970,
    end: 158170,
    confidence: 0.99982,
    speaker: null,
  },
  {
    text: "walks",
    start: 158210,
    end: 158506,
    confidence: 0.99989,
    speaker: null,
  },
  {
    text: "light",
    start: 158538,
    end: 158970,
    confidence: 0.5311,
    speaker: null,
  },
  {
    text: "and",
    start: 159090,
    end: 159514,
    confidence: 0.90464,
    speaker: null,
  },
  {
    text: "wins.",
    start: 159602,
    end: 159994,
    confidence: 0.99355,
    speaker: null,
  },
  {
    text: "Heavy.",
    start: 160042,
    end: 160250,
    confidence: 0.99966,
    speaker: null,
  },
];

export const images = [
  {
    id: 1,
    start: 80,
    end: 3992,
    imagePrompt:
      "A glamorous suburban scene showing a shiny luxury car parked in front of a large elegant house under a clear sky, symbolizing wealth and aspiration.",
    imageSrc: "/assets/images/demo-short/img-1.jpeg",
  },
  {
    id: 2,
    start: 4176,
    end: 7144,
    imagePrompt:
      "A dimly lit abstract visualization of a golden cage representing the concept of ownership as a trap, evoking a contemplative and cautionary mood.",
    imageSrc: "/assets/images/demo-short/img-2.jpeg",
  },
  {
    id: 3,
    start: 7272,
    end: 11576,
    imagePrompt:
      "A surreal scene depicting a dream-like figure burdened by chains made of bills and debts, contrasting a shining prize trophy just out of reach.",
    imageSrc: "/assets/images/demo-short/img-3.jpeg",
  },
  {
    id: 4,
    start: 11608,
    end: 14888,
    imagePrompt:
      "A whispering shadow figure in a quiet, empty room under soft lighting, creating a secretive and mysterious atmosphere conveying hidden truths.",
    imageSrc: "/assets/images/demo-short/img-4.jpeg",
  },
  {
    id: 5,
    start: 14984,
    end: 18216,
    imagePrompt:
      "Close-up of heavy chains tightening around a person's wrist with a faint background of blurred possessions, emphasizing entrapment and loss of control.",
    imageSrc: "/assets/images/demo-short/img-5.jpeg",
  },
  {
    id: 6,
    start: 18248,
    end: 21896,
    imagePrompt:
      "A cluttered office desk buried under stacks of bills, loan papers, and keepsakes with a stressed person in the background looking overwhelmed.",
    imageSrc: "/assets/images/demo-short/img-6.jpeg",
  },
  {
    id: 7,
    start: 21928,
    end: 25440,
    imagePrompt:
      "A dark, pressure-filled atmosphere of a figure drowning under a pile of papers and objects representing bills and loans, symbolizing suffocation by possessions.",
    imageSrc: "/assets/images/demo-short/img-7.jpeg",
  },
  {
    id: 8,
    start: 25560,
    end: 28864,
    imagePrompt:
      "A symbolic montage of precious keepsakes and worn-out objects scattered on a table, illuminated by soft, melancholic lighting implying misplaced value.",
    imageSrc: "/assets/images/demo-short/img-8.jpeg",
  },
  {
    id: 9,
    start: 28912,
    end: 32300,
    imagePrompt:
      "A shadowy figure standing with a faint glowing light above their head, surrounded by cages made of possessions, highlighting the contrast of real power and ownership.",
    imageSrc: "/assets/images/demo-short/img-9.jpeg",
  },
  {
    id: 10,
    start: 32840,
    end: 35392,
    imagePrompt:
      "An intense close-up on a person's face showing deep inner struggle and heavy emotional burden with dark tones enveloping the scene.",
    imageSrc: "/assets/images/demo-short/img-10.jpeg",
  },
  {
    id: 11,
    start: 35536,
    end: 38860,
    imagePrompt:
      "A vulnerable person standing alone in a vast empty space illuminated by a cold light, expressing fear and exposure in the vast world.",
    imageSrc: "/assets/images/demo-short/img-11.jpeg",
  },
  {
    id: 12,
    start: 39240,
    end: 42304,
    imagePrompt:
      "A stark spotlight shining on a heavy chain held firmly in hands, transitioning to a symbolic text introducing a new concept of ownership.",
    imageSrc: "/assets/images/demo-short/img-12.jpeg",
  },
  {
    id: 13,
    start: 42392,
    end: 46128,
    imagePrompt:
      "A young man named Amir confidently admiring a flashy, brand new car with bright headlights under a spotlight in a night urban setting.",
    imageSrc: "/assets/images/demo-short/img-13.jpeg",
  },
  {
    id: 14,
    start: 46144,
    end: 49008,
    imagePrompt:
      "Amir sitting at a kitchen table late at night, counting bills with a worried expression, the shiny car faintly visible through the window outside.",
    imageSrc: "/assets/images/demo-short/img-14.jpeg",
  },
  {
    id: 15,
    start: 49064,
    end: 51752,
    imagePrompt:
      "A close-up montage of car payment notices, insurance cards, and repair bills scattered in Amir’s hand, showing financial strain.",
    imageSrc: "/assets/images/demo-short/img-15.jpeg",
  },
  {
    id: 16,
    start: 51856,
    end: 54712,
    imagePrompt:
      "A bleak scene of Amir’s empty wallet on a cracked table with shadows casting a gloomy atmosphere representing lost freedom.",
    imageSrc: "/assets/images/demo-short/img-16.jpeg",
  },
  {
    id: 17,
    start: 54856,
    end: 58632,
    imagePrompt:
      "Amir chained to the flashy car parked in a dark urban alley, his face showing frustration and entrapment within a status symbol.",
    imageSrc: "/assets/images/demo-short/img-17.jpeg",
  },
  {
    id: 18,
    start: 58776,
    end: 62616,
    imagePrompt:
      "Amir exchanging car keys to a buyer in daylight, walking away with relaxed shoulders and a visible sense of relief and release.",
    imageSrc: "/assets/images/demo-short/img-18.jpeg",
  },
  {
    id: 19,
    start: 62768,
    end: 66392,
    imagePrompt:
      "Amir holding a thick bundle of cash walking confidently down a city street, free from burdens, bathed in soft golden sunlight.",
    imageSrc: "/assets/images/demo-short/img-19.jpeg",
  },
  {
    id: 20,
    start: 66456,
    end: 70472,
    imagePrompt:
      "A calm, minimal bedroom with only a bed, a book, and a plant, radiating peace and clarity, emphasizing joy in simplicity.",
    imageSrc: "/assets/images/demo-short/img-20.jpeg",
  },
  {
    id: 21,
    start: 70536,
    end: 74464,
    imagePrompt:
      "A cheerful Amir biking along a scenic path with a smile, wind in his hair, passing families and nature, symbolizing newfound freedom.",
    imageSrc: "/assets/images/demo-short/img-21.jpeg",
  },
  {
    id: 22,
    start: 74520,
    end: 77528,
    imagePrompt:
      "A symbolic balance scale with a small pile of cherished memories on one side and a flashy car on the other, tipping toward the memories.",
    imageSrc: "/assets/images/demo-short/img-22.jpeg",
  },
  {
    id: 23,
    start: 77608,
    end: 81304,
    imagePrompt:
      "A dreamy visual sequence showing Amir walking through different life phases, each one lighter and more colorful than the last.",
    imageSrc: "/assets/images/demo-short/img-23.jpeg",
  },
  {
    id: 24,
    start: 81400,
    end: 85000,
    imagePrompt:
      "A visual collage of simple joys: a picnic, a hug, laughter with friends, all under golden light conveying warmth and contentment.",
    imageSrc: "/assets/images/demo-short/img-24.jpeg",
  },
  {
    id: 25,
    start: 85112,
    end: 88960,
    imagePrompt:
      "Amir standing at a community board posting a handwritten message about shared values, with smiles from people nearby.",
    imageSrc: "/assets/images/demo-short/img-25.jpeg",
  },
  {
    id: 26,
    start: 89048,
    end: 92864,
    imagePrompt:
      "A visual metaphor showing Amir’s once-heavy chains dissolving into a flock of birds flying freely into a clear blue sky.",
    imageSrc: "/assets/images/demo-short/img-26.jpeg",
  },
  {
    id: 27,
    start: 92960,
    end: 96560,
    imagePrompt:
      "A closing wide shot of Amir walking into the sunset through a vibrant town square filled with real human connection.",
    imageSrc: "/assets/images/demo-short/img-27.jpeg",
  },
  {
    id: 28,
    start: 96640,
    end: 100248,
    imagePrompt:
      "A metaphorical visual showing a shiny object crumbling to dust as a heart-shaped flower blooms beside it.",
    imageSrc: "/assets/images/demo-short/img-28.jpeg",
  },
  {
    id: 29,
    start: 100336,
    end: 103840,
    imagePrompt:
      "A symbolic handshake between two people with transparent hearts glowing in their chests, set against a bright horizon.",
    imageSrc: "/assets/images/demo-short/img-29.jpeg",
  },
  {
    id: 30,
    start: 103936,
    end: 107456,
    imagePrompt:
      "An animated line breaking apart a consumerist billboard and revealing a natural green landscape behind it.",
    imageSrc: "/assets/images/demo-short/img-30.jpeg",
  },
  {
    id: 31,
    start: 107544,
    end: 111008,
    imagePrompt:
      "A child looking into a mirror and seeing themselves free of burdens, smiling back with light around their head.",
    imageSrc: "/assets/images/demo-short/img-31.jpeg",
  },
  {
    id: 32,
    start: 111112,
    end: 114544,
    imagePrompt:
      "A poetic visualization of a diary with pages flipping fast in the wind, showing memories and moments of letting go.",
    imageSrc: "/assets/images/demo-short/img-32.jpeg",
  },
  {
    id: 33,
    start: 114624,
    end: 118128,
    imagePrompt:
      "A close-up of hands releasing small objects like keys and cards into a flowing river, symbolizing release and renewal.",
    imageSrc: "/assets/images/demo-short/img-33.jpeg",
  },
  {
    id: 34,
    start: 118240,
    end: 121856,
    imagePrompt:
      "A rich overhead shot of people dancing around a bonfire in a circle, celebrating freedom and shared joy.",
    imageSrc: "/assets/images/demo-short/img-34.jpeg",
  },
  {
    id: 35,
    start: 121960,
    end: 125480,
    imagePrompt:
      "Amir hugging his younger self in a symbolic visual showing self-acceptance and peace with past decisions.",
    imageSrc: "/assets/images/demo-short/img-35.jpeg",
  },
  {
    id: 36,
    start: 125576,
    end: 129008,
    imagePrompt:
      "A slow sunrise over a quiet village where people walk to work, with no cars, symbolizing harmony and balance.",
    imageSrc: "/assets/images/demo-short/img-36.jpeg",
  },
  {
    id: 37,
    start: 129088,
    end: 132616,
    imagePrompt:
      "A powerful image of a tree growing through cracks in concrete, strong and green, symbolizing resilience and truth.",
    imageSrc: "/assets/images/demo-short/img-37.jpeg",
  },
  {
    id: 38,
    start: 132688,
    end: 136232,
    imagePrompt:
      "A gentle montage of strangers helping each other: lifting a heavy box, offering directions, fixing a bike tire.",
    imageSrc: "/assets/images/demo-short/img-38.jpeg",
  },
  {
    id: 39,
    start: 136320,
    end: 139744,
    imagePrompt:
      "A single flower blooming through snow, with soft light hitting its petals — a metaphor for hope and quiet strength.",
    imageSrc: "/assets/images/demo-short/img-39.jpeg",
  },
  {
    id: 40,
    start: 139832,
    end: 143368,
    imagePrompt:
      "A giant billboard reading 'You Are Enough' being painted by a diverse group of people in a bustling street.",
    imageSrc: "/assets/images/demo-short/img-40.jpeg",
  },
  {
    id: 41,
    start: 143440,
    end: 147008,
    imagePrompt:
      "A montage of daily kindness: a smile exchanged on the subway, someone helping an elder cross the road, sharing food.",
    imageSrc: "/assets/images/demo-short/img-41.jpeg",
  },
  {
    id: 42,
    start: 147088,
    end: 150696,
    imagePrompt:
      "A symbolic staircase made of memories and values rising above a collapsing tower of material objects.",
    imageSrc: "/assets/images/demo-short/img-42.jpeg",
  },
  {
    id: 43,
    start: 150800,
    end: 154232,
    imagePrompt:
      "A group of children drawing on a sidewalk with chalk: hearts, stars, and dreams, with joyful energy all around.",
    imageSrc: "/assets/images/demo-short/img-43.jpeg",
  },
  {
    id: 44,
    start: 154320,
    end: 157760,
    imagePrompt:
      "A visual metaphor of a person carrying a glowing heart walking confidently through a world of shadows and noise.",
    imageSrc: "/assets/images/demo-short/img-44.jpeg",
  },
  {
    id: 45,
    start: 157864,
    end: 161424,
    imagePrompt:
      "Final wide cinematic shot of Amir smiling at a clear sky, sun rising behind him, with the world stretching wide and open.",
    imageSrc: "/assets/images/demo-short/img-45.jpeg",
  },
];

interface Subs {
  text: string;
  start: number;
  end: number;
}

export interface SubsObj {
  start: number;
  end: number;
  textPosition?: string;
  subs: string;
}

export const getFormattedSubs = (inputSubs: Subs[], batch: number = 3) => {
  const subsCopy = [...inputSubs];
  const formattedSubs = [];

  while (subsCopy.length !== 0) {
    const batchSize = Math.min(batch, subsCopy.length);
    const newObj: SubsObj = {
      start: subsCopy[0].start,
      end: subsCopy[batchSize - 1].end,
      subs: subsCopy
        .splice(0, batchSize)
        .map((item) => item.text)
        .join(" "),
    };
    formattedSubs.push(newObj);
  }

  const subsFinal = formattedSubs.map((item, index) => {
    const textPositions = ["end", "center", "center", "end", "center", "end"];
    const randomPosition = index % textPositions.length;
    return {
      ...item,
      textPosition:
        index === formattedSubs.length - 1 || index === 0
          ? "center"
          : textPositions[randomPosition],
    };
  });
  return subsFinal;
};

export const imageStyles = [
  {
    id: 1,
    name: "anime",
    tags: ", anime:1.3, line drawing, asian influence, vibrant colors, cel shading, large expressive eyes, detailed hair, dynamic poses, action scenes",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/anime.jpg`,
  },
  {
    id: 2,
    name: "manga",
    tags: ", manga style, Japanese comics, black and white, unique character designs, detailed backgrounds, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/manga.jpg`,
  },
  {
    id: 3,
    name: "2d-traditional-animation",
    tags: ", traditional 2D animation, hand-drawn, frames, expressive, vibrant colors, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/2d-traditional-animation.jpg`,
  },
  {
    id: 4,
    name: "3d-movie",
    tags: ", epic realistic, pixar style, disney, cycles render:1.3, caustics, glossy:0.58, artstation:0.2, cute",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/3d-movie.jpg`,
  },
  {
    id: 5,
    name: "2d-cartoon",
    tags: ", 2D, 2-d, line drawing, cartoon, flat, vibrant, drawn, animation, illustration, exaggerated features, expressive poses, whimsical, dynamic motion, humorous, colorful, lively, imaginative, stylized, caricatured, energetic, playful, surreal, fantastical, animated, expressive, fluid, bold outlines, clear shapes, simple forms, iconic, classic",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/2d-cartoon.jpg`,
  },
  {
    id: 6,
    name: "caricature",
    tags: ", big head, big eyes, caricature, a caricature, digital rendering, figurativism:0.8",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/caricature.jpg`,
  },
  {
    id: 7,
    name: "cgi-animation",
    tags: ", CGI animation, 3D, photorealistic, high-quality textures and lighting, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/cgi-animation.jpg`,
  },
  {
    id: 8,
    name: "comic-book",
    tags: ", neutral palette, comic style, muted colors, illustration, cartoon, soothing tones, low saturation",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/comic-book.jpg`,
  },
  {
    id: 10,
    name: "cyberpunk",
    tags: ", cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/cyberpunk.jpg`,
  },
  {
    id: 13,
    name: "digital-painting",
    tags: ", digital painting, smooth gradients, vibrant colors, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/digital-painting.jpg`,
  },
  {
    id: 14,
    name: "stop-motion-animation",
    tags: ", stop-motion animation, physical models, frame-by-frame, quirky, distinctive, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/stop-motion-animation.jpg`,
  },
  {
    id: 15,
    name: "pixar",
    tags: ", in the style of Pixar, 3D animation, heartwarming stories, photorealistic environments, appealing character designs, emotional depth, detailed, professional",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/pixar.jpg`,
  },
  {
    id: 16,
    name: "cinematic",
    tags: ", cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/cinematic.jpg`,
  },
  {
    id: 18,
    name: "photo-realism",
    tags: ", photorealism, extremely detailed, lifelike, high contrast, textures, meticulous, realistic",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/photo-realism.jpg`,
  },
  {
    id: 19,
    name: "fantasy",
    tags: ", fantasy art, imaginative, vibrant colors, mythical creatures, detailed, epic, magical, dynamic, mythical, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/fantasy.jpg`,
  },
  {
    id: 20,
    name: "ghibli",
    tags: ", in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/ghibli-style.jpg`,
  },
  {
    id: 21,
    name: "semi-realistic-cinematic",
    tags: ", illustrated in a cinematic storytelling style, semi-realistic digital painting, soft lighting, muted vintage color palette, mid-journey inspired, emotionally expressive, subtle line art, character-focused composition",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/semi-realistic-cinematic.jpg`,
  },
  {
    id: 22,
    name: "pixar-tintin",
    tags: ", bold outlines with smooth shading, vivid colors, warm and slightly nostalgic tones, stylized proportions (slightly exaggerated head/eyes, cartoony face), detailed environment with rural aesthetics ,sunlit, cinematic lighting with dramatic rays ,a mix between Pixar concept art and Tintin-style comic realism",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/pixar-tintin.jpg`,
  },
];

export const vocals = [
  {
    id: 1,
    voiceId: "en-NG-AbeoNeural",
    name: "abeo",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/abeo.mp3",
  },
  {
    id: 2,
    voiceId: "en-US-AnaNeural",
    name: "ana",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/ana.mp3",
  },
  {
    id: 3,
    voiceId: "en-US-AndrewNeural",
    name: "andrew",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/andrew.mp3",
  },
  {
    id: 4,
    voiceId: "en-US-AriaNeural",
    name: "aria",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/aria.mp3",
  },
  {
    id: 5,
    voiceId: "en-KE-AsiliaNeural",
    name: "asilia",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/asilia.mp3",
  },
  {
    id: 6,
    voiceId: "en-US-AvaNeural",
    name: "ava",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/ava.mp3",
  },
  {
    id: 7,
    voiceId: "en-US-BrianNeural",
    name: "brian",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/brian.mp3",
  },
  {
    id: 8,
    voiceId: "en-KE-ChilembaNeural",
    name: "chilemba",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/chilemba.mp3",
  },
  {
    id: 9,
    voiceId: "en-US-ChristopherNeural",
    name: "christopher",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/christopher.mp3",
  },
  {
    id: 10,
    voiceId: "en-CA-ClaraNeural",
    name: "clara",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/clara.mp3",
  },
  {
    id: 11,
    voiceId: "en-IE-ConnorNeural",
    name: "connor",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/connor.mp3",
  },
  {
    id: 12,
    voiceId: "en-TZ-ElimuNeural",
    name: "elimu",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/elimu.mp3",
  },
  {
    id: 13,
    voiceId: "en-IE-EmilyNeural",
    name: "emily",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/emily.mp3",
  },
  {
    id: 14,
    voiceId: "en-US-EmmaNeural",
    name: "emma",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/emma.mp3",
  },
  {
    id: 15,
    voiceId: "en-US-EricNeural",
    name: "eric",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/eric.mp3",
  },
  {
    id: 16,
    voiceId: "en-NG-EzinneNeural",
    name: "ezinne",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/ezinne.mp3",
  },
  {
    id: 17,
    voiceId: "en-US-GuyNeural",
    name: "guy",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/guy.mp3",
  },
  {
    id: 18,
    voiceId: "en-TZ-ImaniNeural",
    name: "imani",
    previewUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/imani.mp3",
  },
  {
    id: 19,
    voiceId: "en-PH-JamesNeural",
    name: "james",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/james.mp3`,
  },
  {
    id: 20,
    voiceId: "en-US-JennyNeural",
    name: "jenny",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/jenny.mp3`,
  },
  {
    id: 21,
    voiceId: "en-ZA-LeahNeural",
    name: "leah",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/leah.mp3`,
  },
  {
    id: 22,
    voiceId: "en-CA-LiamNeural",
    name: "liam",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/liam.mp3`,
  },
  {
    id: 23,
    voiceId: "en-GB-LibbyNeural",
    name: "libby",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/libby.mp3`,
  },
  {
    id: 24,
    voiceId: "en-ZA-LukeNeural",
    name: "luke",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/luke.mp3`,
  },
  {
    id: 25,
    voiceId: "en-SG-LunaNeural",
    name: "luna",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/luna.mp3`,
  },
  {
    id: 26,
    voiceId: "en-GB-MaisieNeural",
    name: "maisie",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/maisie.mp3`,
  },
  {
    id: 27,
    voiceId: "en-US-MichelleNeural",
    name: "michelle",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/michelle.mp3`,
  },
  {
    id: 28,
    voiceId: "en-NZ-MitchellNeural",
    name: "mitchell",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/mitchell.mp3`,
  },
  {
    id: 29,
    voiceId: "en-NZ-MollyNeural",
    name: "molly",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/molly.mp3`,
  },
  {
    id: 30,
    voiceId: "en-AU-NatashaNeural",
    name: "natasha",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/natasha.mp3`,
  },
  {
    id: 31,
    voiceId: "en-IN-NeerjaNeural",
    name: "neerja",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/neerja.mp3`,
  },
  {
    id: 32,
    voiceId: "en-IN-PrabhatNeural",
    name: "prabhat",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/prabhat.mp3`,
  },
  {
    id: 33,
    voiceId: "en-US-RogerNeural",
    name: "roger",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/roger.mp3`,
  },
  {
    id: 34,
    voiceId: "en-PH-RosaNeural",
    name: "rosa",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/rosa.mp3`,
  },
  {
    id: 35,
    voiceId: "en-GB-RyanNeural",
    name: "ryan",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/ryan.mp3`,
  },
  {
    id: 36,
    voiceId: "en-HK-SamNeural",
    name: "sam",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/sam.mp3`,
  },
  {
    id: 37,
    voiceId: "en-GB-SoniaNeural",
    name: "sonia",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/sonia.mp3`,
  },
  {
    id: 38,
    voiceId: "en-US-SteffanNeural",
    name: "steffan",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/steffan.mp3`,
  },
  {
    id: 39,
    voiceId: "en-GB-ThomasNeural",
    name: "thomas",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/thomas.mp3`,
  },
  {
    id: 40,
    voiceId: "en-SG-WayneNeural",
    name: "wayne",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/wayne.mp3`,
  },
  {
    id: 41,
    voiceId: "en-AU-WilliamNeural",
    name: "william",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/william.mp3`,
  },
  {
    id: 42,
    voiceId: "en-HK-YanNeural",
    name: "yan",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/yan.mp3`,
  },
];

interface CaptionStyle {
  id: string;
  name: string;
  component: React.FC<any>;
  previewUrl: string;
}

export const captionStyles: CaptionStyle[] = [
  {
    id: "caption-style-one",
    name: "caption-style-one",
    component: CaptionStyleOne,
    previewUrl: "/assets/images/captions/caption-style-one.png",
  },
  {
    id: "caption-style-two",
    name: "caption-style-two",
    component: CaptionStyleTwo,
    previewUrl: "/assets/images/captions/caption-style-one.png",
  },
];

export const bgms = [
  {
    id: 1,
    name: "arabic-inspirational-loud-soft-strings",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/arabic-inspirational-loud-soft-strings.mp3",
  },
  {
    id: 2,
    name: "attitude-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/attitude-beats.mp3",
  },
  {
    id: 3,
    name: "attitude-edm-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/attitude-edm-beats.mp3",
  },
  {
    id: 4,
    name: "badass-aggressive-smart-brass-drums",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/badass-aggressive-smart-brass-drums.mp3",
  },
  {
    id: 5,
    name: "charming-love-violin-drums",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/charming-love-violin-drums.mp3",
  },
  {
    id: 6,
    name: "chill-lofi",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/chill-lofi.mp3",
  },
  {
    id: 7,
    name: "comedy-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/comedy-beats.mp3",
  },
  {
    id: 8,
    name: "crazy-comedy",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/crazy-comedy.mp3",
  },
  {
    id: 9,
    name: "crazy-siren-stylish-villian-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/crazy-siren-stylish-villian-beats.mp3",
  },
  {
    id: 10,
    name: "cunning-hero-grand-fast-tabla-cresendo",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/cunning-hero-grand-fast-tabla-cresendo.mp3",
  },
  {
    id: 11,
    name: "cute-feel-good-piano-tabla-fusion",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/cute-feel-good-piano-tabla-fusion.mp3",
  },
  {
    id: 12,
    name: "dangerous-stylish-aggressive-relentless-drums-brass",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dangerous-stylish-aggressive-relentless-drums-brass.mp3",
  },
  {
    id: 13,
    name: "dark-intense-tension-orchestra",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dark-intense-tension-orchestra.mp3",
  },
  {
    id: 14,
    name: "dramatic-piano",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dramatic-piano.mp3",
  },
  {
    id: 15,
    name: "emotional-nostalgia-happy-bagpipe",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-nostalgia-happy-bagpipe.mp3",
  },
  {
    id: 16,
    name: "emotional-piano-humming-violin",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-piano-humming-violin.mp3",
  },
  {
    id: 17,
    name: "emotional-piano",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-piano.mp3",
  },
  {
    id: 18,
    name: "emotional-trauma-piano",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-trauma-piano.mp3",
  },
  {
    id: 19,
    name: "energetic-strings-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/energetic-strings-beats.mp3",
  },
  {
    id: 20,
    name: "feel-good-flute-tabla",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/feel-good-flute-tabla.mp3",
  },
  {
    id: 21,
    name: "flashback-lost-revival-violin-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/flashback-lost-revival-violin-beats.mp3",
  },
  {
    id: 22,
    name: "gangsta-revenge-drum-edm-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/gangsta-revenge-drum-edm-beats.mp3",
  },
  {
    id: 23,
    name: "goosebumps",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/goosebumps.mp3",
  },
  {
    id: 24,
    name: "grand-emotion-drama-pain-tragedy-violin-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/grand-emotion-drama-pain-tragedy-violin-beats.mp3",
  },
  {
    id: 25,
    name: "grand-introspective-bgm",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/grand-introspective-bgm.mp3",
  },
  {
    id: 26,
    name: "happy-arabic-ukulele",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/happy-arabic-ukulele.mp3",
  },
  {
    id: 27,
    name: "happy-flute-tabla-strings",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/happy-flute-tabla-strings.mp3",
  },
  {
    id: 28,
    name: "happy-innocent-pulsati",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/happy-innocent-pulsati.mp3",
  },
  {
    id: 29,
    name: "happy-mood-piano",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/happy-mood-piano.mp3",
  },
  {
    id: 30,
    name: "heart-strings",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/heart-strings.mp3",
  },
  {
    id: 31,
    name: "heroic-band",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/heroic-band.mp3",
  },
  {
    id: 32,
    name: "hidden-secrets",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/hidden-secrets.mp3",
  },
  {
    id: 33,
    name: "hope-bittersweet-guitar",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/hope-bittersweet-guitar.mp3",
  },
  {
    id: 34,
    name: "lost-memories-happy-feeling-pulsati",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/lost-memories-happy-feeling-pulsati.mp3",
  },
  {
    id: 35,
    name: "lost-ominous-synth-searching-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/lost-ominous-synth-searching-beats.mp3",
  },
  {
    id: 36,
    name: "love-arabic-ukulele",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/love-arabic-ukulele.mp3",
  },
  {
    id: 37,
    name: "love-flute",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/love-flute.mp3",
  },
  {
    id: 38,
    name: "motivational-ukulele",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/motivational-ukulele.mp3",
  },
  {
    id: 39,
    name: "musical-uplifting-strings",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/musical-uplifting-strings.mp3",
  },
  {
    id: 40,
    name: "mystery-remorse-violin-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/mystery-remorse-violin-beats.mp3",
  },
  {
    id: 41,
    name: "mystery-tabla",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/mystery-tabla.mp3",
  },
  {
    id: 42,
    name: "nostalgic-orchestra",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/nostalgic-orchestra.mp3",
  },
  {
    id: 43,
    name: "querky-swag-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/querky-swag-beats.mp3",
  },
  {
    id: 44,
    name: "regret-strings-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/regret-strings-beats.mp3",
  },
  {
    id: 45,
    name: "returning-home-strings",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/returning-home-strings.mp3",
  },
  {
    id: 46,
    name: "revenge-supicion-tabla-flute",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/revenge-supicion-tabla-flute.mp3",
  },
  {
    id: 47,
    name: "royal-posh-piano-lofi-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/royal-posh-piano-lofi-beats.mp3",
  },
  {
    id: 48,
    name: "sad-guitar",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/sad-guitar.mp3",
  },
  {
    id: 49,
    name: "sad-melodrama-orchestra",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/sad-melodrama-orchestra.mp3",
  },
  {
    id: 50,
    name: "sentimental-piano",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/sentimental-piano.mp3",
  },
  {
    id: 51,
    name: "silly-comedy",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/silly-comedy.mp3",
  },
  {
    id: 52,
    name: "soft-ambient-piano",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/soft-ambient-piano.mp3",
  },
  {
    id: 53,
    name: "soft-piano-melancholic-undertone",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/soft-piano-melancholic-undertone.mp3",
  },
  {
    id: 54,
    name: "spiritual-minimalistic-hopeful-piano",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/spiritual-minimalistic-hopeful-piano.mp3",
  },
  {
    id: 55,
    name: "stylish-violin-attitude-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/stylish-violin-attitude-beats.mp3",
  },
  {
    id: 56,
    name: "suffering-deep-anger-piano-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/suffering-deep-anger-piano-beats.mp3",
  },
  {
    id: 57,
    name: "suspense-flute-tabla-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/suspense-flute-tabla-beats.mp3",
  },
  {
    id: 58,
    name: "suspense-revealing-tabla-flute",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/suspense-revealing-tabla-flute.mp3",
  },
  {
    id: 59,
    name: "suspicion-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/suspicion-beats.mp3",
  },
  {
    id: 60,
    name: "swag-attitiude-piano-high-beats-long",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/swag-attitiude-piano-high-beats-long.mp3",
  },
  {
    id: 61,
    name: "swag-attitude-piano-high-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/swag-attitude-piano-high-beats.mp3",
  },
  {
    id: 62,
    name: "sweet-ukulele",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/sweet-ukulele.mp3",
  },
  {
    id: 63,
    name: "tense-rustic-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/tense-rustic-beats.mp3",
  },
  {
    id: 64,
    name: "tense-strings-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/tense-strings-beats.mp3",
  },
  {
    id: 65,
    name: "unknown-curious-piano",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/unknown-curious-piano.mp3",
  },
  {
    id: 66,
    name: "uplifting-ukulele-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/uplifting-ukulele-beats.mp3",
  },
  {
    id: 67,
    name: "vengeance-revenge-pain-piano-drums",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/vengeance-revenge-pain-piano-drums.mp3",
  },
  {
    id: 68,
    name: "vibing-guitar-snaps",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/vibing-guitar-snaps.mp3",
  },
  {
    id: 69,
    name: "whistles-romantic-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/whistles-romantic-beats.mp3",
  },
  {
    id: 70,
    name: "whistles-romantic-humming-beats",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/whistles-romantic-humming-beats.mp3",
  },
  {
    id: 71,
    name: "shenai-dholak",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/shenai-dholak.mp3",
  },
  {
    id: 72,
    name: "chasing-bgm-shenai",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/chasing-bgm-shenai.mp3",
  },
  {
    id: 73,
    name: "zen-instrumental-with-soft-flute-koto-and-ambient-background",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/zen-instrumental-with-soft-flute-koto-and-ambient-background.mp3",
  },
  {
    id: 74,
    name: "motivation-never-give-up-energy",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/motivation-never-give-up-energy.mp3",
  },
  {
    id: 75,
    name: "overcoming-impossible",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/overcoming-impossible.mp3",
  },
  {
    id: 76,
    name: "overcoming-impossible-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/overcoming-impossible-2.mp3",
  },
  {
    id: 77,
    name: "emotional-comeback-transformation",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-comeback-transformation.mp3",
  },
  {
    id: 78,
    name: "dare-to-do-motivation",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dare-to-do-motivation.mp3",
  },
  {
    id: 79,
    name: "dare-to-do-motivation-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dare-to-do-motivation-2.mp3",
  },
];

export const shots = [
  "establishing-shot",
  "extreme-wide-shot",
  "wide-shot",
  "full-shot",
  "medium-wide-shot",
  "cowboy-shot",
  "medium-shot",
  "medium-close-up",
  "close-up",
  "extreme-close-up",
];

export const cameraFramingTechniques = [
  "single-shot",
  "two-shot",
  "three-shot",
  "four-shot",
  "five-shot",
  "crowd-shot",
  "over-the-shoulder-shot",
  "point-of-view-shot",
  "insert-shot",
];

export const cameraAngles = [
  "low-angle",
  "high-angle",
  "overhead-shot",
  "dutch-angle",
  "eye-level",
  "shoulder-level",
  "hip-level",
  "knee-level",
  "ground-level",
];

export const motionTemplatesNames = [
  {
    id: 1,
    name: "enter-slide-top-down-exit-left",
  },
  {
    id: 2,
    name: "scale-down-fade",
  },
  {
    id: 3,
    name: "scale-down-up",
  },
  {
    id: 4,
    name: "pull-out",
  },
  {
    id: 5,
    name: "zoom-out-pull-out",
  },
  {
    id: 6,
    name: "pan-bottom-up-zoom-out",
  },
  {
    id: 7,
    name: "pan-top-down-zoom-out",
  },
  {
    id: 8,
    name: "pan-right-left-zoom-out",
  },
  {
    id: 9,
    name: "pan-left-right-zoom-out",
  },
  {
    id: 10,
    name: "pan-bottom-up-zoom-in",
  },
  {
    id: 11,
    name: "pan-left-right-zoom-in",
  },
  {
    id: 12,
    name: "pan-right-left-zoom-in",
  },
  {
    id: 13,
    name: "pan-top-down-zoom-in",
  },
];

export const motionTemplates: Motion[] = [
  {
    id: "enter-slide-top-down-exit-left",
    name: "enter-slide-top-down-exit-left",
    component: EnterSlideTopDownExitLeft,
  },
  {
    id: "scale-down-fade",
    name: "scale-down-fade",
    component: ScaleDownFade,
  },
  {
    id: "scale-down-up",
    name: "scale-down-up",
    component: ScaleDownFade,
  },
  {
    id: "pull-out",
    name: "pull-out",
    component: PullOut,
  },
  {
    id: "zoom-out-pull-out",
    name: "zoom-out-pull-out",
    component: ZoomOutAndPullOut,
  },
  {
    id: "pan-bottom-up-zoom-out",
    name: "pan-bottom-up-zoom-out",
    component: PanBottomToUpAndZoomOut,
  },
  {
    id: "pan-top-down-zoom-out",
    name: "pan-top-down-zoom-out",
    component: PanTopToDownAndZoomOut,
  },
  {
    id: "pan-right-left-zoom-out",
    name: "pan-right-left-zoom-out",
    component: PanRightToLeftAndZoomOut,
  },
  {
    id: "pan-left-right-zoom-out",
    name: "pan-left-right-zoom-out",
    component: PanLeftToRightAndZoomOut,
  },
  {
    id: "pan-bottom-up-zoom-in",
    name: "pan-bottom-up-zoom-in",
    component: PanBottomToUpAndZoomIn,
  },
  {
    id: "pan-left-right-zoom-in",
    name: "pan-left-right-zoom-in",
    component: PanLeftToRightAndZoomIn,
  },
  {
    id: "pan-right-left-zoom-in",
    name: "pan-right-left-zoom-in",
    component: PanRightToLeftAndZoomIn,
  },
  {
    id: "pan-top-down-zoom-in",
    name: "pan-top-down-zoom-in",
    component: PanTopToDownAndZoomIn,
  },
];

interface Motion {
  id: string;
  name: string;
  component: React.FC<MotionProps>;
}

export interface MotionImage {
  id: number;
  start: number;
  end: number;
  motionTemplateId: string;
  imagePrompt: string;
  imageUrl: string;
  motion?: Motion;
  shotSize: string;
  cameraAngle: string;
}

export const addMotionToImages = (images: MotionImage[]) => {
  const motionImages = images.map((item, index) => {
    const motionTemplate = motionTemplates.find(
      (temp) => temp.name === item.motionTemplateId
    );
    return {
      ...item,
      motion: motionTemplate || motionTemplates[index % motionTemplates.length],
    };
  });

  return motionImages;
};

export const cleanText = (text: string) => {
  return text
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[*_`~>#+=\[\](){}]/g, "")
    .trim();
};

export const demoVideo = {
  id: "cmafnzpcq0000nnry034b4jgp",
  prompt: "kaizen one",
  title: "kaizen one",
  script:
    "The comfort zone is a graveyard where dreams go to die. Today, I'll show you how to escape that grave. One inch at a time. These are the Kaizen Laws. They save me from burnout, save my team from collapse. And they will save you. The trap we chase massive leaps. Overnight success. That's where we fail. Because your brain hates change. It sees it as a threat. I'll show you how to outsmart it. Every time you try a giant leap, you're triggering your brain's alarm system. Instead, start so small, your brain doesn't even notice. It's not about doing more. It's about becoming someone who evolves. Kaizen Law 1 the teeny tweak tactic Meet Kinji. A coder paralyzed by perfectionism. He added one line of code to his project every day. Just one. After six months, he launched a groundbreaking AI his secret. The Ridiculous Small Start when you're overwhelmed. Shrink the task until it's laughable. Read one page. Write one sentence. Do one squat. This isn't about the output. It's about whispering to your brain. I am someone who makes Progress. Kaizen Law 2 the Incremental Inventory Maya hated networking. So she started with one new contact a week. Just one. She'd ask one question, Listen, then politely leave. Within a year, she built a network that landed her a dream job. Her secret, relentless refinement. Every week, review one thing you can improve about your process. Then make it 1% better. Your never stop tweaking, even when it's working. Because the moment you plateau, you start to decline. Kaizen Law 3 the Gratitude Ritual Most people fail because they focus on what's missing, not what they've gained. Neurochemically, this creates a cycle of Lack the fix. Celebrate every tiny victory. Literally. At the end of each day, write down one thing you improved, no matter how small. Read it aloud. Feel the satisfaction. Say, this small win fuels my next leap. This ritual rewires your brain to see progress as pleasure, not pressure. Train your brain to crave growth more than comfort. Kaizen isn't something you do. It's someone you become. The world wants you to stay stuck, but you. You're different. You've got the Teeny Tweak tactic. The Incremental Inventory. The Gratitude Ritual. Now, go one inch at a time. Carve your path to greatness.",
  transcriptionId: "8e498967-cd33-4661-aa5e-75e8907a4900",
  transcribedWords:
    '[{"start":160,"end":960,"subs":"The comfort zone","textPosition":"center"},{"start":960,"end":1880,"subs":"is a graveyard","textPosition":"center"},{"start":1880,"end":2520,"subs":"where dreams go","textPosition":"center"},{"start":2520,"end":3520,"subs":"to die. Today,","textPosition":"end"},{"start":3520,"end":4120,"subs":"I\'ll show you","textPosition":"center"},{"start":4120,"end":4760,"subs":"how to escape","textPosition":"end"},{"start":4760,"end":5640,"subs":"that grave. One","textPosition":"end"},{"start":5640,"end":6120,"subs":"inch at a","textPosition":"center"},{"start":6120,"end":6800,"subs":"time. These are","textPosition":"center"},{"start":6800,"end":7840,"subs":"the Kaizen Laws.","textPosition":"end"},{"start":7920,"end":8600,"subs":"They save me","textPosition":"center"},{"start":8600,"end":9720,"subs":"from burnout, save","textPosition":"end"},{"start":9720,"end":10240,"subs":"my team from","textPosition":"end"},{"start":10240,"end":11240,"subs":"collapse. And they","textPosition":"center"},{"start":11240,"end":11920,"subs":"will save you.","textPosition":"center"},{"start":11920,"end":13000,"subs":"The trap we","textPosition":"end"},{"start":13000,"end":14080,"subs":"chase massive leaps.","textPosition":"center"},{"start":14160,"end":15680,"subs":"Overnight success. That\'s","textPosition":"end"},{"start":15680,"end":16320,"subs":"where we fail.","textPosition":"end"},{"start":16480,"end":17440,"subs":"Because your brain","textPosition":"center"},{"start":17520,"end":18760,"subs":"hates change. It","textPosition":"center"},{"start":18760,"end":19240,"subs":"sees it as","textPosition":"end"},{"start":19240,"end":20080,"subs":"a threat. I\'ll","textPosition":"center"},{"start":20080,"end":20400,"subs":"show you how","textPosition":"end"},{"start":20400,"end":21280,"subs":"to outsmart it.","textPosition":"end"},{"start":21360,"end":22000,"subs":"Every time you","textPosition":"center"},{"start":22000,"end":22640,"subs":"try a giant","textPosition":"center"},{"start":22640,"end":23680,"subs":"leap, you\'re triggering","textPosition":"end"},{"start":23680,"end":24520,"subs":"your brain\'s alarm","textPosition":"center"},{"start":24520,"end":26120,"subs":"system. Instead, start","textPosition":"end"},{"start":26120,"end":27250,"subs":"so small, your","textPosition":"end"},{"start":27250,"end":27970,"subs":"brain doesn\'t even","textPosition":"center"},{"start":27970,"end":29050,"subs":"notice. It\'s not","textPosition":"center"},{"start":29050,"end":29850,"subs":"about doing more.","textPosition":"end"},{"start":29930,"end":30730,"subs":"It\'s about becoming","textPosition":"center"},{"start":30730,"end":31610,"subs":"someone who evolves.","textPosition":"end"},{"start":31770,"end":32850,"subs":"Kaizen Law 1","textPosition":"end"},{"start":32850,"end":33770,"subs":"the teeny tweak","textPosition":"center"},{"start":33770,"end":35250,"subs":"tactic Meet Kinji.","textPosition":"center"},{"start":35250,"end":36370,"subs":"A coder paralyzed","textPosition":"end"},{"start":36370,"end":37490,"subs":"by perfectionism. He","textPosition":"center"},{"start":37490,"end":38130,"subs":"added one line","textPosition":"end"},{"start":38130,"end":38650,"subs":"of code to","textPosition":"end"},{"start":38650,"end":39610,"subs":"his project every","textPosition":"center"},{"start":39610,"end":40650,"subs":"day. Just one.","textPosition":"center"},{"start":40810,"end":41690,"subs":"After six months,","textPosition":"end"},{"start":41690,"end":42450,"subs":"he launched a","textPosition":"center"},{"start":42450,"end":43770,"subs":"groundbreaking AI his","textPosition":"end"},{"start":43770,"end":45090,"subs":"secret. The Ridiculous","textPosition":"end"},{"start":45090,"end":46130,"subs":"Small Start when","textPosition":"center"},{"start":46130,"end":47530,"subs":"you\'re overwhelmed. Shrink","textPosition":"center"},{"start":47530,"end":48170,"subs":"the task until","textPosition":"end"},{"start":48170,"end":49530,"subs":"it\'s laughable. Read","textPosition":"center"},{"start":49530,"end":50970,"subs":"one page. Write","textPosition":"end"},{"start":50970,"end":52250,"subs":"one sentence. Do","textPosition":"end"},{"start":52250,"end":53320,"subs":"one squat. This","textPosition":"center"},{"start":53320,"end":53880,"subs":"isn\'t about the","textPosition":"center"},{"start":53880,"end":54880,"subs":"output. It\'s about","textPosition":"end"},{"start":54880,"end":55640,"subs":"whispering to your","textPosition":"center"},{"start":55640,"end":56440,"subs":"brain. I am","textPosition":"end"},{"start":56440,"end":57040,"subs":"someone who makes","textPosition":"end"},{"start":57040,"end":58440,"subs":"Progress. Kaizen Law","textPosition":"center"},{"start":58440,"end":59720,"subs":"2 the Incremental","textPosition":"center"},{"start":59720,"end":61160,"subs":"Inventory Maya hated","textPosition":"end"},{"start":61160,"end":62200,"subs":"networking. So she","textPosition":"center"},{"start":62200,"end":62800,"subs":"started with one","textPosition":"end"},{"start":62800,"end":63560,"subs":"new contact a","textPosition":"end"},{"start":63560,"end":64640,"subs":"week. Just one.","textPosition":"center"},{"start":64720,"end":65600,"subs":"She\'d ask one","textPosition":"center"},{"start":65600,"end":67200,"subs":"question, Listen, then","textPosition":"end"},{"start":67200,"end":68480,"subs":"politely leave. Within","textPosition":"center"},{"start":68480,"end":69400,"subs":"a year, she","textPosition":"end"},{"start":69400,"end":69960,"subs":"built a network","textPosition":"end"},{"start":69960,"end":70680,"subs":"that landed her","textPosition":"center"},{"start":70680,"end":71440,"subs":"a dream job.","textPosition":"center"},{"start":71600,"end":73000,"subs":"Her secret, relentless","textPosition":"end"},{"start":73000,"end":74400,"subs":"refinement. Every week,","textPosition":"center"},{"start":74480,"end":75320,"subs":"review one thing","textPosition":"end"},{"start":75320,"end":75880,"subs":"you can improve","textPosition":"end"},{"start":75880,"end":76640,"subs":"about your process.","textPosition":"center"},{"start":77040,"end":77960,"subs":"Then make it","textPosition":"center"},{"start":77960,"end":79330,"subs":"1% better. Your","textPosition":"end"},{"start":79650,"end":80690,"subs":"never stop tweaking,","textPosition":"center"},{"start":80850,"end":81490,"subs":"even when it\'s","textPosition":"end"},{"start":81490,"end":82450,"subs":"working. Because the","textPosition":"end"},{"start":82450,"end":83330,"subs":"moment you plateau,","textPosition":"center"},{"start":83410,"end":84010,"subs":"you start to","textPosition":"center"},{"start":84010,"end":85370,"subs":"decline. Kaizen Law","textPosition":"end"},{"start":85370,"end":86570,"subs":"3 the Gratitude","textPosition":"center"},{"start":86570,"end":87730,"subs":"Ritual Most people","textPosition":"end"},{"start":87730,"end":88410,"subs":"fail because they","textPosition":"end"},{"start":88410,"end":89130,"subs":"focus on what\'s","textPosition":"center"},{"start":89130,"end":90050,"subs":"missing, not what","textPosition":"center"},{"start":90050,"end":91730,"subs":"they\'ve gained. Neurochemically,","textPosition":"end"},{"start":91730,"end":92450,"subs":"this creates a","textPosition":"center"},{"start":92450,"end":93250,"subs":"cycle of Lack","textPosition":"end"},{"start":93410,"end":94930,"subs":"the fix. Celebrate","textPosition":"end"},{"start":94930,"end":96130,"subs":"every tiny victory.","textPosition":"center"},{"start":96290,"end":97370,"subs":"Literally. At the","textPosition":"center"},{"start":97370,"end":97810,"subs":"end of each","textPosition":"end"},{"start":97810,"end":98690,"subs":"day, write down","textPosition":"center"},{"start":98690,"end":99210,"subs":"one thing you","textPosition":"end"},{"start":99210,"end":100290,"subs":"improved, no matter","textPosition":"end"},{"start":100290,"end":101290,"subs":"how small. Read","textPosition":"center"},{"start":101290,"end":102210,"subs":"it aloud. Feel","textPosition":"center"},{"start":102210,"end":103730,"subs":"the satisfaction. Say,","textPosition":"end"},{"start":103730,"end":104570,"subs":"this small win","textPosition":"center"},{"start":104570,"end":105250,"subs":"fuels my next","textPosition":"end"},{"start":105250,"end":106480,"subs":"leap. This ritual","textPosition":"end"},{"start":106480,"end":107640,"subs":"rewires your brain","textPosition":"center"},{"start":107720,"end":108560,"subs":"to see progress","textPosition":"center"},{"start":108560,"end":109560,"subs":"as pleasure, not","textPosition":"end"},{"start":109560,"end":110760,"subs":"pressure. Train your","textPosition":"center"},{"start":110760,"end":111720,"subs":"brain to crave","textPosition":"end"},{"start":111720,"end":112680,"subs":"growth more than","textPosition":"end"},{"start":112680,"end":114240,"subs":"comfort. Kaizen isn\'t","textPosition":"center"},{"start":114240,"end":114920,"subs":"something you do.","textPosition":"center"},{"start":115000,"end":115760,"subs":"It\'s someone you","textPosition":"end"},{"start":115760,"end":116680,"subs":"become. The world","textPosition":"center"},{"start":116680,"end":117160,"subs":"wants you to","textPosition":"end"},{"start":117160,"end":118000,"subs":"stay stuck, but","textPosition":"end"},{"start":118000,"end":118680,"subs":"you. You\'re different.","textPosition":"center"},{"start":118840,"end":119760,"subs":"You\'ve got the","textPosition":"center"},{"start":119760,"end":120920,"subs":"Teeny Tweak tactic.","textPosition":"end"},{"start":120920,"end":122440,"subs":"The Incremental Inventory.","textPosition":"center"},{"start":122520,"end":123800,"subs":"The Gratitude Ritual.","textPosition":"end"},{"start":123960,"end":124880,"subs":"Now, go one","textPosition":"end"},{"start":124880,"end":125360,"subs":"inch at a","textPosition":"center"},{"start":125360,"end":126280,"subs":"time. Carve your","textPosition":"center"},{"start":126280,"end":127160,"subs":"path to greatness.","textPosition":"center"}]',
  transcribedSubtitles: null,
  fps: 30,
  totalDuration: 130160,
  imageStyle: "cyberpunk",
  captionStyle: "caption-style-one",
  thumbnailUrl: "",
  bgmId: 74,
  aspectRatioId: 1,
  userId: "cma56j0q90000nnlb7uhulfpa",
  createdAt: "2025-05-08T17:52:02.794Z",
  updatedAt: "2025-05-08T17:52:50.157Z",
  bgm: {
    id: 74,
    name: "zen-instrumental-with-soft-flute-koto-and-ambient-background",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/zen-instrumental-with-soft-flute-koto-and-ambient-background.mp3",
    volume: 100,
  },
  voiceOver: [
    {
      id: "cmafnzpcq0001nnrywy1ym0nl",
      audioUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/5e8a0ef6-e709-4e20-b64d-45b82fd5bc53.mp3",
      voiceId: "custom",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
  ],
  aspectRatio: {
    id: 1,
    name: "video",
    width: 1280,
    height: 720,
  },
  scenes: [
    {
      id: "cmafo0mjm000snnrycsm1yzkx",
      number: 1,
      start: 160,
      end: 3960,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePrompt:
        "A desolate graveyard with tombstones, shrouded in mist, symbolizing the death of dreams, extreme-wide-shot low-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20desolate%20graveyard%20with%20tombstones%2C%20shrouded%20in%20mist%2C%20symbolizing%20the%20death%20of%20dreams%2C%20extreme-wide-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5136046&nologo=true&private=true",
      shotSize: "extreme-wide-shot",
      cameraAngle: "low-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0l48000innry04kjgwi3",
      number: 2,
      start: 4460,
      end: 7360,
      motionTemplateId: "scale-down-fade",
      imagePrompt:
        "A person climbing out of a grave, reaching for the light, determination in their eyes, medium-shot eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20climbing%20out%20of%20a%20grave%2C%20reaching%20for%20the%20light%2C%20determination%20in%20their%20eyes%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3989582&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mkx000xnnrya6spq5nt",
      number: 3,
      start: 7860,
      end: 11240,
      motionTemplateId: "scale-down-up",
      imagePrompt:
        "Three cogs turning in sync, representing the Kaizen Laws, teamwork and precision, close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/Three%20cogs%20turning%20in%20sync%2C%20representing%20the%20Kaizen%20Laws%2C%20teamwork%20and%20precision%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6960454&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0miz000rnnryh3nw3dtb",
      number: 4,
      start: 11740,
      end: 15040,
      motionTemplateId: "pull-out",
      imagePrompt:
        "A person attempting to leap across a wide chasm, looking uncertain and fearful, wide-shot high-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20attempting%20to%20leap%20across%20a%20wide%20chasm%2C%20looking%20uncertain%20and%20fearful%2C%20wide-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9521251&nologo=true&private=true",
      shotSize: "wide-shot",
      cameraAngle: "high-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0l45000hnnry328cljyu",
      number: 5,
      start: 15360,
      end: 18240,
      motionTemplateId: "zoom-out-pull-out",
      imagePrompt:
        "A brain recoiling from a sudden, jarring change, alarm bells ringing, close-up dutch-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20brain%20recoiling%20from%20a%20sudden%2C%20jarring%20change%2C%20alarm%20bells%20ringing%2C%20close-up%20dutch-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=297165&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "dutch-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0kvw000gnnryaoa9cli6",
      number: 6,
      start: 18480,
      end: 21280,
      motionTemplateId: "pan-bottom-up-zoom-out",
      imagePrompt:
        "A person strategically outmaneuvering a larger, imposing figure, intellect versus brute force, medium-shot eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20strategically%20outmaneuvering%20a%20larger%2C%20imposing%20figure%2C%20intellect%20versus%20brute%20force%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9505859&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mev000pnnryn5es5e59",
      number: 7,
      start: 21360,
      end: 24520,
      motionTemplateId: "pan-top-down-zoom-out",
      imagePrompt:
        "A person taking a very small step forward, almost imperceptible, but steady, close-up ground-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20taking%20a%20very%20small%20step%20forward%2C%20almost%20imperceptible%2C%20but%20steady%2C%20close-up%20ground-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2822332&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "ground-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0jdj0002nnryfhy9xphc",
      number: 8,
      start: 25020,
      end: 28410,
      motionTemplateId: "pan-right-left-zoom-out",
      imagePrompt:
        "A brain relaxed and at ease, not noticing a gradual shift occurring, close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20brain%20relaxed%20and%20at%20ease%2C%20not%20noticing%20a%20gradual%20shift%20occurring%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5773171&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mee000nnnryz7y8dfk3",
      number: 9,
      start: 28570,
      end: 31610,
      motionTemplateId: "pan-left-right-zoom-out",
      imagePrompt:
        "A person transforming, shedding old skin, emerging more powerful, medium-shot low-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20transforming%2C%20shedding%20old%20skin%2C%20emerging%20more%20powerful%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4402338&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "low-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0knd0008nnryua4ckh09",
      number: 10,
      start: 31770,
      end: 35810,
      motionTemplateId: "pan-bottom-up-zoom-in",
      imagePrompt:
        "A coder looking stressed in front of multiple screens filled with code, overwhelmed by the project, medium-shot high-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20coder%20looking%20stressed%20in%20front%20of%20multiple%20screens%20filled%20with%20code%2C%20overwhelmed%20by%20the%20project%2C%20medium-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8884161&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "high-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mow000ynnryfstjkmxy",
      number: 11,
      start: 36310,
      end: 39930,
      motionTemplateId: "pan-left-right-zoom-in",
      imagePrompt:
        "A single line of code being added to a project, symbolizing small but consistent progress, extreme-close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20single%20line%20of%20code%20being%20added%20to%20a%20project%2C%20symbolizing%20small%20but%20consistent%20progress%2C%20extreme-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3066987&nologo=true&private=true",
      shotSize: "extreme-close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0knb0005nnry16onx8of",
      number: 12,
      start: 40090,
      end: 43450,
      motionTemplateId: "pan-right-left-zoom-in",
      imagePrompt:
        "A complex AI system launching, representing a groundbreaking achievement, full-shot low-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20complex%20AI%20system%20launching%2C%20representing%20a%20groundbreaking%20achievement%2C%20full-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=364907&nologo=true&private=true",
      shotSize: "full-shot",
      cameraAngle: "low-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mjq000unnryuatzg5vr",
      number: 13,
      start: 43950,
      end: 46970,
      motionTemplateId: "pan-top-down-zoom-in",
      imagePrompt:
        "A person shrinking a large, daunting task down to a tiny, manageable size, representing simplification, medium-shot eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20shrinking%20a%20large%2C%20daunting%20task%20down%20to%20a%20tiny%2C%20manageable%20size%2C%20representing%20simplification%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3617902&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0knd0006nnrypvjws5xh",
      number: 14,
      start: 47130,
      end: 50250,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePrompt:
        "A single page of a book being read, illuminated in the darkness, symbolizing a small step towards knowledge, close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20single%20page%20of%20a%20book%20being%20read%2C%20illuminated%20in%20the%20darkness%2C%20symbolizing%20a%20small%20step%20towards%20knowledge%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4230757&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mjo000tnnry4r7703oa",
      number: 15,
      start: 50490,
      end: 54400,
      motionTemplateId: "scale-down-fade",
      imagePrompt:
        "A person doing one squat, focusing on the simplicity of the action, extreme-close-up ground-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20doing%20one%20squat%2C%20focusing%20on%20the%20simplicity%20of%20the%20action%2C%20extreme-close-up%20ground-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2461758&nologo=true&private=true",
      shotSize: "extreme-close-up",
      cameraAngle: "ground-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mpp000znnryhj6h0cg5",
      number: 16,
      start: 54900,
      end: 57520,
      motionTemplateId: "scale-down-up",
      imagePrompt:
        "A person whispering to their brain, a soft, encouraging voice, intimate and personal, close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20whispering%20to%20their%20brain%2C%20a%20soft%2C%20encouraging%20voice%2C%20intimate%20and%20personal%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1276393&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mdu000mnnryamf6kbd6",
      number: 17,
      start: 57680,
      end: 61160,
      motionTemplateId: "pull-out",
      imagePrompt:
        "A person dreading a networking event, feeling anxious and uncomfortable, medium-shot high-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20dreading%20a%20networking%20event%2C%20feeling%20anxious%20and%20uncomfortable%2C%20medium-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5119320&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "high-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mei000onnryjgdyozwv",
      number: 18,
      start: 61660,
      end: 64640,
      motionTemplateId: "zoom-out-pull-out",
      imagePrompt:
        "A person initiating a conversation with a new contact, starting with a simple question, two-shot eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20initiating%20a%20conversation%20with%20a%20new%20contact%2C%20starting%20with%20a%20simple%20question%2C%20two-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5508279&nologo=true&private=true",
      shotSize: "two-shot",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mdb000lnnry4to3jwnw",
      number: 19,
      start: 64720,
      end: 68000,
      motionTemplateId: "pan-bottom-up-zoom-out",
      imagePrompt:
        "A person listening attentively to another person, showing genuine interest and respect, close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20listening%20attentively%20to%20another%20person%2C%20showing%20genuine%20interest%20and%20respect%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2706359&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0kvu000annryi9zg4pir",
      number: 20,
      start: 68160,
      end: 71440,
      motionTemplateId: "pan-top-down-zoom-out",
      imagePrompt:
        "A sprawling network of connections, representing a vast and supportive community, extreme-wide-shot overhead-shot, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20sprawling%20network%20of%20connections%2C%20representing%20a%20vast%20and%20supportive%20community%2C%20extreme-wide-shot%20overhead-shot%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9258365&nologo=true&private=true",
      shotSize: "extreme-wide-shot",
      cameraAngle: "overhead-shot",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0kvv000cnnryzw53iwy9",
      number: 21,
      start: 71600,
      end: 75160,
      motionTemplateId: "pan-right-left-zoom-out",
      imagePrompt:
        "A person meticulously reviewing their process, identifying areas for improvement, close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20meticulously%20reviewing%20their%20process%2C%20identifying%20areas%20for%20improvement%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2478885&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mez000qnnryfp5t8uu8",
      number: 22,
      start: 75660,
      end: 79970,
      motionTemplateId: "pan-left-right-zoom-out",
      imagePrompt:
        "A person making a small adjustment to their work, a subtle but significant improvement, extreme-close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20making%20a%20small%20adjustment%20to%20their%20work%2C%20a%20subtle%20but%20significant%20improvement%2C%20extreme-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5095839&nologo=true&private=true",
      shotSize: "extreme-close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0kvv000ennryehiw85q0",
      number: 23,
      start: 80470,
      end: 83850,
      motionTemplateId: "pan-bottom-up-zoom-in",
      imagePrompt:
        "A graph plateauing, representing stagnation and decline, medium-shot eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20graph%20plateauing%2C%20representing%20stagnation%20and%20decline%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9174761&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0kna0004nnrylak14is5",
      number: 24,
      start: 84350,
      end: 87730,
      motionTemplateId: "pan-left-right-zoom-in",
      imagePrompt:
        "A person focusing on what they lack, feeling unfulfilled and inadequate, medium-shot high-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20focusing%20on%20what%20they%20lack%2C%20feeling%20unfulfilled%20and%20inadequate%2C%20medium-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3231828&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "high-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0kvs0009nnry9uhzno6l",
      number: 25,
      start: 88230,
      end: 91730,
      motionTemplateId: "pan-top-down-zoom-in",
      imagePrompt:
        "A brain caught in a cycle of negativity, unable to break free, close-up dutch-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20brain%20caught%20in%20a%20cycle%20of%20negativity%2C%20unable%20to%20break%20free%2C%20close-up%20dutch-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2962863&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "dutch-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mk8000vnnryqulrmk1w",
      number: 26,
      start: 92230,
      end: 96130,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePrompt:
        "A person celebrating a small victory, feeling proud and accomplished, medium-shot low-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20celebrating%20a%20small%20victory%2C%20feeling%20proud%20and%20accomplished%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8755128&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "low-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0kvv000bnnryp99ph768",
      number: 27,
      start: 96290,
      end: 99810,
      motionTemplateId: "scale-down-fade",
      imagePrompt:
        "A person writing down an accomplishment at the end of the day, reflecting on their progress, close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20writing%20down%20an%20accomplishment%20at%20the%20end%20of%20the%20day%2C%20reflecting%20on%20their%20progress%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3557857&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0mkq000wnnrybocr5wmu",
      number: 28,
      start: 100310,
      end: 103730,
      motionTemplateId: "scale-down-up",
      imagePrompt:
        "A person feeling the satisfaction of a small win, a sense of accomplishment washing over them, close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20feeling%20the%20satisfaction%20of%20a%20small%20win%2C%20a%20sense%20of%20accomplishment%20washing%20over%20them%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8406806&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0knd0007nnrytp90zxjf",
      number: 29,
      start: 104230,
      end: 108000,
      motionTemplateId: "pull-out",
      imagePrompt:
        "A small flame igniting a larger fire, representing a small win fueling future success, medium-shot ground-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20small%20flame%20igniting%20a%20larger%20fire%2C%20representing%20a%20small%20win%20fueling%20future%20success%2C%20medium-shot%20ground-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8647770&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "ground-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0l48000jnnryjpij3qwc",
      number: 30,
      start: 108500,
      end: 112040,
      motionTemplateId: "zoom-out-pull-out",
      imagePrompt:
        "A brain rewiring itself to associate progress with pleasure, creating a positive feedback loop, close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20brain%20rewiring%20itself%20to%20associate%20progress%20with%20pleasure%2C%20creating%20a%20positive%20feedback%20loop%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3354218&nologo=true&private=true",
      shotSize: "close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0kvv000dnnryzulxi21n",
      number: 31,
      start: 112200,
      end: 116040,
      motionTemplateId: "pan-bottom-up-zoom-out",
      imagePrompt:
        "A person craving growth and challenge, pushing beyond their comfort zone, medium-shot low-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20craving%20growth%20and%20challenge%2C%20pushing%20beyond%20their%20comfort%20zone%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9699825&nologo=true&private=true",
      shotSize: "medium-shot",
      cameraAngle: "low-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0m28000knnryio1otz1d",
      number: 32,
      start: 116200,
      end: 119760,
      motionTemplateId: "pan-top-down-zoom-out",
      imagePrompt:
        "A person breaking free from constraints, defying expectations, full-shot low-angle, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20breaking%20free%20from%20constraints%2C%20defying%20expectations%2C%20full-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7723967&nologo=true&private=true",
      shotSize: "full-shot",
      cameraAngle: "low-angle",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0kvw000fnnryd6ev9hsj",
      number: 33,
      start: 120260,
      end: 123800,
      motionTemplateId: "pan-right-left-zoom-out",
      imagePrompt:
        "Three tools laid out, representing the Teeny Tweak tactic, Incremental Inventory, and Gratitude Ritual, close-up eye-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://pollinations.ai/p/Three%2520tools%2520laid%2520out%252C%2520representing%2520the%2520Teeny%2520Tweak%2520tactic%252C%2520Incremental%2520Inventory%252C%2520and%2520Gratitude%2520Ritual%252C%2520close-up%2520eye-level%252C%2520cyberpunk%252C%2520futuristic%252C%2520orangish%2520neon%2520colors%252C%2520dark%2520atmosphere%252C%2520highly%2520detailed%252C%2520neon%2520lights%252C%2520urban%252C%2520dystopian%252C%2520high-tech%252C%2520low-life%3Fwidth%3D720%26height%3D540%26seed%3D514497%26nologo%3Dtrue%26private%3Dtrue?width=720&height=540&seed=514497&nologo=true&model=flux",
      shotSize: "close-up",
      cameraAngle: "eye-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
    {
      id: "cmafo0kn90003nnryqivzgk1m",
      number: 34,
      start: 123960,
      end: 127160,
      motionTemplateId: "pan-left-right-zoom-out",
      imagePrompt:
        "A person carving a path through a dense forest, symbolizing the journey to greatness, wide-shot ground-level, cyberpunk, futuristic, orangish neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20carving%20a%20path%20through%20a%20dense%20forest%2C%20symbolizing%20the%20journey%20to%20greatness%2C%20wide-shot%20ground-level%2C%20cyberpunk%2C%20futuristic%2C%20orangish%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6859110&nologo=true&private=true",
      shotSize: "wide-shot",
      cameraAngle: "ground-level",
      videoId: "cmafnzpcq0000nnry034b4jgp",
    },
  ],
};

export const aspectRatios = [
  {
    id: 1,
    name: "video-full-screen",
    width: 1280,
    height: 720,
    frameWidth: 1280,
    frameHeight: 720,
    component: VideoFullScreen,
  },
  {
    id: 2,
    name: "mobile-full-screen",
    width: 720,
    height: 1280,
    frameWidth: 720,
    frameHeight: 1280,
    component: MobileFullScreen,
  },
  {
    id: 3,
    name: "video-sixteen-by-nine",
    width: 1280,
    height: 720,
    frameWidth: 720,
    frameHeight: 540,
    component: VideoSixteenByNine,
  },
  {
    id: 4,
    name: "mobile-four-by-three",
    width: 720,
    height: 1280,
    frameWidth: 720,
    frameHeight: 540,
    component: MobileFourByThree,
  },
];

export const captionFonts = [
  {
    id: 1,
    fontFamily: "Kavoon",
  },
  {
    id: 2,
    fontFamily: "Roboto",
  },
  {
    id: 3,
    fontFamily: "Montserrat",
  },
  {
    id: 4,
    fontFamily: "Montserrat",
  },
  {
    id: 5,
    fontFamily: "Open Sans",
  },
  {
    id: 6,
    fontFamily: "Inter",
  },
  {
    id: 7,
    fontFamily: "Lato",
  },
  {
    id: 8,
    fontFamily: "Bebas Neue",
  },
  {
    id: 9,
    fontFamily: "Poppins",
  },
];

export const videoTypes = [
  {
    id: 1,
    videoType: "motivational-laws",
    narration: {
      pitch: -40,
      volume: 100,
      rate: 30,
    },
  },
  {
    id: 2,
    videoType: "emotional-growth-stories",
    narration: {
      pitch: -40,
      volume: 100,
      rate: -10,
    },
  },
  {
    id: 3,
    videoType: "motivational-warrior-stories",
    narration: {
      pitch: -40,
      volume: 100,
      rate: -10,
    },
  },
];

export const displayVideos = [
  {
    id: "cma5k10cv0000nn0qs9oisu5i",
    prompt: "Just do it",
    title: "Unleash",
    script:
      "Doubt. It's a silent killer. A thief of dreams. It whispers, 'You're not ready,' while opportunity bleeds out. But what if doubt is a lie? Today, I hand you three brutal truths to shatter that lie and unleash the beast within. These are the rules forged in the fires of failure, the code I live by when the world screams, 'Give up.' They’re what separate those who merely exist, from those who truly live. The Grand Deception We're told to 'be realistic,' to 'wait for the right moment.' That's a trap. Your brain is a master of procrastination, a sculptor of excuses. It will always find a reason to delay. But reality doesn't wait. Let me show you why: Every time you postpone action, you feed the monster of inertia. Science proves that momentum is the ultimate cheat code. Action breeds action. You’re not cautious. You're just crippled by fear. Brutal Truth #1: The 3-Second Override Meet Anya—a coder paralyzed by imposter syndrome. She forced herself to type ONE line of code within three seconds of doubt hitting. Not a perfect program. Just one line. After a year, she launched a six-figure app. Her secret: the 3-second rule When hesitation strikes, attack it head-on: Write one word. Do one rep. Make one call. This isn't about perfection. It's about proving to yourself: I control my fear. Brutal Truth #2: Embrace the Carnage Mark failed seven times before launching his game. Seven times he faced ridicule, bankruptcy, despair. His secret? Celebrate the failures. Every rejection letter went on his wall. Every setback became a war story. By owning the carnage, he disarmed his fear of it. Your rule: Fail fast. Fail forward. Each scar is a badge of honor, a testament to your resilience. Brutal Truth #3: The Victory Cry Most people shrink in the face of challenges. They internalize doubt, letting it fester. The fix? Scream your intentions. Literally. Before every big meeting, before every lift, before every risk, roar your commitment. Visualize success. Feel the power surge. Say: I am unstoppable. This ritual rewires your brain to associate action with victory, not fear. Train your mind to crave the battlefield. You're not seeking comfort. You're hunting greatness. Unleashing isn't something you achieve. It's someone you become. The world wants you to cower. But you—you’re a force of nature. You've got: The 3-Second Override Embrace the Carnage The Victory Cry Now go seize your destiny.",
    transcriptionId: "9183985c-c940-4209-942d-cf29fd1fb236",
    transcribedWords:
      '[{"start":320,"end":1064,"subs":"Doubt. It\'s a","textPosition":"center"},{"start":1072,"end":2312,"subs":"silent killer. A","textPosition":"center"},{"start":2336,"end":3336,"subs":"thief of dreams.","textPosition":"center"},{"start":3448,"end":4328,"subs":"It whispers you\'re","textPosition":"end"},{"start":4344,"end":5048,"subs":"not ready. While","textPosition":"center"},{"start":5104,"end":6296,"subs":"opportunity bleeds out.","textPosition":"end"},{"start":6368,"end":6792,"subs":"But what if","textPosition":"end"},{"start":6816,"end":7304,"subs":"doubt is a","textPosition":"center"},{"start":7312,"end":8392,"subs":"lie? Today, I","textPosition":"center"},{"start":8416,"end":9032,"subs":"hand you three","textPosition":"end"},{"start":9056,"end":9912,"subs":"brutal truths to","textPosition":"center"},{"start":9936,"end":10696,"subs":"shatter that lie","textPosition":"end"},{"start":10728,"end":11464,"subs":"and unleash the","textPosition":"end"},{"start":11472,"end":12712,"subs":"beast within. These","textPosition":"center"},{"start":12736,"end":13272,"subs":"are the rules","textPosition":"center"},{"start":13336,"end":13912,"subs":"forged in the","textPosition":"end"},{"start":13936,"end":14872,"subs":"fires of failure.","textPosition":"center"},{"start":14936,"end":15512,"subs":"The code I","textPosition":"end"},{"start":15536,"end":16072,"subs":"live by when","textPosition":"end"},{"start":16096,"end":17272,"subs":"the world give","textPosition":"center"},{"start":17296,"end":18200,"subs":"up. They\'re what","textPosition":"center"},{"start":18240,"end":19000,"subs":"separate those who","textPosition":"end"},{"start":19040,"end":20072,"subs":"merely exist from","textPosition":"center"},{"start":20096,"end":20856,"subs":"those who truly","textPosition":"end"},{"start":20888,"end":21976,"subs":"live. The grand","textPosition":"end"},{"start":22008,"end":23000,"subs":"deception. We\'re told","textPosition":"center"},{"start":23040,"end":23960,"subs":"to be realistic,","textPosition":"center"},{"start":24040,"end":24552,"subs":"to wait for","textPosition":"end"},{"start":24576,"end":25470,"subs":"the right moment.","textPosition":"center"},{"start":25600,"end":26514,"subs":"That\'s a trap.","textPosition":"end"},{"start":26642,"end":27362,"subs":"Your brain is","textPosition":"end"},{"start":27386,"end":28050,"subs":"a master of","textPosition":"center"},{"start":28090,"end":29586,"subs":"procrastination. A sculptor","textPosition":"center"},{"start":29618,"end":30882,"subs":"of excuses. It","textPosition":"end"},{"start":30906,"end":31730,"subs":"will always find","textPosition":"center"},{"start":31770,"end":32322,"subs":"a reason to","textPosition":"end"},{"start":32346,"end":33714,"subs":"delay. But reality","textPosition":"end"},{"start":33762,"end":34882,"subs":"doesn\'t wait. Let","textPosition":"center"},{"start":34906,"end":35362,"subs":"me show you","textPosition":"center"},{"start":35386,"end":36162,"subs":"why. Every time","textPosition":"end"},{"start":36186,"end":37266,"subs":"you postpone action,","textPosition":"center"},{"start":37338,"end":37842,"subs":"you feed the","textPosition":"end"},{"start":37866,"end":39122,"subs":"monster of inertia.","textPosition":"end"},{"start":39266,"end":40210,"subs":"Science proves that","textPosition":"center"},{"start":40250,"end":40962,"subs":"momentum is the","textPosition":"center"},{"start":40986,"end":42306,"subs":"ultimate cheat code.","textPosition":"end"},{"start":42418,"end":43698,"subs":"Action breeds action.","textPosition":"center"},{"start":43834,"end":45042,"subs":"You\'re not cautious.","textPosition":"end"},{"start":45186,"end":45986,"subs":"You\'re just crippled","textPosition":"end"},{"start":46018,"end":47186,"subs":"by fear. Brutal","textPosition":"center"},{"start":47218,"end":48002,"subs":"truth 1. The","textPosition":"center"},{"start":48026,"end":49186,"subs":"3 second override.","textPosition":"end"},{"start":49218,"end":50114,"subs":"Meet Anya. A","textPosition":"center"},{"start":50122,"end":51282,"subs":"coder paralyzed by","textPosition":"end"},{"start":51306,"end":53060,"subs":"imposter syndrome. She","textPosition":"end"},{"start":53100,"end":53892,"subs":"forced herself to","textPosition":"center"},{"start":53916,"end":54612,"subs":"type one line","textPosition":"center"},{"start":54636,"end":55476,"subs":"of code within","textPosition":"end"},{"start":55548,"end":56372,"subs":"three seconds of","textPosition":"center"},{"start":56396,"end":57620,"subs":"doubt. Hitting. Not","textPosition":"end"},{"start":57660,"end":58724,"subs":"a perfect program,","textPosition":"end"},{"start":58892,"end":59988,"subs":"just one line.","textPosition":"center"},{"start":60124,"end":60868,"subs":"After a year,","textPosition":"center"},{"start":60924,"end":61620,"subs":"she launched a","textPosition":"end"},{"start":61660,"end":62660,"subs":"six figure app.","textPosition":"center"},{"start":62780,"end":63700,"subs":"Her secret, the","textPosition":"end"},{"start":63740,"end":64564,"subs":"three second rule.","textPosition":"end"},{"start":64612,"end":65892,"subs":"When hesitation strikes,","textPosition":"center"},{"start":65956,"end":66660,"subs":"attack it head","textPosition":"center"},{"start":66700,"end":67620,"subs":"on. Write one","textPosition":"end"},{"start":67660,"end":68740,"subs":"word, do one","textPosition":"center"},{"start":68780,"end":69620,"subs":"rep, make one","textPosition":"end"},{"start":69660,"end":70836,"subs":"call. This isn\'t","textPosition":"end"},{"start":70868,"end":72228,"subs":"about perfection. It\'s","textPosition":"center"},{"start":72244,"end":72852,"subs":"about proving to","textPosition":"center"},{"start":72876,"end":73876,"subs":"yourself. I control","textPosition":"end"},{"start":73948,"end":75156,"subs":"my fear. Brutal","textPosition":"center"},{"start":75188,"end":76244,"subs":"truth 2. Embrace","textPosition":"end"},{"start":76292,"end":77108,"subs":"the carnage. Mark","textPosition":"end"},{"start":77164,"end":78148,"subs":"failed seven times","textPosition":"center"},{"start":78204,"end":79172,"subs":"before launching his","textPosition":"center"},{"start":79196,"end":80580,"subs":"game. Seven times","textPosition":"end"},{"start":80620,"end":81732,"subs":"he faced ridicule,","textPosition":"center"},{"start":81796,"end":83700,"subs":"bankruptcy, despair. His","textPosition":"end"},{"start":83740,"end":85252,"subs":"secret, Celebrate the","textPosition":"end"},{"start":85276,"end":86996,"subs":"failures. Every rejection","textPosition":"center"},{"start":87028,"end":87700,"subs":"letter went on","textPosition":"center"},{"start":87740,"end":88900,"subs":"his wall. Every","textPosition":"end"},{"start":88940,"end":89812,"subs":"setback became a","textPosition":"center"},{"start":89836,"end":91012,"subs":"war story. By","textPosition":"end"},{"start":91036,"end":91876,"subs":"owning the carnage,","textPosition":"end"},{"start":91908,"end":92692,"subs":"he disarmed his","textPosition":"center"},{"start":92716,"end":93332,"subs":"fear of it.","textPosition":"center"},{"start":93436,"end":94388,"subs":"Your rule. Fail,","textPosition":"end"},{"start":94444,"end":96116,"subs":"fast, fail. Forward.","textPosition":"center"},{"start":96268,"end":97204,"subs":"Each scar is","textPosition":"end"},{"start":97212,"end":97732,"subs":"a badge of","textPosition":"end"},{"start":97756,"end":98596,"subs":"honor. A testament","textPosition":"center"},{"start":98628,"end":99652,"subs":"to your resilience.","textPosition":"center"},{"start":99796,"end":100788,"subs":"Brutal Truth three.","textPosition":"end"},{"start":100844,"end":101652,"subs":"The victory cry.","textPosition":"center"},{"start":101716,"end":102516,"subs":"Most people shrink","textPosition":"end"},{"start":102548,"end":102932,"subs":"in the face","textPosition":"end"},{"start":102956,"end":104340,"subs":"of challenges. They","textPosition":"center"},{"start":104380,"end":105508,"subs":"internalize doubt, letting","textPosition":"center"},{"start":105524,"end":106770,"subs":"it fester. The","textPosition":"end"},{"start":106810,"end":108082,"subs":"fix. Scream your","textPosition":"center"},{"start":108106,"end":110338,"subs":"intentions, literally. Before","textPosition":"end"},{"start":110394,"end":111282,"subs":"every big meeting.","textPosition":"end"},{"start":111386,"end":112402,"subs":"Before every lift.","textPosition":"center"},{"start":112466,"end":113474,"subs":"Before every risk.","textPosition":"center"},{"start":113562,"end":114722,"subs":"Roar your commitment.","textPosition":"end"},{"start":114866,"end":116610,"subs":"Visualize success. Feel","textPosition":"center"},{"start":116650,"end":117762,"subs":"the power surge.","textPosition":"end"},{"start":117906,"end":118610,"subs":"Say I am","textPosition":"end"},{"start":118650,"end":120194,"subs":"unstoppable. This ritual","textPosition":"center"},{"start":120242,"end":121234,"subs":"rewires your brain","textPosition":"center"},{"start":121282,"end":122338,"subs":"to associate action","textPosition":"end"},{"start":122394,"end":123330,"subs":"with victory, not","textPosition":"center"},{"start":123370,"end":124482,"subs":"fear. Train your","textPosition":"end"},{"start":124506,"end":125106,"subs":"mind to crave","textPosition":"end"},{"start":125138,"end":126466,"subs":"the battlefield. You\'re","textPosition":"center"},{"start":126498,"end":127538,"subs":"not seeking comfort.","textPosition":"center"},{"start":127634,"end":128914,"subs":"You\'re hunting greatness.","textPosition":"end"},{"start":129042,"end":130210,"subs":"Unleashing isn\'t something","textPosition":"center"},{"start":130250,"end":131426,"subs":"you achieve. It\'s","textPosition":"end"},{"start":131458,"end":132398,"subs":"someone you become.","textPosition":"end"},{"start":132554,"end":133318,"subs":"The world wants","textPosition":"center"},{"start":133334,"end":134150,"subs":"you to cower,","textPosition":"center"},{"start":134230,"end":134918,"subs":"but you. You\'re","textPosition":"end"},{"start":134934,"end":135382,"subs":"a force of","textPosition":"center"},{"start":135406,"end":136630,"subs":"nature. You\'ve got","textPosition":"end"},{"start":136670,"end":137478,"subs":"the three second","textPosition":"end"},{"start":137534,"end":138614,"subs":"override. Embrace the","textPosition":"center"},{"start":138622,"end":139494,"subs":"carnage. The victory","textPosition":"center"},{"start":139542,"end":140230,"subs":"cry. Now go.","textPosition":"end"},{"start":140270,"end":141030,"subs":"Seize your destiny.","textPosition":"center"}]',
    transcribedSubtitles: null,
    fps: 30,
    totalDuration: 151030,
    imageStyle: "cinematic",
    captionStyle: "caption-style-one",
    thumbnailUrl: "",
    bgmId: 4,
    aspectRatioId: 1,
    userId: "cma56j0q90000nnlb7uhulfpa",
    createdAt: "2025-05-01T16:03:23.791Z",
    updatedAt: "2025-05-01T16:05:12.480Z",
    aspectRatio: {
      id: 1,
      name: "video",
      width: 1280,
      height: 720,
    },
    bgm: {
      id: 4,
      name: "badass-aggressive-smart-brass-drums",
      bgmUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/badass-aggressive-smart-brass-drums.mp3",
      volume: 100,
    },
    scenes: [
      {
        id: "cma5k35sa0003nn0qv7xlu4hi",
        number: 28,
        start: 97092,
        end: 100516,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A badge of honor pinned to a soldier's chest, symbolizing courage and resilience, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20badge%20of%20honor%20pinned%20to%20a%20soldier's%20chest%2C%20symbolizing%20courage%20and%20resilience%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=4916415&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37a80009nn0qr7e9djt7",
        number: 8,
        start: 24896,
        end: 28866,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A close-up of a brain with gears and cogs turning slowly, symbolizing procrastination, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20close-up%20of%20a%20brain%20with%20gears%20and%20cogs%20turning%20slowly%2C%20symbolizing%20procrastination%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1846020&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k36vv0004nn0qw7aitge5",
        number: 1,
        start: 320,
        end: 3336,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A dark, empty theater with a single spotlight shining on a closed curtain, creating a sense of foreboding, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20dark%2C%20empty%20theater%20with%20a%20single%20spotlight%20shining%20on%20a%20closed%20curtain%2C%20creating%20a%20sense%20of%20foreboding%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3509166&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k374h0005nn0qu5p86bf5",
        number: 16,
        start: 55172,
        end: 58724,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A single line of code appearing on a screen, glowing brightly in the darkness, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20single%20line%20of%20code%20appearing%20on%20a%20screen%2C%20glowing%20brightly%20in%20the%20darkness%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=868097&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k374i0006nn0q4fg3589d",
        number: 33,
        start: 114866,
        end: 118610,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A person meditating, visualizing a clear path to success, feeling empowered and focused, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20meditating%2C%20visualizing%20a%20clear%20path%20to%20success%2C%20feeling%20empowered%20and%20focused%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2387452&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k374i0008nn0qejj1l4ne",
        number: 34,
        start: 118650,
        end: 122338,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "Brain scans highlighting neural pathways firing rapidly, symbolizing rewiring the mind, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/Brain%20scans%20highlighting%20neural%20pathways%20firing%20rapidly%2C%20symbolizing%20rewiring%20the%20mind%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=7651385&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k374i0007nn0qo08shqhn",
        number: 12,
        start: 40738,
        end: 45042,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A domino effect with a series of tiles falling in rapid succession, symbolizing momentum, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20domino%20effect%20with%20a%20series%20of%20tiles%20falling%20in%20rapid%20succession%2C%20symbolizing%20momentum%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6578040&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "overhead-shot",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37b1000dnn0qojqkdalo",
        number: 24,
        start: 81796,
        end: 86020,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "Empty bank account statement next to an eviction notice on a desk, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/Empty%20bank%20account%20statement%20next%20to%20an%20eviction%20notice%20on%20a%20desk%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3557603&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37b1000bnn0q40wezs9k",
        number: 30,
        start: 104036,
        end: 107314,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A dark, shadowy figure consuming a person from the inside out, representing internalized doubt, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20dark%2C%20shadowy%20figure%20consuming%20a%20person%20from%20the%20inside%20out%2C%20representing%20internalized%20doubt%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8768140&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37b1000cnn0qi5l9qxm2",
        number: 11,
        start: 36962,
        end: 40706,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A person struggling to climb a steep hill covered in thick mud, representing inertia, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20struggling%20to%20climb%20a%20steep%20hill%20covered%20in%20thick%20mud%2C%20representing%20inertia%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1616400&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37b8000enn0qq63k5ypt",
        number: 29,
        start: 100548,
        end: 103892,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person shrinking under the weight of a giant shadow, feeling small and insignificant, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20shrinking%20under%20the%20weight%20of%20a%20giant%20shadow%2C%20feeling%20small%20and%20insignificant%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=4403079&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "high-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37g8000fnn0quxwgxepi",
        number: 4,
        start: 10728,
        end: 14296,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A blacksmith forging a sword in a fiery furnace, sparks flying as they hammer the metal, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20blacksmith%20forging%20a%20sword%20in%20a%20fiery%20furnace%2C%20sparks%20flying%20as%20they%20hammer%20the%20metal%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=4924050&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37gf000gnn0qplpo033s",
        number: 5,
        start: 14328,
        end: 18200,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A group of determined athletes pushing through a grueling workout, sweat dripping and muscles straining, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20group%20of%20determined%20athletes%20pushing%20through%20a%20grueling%20workout%2C%20sweat%20dripping%20and%20muscles%20straining%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3802106&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37gh000hnn0qmhvg80uk",
        number: 31,
        start: 107442,
        end: 110882,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A person screaming at the top of their lungs, releasing pent-up frustration and energy, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20screaming%20at%20the%20top%20of%20their%20lungs%2C%20releasing%20pent-up%20frustration%20and%20energy%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6634925&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37gn000jnn0q075ya6dm",
        number: 15,
        start: 51906,
        end: 55124,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A determined programmer typing furiously on a keyboard, focused on the screen, ignoring distractions, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20determined%20programmer%20typing%20furiously%20on%20a%20keyboard%2C%20focused%20on%20the%20screen%2C%20ignoring%20distractions%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=4322399&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37gm000inn0qjkp6h5o7",
        number: 3,
        start: 7216,
        end: 10696,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A hand dramatically shattering a mirror into pieces, light bursting through the cracks, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20hand%20dramatically%20shattering%20a%20mirror%20into%20pieces%2C%20light%20bursting%20through%20the%20cracks%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8451416&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37gv000knn0q0c8zja2m",
        number: 18,
        start: 62780,
        end: 65892,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A person standing at the edge of a cliff, contemplating a jump, feeling hesitant and afraid, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20standing%20at%20the%20edge%20of%20a%20cliff%2C%20contemplating%20a%20jump%2C%20feeling%20hesitant%20and%20afraid%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3830228&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k37ax000ann0qsh8dg8vq",
        number: 37,
        start: 130018,
        end: 133462,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A caterpillar transforming into a butterfly, emerging from its cocoon, embracing change, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20caterpillar%20transforming%20into%20a%20butterfly%2C%20emerging%20from%20its%20cocoon%2C%20embracing%20change%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8251128&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k385e000lnn0qaxoi900a",
        number: 35,
        start: 122394,
        end: 126066,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A gladiator entering an arena, craving the challenge and the roar of the crowd, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20gladiator%20entering%20an%20arena%2C%20craving%20the%20challenge%20and%20the%20roar%20of%20the%20crowd%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8227736&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k3905000wnn0qk4610igv",
        number: 19,
        start: 65956,
        end: 69124,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A warrior charging into battle, sword raised high, fearlessly attacking the enemy, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20warrior%20charging%20into%20battle%2C%20sword%20raised%20high%2C%20fearlessly%20attacking%20the%20enemy%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1822384&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k38jn000mnn0qh26k747e",
        number: 7,
        start: 21504,
        end: 24872,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A businessman in a suit walking on a tightrope, balancing precariously high above the ground, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20businessman%20in%20a%20suit%20walking%20on%20a%20tightrope%2C%20balancing%20precariously%20high%20above%20the%20ground%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=5331617&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k39g50013nn0q74p4cmbu",
        number: 13,
        start: 45186,
        end: 48578,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person frozen in place, their body encased in ice, fear consuming them, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20frozen%20in%20place%2C%20their%20body%20encased%20in%20ice%2C%20fear%20consuming%20them%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=7556996&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k38oe000nnn0qr8x8q582",
        number: 20,
        start: 69212,
        end: 72676,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A person standing at the top of a mountain, planting a flag, celebrating a hard-fought victory, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20standing%20at%20the%20top%20of%20a%20mountain%2C%20planting%20a%20flag%2C%20celebrating%20a%20hard-fought%20victory%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8647035&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k39jj0015nn0qrnl4wpeq",
        number: 23,
        start: 79196,
        end: 81732,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A person standing alone on a stage, being booed by a crowd, feeling humiliated and rejected, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20standing%20alone%20on%20a%20stage%2C%20being%20booed%20by%20a%20crowd%2C%20feeling%20humiliated%20and%20rejected%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3038053&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k38oe000onn0qtkqxp84i",
        number: 39,
        start: 137534,
        end: 141030,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A volcano erupting, spewing lava and ash, representing raw power and unstoppable force, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20volcano%20erupting%2C%20spewing%20lava%20and%20ash%2C%20representing%20raw%20power%20and%20unstoppable%20force%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3375882&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "low-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k39jj0014nn0qr2aigw9j",
        number: 10,
        start: 32978,
        end: 36914,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A clock with its hands frozen, surrounded by swirling sand, time slipping away, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20clock%20with%20its%20hands%20frozen%2C%20surrounded%20by%20swirling%20sand%2C%20time%20slipping%20away%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8512263&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k38pg000pnn0qvb0z8gtb",
        number: 36,
        start: 126178,
        end: 129986,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A lone wolf hunting in the wilderness, driven by instinct and a thirst for greatness, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20lone%20wolf%20hunting%20in%20the%20wilderness%2C%20driven%20by%20instinct%20and%20a%20thirst%20for%20greatness%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2465004&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k38qq000qnn0qo69uihxi",
        number: 22,
        start: 75804,
        end: 79172,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A video game character respawning after a defeat, ready to fight again, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20video%20game%20character%20respawning%20after%20a%20defeat%2C%20ready%20to%20fight%20again%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2806735&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k38xf000rnn0qepqjmjrz",
        number: 9,
        start: 28978,
        end: 32866,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A sculptor chipping away at a large stone block, revealing a hidden figure inside, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20sculptor%20chipping%20away%20at%20a%20large%20stone%20block%2C%20revealing%20a%20hidden%20figure%20inside%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=7188617&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k38xw000tnn0qrl92vtnm",
        number: 2,
        start: 3448,
        end: 7192,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A shadowy figure whispering into a person's ear, their face filled with anxiety and uncertainty, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20shadowy%20figure%20whispering%20into%20a%20person's%20ear%2C%20their%20face%20filled%20with%20anxiety%20and%20uncertainty%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6257185&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "high-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k38xv000snn0qmoaykiir",
        number: 38,
        start: 133486,
        end: 137478,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A person cowering in fear, hiding in the shadows, avoiding confrontation, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20cowering%20in%20fear%2C%20hiding%20in%20the%20shadows%2C%20avoiding%20confrontation%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8302229&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "high-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k38za000vnn0qzy233x2b",
        number: 32,
        start: 110906,
        end: 114722,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A group of people roaring with excitement before entering a stadium, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20group%20of%20people%20roaring%20with%20excitement%20before%20entering%20a%20stadium%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=101731&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k38xw000unn0q0jczn57j",
        number: 21,
        start: 72708,
        end: 75748,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person looking in the mirror, seeing a stronger, more confident version of themselves, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20looking%20in%20the%20mirror%2C%20seeing%20a%20stronger%2C%20more%20confident%20version%20of%20themselves%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8482855&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k3905000xnn0qvlufonw6",
        number: 26,
        start: 89836,
        end: 93332,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A warrior displaying battle scars, each one representing a challenge overcome, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20warrior%20displaying%20battle%20scars%2C%20each%20one%20representing%20a%20challenge%20overcome%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2778660&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k392b000ynn0qlcg0p1ag",
        number: 25,
        start: 86180,
        end: 89812,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A wall covered in rejection letters, serving as a reminder of past failures, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20wall%20covered%20in%20rejection%20letters%2C%20serving%20as%20a%20reminder%20of%20past%20failures%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1496136&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k39980010nn0qeem11xmd",
        number: 27,
        start: 93436,
        end: 97044,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A person falling down repeatedly, getting back up each time, determined to move forward, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20falling%20down%20repeatedly%2C%20getting%20back%20up%20each%20time%2C%20determined%20to%20move%20forward%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=9878957&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k394z000znn0q49izyefb",
        number: 17,
        start: 58892,
        end: 62660,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A mobile app icon launching into the sky like a rocket, symbolizing success and achievement, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20mobile%20app%20icon%20launching%20into%20the%20sky%20like%20a%20rocket%2C%20symbolizing%20success%20and%20achievement%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3401158&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k39980011nn0qt6abfnat",
        number: 6,
        start: 18240,
        end: 21368,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "Two contrasting paths diverging in a forest, one overgrown and the other well-worn, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/Two%20contrasting%20paths%20diverging%20in%20a%20forest%2C%20one%20overgrown%20and%20the%20other%20well-worn%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=5998124&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k39aq0012nn0ql36c09hi",
        number: 14,
        start: 48634,
        end: 51842,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A young woman sitting in front of a computer, overwhelmed by lines of code, feeling lost and insecure, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20young%20woman%20sitting%20in%20front%20of%20a%20computer%2C%20overwhelmed%20by%20lines%20of%20code%2C%20feeling%20lost%20and%20insecure%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6269987&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
    ],
    voiceOver: [
      {
        id: "cma5k2g310002nn0qu92xsrxg",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/cb624be1-854d-4180-89a0-7cf1d8e79ef5.mp3",
        voiceId: "en-US-BrianNeural",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
      {
        id: "cma5k1i3r0001nn0qw3qc5cgb",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/cb624be1-854d-4180-89a0-7cf1d8e79ef5.mp3",
        voiceId: "en-US-BrianNeural",
        videoId: "cma5k10cv0000nn0qs9oisu5i",
      },
    ],
  },
  {
    id: "cma81cblq0004nne5h84tjv31",
    prompt: "The patience code",
    title: "The Patience Code",
    script:
      "A ticking clock. A slammed fist. A promise broken. This is where impatience leads: to ruin. I'm about to hand you the Patience Code—three laws forged in the crucible of failure. They are a shield, a sword, and a silent revolution.\n\nThe Lie You've Been Sold: That patience is passive. It's not. It’s a high-stakes game, and your mind is the casino. The house always wins… unless you rewrite the rules.\n\nWhy do most people crack? They mistake patience for weakness. They think waiting means losing. They let fear whisper doubts that blossom into rash decisions.\n\nLaw #1: The Still Water Gambit. Imagine Kai, a master calligrapher, staring at a blank canvas for seven years. Not sketching. Not planning. Just… being. He understood: still water reflects the moon perfectly. Agitation blurs the image. Your move: Before acting, become the canvas. Meditate, breathe, observe. Let solutions emerge from the quiet.\n\nLaw #2: The Delayed Gratification Matrix. Picture Anya, a coder, offered a quick payout for a half-finished program. She refused. She knew true wealth isn't instant cash—it's compound interest. Delay rewards. Build assets. The more you wait, the more the universe pays.\n\nLaw #3: The Crucible Ritual. We all break. The question is: what do you forge from the fragments? When impatience flares, retreat. Find a quiet space. Light a candle. Watch it burn. Feel the heat. Say: 'This fire tempers me. I will not break.' This ritual is your rebirth. Embrace the heat.\n\nBlackout Protocol:\n*   Breath control: Inhale for 7, hold for 4, exhale for 8.\n*   Sensory Deprivation: 60 seconds of darkness and silence.\n*   Cold Shock: A face-full of ice water.\n\nYou are not a victim of circumstance. You are the architect of your destiny. Patience is not waiting. It's building. You are the builder. Now, go construct your empire, brick by agonizing brick.",
    transcriptionId: "1abd47d3-4573-4919-b349-0a3983fb019c",
    transcribedWords:
      '[{"start":160,"end":1368,"subs":"A ticking clock.","textPosition":"center"},{"start":1544,"end":3096,"subs":"A slammed fist.","textPosition":"center"},{"start":3288,"end":4940,"subs":"A promise broken.","textPosition":"center"},{"start":5360,"end":6040,"subs":"This is where","textPosition":"end"},{"start":6080,"end":7512,"subs":"impatience leads to","textPosition":"center"},{"start":7536,"end":9320,"subs":"ruin. I\'m about","textPosition":"end"},{"start":9360,"end":9832,"subs":"to hand you","textPosition":"end"},{"start":9856,"end":11000,"subs":"the patience code.","textPosition":"center"},{"start":11080,"end":12104,"subs":"Three laws forged","textPosition":"center"},{"start":12152,"end":12824,"subs":"in the crucible","textPosition":"end"},{"start":12872,"end":14552,"subs":"of failure. They","textPosition":"center"},{"start":14576,"end":15368,"subs":"are a shield,","textPosition":"end"},{"start":15464,"end":16360,"subs":"a sword and","textPosition":"end"},{"start":16400,"end":17820,"subs":"a silent revolution.","textPosition":"center"},{"start":18320,"end":19208,"subs":"The lie you\'ve","textPosition":"center"},{"start":19224,"end":20200,"subs":"been sold, that","textPosition":"end"},{"start":20240,"end":21740,"subs":"patience is passive.","textPosition":"center"},{"start":22160,"end":24088,"subs":"It\'s not. It\'s","textPosition":"end"},{"start":24104,"end":24792,"subs":"a high stakes","textPosition":"end"},{"start":24856,"end":25592,"subs":"game and your","textPosition":"center"},{"start":25616,"end":26232,"subs":"mind is the","textPosition":"center"},{"start":26256,"end":28126,"subs":"casino. The house","textPosition":"end"},{"start":28198,"end":29566,"subs":"always wins. Unless","textPosition":"center"},{"start":29598,"end":30382,"subs":"you rewrite the","textPosition":"end"},{"start":30406,"end":32142,"subs":"rules. Why do","textPosition":"end"},{"start":32166,"end":33410,"subs":"most people crack?","textPosition":"center"},{"start":33910,"end":35182,"subs":"They mistake patience","textPosition":"center"},{"start":35246,"end":37150,"subs":"for weakness. They","textPosition":"end"},{"start":37190,"end":38126,"subs":"think waiting means","textPosition":"center"},{"start":38198,"end":39902,"subs":"losing. They let","textPosition":"end"},{"start":39926,"end":41006,"subs":"fear whisper. Doubts","textPosition":"end"},{"start":41038,"end":41870,"subs":"that blossom into","textPosition":"center"},{"start":41910,"end":44862,"subs":"rash decisions. The","textPosition":"center"},{"start":44886,"end":46370,"subs":"still water gambit.","textPosition":"end"},{"start":46790,"end":48174,"subs":"Imagine Kai, a","textPosition":"center"},{"start":48182,"end":49758,"subs":"master calligrapher, staring","textPosition":"end"},{"start":49774,"end":50382,"subs":"at a blank","textPosition":"end"},{"start":50446,"end":51390,"subs":"canvas for seven","textPosition":"center"},{"start":51430,"end":53980,"subs":"years. Not sketching,","textPosition":"center"},{"start":54480,"end":56792,"subs":"not planning, just","textPosition":"end"},{"start":56896,"end":59256,"subs":"being he. Understood.","textPosition":"center"},{"start":59368,"end":60504,"subs":"Still water reflects","textPosition":"end"},{"start":60552,"end":61900,"subs":"the moon perfectly.","textPosition":"end"},{"start":62400,"end":63832,"subs":"Agitation blurs the","textPosition":"center"},{"start":63856,"end":65960,"subs":"image. Your move.","textPosition":"center"},{"start":66080,"end":67528,"subs":"Before acting. Become","textPosition":"end"},{"start":67584,"end":70008,"subs":"the canvas. Meditate.","textPosition":"center"},{"start":70104,"end":72568,"subs":"Breathe. Observe. Let","textPosition":"end"},{"start":72624,"end":73704,"subs":"solutions emerge from","textPosition":"end"},{"start":73712,"end":76280,"subs":"the quiet. The","textPosition":"center"},{"start":76320,"end":78380,"subs":"delayed gratification. Matrix","textPosition":"center"},{"start":78850,"end":80202,"subs":"picture. Anya. A","textPosition":"end"},{"start":80226,"end":81322,"subs":"coder offered a","textPosition":"center"},{"start":81346,"end":82202,"subs":"quick payout for","textPosition":"end"},{"start":82226,"end":82986,"subs":"a half finished","textPosition":"end"},{"start":83018,"end":85470,"subs":"program. She refused.","textPosition":"center"},{"start":86050,"end":87066,"subs":"She knew true","textPosition":"center"},{"start":87098,"end":88122,"subs":"wealth isn\'t instant","textPosition":"end"},{"start":88186,"end":89562,"subs":"cash. It\'s compound","textPosition":"center"},{"start":89626,"end":92190,"subs":"interest. Delay rewards.","textPosition":"end"},{"start":92930,"end":95162,"subs":"Build assets. The","textPosition":"end"},{"start":95186,"end":95930,"subs":"more you wait,","textPosition":"center"},{"start":96010,"end":96602,"subs":"the more the","textPosition":"center"},{"start":96626,"end":99722,"subs":"universe pays. The","textPosition":"end"},{"start":99746,"end":101802,"subs":"Crucible ritual. We","textPosition":"center"},{"start":101826,"end":103642,"subs":"all break. The","textPosition":"end"},{"start":103666,"end":104810,"subs":"question is, what","textPosition":"end"},{"start":104850,"end":105386,"subs":"do you forge","textPosition":"center"},{"start":105418,"end":106510,"subs":"from the fragments?","textPosition":"center"},{"start":107070,"end":108710,"subs":"When impatience flares,","textPosition":"end"},{"start":108790,"end":110742,"subs":"retreat. Find a","textPosition":"center"},{"start":110766,"end":112838,"subs":"quiet space. Light","textPosition":"end"},{"start":112894,"end":114598,"subs":"a candle. Watch","textPosition":"end"},{"start":114654,"end":116470,"subs":"it burn. Feel","textPosition":"center"},{"start":116510,"end":118534,"subs":"the heat. Say","textPosition":"center"},{"start":118622,"end":119766,"subs":"this. Fire tempers","textPosition":"end"},{"start":119798,"end":121270,"subs":"me. I will","textPosition":"center"},{"start":121310,"end":123110,"subs":"not break. This","textPosition":"end"},{"start":123150,"end":123942,"subs":"ritual is your","textPosition":"end"},{"start":123966,"end":126102,"subs":"rebirth. Embrace the","textPosition":"center"},{"start":126126,"end":130294,"subs":"heat. Breath. Inhale","textPosition":"center"},{"start":130342,"end":131430,"subs":"for seven. Hold","textPosition":"end"},{"start":131470,"end":132774,"subs":"for four. Exhale","textPosition":"center"},{"start":132822,"end":134814,"subs":"for eight. Sensory","textPosition":"end"},{"start":134862,"end":136638,"subs":"deprivation. 60 seconds","textPosition":"end"},{"start":136654,"end":137486,"subs":"of darkness and","textPosition":"center"},{"start":137558,"end":139918,"subs":"silence. Cold shock.","textPosition":"center"},{"start":140014,"end":140702,"subs":"A face full","textPosition":"end"},{"start":140726,"end":141770,"subs":"of ice water.","textPosition":"center"},{"start":142230,"end":142942,"subs":"You are not","textPosition":"end"},{"start":142966,"end":143630,"subs":"a victim of","textPosition":"end"},{"start":143670,"end":145742,"subs":"circumstance. You are","textPosition":"center"},{"start":145766,"end":146622,"subs":"the architect of","textPosition":"center"},{"start":146646,"end":148622,"subs":"your destiny. Patience","textPosition":"end"},{"start":148686,"end":149730,"subs":"is not waiting.","textPosition":"center"},{"start":150230,"end":152270,"subs":"It\'s building. You","textPosition":"end"},{"start":152310,"end":153410,"subs":"are the builder.","textPosition":"end"},{"start":153990,"end":155102,"subs":"Now go. Construct","textPosition":"center"},{"start":155166,"end":156334,"subs":"your empire, brick","textPosition":"center"},{"start":156382,"end":157390,"subs":"by agonizing brick.","textPosition":"end"}]',
    transcribedSubtitles: null,
    fps: 30,
    totalDuration: 167390,
    imageStyle: "cyberpunk",
    captionStyle: "caption-style-one",
    thumbnailUrl: "",
    bgmId: 13,
    aspectRatioId: 1,
    userId: "cma56j0q90000nnlb7uhulfpa",
    createdAt: "2025-05-03T09:43:37.406Z",
    updatedAt: "2025-05-03T09:45:29.943Z",
    aspectRatio: {
      id: 1,
      name: "video",
      width: 1280,
      height: 720,
    },
    bgm: {
      id: 13,
      name: "dark-intense-tension-orchestra",
      bgmUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dark-intense-tension-orchestra.mp3",
      volume: 100,
    },
    scenes: [
      {
        id: "cma81ei8t0007nne5qpe1o23d",
        number: 8,
        start: 27510,
        end: 31090,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "A chessboard with pieces strategically placed, a hand hovering over a queen, dramatic lighting, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20chessboard%20with%20pieces%20strategically%20placed%2C%20a%20hand%20hovering%20over%20a%20queen%2C%20dramatic%20lighting%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8760541&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejea000bnne5rimdglyp",
        number: 3,
        start: 8720,
        end: 12104,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A blacksmith's forge with glowing embers, three ancient scrolls lying open on a workbench, a weathered hand reaching for a hammer, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20blacksmith's%20forge%20with%20glowing%20embers%2C%20three%20ancient%20scrolls%20lying%20open%20on%20a%20workbench%2C%20a%20weathered%20hand%20reaching%20for%20a%20hammer%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6367786&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejeb000dnne5oo9fiqqx",
        number: 37,
        start: 135886,
        end: 138370,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "Complete darkness and silence, abstract representation, extreme-close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Complete%20darkness%20and%20silence%2C%20abstract%20representation%2C%20extreme-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9083024&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejec000enne5gr5zlcyq",
        number: 6,
        start: 19440,
        end: 23220,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A puppet with tangled strings, spotlight shining on it, a blurred audience in the background, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20puppet%20with%20tangled%20strings%2C%20spotlight%20shining%20on%20it%2C%20a%20blurred%20audience%20in%20the%20background%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3350509&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ej5t0008nne5rhf0jt8t",
        number: 35,
        start: 128670,
        end: 132182,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A person meditating with focused breath, calm expression, visual representation of inhaling, holding, and exhaling, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20meditating%20with%20focused%20breath%2C%20calm%20expression%2C%20visual%20representation%20of%20inhaling%2C%20holding%2C%20and%20exhaling%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=752550&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejq4000knne52p7i0bvp",
        number: 21,
        start: 75920,
        end: 79402,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "A complex code matrix cascading down a computer screen, digital rain, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20complex%20code%20matrix%20cascading%20down%20a%20computer%20screen%2C%20digital%20rain%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5365634&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejkg000fnne5uktw0uxn",
        number: 33,
        start: 121550,
        end: 124810,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "A phoenix rising from ashes, wings spread wide, symbolizing rebirth, medium-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20phoenix%20rising%20from%20ashes%2C%20wings%20spread%20wide%2C%20symbolizing%20rebirth%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=862766&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejkg000gnne5cslpfsr6",
        number: 22,
        start: 79466,
        end: 82986,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A coder sitting in front of multiple monitors, a pile of cash being offered, determined expression, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20coder%20sitting%20in%20front%20of%20multiple%20monitors%2C%20a%20pile%20of%20cash%20being%20offered%2C%20determined%20expression%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8479122&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejki000jnne5ttysob1q",
        number: 28,
        start: 103330,
        end: 106510,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "Broken pieces of pottery being carefully assembled, a mosaic taking shape, close-up overhead-shot, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Broken%20pieces%20of%20pottery%20being%20carefully%20assembled%2C%20a%20mosaic%20taking%20shape%2C%20close-up%20overhead-shot%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5460191&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "overhead-shot",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejkh000inne5cjiwth3i",
        number: 20,
        start: 72160,
        end: 74540,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A single ray of light piercing through darkness, illuminating dust particles, close-up low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20single%20ray%20of%20light%20piercing%20through%20darkness%2C%20illuminating%20dust%20particles%2C%20close-up%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4807227&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81el6j000xnne575oxw6jl",
        number: 2,
        start: 4152,
        end: 8220,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A desolate wasteland with a broken signpost pointing in multiple directions, dark storm clouds gathering overhead, extreme-wide-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20desolate%20wasteland%20with%20a%20broken%20signpost%20pointing%20in%20multiple%20directions%2C%20dark%20storm%20clouds%20gathering%20overhead%2C%20extreme-wide-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8778459&nologo=true&private=true",
        shotSize: "extreme-wide-shot",
        cameraAngle: "high-angle",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81em3o0015nne54s0io2u0",
        number: 25,
        start: 90930,
        end: 94190,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "A seed being planted in fertile soil, time-lapse of growth, close-up low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20seed%20being%20planted%20in%20fertile%20soil%2C%20time-lapse%20of%20growth%2C%20close-up%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5684971&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81eje90009nne50avek2vf",
        number: 7,
        start: 23600,
        end: 27100,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A roulette wheel spinning in a dimly lit casino, blurred faces of gamblers surrounding the table, medium-shot shoulder-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20roulette%20wheel%20spinning%20in%20a%20dimly%20lit%20casino%2C%20blurred%20faces%20of%20gamblers%20surrounding%20the%20table%2C%20medium-shot%20shoulder-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6551719&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "shoulder-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejea000anne5pmjylmzk",
        number: 16,
        start: 58560,
        end: 61900,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A still lake reflecting a full moon, trees silhouetted on the shoreline, serene atmosphere, establishing-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20still%20lake%20reflecting%20a%20full%20moon%2C%20trees%20silhouetted%20on%20the%20shoreline%2C%20serene%20atmosphere%2C%20establishing-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3581358&nologo=true&private=true",
        shotSize: "establishing-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejrz000onne57ipn9gxp",
        number: 11,
        start: 39350,
        end: 43170,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A dark forest with whispering shadows, gnarled trees reaching out like claws, low-angle, extreme-wide-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20dark%20forest%20with%20whispering%20shadows%2C%20gnarled%20trees%20reaching%20out%20like%20claws%2C%20low-angle%2C%20extreme-wide-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=15816&nologo=true&private=true",
        shotSize: "extreme-wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejqo000lnne5mrislnwp",
        number: 32,
        start: 118030,
        end: 121510,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A determined face illuminated by candlelight, eyes focused, resolute expression, medium-close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20determined%20face%20illuminated%20by%20candlelight%2C%20eyes%20focused%2C%20resolute%20expression%2C%20medium-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7853971&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejkh000hnne5vqjfla4o",
        number: 15,
        start: 54480,
        end: 58520,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A figure meditating in a zen garden, raking patterns in the sand, peaceful expression, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20figure%20meditating%20in%20a%20zen%20garden%2C%20raking%20patterns%20in%20the%20sand%2C%20peaceful%20expression%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4895963&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejea000cnne538jo42lj",
        number: 41,
        start: 150230,
        end: 153410,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "A brick being laid in a foundation, construction of a building, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20brick%20being%20laid%20in%20a%20foundation%2C%20construction%20of%20a%20building%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7682245&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81elbn000ynne5eko62dm6",
        number: 26,
        start: 94850,
        end: 97870,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A vast starry sky, a galaxy swirling in the distance, awe-inspiring view, establishing-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20vast%20starry%20sky%2C%20a%20galaxy%20swirling%20in%20the%20distance%2C%20awe-inspiring%20view%2C%20establishing-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3355837&nologo=true&private=true",
        shotSize: "establishing-shot",
        cameraAngle: "low-angle",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81elcr000znne5a11di8s1",
        number: 38,
        start: 138950,
        end: 142942,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A face being splashed with ice water, shocked expression, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20face%20being%20splashed%20with%20ice%20water%2C%20shocked%20expression%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4760159&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81eljw0010nne5082114gn",
        number: 14,
        start: 51430,
        end: 53980,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "Close-up of a blank canvas, the texture of the fabric visible, subtle light changes, extreme-close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20a%20blank%20canvas%2C%20the%20texture%20of%20the%20fabric%20visible%2C%20subtle%20light%20changes%2C%20extreme-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6074612&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81emdi0019nne5q2bjxavw",
        number: 24,
        start: 86050,
        end: 90230,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "A graph showing exponential growth over time, upward trend, visual representation of compound interest, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20graph%20showing%20exponential%20growth%20over%20time%2C%20upward%20trend%2C%20visual%20representation%20of%20compound%20interest%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=901759&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ekx4000pnne5dda5vgau",
        number: 1,
        start: 160,
        end: 4104,
        motionTemplateId: "pull-out",
        imagePrompt:
          "Close-up of a vintage clock ticking loudly, a clenched fist slamming down on a wooden table, shattered picture frame on the floor, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20a%20vintage%20clock%20ticking%20loudly%2C%20a%20clenched%20fist%20slamming%20down%20on%20a%20wooden%20table%2C%20shattered%20picture%20frame%20on%20the%20floor%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3505374&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81elqq0011nne5l72sk4ik",
        number: 40,
        start: 146646,
        end: 149730,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A person meditating in a serene environment, visualizing a desired future, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20meditating%20in%20a%20serene%20environment%2C%20visualizing%20a%20desired%20future%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1159494&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ekxw000qnne58rtwfgwk",
        number: 12,
        start: 44550,
        end: 47918,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A still lake reflecting a serene mountain range, mist rising from the water's surface, establishing-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20still%20lake%20reflecting%20a%20serene%20mountain%20range%2C%20mist%20rising%20from%20the%20water's%20surface%2C%20establishing-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7052803&nologo=true&private=true",
        shotSize: "establishing-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81elqr0012nne5n9a537xz",
        number: 29,
        start: 107070,
        end: 109530,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person retreating into a quiet forest, sunlight dappling through the trees, sense of solitude, wide-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20retreating%20into%20a%20quiet%20forest%2C%20sunlight%20dappling%20through%20the%20trees%2C%20sense%20of%20solitude%2C%20wide-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7885706&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81el34000tnne5fy0qfhyw",
        number: 4,
        start: 12152,
        end: 16040,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "Close-up of a cracked shield, a gleaming sword, and a raised fist silhouetted against a fiery sunset, medium-close-up low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20a%20cracked%20shield%2C%20a%20gleaming%20sword%2C%20and%20a%20raised%20fist%20silhouetted%20against%20a%20fiery%20sunset%2C%20medium-close-up%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5015058&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "low-angle",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81em5b0016nne5ln8innl6",
        number: 30,
        start: 110190,
        end: 113850,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A candle flickering in a darkened room, soft light illuminating the surroundings, peaceful atmosphere, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20candle%20flickering%20in%20a%20darkened%20room%2C%20soft%20light%20illuminating%20the%20surroundings%2C%20peaceful%20atmosphere%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=502860&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81el3l000unne5zowugwaa",
        number: 34,
        start: 125310,
        end: 126730,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A hand reaching out to a source of intense heat, determined to withstand, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20hand%20reaching%20out%20to%20a%20source%20of%20intense%20heat%2C%20determined%20to%20withstand%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6480281&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81elyp0013nne5qh5kt0wi",
        number: 27,
        start: 99410,
        end: 102710,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A blacksmith's forge with intense heat, metal being hammered into shape, sparks flying, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20blacksmith's%20forge%20with%20intense%20heat%2C%20metal%20being%20hammered%20into%20shape%2C%20sparks%20flying%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6869267&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81el3w000vnne5cx0nm9oe",
        number: 10,
        start: 35510,
        end: 38930,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A long, empty road stretching into the distance, a lone figure walking away, wide-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20long%2C%20empty%20road%20stretching%20into%20the%20distance%2C%20a%20lone%20figure%20walking%20away%2C%20wide-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6713333&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejqw000mnne5md2mx4qz",
        number: 5,
        start: 16120,
        end: 19400,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A lone figure standing in a vast, empty desert, mirages shimmering on the horizon, extreme-wide-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20lone%20figure%20standing%20in%20a%20vast%2C%20empty%20desert%2C%20mirages%20shimmering%20on%20the%20horizon%2C%20extreme-wide-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4833556&nologo=true&private=true",
        shotSize: "extreme-wide-shot",
        cameraAngle: "high-angle",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81ejqw000nnne512hfd2gy",
        number: 13,
        start: 48014,
        end: 51390,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A calligrapher meticulously painting a stroke on a large canvas, sunlight streaming through a window, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20calligrapher%20meticulously%20painting%20a%20stroke%20on%20a%20large%20canvas%2C%20sunlight%20streaming%20through%20a%20window%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6487903&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81elyp0014nne5poq0pmze",
        number: 17,
        start: 62400,
        end: 65960,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "Ripples disturbing the surface of a pond, distorted reflections of trees, close-up overhead-shot, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Ripples%20disturbing%20the%20surface%20of%20a%20pond%2C%20distorted%20reflections%20of%20trees%2C%20close-up%20overhead-shot%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9746151&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "overhead-shot",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81el12000snne5ii0yo4uk",
        number: 39,
        start: 142966,
        end: 146622,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "A blueprint being unfurled, architectural plans for a grand structure, medium-shot overhead-shot, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20blueprint%20being%20unfurled%2C%20architectural%20plans%20for%20a%20grand%20structure%2C%20medium-shot%20overhead-shot%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1187163&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "overhead-shot",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81em9b0018nne5nui044i7",
        number: 18,
        start: 66080,
        end: 68620,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A hand gently touching a canvas stretched on a wooden frame, natural light, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20hand%20gently%20touching%20a%20canvas%20stretched%20on%20a%20wooden%20frame%2C%20natural%20light%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8565700&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81el0f000rnne5l7ryrpmv",
        number: 42,
        start: 153990,
        end: 157390,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "A grand structure being built brick by brick, time-lapse of construction, wide-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20grand%20structure%20being%20built%20brick%20by%20brick%2C%20time-lapse%20of%20construction%2C%20wide-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1497400&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "low-angle",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81emdy001anne5m958x4ra",
        number: 23,
        start: 83018,
        end: 85470,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A hand pushing away a stack of money, resolute expression, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20hand%20pushing%20away%20a%20stack%20of%20money%2C%20resolute%20expression%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=526967&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81el62000wnne5q06aay47",
        number: 31,
        start: 114190,
        end: 117290,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "Close-up of a candle flame dancing and flickering, shadows playing on the walls, extreme-close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20a%20candle%20flame%20dancing%20and%20flickering%2C%20shadows%20playing%20on%20the%20walls%2C%20extreme-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=862273&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81emen001cnne5l6hg269g",
        number: 9,
        start: 31590,
        end: 35470,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A fragile glass figurine shattering into pieces on a hard surface, slow motion, extreme-close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20fragile%20glass%20figurine%20shattering%20into%20pieces%20on%20a%20hard%20surface%2C%20slow%20motion%2C%20extreme-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4539018&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81em8r0017nne55p7bne3n",
        number: 19,
        start: 69200,
        end: 71660,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A person meditating in a quiet room, sunlight filtering through the curtains, serene expression, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20meditating%20in%20a%20quiet%20room%2C%20sunlight%20filtering%20through%20the%20curtains%2C%20serene%20expression%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1493313&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81emdy001bnne5iaqp0xf3",
        number: 36,
        start: 132286,
        end: 135742,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A person in complete darkness, eyes closed, focusing inward, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20in%20complete%20darkness%2C%20eyes%20closed%2C%20focusing%20inward%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8681265&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
    ],
    voiceOver: [
      {
        id: "cma81dpgp0006nne5w410w3pm",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/5ad56269-1b0f-4e28-90c2-71d8bfc625ce.mp3",
        voiceId: "en-US-ChristopherNeural",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
      {
        id: "cma81cs6x0005nne5ryhvlozp",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/5ad56269-1b0f-4e28-90c2-71d8bfc625ce.mp3",
        voiceId: "en-US-ChristopherNeural",
        videoId: "cma81cblq0004nne5h84tjv31",
      },
    ],
  },
  {
    id: "cma6tc5a90002nnr4pd36qq4x",
    prompt: "The art of living and leaving",
    title: "The Art of Living and Leaving",
    script:
      "A lone monk sweeps fallen cherry blossoms from a temple courtyard, each petal a fleeting moment. He meticulously gathers them, only to release them again into the wind. A young apprentice watches, brow furrowed in confusion.\n\nThe boy approaches the monk, hand outstretched. 'Master, why do you collect what you will only discard? Isn't this… pointless?'\n\nThe master pauses, the bamboo broom still in his hand. 'The garden demands order. We must make an attempt.'\n\nYears pass. The boy grows, mimicking the master's rituals. He sweeps, collects, releases. Yet, an unease festers within him. The cyclical nature of the garden, of life itself, feels… incomplete.\n\nOne day, a fierce storm tears through the valley. The cherry tree, ancient and revered, is uprooted. The monk, now frail, watches with a quiet acceptance. The apprentice, however, is devastated. He runs to the fallen tree, desperate to salvage something.\n\nThe old monk gently places a hand on his shoulder. 'Let it go. Its time here is done.'\n\nA wave of realization washes over the apprentice. He understood. 'You didn't collect to keep, but to honor the brief beauty before its end.' The master slowly smiles\n\nWe cling, we grasp, we build walls around moments, fearing their inevitable departure. But life, like those cherry blossoms, is a dance of arrival and release. True wisdom lies not in preventing the leaves from falling, but in gracefully sweeping them away, making space for new growth. Let go of what no longer serves you. Embrace the beauty of impermanence. Live fully, knowing that everything, in its time, must also be left behind.",
    transcriptionId: "667d58d0-65e6-4ab2-9975-1dd1563fa9df",
    transcribedWords:
      '[{"start":240,"end":904,"subs":"A lone monk","textPosition":"center"},{"start":952,"end":2056,"subs":"sweeps fallen cherry","textPosition":"center"},{"start":2088,"end":2872,"subs":"blossoms from a","textPosition":"center"},{"start":2896,"end":4072,"subs":"temple courtyard. Each","textPosition":"end"},{"start":4096,"end":5032,"subs":"petal a fleeting","textPosition":"center"},{"start":5096,"end":7256,"subs":"moment. He meticulously","textPosition":"end"},{"start":7288,"end":8360,"subs":"gathers them, only","textPosition":"end"},{"start":8400,"end":9032,"subs":"to release them","textPosition":"center"},{"start":9056,"end":9752,"subs":"again into the","textPosition":"center"},{"start":9776,"end":11400,"subs":"wind. A young","textPosition":"end"},{"start":11440,"end":13016,"subs":"apprentice watches, brow","textPosition":"center"},{"start":13088,"end":14700,"subs":"furrowed in confusion.","textPosition":"end"},{"start":15040,"end":16216,"subs":"The boy approaches","textPosition":"end"},{"start":16248,"end":17160,"subs":"the monk, hand","textPosition":"center"},{"start":17200,"end":19720,"subs":"outstretched. Master, why","textPosition":"center"},{"start":19760,"end":20296,"subs":"do you collect","textPosition":"end"},{"start":20328,"end":20792,"subs":"what you will","textPosition":"center"},{"start":20816,"end":22696,"subs":"only discard? Isn\'t","textPosition":"end"},{"start":22728,"end":24952,"subs":"this pointless? The","textPosition":"end"},{"start":24976,"end":26232,"subs":"master pauses, the","textPosition":"center"},{"start":26256,"end":27352,"subs":"bamboo broom still","textPosition":"center"},{"start":27376,"end":28260,"subs":"in his hand.","textPosition":"end"},{"start":28780,"end":30004,"subs":"The garden demands","textPosition":"center"},{"start":30052,"end":31700,"subs":"order. We must","textPosition":"end"},{"start":31740,"end":32760,"subs":"make an attempt.","textPosition":"end"},{"start":33340,"end":35412,"subs":"Years pass. The","textPosition":"center"},{"start":35436,"end":36916,"subs":"boy grows, mimicking","textPosition":"center"},{"start":36948,"end":38520,"subs":"the master\'s rituals.","textPosition":"end"},{"start":38860,"end":40660,"subs":"He sweeps, collects,","textPosition":"center"},{"start":40740,"end":42980,"subs":"releases. Yet an","textPosition":"end"},{"start":43020,"end":44196,"subs":"unease festers within","textPosition":"end"},{"start":44268,"end":46116,"subs":"him. The cyclical","textPosition":"center"},{"start":46148,"end":46692,"subs":"nature of the","textPosition":"center"},{"start":46716,"end":47748,"subs":"garden, of life","textPosition":"end"},{"start":47804,"end":50360,"subs":"itself, feels incomplete.","textPosition":"center"},{"start":50860,"end":51892,"subs":"One day, a","textPosition":"end"},{"start":51916,"end":53012,"subs":"fierce storm tears","textPosition":"end"},{"start":53076,"end":54120,"subs":"through the valley.","textPosition":"center"},{"start":54490,"end":55730,"subs":"The cherry tree,","textPosition":"center"},{"start":55810,"end":56962,"subs":"ancient and revered,","textPosition":"end"},{"start":57026,"end":58882,"subs":"is uprooted. The","textPosition":"center"},{"start":58906,"end":60306,"subs":"monk, now frail,","textPosition":"end"},{"start":60418,"end":61154,"subs":"watches with a","textPosition":"end"},{"start":61162,"end":63282,"subs":"quiet acceptance. The","textPosition":"center"},{"start":63306,"end":65010,"subs":"apprentice, however, is","textPosition":"center"},{"start":65050,"end":67106,"subs":"devastated. He runs","textPosition":"end"},{"start":67138,"end":67714,"subs":"to the fallen","textPosition":"center"},{"start":67762,"end":68882,"subs":"tree, desperate to","textPosition":"end"},{"start":68906,"end":70802,"subs":"salvage something. The","textPosition":"end"},{"start":70826,"end":71746,"subs":"old monk gently","textPosition":"center"},{"start":71778,"end":72530,"subs":"places a hand","textPosition":"center"},{"start":72570,"end":73750,"subs":"on his shoulder.","textPosition":"end"},{"start":74170,"end":75230,"subs":"Let it go.","textPosition":"center"},{"start":75690,"end":76610,"subs":"Its time here","textPosition":"end"},{"start":76650,"end":78194,"subs":"is done. A","textPosition":"end"},{"start":78202,"end":79218,"subs":"wave of realization","textPosition":"center"},{"start":79314,"end":80162,"subs":"washes over the","textPosition":"center"},{"start":80186,"end":82920,"subs":"apprentice. He understood","textPosition":"end"},{"start":83340,"end":84276,"subs":"you didn\'t collect","textPosition":"center"},{"start":84308,"end":85092,"subs":"to keep, but","textPosition":"end"},{"start":85116,"end":85652,"subs":"to honor the","textPosition":"end"},{"start":85676,"end":86628,"subs":"brief beauty before","textPosition":"center"},{"start":86684,"end":88260,"subs":"its end. The","textPosition":"center"},{"start":88300,"end":89636,"subs":"master slowly smiles.","textPosition":"end"},{"start":89668,"end":90580,"subs":"We cling, we","textPosition":"center"},{"start":90620,"end":91780,"subs":"grasp. We build","textPosition":"end"},{"start":91820,"end":93076,"subs":"walls around moments,","textPosition":"end"},{"start":93188,"end":94244,"subs":"fearing their inevitable","textPosition":"center"},{"start":94292,"end":96372,"subs":"departure. But life,","textPosition":"center"},{"start":96476,"end":97444,"subs":"like those cherry","textPosition":"end"},{"start":97492,"end":98532,"subs":"blossoms, is a","textPosition":"center"},{"start":98556,"end":99364,"subs":"dance of arrival","textPosition":"end"},{"start":99412,"end":101284,"subs":"and release. True","textPosition":"end"},{"start":101332,"end":102292,"subs":"wisdom lies not","textPosition":"center"},{"start":102316,"end":103012,"subs":"in preventing the","textPosition":"center"},{"start":103036,"end":104020,"subs":"leaves from falling,","textPosition":"end"},{"start":104100,"end":105092,"subs":"but in gracefully","textPosition":"center"},{"start":105156,"end":106148,"subs":"sweeping them away,","textPosition":"end"},{"start":106284,"end":107140,"subs":"making space for","textPosition":"end"},{"start":107180,"end":108992,"subs":"new growth. Let","textPosition":"center"},{"start":109016,"end":109600,"subs":"go of what","textPosition":"center"},{"start":109640,"end":110496,"subs":"no longer serves","textPosition":"end"},{"start":110528,"end":112352,"subs":"you. Embrace the","textPosition":"center"},{"start":112376,"end":113860,"subs":"beauty of impermanence.","textPosition":"end"},{"start":114360,"end":115728,"subs":"Live fully, knowing","textPosition":"end"},{"start":115744,"end":116832,"subs":"that everything in","textPosition":"center"},{"start":116856,"end":117840,"subs":"its time must","textPosition":"center"},{"start":117880,"end":118608,"subs":"also be left","textPosition":"end"},{"start":118664,"end":118760,"subs":"behind.","textPosition":"center"}]',
    transcribedSubtitles: null,
    fps: 30,
    totalDuration: 128760,
    imageStyle: "ghibli",
    captionStyle: "caption-style-one",
    thumbnailUrl: "",
    bgmId: 54,
    aspectRatioId: 1,
    userId: "cma56j0q90000nnlb7uhulfpa",
    createdAt: "2025-05-02T13:11:46.113Z",
    updatedAt: "2025-05-02T13:12:45.485Z",
    aspectRatio: {
      id: 1,
      name: "video",
      width: 1280,
      height: 720,
    },
    bgm: {
      id: 54,
      name: "spiritual-minimalistic-hopeful-piano",
      bgmUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/spiritual-minimalistic-hopeful-piano.mp3",
      volume: 100,
    },
    scenes: [
      {
        id: "cma6tda3y000lnnr4cp1tl55i",
        number: 29,
        start: 104100,
        end: 107380,
        motionTemplateId: "pull-out",
        imagePrompt:
          "The monk sweeping the blossoms, with focus on the broom touching the ground, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20monk%20sweeping%20the%20blossoms%2C%20with%20focus%20on%20the%20broom%20touching%20the%20ground%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=3169680&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "ground-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td8cw0004nnr4cxjvh9ea",
        number: 26,
        start: 93188,
        end: 96372,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "The cherry blossoms falling from other trees, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20cherry%20blossoms%20falling%20from%20other%20trees%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=2590672&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9c40005nnr4l6vzg1q4",
        number: 13,
        start: 45180,
        end: 48484,
        motionTemplateId: "pull-out",
        imagePrompt:
          "The temple garden with its cyclical patterns of blossoms falling and being swept, a sense of repetitive motion, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20temple%20garden%20with%20its%20cyclical%20patterns%20of%20blossoms%20falling%20and%20being%20swept%2C%20a%20sense%20of%20repetitive%20motion%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=9882716&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9ca0007nnr4chio3mia",
        number: 20,
        start: 71050,
        end: 74642,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "The old monk gently placing his hand on the apprentice's shoulder, a gesture of comfort and understanding, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20old%20monk%20gently%20placing%20his%20hand%20on%20the%20apprentice's%20shoulder%2C%20a%20gesture%20of%20comfort%20and%20understanding%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=8547648&nologo=true&private=true",
        shotSize: "two-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9ca0006nnr44qcv1a0z",
        number: 7,
        start: 23280,
        end: 26744,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "The monk pausing his sweeping, holding the bamboo broom, a thoughtful expression on his face, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20monk%20pausing%20his%20sweeping%2C%20holding%20the%20bamboo%20broom%2C%20a%20thoughtful%20expression%20on%20his%20face%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=5188714&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9ib0008nnr46khfbqbc",
        number: 23,
        start: 81580,
        end: 85508,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "The old monk and the apprentice standing near the fallen tree, bathed in the soft light of the setting sun, a sense of peace settling between them, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20old%20monk%20and%20the%20apprentice%20standing%20near%20the%20fallen%20tree%2C%20bathed%20in%20the%20soft%20light%20of%20the%20setting%20sun%2C%20a%20sense%20of%20peace%20settling%20between%20them%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=568391&nologo=true&private=true",
        shotSize: "two-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9ik000annr4h9y7ht6r",
        number: 19,
        start: 67138,
        end: 71010,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "The apprentice kneeling beside the fallen tree, desperately trying to salvage a broken branch, his face filled with sorrow, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20apprentice%20kneeling%20beside%20the%20fallen%20tree%2C%20desperately%20trying%20to%20salvage%20a%20broken%20branch%2C%20his%20face%20filled%20with%20sorrow%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=3046430&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9ik000bnnr46aekmjaf",
        number: 17,
        start: 59474,
        end: 62390,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "The elderly monk, now frail, standing near the uprooted tree, a calm acceptance in his demeanor, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20elderly%20monk%2C%20now%20frail%2C%20standing%20near%20the%20uprooted%20tree%2C%20a%20calm%20acceptance%20in%20his%20demeanor%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=9083131&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9ih0009nnr40hp3lhdt",
        number: 18,
        start: 62970,
        end: 67106,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "The apprentice running towards the fallen tree with a devastated expression, reaching out to touch the broken branches, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20apprentice%20running%20towards%20the%20fallen%20tree%20with%20a%20devastated%20expression%2C%20reaching%20out%20to%20touch%20the%20broken%20branches%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=7537150&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9iv000dnnr45gkbum7b",
        number: 33,
        start: 117880,
        end: 118760,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "The cherry blossom petals spread over the courtyard floor, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20cherry%20blossom%20petals%20spread%20over%20the%20courtyard%20floor%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=1276371&nologo=true&private=true",
        shotSize: "extreme-wide-shot",
        cameraAngle: "overhead-shot",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9iw000ennr458aikfdk",
        number: 1,
        start: 240,
        end: 3800,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A lone monk in a traditional robe sweeping pink cherry blossoms in a serene temple courtyard under soft light, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20lone%20monk%20in%20a%20traditional%20robe%20sweeping%20pink%20cherry%20blossoms%20in%20a%20serene%20temple%20courtyard%20under%20soft%20light%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=4349685&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9no000fnnr4kkikkb7z",
        number: 2,
        start: 3880,
        end: 7256,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "Close-up of delicate pink cherry blossom petals scattered across the stone courtyard, sunlight catching the translucent edges, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20delicate%20pink%20cherry%20blossom%20petals%20scattered%20across%20the%20stone%20courtyard%2C%20sunlight%20catching%20the%20translucent%20edges%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=3411481&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "ground-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9oh000innr4tmwa4ogc",
        number: 4,
        start: 10800,
        end: 14700,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A young apprentice with a furrowed brow observing the monk's actions from a distance, a hint of confusion in his expression, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20young%20apprentice%20with%20a%20furrowed%20brow%20observing%20the%20monk's%20actions%20from%20a%20distance%2C%20a%20hint%20of%20confusion%20in%20his%20expression%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=7469449&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9ot000knnr40mq4fshj",
        number: 22,
        start: 77930,
        end: 81110,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "The apprentice's face illuminated with sudden understanding, his expression shifting from devastation to realization, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20apprentice's%20face%20illuminated%20with%20sudden%20understanding%2C%20his%20expression%20shifting%20from%20devastation%20to%20realization%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=1902209&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9oi000jnnr4l8dynese",
        number: 21,
        start: 74666,
        end: 77470,
        motionTemplateId: "pull-out",
        imagePrompt:
          "The fallen cherry tree lying on the ground, its roots exposed, surrounded by scattered blossoms and leaves, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20fallen%20cherry%20tree%20lying%20on%20the%20ground%2C%20its%20roots%20exposed%2C%20surrounded%20by%20scattered%20blossoms%20and%20leaves%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=5508026&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9of000hnnr4cctoy7x6",
        number: 31,
        start: 111560,
        end: 113860,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "The cherry blossom trees in full bloom in the temple garden, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20cherry%20blossom%20trees%20in%20full%20bloom%20in%20the%20temple%20garden%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=9771885&nologo=true&private=true",
        shotSize: "establishing-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9o2000gnnr4jgk1z07x",
        number: 28,
        start: 100860,
        end: 104020,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "The monk sweeping fallen cherry blossom petals with a bamboo broom, creating a neat pile on the ground, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20monk%20sweeping%20fallen%20cherry%20blossom%20petals%20with%20a%20bamboo%20broom%2C%20creating%20a%20neat%20pile%20on%20the%20ground%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=7355646&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6td9ir000cnnr4wfmtksss",
        number: 3,
        start: 7288,
        end: 10340,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "The monk carefully gathering cherry blossoms with a bamboo broom, the wind gently dispersing a few petals, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20monk%20carefully%20gathering%20cherry%20blossoms%20with%20a%20bamboo%20broom%2C%20the%20wind%20gently%20dispersing%20a%20few%20petals%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=7075470&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdb47000tnnr41bb42wwt",
        number: 27,
        start: 96476,
        end: 100240,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A pile of fallen cherry blossoms on the ground, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20pile%20of%20fallen%20cherry%20blossoms%20on%20the%20ground%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=2765068&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "ground-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdb8e000wnnr4cc5qpbyh",
        number: 11,
        start: 38860,
        end: 41640,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "The apprentice sweeping, collecting, and releasing cherry blossoms into the wind, following the established pattern, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20apprentice%20sweeping%2C%20collecting%2C%20and%20releasing%20cherry%20blossoms%20into%20the%20wind%2C%20following%20the%20established%20pattern%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=8953036&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdaps000mnnr4wl2votdu",
        number: 30,
        start: 107420,
        end: 111100,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "The monk and the apprentice standing at the courtyard, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20monk%20and%20the%20apprentice%20standing%20at%20the%20courtyard%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=8413675&nologo=true&private=true",
        shotSize: "two-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdatn000nnnr438i3kmwt",
        number: 10,
        start: 35100,
        end: 38520,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "The apprentice, now older, meticulously sweeping the courtyard, mirroring the monk's movements, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20apprentice%2C%20now%20older%2C%20meticulously%20sweeping%20the%20courtyard%2C%20mirroring%20the%20monk's%20movements%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=7508771&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdau9000onnr4zu683tyd",
        number: 15,
        start: 52356,
        end: 55730,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A fierce storm raging, a cherry tree's branches violently swaying in the wind, rain pouring down, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20fierce%20storm%20raging%2C%20a%20cherry%20tree's%20branches%20violently%20swaying%20in%20the%20wind%2C%20rain%20pouring%20down%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=7505012&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdaz6000pnnr4uogsgcop",
        number: 6,
        start: 18800,
        end: 23160,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "The young apprentice standing next to the monk, with his hand extended forward, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20young%20apprentice%20standing%20next%20to%20the%20monk%2C%20with%20his%20hand%20extended%20forward%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=2171681&nologo=true&private=true",
        shotSize: "two-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdazk000qnnr4fyqk3hs1",
        number: 14,
        start: 48612,
        end: 52292,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "Dark storm clouds gathering over the valley, wind whipping through the cherry trees, creating a sense of foreboding, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/Dark%20storm%20clouds%20gathering%20over%20the%20valley%2C%20wind%20whipping%20through%20the%20cherry%20trees%2C%20creating%20a%20sense%20of%20foreboding%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=6573141&nologo=true&private=true",
        shotSize: "establishing-shot",
        cameraAngle: "high-angle",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdb31000snnr4zxm97w05",
        number: 12,
        start: 42220,
        end: 44880,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "Close-up of the apprentice's face, a subtle unease and discontent visible in his eyes, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20the%20apprentice's%20face%2C%20a%20subtle%20unease%20and%20discontent%20visible%20in%20his%20eyes%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=8535650&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdb4n000unnr411k1jbwj",
        number: 24,
        start: 85524,
        end: 89636,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "The monk slowly smiling, a gentle and knowing expression on his face, reflecting a deep understanding, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20monk%20slowly%20smiling%2C%20a%20gentle%20and%20knowing%20expression%20on%20his%20face%2C%20reflecting%20a%20deep%20understanding%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=5861270&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdba3000xnnr4vquwgc10",
        number: 32,
        start: 114360,
        end: 117840,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "The sun setting over the valley, casting a warm glow on the temple garden and the fallen cherry tree, creating a sense of closure and acceptance, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20sun%20setting%20over%20the%20valley%2C%20casting%20a%20warm%20glow%20on%20the%20temple%20garden%20and%20the%20fallen%20cherry%20tree%2C%20creating%20a%20sense%20of%20closure%20and%20acceptance%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=395285&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "high-angle",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdbc4000znnr4d1pixmpa",
        number: 9,
        start: 30052,
        end: 34560,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "The monk and apprentice in the garden, years have passed, the apprentice slightly taller, continuing the sweeping ritual, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20monk%20and%20apprentice%20in%20the%20garden%2C%20years%20have%20passed%2C%20the%20apprentice%20slightly%20taller%2C%20continuing%20the%20sweeping%20ritual%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=2840933&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdb00000rnnr45ezyt0lb",
        number: 16,
        start: 55810,
        end: 59378,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "The ancient cherry tree uprooted and lying on its side after a storm, its roots exposed, surrounded by scattered petals and broken branches, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20ancient%20cherry%20tree%20uprooted%20and%20lying%20on%20its%20side%20after%20a%20storm%2C%20its%20roots%20exposed%2C%20surrounded%20by%20scattered%20petals%20and%20broken%20branches%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=64730&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdb59000vnnr4ijbs79cy",
        number: 8,
        start: 26792,
        end: 30004,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A tranquil temple garden with raked gravel and blossoming cherry trees, soft light filtering through the branches, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20tranquil%20temple%20garden%20with%20raked%20gravel%20and%20blossoming%20cherry%20trees%2C%20soft%20light%20filtering%20through%20the%20branches%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=9305614&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdbbs000ynnr4sxmlxtio",
        number: 5,
        start: 15040,
        end: 18300,
        motionTemplateId: "pull-out",
        imagePrompt:
          "The young boy approaching the monk, his hand reaching out in a gesture of questioning, sunlight highlighting his youthful face, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20young%20boy%20approaching%20the%20monk%2C%20his%20hand%20reaching%20out%20in%20a%20gesture%20of%20questioning%2C%20sunlight%20highlighting%20his%20youthful%20face%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=9031731&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
      {
        id: "cma6tdbcl0010nnr41o2p5amu",
        number: 25,
        start: 89668,
        end: 93076,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "The apprentice and the monk looking at the fallen cherry tree, in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20apprentice%20and%20the%20monk%20looking%20at%20the%20fallen%20cherry%20tree%2C%20in%20the%20style%20of%20Studio%20Ghibli%2C%20Anime%2C%20magical%20realism%2C%20environmental%20themes%2C%20unique%20characters%2C%20breathtaking%20landscapes%2C%20highly%20detailed?width=1696&height=944&seed=6224762&nologo=true&private=true",
        shotSize: "two-shot",
        cameraAngle: "eye-level",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
    ],
    voiceOver: [
      {
        id: "cma6tck470003nnr423l1qhjo",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/8c8e2f2d-58e2-4cec-9713-417487668f44.mp3",
        voiceId: "en-US-ChristopherNeural",
        videoId: "cma6tc5a90002nnr4pd36qq4x",
      },
    ],
  },
  {
    id: "cma9eg5fv0000nndb73cjqm1i",
    prompt:
      "The Secret to Peak Performance Under Pressure in 2 Mins - Bhagavad Gita",
    title: "Bhagavad Gita: Peak Performance",
    script:
      "Heart pounding? Mind racing? Welcome to the arena of pressure, where most dreams die. But what if pressure wasn't your enemy, but the forge where greatness is made? The Gita whispers a dangerous secret – that you don't rise above the pressure. You become the pressure. \n\nThe Trap: We chase perfect calm. We seek to eliminate pressure. That’s the illusion. The Gita reveals the pressure isn’t the problem. It's your attachment to the outcome. That attachment creates fear, and fear paralyzes.\n\nLaw 1: Karma Yoga - The Action Alchemist. Arjun, the warrior, paralyzed by fear on the battlefield. Krishna’s command: Act. Not for glory, not for victory, but for the sake of action itself. Forget the fruits. Become the action. Ex: The surgeon, focused solely on the cut, not the patient’s fate, or the athlete, lost in the game, not the score.\n\nLaw 2: The Dharma Blade - Slice Through Expectations. Dharma isn't your job; it’s your soul's code. An engineer who hates building yet craves money versus an artist who struggles yet finds fulfillment. Pressure crushes those living a borrowed life. Embrace your Dharma and pressure becomes fuel. If you aren't living out your purpose, how far do you think you will get?\n\nLaw 3: The Surrender Ritual - Ego's Execution. Pressure amplifies the ego, the voice screaming “What will they think?” The Gita demands total surrender. Meditate. Pray. Chant. Starve the ego so your Dharma roars.\n\nBecome the instrument. Pressure isn't something to be avoided, it is something to be mastered. By practicing Karma Yoga, by mastering your Dharma, by surrendering your Ego, you become the pressure. The battlefield awaits. Not with fear, but with fierce devotion. Now, go fulfill your destiny!",
    transcriptionId: "a82ca900-9838-4e31-9227-21c0d79a7446",
    transcribedWords:
      '[{"start":160,"end":1560,"subs":"Heart pounding, mind","textPosition":"center"},{"start":1600,"end":2904,"subs":"racing. Welcome to","textPosition":"center"},{"start":2912,"end":3512,"subs":"the arena of","textPosition":"center"},{"start":3536,"end":4360,"subs":"pressure. Where most","textPosition":"end"},{"start":4400,"end":5800,"subs":"dreams die. But","textPosition":"center"},{"start":5840,"end":6536,"subs":"what if pressure","textPosition":"end"},{"start":6568,"end":7256,"subs":"wasn\'t your enemy,","textPosition":"end"},{"start":7288,"end":7864,"subs":"but the forge","textPosition":"center"},{"start":7912,"end":8632,"subs":"where greatness is","textPosition":"center"},{"start":8656,"end":10088,"subs":"made? The Gita","textPosition":"end"},{"start":10104,"end":10936,"subs":"whispers a dangerous","textPosition":"center"},{"start":10968,"end":11672,"subs":"secret. That you","textPosition":"end"},{"start":11696,"end":12296,"subs":"don\'t rise above","textPosition":"end"},{"start":12328,"end":13800,"subs":"the pressure. You","textPosition":"center"},{"start":13840,"end":15016,"subs":"become the pressure.","textPosition":"center"},{"start":15208,"end":16232,"subs":"The trap we","textPosition":"end"},{"start":16256,"end":17640,"subs":"chase. Perfect calm.","textPosition":"center"},{"start":17800,"end":18552,"subs":"We seek to","textPosition":"end"},{"start":18576,"end":20408,"subs":"eliminate pressure. That\'s","textPosition":"end"},{"start":20424,"end":21752,"subs":"the illusion the","textPosition":"center"},{"start":21776,"end":22632,"subs":"Gita reveals. The","textPosition":"center"},{"start":22656,"end":23304,"subs":"pressure isn\'t the","textPosition":"end"},{"start":23312,"end":24712,"subs":"problem. It\'s your","textPosition":"center"},{"start":24736,"end":25384,"subs":"attachment to the","textPosition":"end"},{"start":25392,"end":27214,"subs":"outcome. That attachment","textPosition":"end"},{"start":27262,"end":28126,"subs":"creates fear. And","textPosition":"center"},{"start":28198,"end":30974,"subs":"fear paralyzes Karma","textPosition":"center"},{"start":31022,"end":31966,"subs":"Yoga. The Action","textPosition":"end"},{"start":32038,"end":34142,"subs":"Alchemist. Arjun, the","textPosition":"center"},{"start":34166,"end":35422,"subs":"warrior paralyzed by","textPosition":"end"},{"start":35446,"end":35902,"subs":"fear on the","textPosition":"end"},{"start":35926,"end":38890,"subs":"battlefield. Krishna\'s act.","textPosition":"center"},{"start":39270,"end":40190,"subs":"Not for glory,","textPosition":"center"},{"start":40270,"end":41022,"subs":"not for victory,","textPosition":"end"},{"start":41086,"end":41502,"subs":"but for the","textPosition":"center"},{"start":41526,"end":42094,"subs":"sake of action","textPosition":"end"},{"start":42182,"end":43870,"subs":"itself. Forget the","textPosition":"end"},{"start":43910,"end":45502,"subs":"fruits, become the","textPosition":"center"},{"start":45526,"end":47822,"subs":"action. The surgeon","textPosition":"center"},{"start":47886,"end":48702,"subs":"focused solely on","textPosition":"end"},{"start":48726,"end":49422,"subs":"the cut, not","textPosition":"center"},{"start":49446,"end":50382,"subs":"the patient\'s fate","textPosition":"end"},{"start":50446,"end":51262,"subs":"or the athlete","textPosition":"end"},{"start":51326,"end":51902,"subs":"lost in a","textPosition":"center"},{"start":51926,"end":52622,"subs":"game, not the","textPosition":"center"},{"start":52646,"end":54386,"subs":"score. Law 2.","textPosition":"end"},{"start":54458,"end":55362,"subs":"The Dharma blade","textPosition":"center"},{"start":55426,"end":56950,"subs":"sliced through expectations.","textPosition":"end"},{"start":57370,"end":58402,"subs":"Dharma isn\'t your","textPosition":"end"},{"start":58426,"end":59122,"subs":"job. It\'s your","textPosition":"center"},{"start":59146,"end":60642,"subs":"soul\'s code. An","textPosition":"center"},{"start":60666,"end":61618,"subs":"engineer who hates","textPosition":"end"},{"start":61634,"end":62546,"subs":"building yet craves","textPosition":"center"},{"start":62578,"end":63282,"subs":"money versus an","textPosition":"end"},{"start":63306,"end":64146,"subs":"artist who struggles","textPosition":"end"},{"start":64178,"end":65538,"subs":"yet finds fulfillment.","textPosition":"center"},{"start":65714,"end":66770,"subs":"Pressure crushes those","textPosition":"center"},{"start":66810,"end":67506,"subs":"living a borrowed","textPosition":"end"},{"start":67538,"end":69090,"subs":"life. Embrace your","textPosition":"center"},{"start":69130,"end":69906,"subs":"Dharma and pressure","textPosition":"end"},{"start":69938,"end":71410,"subs":"becomes fuel. If","textPosition":"end"},{"start":71450,"end":72018,"subs":"you aren\'t living","textPosition":"center"},{"start":72034,"end":72802,"subs":"out your purpose,","textPosition":"center"},{"start":72866,"end":73442,"subs":"how far do","textPosition":"end"},{"start":73466,"end":73794,"subs":"you think you","textPosition":"center"},{"start":73802,"end":75890,"subs":"will get? The","textPosition":"end"},{"start":75930,"end":77186,"subs":"surrender ritual. Ego\'s","textPosition":"end"},{"start":77218,"end":79346,"subs":"execution. Pressure amplifies","textPosition":"center"},{"start":79378,"end":80242,"subs":"the ego. The","textPosition":"center"},{"start":80266,"end":81122,"subs":"voice screaming. What","textPosition":"end"},{"start":81146,"end":82058,"subs":"will they think?","textPosition":"center"},{"start":82234,"end":83386,"subs":"The Gita demands","textPosition":"end"},{"start":83418,"end":85866,"subs":"total surrender. Meditate,","textPosition":"end"},{"start":86058,"end":88826,"subs":"pray, chant. Starve","textPosition":"center"},{"start":88858,"end":89482,"subs":"the ego so","textPosition":"center"},{"start":89506,"end":90670,"subs":"your Dharma roars.","textPosition":"end"},{"start":91010,"end":92458,"subs":"Become the instrument.","textPosition":"center"},{"start":92634,"end":93610,"subs":"Pressure isn\'t something","textPosition":"end"},{"start":93650,"end":94330,"subs":"to be avoided.","textPosition":"end"},{"start":94410,"end":94970,"subs":"It is something","textPosition":"center"},{"start":95010,"end":96058,"subs":"to be mastered.","textPosition":"center"},{"start":96234,"end":97386,"subs":"By practicing Karma","textPosition":"end"},{"start":97418,"end":98426,"subs":"Yoga, by mastering","textPosition":"center"},{"start":98458,"end":99290,"subs":"your Dharma, by","textPosition":"end"},{"start":99330,"end":100250,"subs":"surrendering your ego,","textPosition":"end"},{"start":100330,"end":100922,"subs":"you become the","textPosition":"center"},{"start":100946,"end":102714,"subs":"pressure. The battlefield","textPosition":"center"},{"start":102762,"end":104362,"subs":"awaits. Not with","textPosition":"end"},{"start":104386,"end":105130,"subs":"fear, but with","textPosition":"center"},{"start":105170,"end":107098,"subs":"fierce devotion. Now","textPosition":"end"},{"start":107154,"end":107962,"subs":"go fulfill your","textPosition":"end"},{"start":107986,"end":108330,"subs":"destiny.","textPosition":"center"}]',
    transcribedSubtitles: null,
    fps: 30,
    totalDuration: 118330,
    imageStyle: "cyberpunk",
    captionStyle: "caption-style-one",
    thumbnailUrl: "",
    bgmId: 12,
    aspectRatioId: 1,
    userId: "cma56j0q90000nnlb7uhulfpa",
    createdAt: "2025-05-04T08:38:17.227Z",
    updatedAt: "2025-05-04T08:40:19.173Z",
    aspectRatio: {
      id: 1,
      name: "video",
      width: 1280,
      height: 720,
    },
    bgm: {
      id: 12,
      name: "dangerous-stylish-aggressive-relentless-drums-brass",
      bgmUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dangerous-stylish-aggressive-relentless-drums-brass.mp3",
      volume: 100,
    },
    scenes: [
      {
        id: "cma9eilqw0003nndb7hwr0jzr",
        number: 16,
        start: 58258,
        end: 62178,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "Engineer looking bored at blueprints, versus a vibrant soul's code, split screen, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Engineer%20looking%20bored%20at%20blueprints%2C%20versus%20a%20vibrant%20soul's%20code%2C%20split%20screen%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=806695&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eimy20009nndbecg7ce5d",
        number: 14,
        start: 50446,
        end: 54386,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "Athlete in the zone, completely immersed in the game, ignoring the crowd, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Athlete%20in%20the%20zone%2C%20completely%20immersed%20in%20the%20game%2C%20ignoring%20the%20crowd%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9230408&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eimxz0005nndbitz6y54v",
        number: 1,
        start: 160,
        end: 3864,
        motionTemplateId: "pull-out",
        imagePrompt:
          "Close-up shot of a person's face with a worried expression, sweat dripping, dark background, eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20shot%20of%20a%20person's%20face%20with%20a%20worried%20expression%2C%20sweat%20dripping%2C%20dark%20background%2C%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2225002&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eimy3000bnndbhafi0cvr",
        number: 22,
        start: 80050,
        end: 83386,
        motionTemplateId: "pan-top-down-zoom-out",
        imagePrompt:
          "Overwhelmed individual, tormented by inner voices and external judgment, close-up high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Overwhelmed%20individual%2C%20tormented%20by%20inner%20voices%20and%20external%20judgment%2C%20close-up%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1247628&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "high-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eimxz0006nndb24lmvk12",
        number: 17,
        start: 62234,
        end: 65538,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "An artist painting passionately despite hardship, finding joy in creation, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/An%20artist%20painting%20passionately%20despite%20hardship%2C%20finding%20joy%20in%20creation%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9488775&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eimxz0007nndbzz5g65tp",
        number: 4,
        start: 10968,
        end: 15016,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "Figure standing defiantly amidst crushing pressure, light emanating from within, full-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Figure%20standing%20defiantly%20amidst%20crushing%20pressure%2C%20light%20emanating%20from%20within%2C%20full-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8407817&nologo=true&private=true",
        shotSize: "full-shot",
        cameraAngle: "low-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eimy00008nndb7u1tr6fe",
        number: 20,
        start: 72426,
        end: 76274,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A long and difficult path, leading to an uncertain destination, solitary figure, wide-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20long%20and%20difficult%20path%2C%20leading%20to%20an%20uncertain%20destination%2C%20solitary%20figure%2C%20wide-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7438777&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eimxx0004nndbaejahfas",
        number: 28,
        start: 100946,
        end: 104666,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "Battlefield scene, warrior standing ready, devoid of fear, eyes filled with determination, wide-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Battlefield%20scene%2C%20warrior%20standing%20ready%2C%20devoid%20of%20fear%2C%20eyes%20filled%20with%20determination%2C%20wide-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3200910&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "low-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9einf1000knndb69h3gtol",
        number: 23,
        start: 83418,
        end: 86830,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "Person meditating, finding inner peace through prayer, serene environment, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Person%20meditating%2C%20finding%20inner%20peace%20through%20prayer%2C%20serene%20environment%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5357938&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9ein4j000cnndb2ur35582",
        number: 10,
        start: 34686,
        end: 38890,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "Battlefield scene, chaos and destruction, warrior frozen in fear, wide-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Battlefield%20scene%2C%20chaos%20and%20destruction%2C%20warrior%20frozen%20in%20fear%2C%20wide-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8020005&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "high-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eiok6000tnndbef18auot",
        number: 19,
        start: 69130,
        end: 72402,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "A person embracing their true Dharma, empowered and fueled, glowing with purpose, medium-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20embracing%20their%20true%20Dharma%2C%20empowered%20and%20fueled%2C%20glowing%20with%20purpose%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=418448&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9ein4m000dnndbalagos2k",
        number: 13,
        start: 47030,
        end: 50382,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "Surgeon's hands making a precise cut, intense focus, operating room, medium-close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Surgeon's%20hands%20making%20a%20precise%20cut%2C%20intense%20focus%2C%20operating%20room%2C%20medium-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2459058&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9ein4o000enndbzn4mehxk",
        number: 5,
        start: 15208,
        end: 19816,
        motionTemplateId: "pan-top-down-zoom-out",
        imagePrompt:
          "A person reaching for an elusive state of perfect calm, surrounded by chaos, medium-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20reaching%20for%20an%20elusive%20state%20of%20perfect%20calm%2C%20surrounded%20by%20chaos%2C%20medium-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6134238&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "high-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9ein4z000fnndb4niya1z4",
        number: 27,
        start: 97818,
        end: 100922,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "Person practicing Karma Yoga, surrendering ego, becoming one with the pressure, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Person%20practicing%20Karma%20Yoga%2C%20surrendering%20ego%2C%20becoming%20one%20with%20the%20pressure%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7943845&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9ein53000hnndbmg1qm3zj",
        number: 29,
        start: 104698,
        end: 108330,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person walking towards their destiny with fierce devotion, light shining upon them, full-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20walking%20towards%20their%20destiny%20with%20fierce%20devotion%2C%20light%20shining%20upon%20them%2C%20full-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8343583&nologo=true&private=true",
        shotSize: "full-shot",
        cameraAngle: "low-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9ein50000gnndb85imwurk",
        number: 11,
        start: 39270,
        end: 42930,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "Focused action, a hand drawing a bow, intent gaze, medium-close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Focused%20action%2C%20a%20hand%20drawing%20a%20bow%2C%20intent%20gaze%2C%20medium-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=939587&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eimy3000anndb8pfp0zjr",
        number: 25,
        start: 91010,
        end: 94330,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A musical instrument being played with mastery, complete focus and devotion, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20musical%20instrument%20being%20played%20with%20mastery%2C%20complete%20focus%20and%20devotion%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=392787&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9ein9w000jnndbs1v9bckv",
        number: 21,
        start: 76322,
        end: 79970,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "Ego being executed, a symbolic ritual of surrender, dark and intense, medium-shot dutch-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Ego%20being%20executed%2C%20a%20symbolic%20ritual%20of%20surrender%2C%20dark%20and%20intense%2C%20medium-shot%20dutch-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1504750&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "dutch-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9ein9w000inndbyy8gha6c",
        number: 15,
        start: 54458,
        end: 58226,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A sword slicing through the air, cutting through expectations, dynamic motion, medium-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20sword%20slicing%20through%20the%20air%2C%20cutting%20through%20expectations%2C%20dynamic%20motion%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7876751&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eiok7000unndb4djeozlm",
        number: 2,
        start: 3912,
        end: 7256,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A desolate arena with broken dreams scattered around, dramatic lighting, wide-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20desolate%20arena%20with%20broken%20dreams%20scattered%20around%2C%20dramatic%20lighting%2C%20wide-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6795483&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "low-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eiony000vnndb8f9uy83j",
        number: 26,
        start: 94410,
        end: 97786,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "An individual facing overwhelming pressure, determined to master it, resolute expression, medium-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/An%20individual%20facing%20overwhelming%20pressure%2C%20determined%20to%20master%20it%2C%20resolute%20expression%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1512813&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eiofk000lnndb5i2cluso",
        number: 12,
        start: 43270,
        end: 46090,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A hand releasing an arrow, blurred motion, focus on the act, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20hand%20releasing%20an%20arrow%2C%20blurred%20motion%2C%20focus%20on%20the%20act%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7882242&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eiofx000mnndbb6xdmdp9",
        number: 7,
        start: 24160,
        end: 27566,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A person desperately clinging to a desired outcome, anxiety etched on their face, close-up high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20desperately%20clinging%20to%20a%20desired%20outcome%2C%20anxiety%20etched%20on%20their%20face%2C%20close-up%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7034688&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "high-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eiog7000nnndbsezfne2x",
        number: 18,
        start: 65714,
        end: 69090,
        motionTemplateId: "pan-top-down-zoom-out",
        imagePrompt:
          "Person burdened by a borrowed life, collapsing under pressure, dramatic shadows, full-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Person%20burdened%20by%20a%20borrowed%20life%2C%20collapsing%20under%20pressure%2C%20dramatic%20shadows%2C%20full-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2033326&nologo=true&private=true",
        shotSize: "full-shot",
        cameraAngle: "high-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eiogd000onndbxbmeawda",
        number: 3,
        start: 7288,
        end: 10936,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "A blacksmith's forge with intense heat and sparks, shaping metal, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20blacksmith's%20forge%20with%20intense%20heat%20and%20sparks%2C%20shaping%20metal%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1708295&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eiogf000pnndb9lx7imiz",
        number: 8,
        start: 27598,
        end: 31454,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A figure paralyzed by fear, unable to move, trapped in shadow, full-shot dutch-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20figure%20paralyzed%20by%20fear%2C%20unable%20to%20move%2C%20trapped%20in%20shadow%2C%20full-shot%20dutch-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9733824&nologo=true&private=true",
        shotSize: "full-shot",
        cameraAngle: "dutch-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eioi7000qnndbwgbj2q1s",
        number: 9,
        start: 31502,
        end: 34622,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "Arjun the warrior, conflicted and hesitant, standing on a battlefield, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Arjun%20the%20warrior%2C%20conflicted%20and%20hesitant%2C%20standing%20on%20a%20battlefield%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8321268&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eioj9000snndbjotv7il5",
        number: 24,
        start: 87250,
        end: 90670,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "Ego starved and weakened, giving way to a powerful Dharma, symbolic imagery, medium-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Ego%20starved%20and%20weakened%2C%20giving%20way%20to%20a%20powerful%20Dharma%2C%20symbolic%20imagery%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9758056&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9eioj4000rnndbf0qjzw19",
        number: 6,
        start: 20008,
        end: 23860,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "An illusion shimmering, obscuring a difficult truth, dark and mysterious, medium-wide-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/An%20illusion%20shimmering%2C%20obscuring%20a%20difficult%20truth%2C%20dark%20and%20mysterious%2C%20medium-wide-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=159002&nologo=true&private=true",
        shotSize: "medium-wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
    ],
    voiceOver: [
      {
        id: "cma9ehy400002nndbop0iv7lp",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/4ffbb6d6-cff3-4bb3-81f6-9abdaf666725.mp3",
        voiceId: "en-US-ChristopherNeural",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
      {
        id: "cma9egugs0001nndbt37f6pku",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/4ffbb6d6-cff3-4bb3-81f6-9abdaf666725.mp3",
        voiceId: "en-US-ChristopherNeural",
        videoId: "cma9eg5fv0000nndb73cjqm1i",
      },
    ],
  },
  {
    id: "cmab7pzat0003nnahfad19kac",
    prompt: "Kaizen",
    title: "Kaizen",
    script:
      "The comfort zone is a graveyard where dreams go to die. Today, I'll show you how to escape that grave, one inch at a time. These are the Kaizen Laws. They saved me from burnout, saved my team from collapse. And they will save you. The Trap We chase massive leaps, overnight success. That’s where we fail. Because your brain hates change. It sees it as a threat. I’ll show you how to outsmart it: Every time you try a giant leap, you're triggering your brain's alarm system. Instead, start so small, your brain doesn't even notice. It's not about doing more; it's about becoming someone who evolves. Kaizen Law 1: The Teeny Tweak Tactic Meet Kenji, a coder paralyzed by perfectionism. He added one line of code to his project every day. Just one. After six months, he launched a groundbreaking AI. His secret: The ridiculous-small start When you're overwhelmed, shrink the task until it's laughable: Read one page Write one sentence Do one squat This isn't about the output. It's about whispering to your brain: I am someone who makes progress. Kaizen Law 2: The Incremental Inventory Maya hated networking. So she started with one new contact a week. Just one. She'd ask one question, listen, then politely leave. Within a year, she built a network that landed her a dream job. Her secret? Relentless refinement. Every week, review one thing you can improve about your process. Then, make it 1% better. Your rule: Never stop tweaking, even when it's working. Because the moment you plateau, you start to decline. Kaizen Law 3: The Gratitude Ritual Most people fail because they focus on what's missing, not what they've gained. Neurochemically this creates a cycle of lack. The fix? Celebrate every tiny victory. Literally. At the end of each day, write down one thing you improved. No matter how small. Read it aloud. Feel the satisfaction. Say: This small win fuels my next leap. This ritual rewires your brain to see progress as pleasure, not pressure. Train your brain to crave growth more than comfort. Kaizen isn't something you do; it's someone you become. The world wants you to stay stuck. But you—you're different. You've got: The Teeny Tweak Tactic The Incremental Inventory The Gratitude Ritual Now go, one inch at a time, carve your path to greatness.",
    transcriptionId: "01be41b4-d219-4435-b8fa-994680bff11d",
    transcribedWords:
      '[{"start":160,"end":728,"subs":"The comfort zone","textPosition":"center"},{"start":744,"end":1288,"subs":"is a graveyard","textPosition":"center"},{"start":1304,"end":1912,"subs":"where dreams go","textPosition":"center"},{"start":1936,"end":2856,"subs":"to duck. Today,","textPosition":"end"},{"start":2928,"end":3464,"subs":"I\'ll show you","textPosition":"center"},{"start":3472,"end":4056,"subs":"how to escape","textPosition":"end"},{"start":4088,"end":4872,"subs":"that grave. One","textPosition":"end"},{"start":4896,"end":5384,"subs":"inch at a","textPosition":"center"},{"start":5392,"end":6104,"subs":"time. These are","textPosition":"center"},{"start":6112,"end":7080,"subs":"the Kaizen loss.","textPosition":"end"},{"start":7200,"end":7784,"subs":"They saved me","textPosition":"center"},{"start":7792,"end":8856,"subs":"from burnout, saved","textPosition":"end"},{"start":8888,"end":9352,"subs":"my team from","textPosition":"end"},{"start":9376,"end":10392,"subs":"collapse. And they","textPosition":"center"},{"start":10416,"end":11144,"subs":"will save you.","textPosition":"center"},{"start":11232,"end":11832,"subs":"The trap we","textPosition":"end"},{"start":11856,"end":12872,"subs":"chase massive leaps.","textPosition":"center"},{"start":12936,"end":14408,"subs":"Overnight success. That\'s","textPosition":"end"},{"start":14424,"end":15240,"subs":"where we fail.","textPosition":"end"},{"start":15360,"end":16104,"subs":"Because your brain","textPosition":"center"},{"start":16152,"end":17192,"subs":"hates change. It","textPosition":"center"},{"start":17216,"end":17672,"subs":"sees it as","textPosition":"end"},{"start":17696,"end":18536,"subs":"a threat. I\'ll","textPosition":"center"},{"start":18568,"end":18904,"subs":"show you how","textPosition":"end"},{"start":18912,"end":19784,"subs":"to outsmart it.","textPosition":"end"},{"start":19872,"end":20392,"subs":"Every time you","textPosition":"center"},{"start":20416,"end":20984,"subs":"try a giant","textPosition":"center"},{"start":21032,"end":21928,"subs":"leap, you\'re triggering","textPosition":"end"},{"start":21944,"end":22776,"subs":"your brain\'s alarm","textPosition":"center"},{"start":22808,"end":24616,"subs":"system instead. Starts","textPosition":"end"},{"start":24648,"end":25352,"subs":"so small, your","textPosition":"end"},{"start":25376,"end":26152,"subs":"brain doesn\'t even","textPosition":"center"},{"start":26176,"end":27292,"subs":"notice. It\'s not","textPosition":"center"},{"start":27316,"end":28124,"subs":"about doing more.","textPosition":"end"},{"start":28212,"end":28924,"subs":"It\'s about becoming","textPosition":"center"},{"start":28972,"end":29916,"subs":"someone who evolves.","textPosition":"end"},{"start":30028,"end":31020,"subs":"Kaizen Law won.","textPosition":"end"},{"start":31060,"end":31836,"subs":"The Teeny Tweak","textPosition":"center"},{"start":31868,"end":32892,"subs":"Tactic. Meet Kinji.","textPosition":"center"},{"start":32956,"end":33948,"subs":"A coder paralyzed","textPosition":"end"},{"start":33964,"end":35212,"subs":"by perfectionism. He","textPosition":"center"},{"start":35236,"end":35772,"subs":"added one line","textPosition":"end"},{"start":35796,"end":36332,"subs":"of code to","textPosition":"end"},{"start":36356,"end":37100,"subs":"his project every","textPosition":"center"},{"start":37140,"end":38332,"subs":"day. Just one.","textPosition":"center"},{"start":38436,"end":39228,"subs":"After six months,","textPosition":"end"},{"start":39284,"end":39884,"subs":"he launched a","textPosition":"center"},{"start":39892,"end":41228,"subs":"groundbreaking AI his","textPosition":"end"},{"start":41284,"end":42396,"subs":"secret? The Ridiculous","textPosition":"end"},{"start":42428,"end":43132,"subs":"Small Start when","textPosition":"center"},{"start":43156,"end":44268,"subs":"you\'re overwhelmed. Shrink","textPosition":"center"},{"start":44284,"end":44940,"subs":"the task until","textPosition":"end"},{"start":44980,"end":46060,"subs":"it\'s laughable. Read","textPosition":"center"},{"start":46100,"end":46796,"subs":"one page. Write","textPosition":"end"},{"start":46828,"end":47452,"subs":"one sentence. Do","textPosition":"end"},{"start":47476,"end":48092,"subs":"one sweat. This","textPosition":"center"},{"start":48116,"end":48652,"subs":"isn\'t about the","textPosition":"center"},{"start":48676,"end":49740,"subs":"output. It\'s about","textPosition":"end"},{"start":49780,"end":50412,"subs":"whispering to your","textPosition":"center"},{"start":50436,"end":51292,"subs":"brain. I am","textPosition":"end"},{"start":51316,"end":51900,"subs":"someone who makes","textPosition":"end"},{"start":51940,"end":53360,"subs":"progress. Kaizen Law,","textPosition":"center"},{"start":53400,"end":54336,"subs":"too. The Incremental","textPosition":"center"},{"start":54368,"end":55536,"subs":"Inventory. Maya hated","textPosition":"end"},{"start":55568,"end":56672,"subs":"networking. So she","textPosition":"center"},{"start":56696,"end":57232,"subs":"started with one","textPosition":"end"},{"start":57256,"end":57984,"subs":"new contact a","textPosition":"end"},{"start":57992,"end":59152,"subs":"week. Just one.","textPosition":"center"},{"start":59256,"end":59952,"subs":"She\'d ask one","textPosition":"center"},{"start":59976,"end":61152,"subs":"question, listen, then","textPosition":"end"},{"start":61176,"end":62480,"subs":"politely leave. Within","textPosition":"center"},{"start":62520,"end":63120,"subs":"a year, she","textPosition":"end"},{"start":63160,"end":63776,"subs":"built a network","textPosition":"end"},{"start":63848,"end":64432,"subs":"that landed her","textPosition":"center"},{"start":64456,"end":65312,"subs":"a dream job.","textPosition":"center"},{"start":65416,"end":66784,"subs":"Her secret, relentless","textPosition":"end"},{"start":66832,"end":68256,"subs":"refinement. Every week,","textPosition":"center"},{"start":68328,"end":69024,"subs":"review one thing","textPosition":"end"},{"start":69032,"end":69568,"subs":"you can improve","textPosition":"end"},{"start":69624,"end":70624,"subs":"about your process.","textPosition":"center"},{"start":70792,"end":71632,"subs":"Then make it","textPosition":"center"},{"start":71656,"end":72960,"subs":"1% better. Your","textPosition":"end"},{"start":73000,"end":73920,"subs":"rule. Never stop","textPosition":"center"},{"start":73960,"end":74992,"subs":"tweaking, even when","textPosition":"end"},{"start":75016,"end":76000,"subs":"it\'s working. Because","textPosition":"end"},{"start":76040,"end":76560,"subs":"the moment you","textPosition":"center"},{"start":76600,"end":77472,"subs":"plateau, you start","textPosition":"center"},{"start":77496,"end":78756,"subs":"to decline. Kaizen","textPosition":"end"},{"start":78788,"end":79652,"subs":"Law 3 the","textPosition":"center"},{"start":79676,"end":80820,"subs":"Gratitude Ritual. Most","textPosition":"end"},{"start":80860,"end":81620,"subs":"people fail because","textPosition":"end"},{"start":81660,"end":82292,"subs":"they focus on","textPosition":"center"},{"start":82316,"end":83252,"subs":"what\'s missing, not","textPosition":"center"},{"start":83276,"end":84036,"subs":"what they\'ve gained.","textPosition":"end"},{"start":84148,"end":85348,"subs":"Neurochemically, this creates","textPosition":"center"},{"start":85364,"end":85892,"subs":"a cycle of.","textPosition":"end"},{"start":85916,"end":87332,"subs":"Lack the fix.","textPosition":"end"},{"start":87476,"end":88516,"subs":"Celebrate every tiny","textPosition":"center"},{"start":88548,"end":90164,"subs":"victory. Literally. At","textPosition":"center"},{"start":90172,"end":90484,"subs":"the end of","textPosition":"end"},{"start":90492,"end":91236,"subs":"each day, write","textPosition":"center"},{"start":91268,"end":91732,"subs":"down one thing","textPosition":"end"},{"start":91756,"end":92932,"subs":"you improved, no","textPosition":"end"},{"start":92956,"end":93732,"subs":"matter how small.","textPosition":"center"},{"start":93836,"end":94804,"subs":"Read it aloud.","textPosition":"center"},{"start":94932,"end":96292,"subs":"Feel the satisfaction.","textPosition":"end"},{"start":96436,"end":97460,"subs":"Say, this small","textPosition":"center"},{"start":97500,"end":98212,"subs":"win fuels my","textPosition":"end"},{"start":98236,"end":99172,"subs":"next leap. This","textPosition":"end"},{"start":99196,"end":100132,"subs":"ritual rewires your","textPosition":"center"},{"start":100156,"end":100740,"subs":"brain to see","textPosition":"center"},{"start":100780,"end":101780,"subs":"progress as pleasure,","textPosition":"end"},{"start":101860,"end":103076,"subs":"not pressure. Train","textPosition":"center"},{"start":103108,"end":103604,"subs":"your brain to","textPosition":"end"},{"start":103612,"end":104372,"subs":"crave growth more","textPosition":"end"},{"start":104396,"end":105716,"subs":"than comfort. Kaizen","textPosition":"center"},{"start":105748,"end":106292,"subs":"isn\'t something you","textPosition":"center"},{"start":106316,"end":107220,"subs":"do. It\'s someone","textPosition":"end"},{"start":107260,"end":108212,"subs":"you become. The","textPosition":"center"},{"start":108236,"end":108804,"subs":"world wants you","textPosition":"end"},{"start":108812,"end":109508,"subs":"to stay stuck,","textPosition":"end"},{"start":109604,"end":110308,"subs":"but you. You\'re","textPosition":"center"},{"start":110324,"end":111428,"subs":"different. You\'ve got","textPosition":"center"},{"start":111484,"end":112276,"subs":"the teeny tweak","textPosition":"end"},{"start":112308,"end":113316,"subs":"tactic. The Incremental","textPosition":"center"},{"start":113348,"end":114356,"subs":"Inventory. The Gratitude","textPosition":"end"},{"start":114388,"end":115316,"subs":"Ritual. Now, go","textPosition":"end"},{"start":115388,"end":115892,"subs":"one inch at","textPosition":"center"},{"start":115916,"end":116756,"subs":"a time. Carve","textPosition":"center"},{"start":116788,"end":117252,"subs":"your path to","textPosition":"end"},{"start":117276,"end":117460,"subs":"greatness.","textPosition":"center"}]',
    transcribedSubtitles: null,
    fps: 30,
    totalDuration: 127460,
    imageStyle: "cyberpunk",
    captionStyle: "caption-style-one",
    thumbnailUrl: "",
    bgmId: 78,
    aspectRatioId: 1,
    userId: "cma56j0q90000nnlb7uhulfpa",
    createdAt: "2025-05-05T15:05:30.573Z",
    updatedAt: "2025-05-05T15:07:37.707Z",
    aspectRatio: {
      id: 1,
      name: "video",
      width: 1280,
      height: 720,
    },
    bgm: {
      id: 78,
      name: "emotional-comeback-transformation",
      bgmUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-comeback-transformation.mp3",
      volume: 100,
    },
    scenes: [
      {
        id: "cmab7sggn0006nnahp6j6qv9i",
        number: 6,
        start: 17384,
        end: 20552,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A person cleverly maneuvering through a maze, determined look, medium-wide-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20cleverly%20maneuvering%20through%20a%20maze%2C%20determined%20look%2C%20medium-wide-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9473654&nologo=true&private=true",
        shotSize: "medium-wide-shot",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7shyj000annahkjavq0rn",
        number: 1,
        start: 160,
        end: 3352,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A desolate graveyard with tombstones, fog rolling in, a single wilting flower on one grave, wide-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20desolate%20graveyard%20with%20tombstones%2C%20fog%20rolling%20in%2C%20a%20single%20wilting%20flower%20on%20one%20grave%2C%20wide-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3808190&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "low-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7shrj0008nnah7un5a59g",
        number: 28,
        start: 96436,
        end: 99988,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A small win fueling a leap, empowered, medium-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20small%20win%20fueling%20a%20leap%2C%20empowered%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=39556&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7shrj0007nnahmym94fh1",
        number: 31,
        start: 106732,
        end: 109508,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A person transforming, evolving, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20transforming%2C%20evolving%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1215998&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si2x000cnnah1egas8eg",
        number: 14,
        start: 45804,
        end: 49228,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A person reading a single page, writing a single sentence, doing a single push-up, focused effort, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20reading%20a%20single%20page%2C%20writing%20a%20single%20sentence%2C%20doing%20a%20single%20push-up%2C%20focused%20effort%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4246174&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si35000ennahz84w5lbq",
        number: 16,
        start: 52668,
        end: 56256,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "A person hesitating to attend a networking event, anxious expression, medium-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20hesitating%20to%20attend%20a%20networking%20event%2C%20anxious%20expression%2C%20medium-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3274816&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "high-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si9r000mnnahug3hudo7",
        number: 32,
        start: 109604,
        end: 113764,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "The world trying to keep someone stuck, resisting, wide-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/The%20world%20trying%20to%20keep%20someone%20stuck%2C%20resisting%2C%20wide-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2038633&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "high-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si9r000jnnah6hv88d0a",
        number: 26,
        start: 89188,
        end: 92596,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "A person celebrating a tiny victory, joyful expression, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20celebrating%20a%20tiny%20victory%2C%20joyful%20expression%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7864982&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si9q000hnnahy5mzk4w9",
        number: 18,
        start: 59976,
        end: 63504,
        motionTemplateId: "pan-bottom-up-zoom-out",
        imagePrompt:
          "A person listening attentively, asking questions, engaged in conversation, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20listening%20attentively%2C%20asking%20questions%2C%20engaged%20in%20conversation%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8912096&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si9r000lnnaho8mplqvz",
        number: 23,
        start: 78304,
        end: 82068,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A person focusing on what's missing, discontent expression, medium-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20focusing%20on%20what's%20missing%2C%20discontent%20expression%2C%20medium-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4888803&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "high-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7sj49000onnah1hysub3k",
        number: 10,
        start: 31060,
        end: 34876,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A programmer staring blankly at a screen filled with code, overwhelmed, medium-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20programmer%20staring%20blankly%20at%20a%20screen%20filled%20with%20code%2C%20overwhelmed%2C%20medium-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1618369&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "high-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7siin000nnnah0n9icf62",
        number: 25,
        start: 85364,
        end: 89076,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "A cycle of lack and fix, frustration, medium-shot dutch-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20cycle%20of%20lack%20and%20fix%2C%20frustration%2C%20medium-shot%20dutch-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6284732&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "dutch-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si2y000dnnah4ioz20zo",
        number: 24,
        start: 82124,
        end: 85348,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A person focusing on what they've gained, content expression, medium-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20focusing%20on%20what%20they've%20gained%2C%20content%20expression%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4388441&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si9r000knnah63vj8d1c",
        number: 29,
        start: 100004,
        end: 103604,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A brain being rewired, new connections forming, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20brain%20being%20rewired%2C%20new%20connections%20forming%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9623337&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7skmq000unnahgwccur1b",
        number: 13,
        start: 42428,
        end: 45708,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A person shrinking a large task into a comically small one, humorous scene, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20shrinking%20a%20large%20task%20into%20a%20comically%20small%20one%2C%20humorous%20scene%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=782855&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7sktm000wnnahzxmr6nfx",
        number: 5,
        start: 14128,
        end: 17368,
        motionTemplateId: "pan-bottom-up-zoom-out",
        imagePrompt:
          "A frustrated individual with their head in their hands, surrounded by complex equations, medium-shot dutch-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20frustrated%20individual%20with%20their%20head%20in%20their%20hands%2C%20surrounded%20by%20complex%20equations%2C%20medium-shot%20dutch-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5237307&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "dutch-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7sldl0011nnahjro73q5v",
        number: 33,
        start: 113812,
        end: 117460,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A person using the teeny tweak tactic, incremental inventory, and gratitude ritual, empowered, medium-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20using%20the%20teeny%20tweak%20tactic%2C%20incremental%20inventory%2C%20and%20gratitude%20ritual%2C%20empowered%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2780658&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7sjt0000pnnahq94wzoom",
        number: 3,
        start: 6664,
        end: 10392,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A person looking exhausted and defeated, surrounded by supportive teammates, concerned expressions, over-the-shoulder-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20looking%20exhausted%20and%20defeated%2C%20surrounded%20by%20supportive%20teammates%2C%20concerned%20expressions%2C%20over-the-shoulder-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2839032&nologo=true&private=true",
        shotSize: "over-the-shoulder-shot",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7sl6e000znnahn41aa4hw",
        number: 17,
        start: 56368,
        end: 59952,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A person making a new contact, initiating conversation, friendly demeanor, two-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20making%20a%20new%20contact%2C%20initiating%20conversation%2C%20friendly%20demeanor%2C%20two-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1880500&nologo=true&private=true",
        shotSize: "two-shot",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7sjxx000qnnahbk7ikhsk",
        number: 15,
        start: 49324,
        end: 52536,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "A brain being whispered to, positive affirmations, glowing neurons, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20brain%20being%20whispered%20to%2C%20positive%20affirmations%2C%20glowing%20neurons%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3650820&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si9q000innahj1tkp8d9",
        number: 2,
        start: 3376,
        end: 6648,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A person climbing out of a grave, reaching for the sunlight, hopeful expression, medium-shot ground-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20climbing%20out%20of%20a%20grave%2C%20reaching%20for%20the%20sunlight%2C%20hopeful%20expression%2C%20medium-shot%20ground-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=854704&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "ground-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7shrl0009nnah8c7zxzta",
        number: 12,
        start: 38436,
        end: 42396,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A groundbreaking AI being launched, celebration, successful launch, establishing-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20groundbreaking%20AI%20being%20launched%2C%20celebration%2C%20successful%20launch%2C%20establishing-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6871786&nologo=true&private=true",
        shotSize: "establishing-shot",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7sl8h0010nnaht4my3lun",
        number: 30,
        start: 103612,
        end: 106644,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "A person craving growth, determined look, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20craving%20growth%2C%20determined%20look%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3292120&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7skdj000snnahvbytjrzc",
        number: 9,
        start: 27476,
        end: 31020,
        motionTemplateId: "pan-top-down-zoom-out",
        imagePrompt:
          "A caterpillar transforming into a butterfly, stages of metamorphosis, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20caterpillar%20transforming%20into%20a%20butterfly%2C%20stages%20of%20metamorphosis%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=618199&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7slg80012nnahsw3sgpls",
        number: 19,
        start: 63512,
        end: 67536,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A person landing a dream job, celebrating success, joyful expression, wide-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20landing%20a%20dream%20job%2C%20celebrating%20success%2C%20joyful%20expression%2C%20wide-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2028762&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "low-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7sklx000tnnahrs1ozm4o",
        number: 8,
        start: 24088,
        end: 27452,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A single ant carrying a crumb many times its size, determined effort, extreme-close-up ground-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20single%20ant%20carrying%20a%20crumb%20many%20times%20its%20size%2C%20determined%20effort%2C%20extreme-close-up%20ground-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4832152&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "ground-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7shzg000bnnahptxvulzu",
        number: 27,
        start: 92708,
        end: 96292,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A person writing down something they improved, focused concentration, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20writing%20down%20something%20they%20improved%2C%20focused%20concentration%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4031330&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si3e000gnnahivp8xbog",
        number: 20,
        start: 67648,
        end: 71472,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "A person reviewing a process, making improvements, focused concentration, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20reviewing%20a%20process%2C%20making%20improvements%2C%20focused%20concentration%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5531503&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7skns000vnnah7qvo8g3n",
        number: 4,
        start: 10416,
        end: 13976,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "A person attempting to jump across a wide chasm, looking fearful, wide-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20attempting%20to%20jump%20across%20a%20wide%20chasm%2C%20looking%20fearful%2C%20wide-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1604175&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "high-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7si3e000fnnahbc2efflz",
        number: 7,
        start: 20576,
        end: 23976,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "A brain with an alarm bell ringing inside, flashing red lights, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20brain%20with%20an%20alarm%20bell%20ringing%20inside%2C%20flashing%20red%20lights%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5911050&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7skch000rnnahvfu0riwk",
        number: 11,
        start: 34988,
        end: 38332,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A single line of code being added to a project, focused concentration, extreme-close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20single%20line%20of%20code%20being%20added%20to%20a%20project%2C%20focused%20concentration%2C%20extreme-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4783861&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7skuh000xnnah295xg7ju",
        number: 22,
        start: 75016,
        end: 78188,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A person plateauing, then starting to decline, downward spiral, medium-shot dutch-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20plateauing%2C%20then%20starting%20to%20decline%2C%20downward%20spiral%2C%20medium-shot%20dutch-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1972505&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "dutch-angle",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7skva000ynnahjxkeigke",
        number: 21,
        start: 71496,
        end: 74992,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A 1% improvement being made, subtle change, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%201%25%20improvement%20being%20made%2C%20subtle%20change%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6646922&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
    ],
    voiceOver: [
      {
        id: "cmab7roek0005nnah639obggb",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/db091e2b-07ac-4835-98d9-cd55235f09d8.mp3",
        voiceId: "en-US-AndrewNeural",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
      {
        id: "cmab7qiai0004nnahtlautsz6",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/db091e2b-07ac-4835-98d9-cd55235f09d8.mp3",
        voiceId: "en-US-AndrewNeural",
        videoId: "cmab7pzat0003nnahfad19kac",
      },
    ],
  },
  {
    id: "cmaao7g350000nn3pkvaepysd",
    prompt: "The 3.14 Rule That Changed Everything for Me",
    title: "The 3.14 Rule",
    script:
      "Ever felt like you’re circling the drain? One wrong move from total collapse? I was there. Lost it all. Now I build empires. Here’s the rule that saved me – the 3.14 rule. It’s not about math; it's about survival. You're being lied to. Success gurus preach hustle. Grind till you bleed. That’s a fast track to burnout. The problem? You treat life like a sprint. It's a marathon of choices and it's why you'll fail. Rule 1: The Pi Pivot. Picture Kai, paralyzed from the waist down after a construction accident. He couldn't walk, so he spun. Trained his upper body, mastered wheelchair acrobatics. Now he's a motivational speaker. His secret? Redirect your force. Find a different angle. Can't solve it head-on? Circle the problem, find the weakness. Rule 2: The Estimation Edge. Meet Anya, the chef who almost lost her restaurant to debt. She didn't need exact numbers, just estimations. Cut waste by 10% each week. Eyeballed ingredients. She guessed then refined. Now her restaurant is a success. Her Secret? Learn to approximate. Most decisions don't need perfect data, just a calculated risk. Rule 3: The Infinite Game. You play to keep playing. Maria was diagnosed with a rare autoimmune disease and was losing her hair. She started a wig business for cancer patients. Not for profit, for purpose. For every wig sold, she donated one. Now she has expanded her business to other countries. The secret? Find your never-ending 'why.' Attach your actions to a cause that outlives you and play on. You've got the Pi Pivot, the Estimation Edge, and the Infinite Game. You're not just a survivor. You are the constant – the 3.14 that never ends.",
    transcriptionId: "fbbe3df3-aaf4-4048-8368-b3fd0869112d",
    transcribedWords:
      '[{"start":240,"end":584,"subs":"Ever felt like","textPosition":"center"},{"start":592,"end":1144,"subs":"you\'re circling the","textPosition":"center"},{"start":1152,"end":2504,"subs":"drain? One wrong","textPosition":"center"},{"start":2552,"end":3208,"subs":"move from total","textPosition":"end"},{"start":3264,"end":4600,"subs":"collapse. I was","textPosition":"center"},{"start":4640,"end":5912,"subs":"there, lost it","textPosition":"end"},{"start":5936,"end":7320,"subs":"all. Now I","textPosition":"end"},{"start":7360,"end":9256,"subs":"build empires. Here\'s","textPosition":"center"},{"start":9288,"end":9880,"subs":"the rule that","textPosition":"center"},{"start":9920,"end":10632,"subs":"saved me. The","textPosition":"end"},{"start":10656,"end":12968,"subs":"3.14 rule. It\'s","textPosition":"center"},{"start":12984,"end":13848,"subs":"not about math.","textPosition":"end"},{"start":13944,"end":15180,"subs":"It\'s about survival.","textPosition":"end"},{"start":15520,"end":16456,"subs":"You\'re being lied","textPosition":"center"},{"start":16488,"end":18376,"subs":"to. Success gurus","textPosition":"center"},{"start":18408,"end":20024,"subs":"preach hustle. Grind","textPosition":"end"},{"start":20072,"end":21100,"subs":"till you bleed.","textPosition":"center"},{"start":21440,"end":22184,"subs":"That\'s a fast","textPosition":"end"},{"start":22232,"end":23416,"subs":"track to burnout.","textPosition":"end"},{"start":23608,"end":25320,"subs":"The problem. You","textPosition":"center"},{"start":25360,"end":25992,"subs":"treat life like","textPosition":"center"},{"start":26016,"end":27466,"subs":"a sprint. It\'s","textPosition":"end"},{"start":27498,"end":28202,"subs":"a marathon of","textPosition":"center"},{"start":28226,"end":28938,"subs":"choices. And it\'s","textPosition":"end"},{"start":28954,"end":29910,"subs":"why you\'ll fail.","textPosition":"end"},{"start":30210,"end":31242,"subs":"Rule one. The","textPosition":"center"},{"start":31266,"end":32954,"subs":"PI pivot. Picture","textPosition":"center"},{"start":33002,"end":34202,"subs":"Kai paralyzed from","textPosition":"end"},{"start":34226,"end":34858,"subs":"the waist down","textPosition":"center"},{"start":34914,"end":35658,"subs":"after a construction","textPosition":"end"},{"start":35674,"end":37386,"subs":"accident. He couldn\'t","textPosition":"end"},{"start":37418,"end":38170,"subs":"walk, so he","textPosition":"center"},{"start":38210,"end":39802,"subs":"spun. Trained his","textPosition":"center"},{"start":39826,"end":40906,"subs":"upper body. Mastered","textPosition":"end"},{"start":40938,"end":43162,"subs":"wheelchair acrobatics. Now","textPosition":"center"},{"start":43186,"end":44010,"subs":"he\'s a motivational","textPosition":"end"},{"start":44090,"end":46070,"subs":"speaker. His secret,","textPosition":"end"},{"start":46450,"end":47950,"subs":"Redirect your force,","textPosition":"center"},{"start":48370,"end":49146,"subs":"find a different","textPosition":"center"},{"start":49218,"end":50826,"subs":"angle. Can\'t solve","textPosition":"end"},{"start":50858,"end":51802,"subs":"it head on.","textPosition":"center"},{"start":51986,"end":53050,"subs":"Circle the problem,","textPosition":"end"},{"start":53170,"end":54270,"subs":"find the weakness.","textPosition":"end"},{"start":54650,"end":55762,"subs":"Rule two. The","textPosition":"center"},{"start":55786,"end":57730,"subs":"estimation edge. Meet","textPosition":"center"},{"start":57770,"end":58754,"subs":"Anya, the chef","textPosition":"end"},{"start":58802,"end":59442,"subs":"who almost lost","textPosition":"center"},{"start":59466,"end":60162,"subs":"her restaurant to","textPosition":"end"},{"start":60186,"end":61618,"subs":"debt. She didn\'t","textPosition":"end"},{"start":61634,"end":62722,"subs":"need exact numbers,","textPosition":"center"},{"start":62786,"end":64770,"subs":"just estimations. Cut","textPosition":"center"},{"start":64810,"end":65778,"subs":"waste by 10%","textPosition":"end"},{"start":65834,"end":67666,"subs":"each week. Eyeballed","textPosition":"center"},{"start":67698,"end":69586,"subs":"ingredients she guessed,","textPosition":"end"},{"start":69618,"end":71362,"subs":"then refined. Now","textPosition":"end"},{"start":71386,"end":72162,"subs":"her restaurant is","textPosition":"center"},{"start":72186,"end":73810,"subs":"a success. Her","textPosition":"center"},{"start":73850,"end":75362,"subs":"secret, Learn to","textPosition":"end"},{"start":75386,"end":77506,"subs":"approximate most decisions.","textPosition":"center"},{"start":77538,"end":78242,"subs":"Don\'t need perfect","textPosition":"end"},{"start":78306,"end":79074,"subs":"data, just a","textPosition":"end"},{"start":79082,"end":81072,"subs":"calculated risk. Rule","textPosition":"center"},{"start":81136,"end":82224,"subs":"3. The infinite","textPosition":"center"},{"start":82272,"end":83600,"subs":"game. You play","textPosition":"end"},{"start":83640,"end":84700,"subs":"to keep playing.","textPosition":"center"},{"start":85000,"end":86256,"subs":"Maria was diagnosed","textPosition":"end"},{"start":86288,"end":86816,"subs":"with a rare","textPosition":"end"},{"start":86848,"end":87920,"subs":"autoimmune disease and","textPosition":"center"},{"start":87960,"end":88672,"subs":"was losing her","textPosition":"center"},{"start":88696,"end":90160,"subs":"hair. She started","textPosition":"end"},{"start":90200,"end":90848,"subs":"a wig business","textPosition":"center"},{"start":90904,"end":92180,"subs":"for cancer patients.","textPosition":"end"},{"start":92600,"end":93680,"subs":"Not for profit,","textPosition":"end"},{"start":93760,"end":95472,"subs":"for purpose. For","textPosition":"center"},{"start":95496,"end":96432,"subs":"every wig sold,","textPosition":"center"},{"start":96496,"end":97820,"subs":"she donated one.","textPosition":"end"},{"start":98200,"end":98912,"subs":"Now she has","textPosition":"center"},{"start":98936,"end":99776,"subs":"expanded her business","textPosition":"end"},{"start":99848,"end":100860,"subs":"to other countries.","textPosition":"end"},{"start":101320,"end":103072,"subs":"The secret. Find","textPosition":"center"},{"start":103096,"end":103872,"subs":"your never ending.","textPosition":"center"},{"start":103936,"end":105632,"subs":"Why? Attach your","textPosition":"end"},{"start":105656,"end":106224,"subs":"actions to a","textPosition":"center"},{"start":106232,"end":106976,"subs":"cause that outlives","textPosition":"end"},{"start":107008,"end":107520,"subs":"you and play","textPosition":"end"},{"start":107560,"end":108884,"subs":"on. You\'ve got","textPosition":"center"},{"start":108892,"end":109764,"subs":"the PI pivot,","textPosition":"center"},{"start":109812,"end":110884,"subs":"the estimation edge","textPosition":"end"},{"start":110932,"end":111684,"subs":"and the infinite","textPosition":"center"},{"start":111732,"end":113092,"subs":"game. You\'re not","textPosition":"end"},{"start":113116,"end":114388,"subs":"just a survivor.","textPosition":"end"},{"start":114564,"end":115252,"subs":"You are the","textPosition":"center"},{"start":115276,"end":116980,"subs":"constant. The 3.14","textPosition":"center"},{"start":117020,"end":117700,"subs":"that never ends.","textPosition":"end"}]',
    transcribedSubtitles: null,
    fps: 30,
    totalDuration: 127700,
    imageStyle: "cyberpunk",
    captionStyle: "caption-style-one",
    thumbnailUrl: "",
    bgmId: 5,
    aspectRatioId: 1,
    userId: "cma56j0q90000nnlb7uhulfpa",
    createdAt: "2025-05-05T05:59:13.457Z",
    updatedAt: "2025-05-05T06:00:34.436Z",
    aspectRatio: {
      id: 1,
      name: "video",
      width: 1280,
      height: 720,
    },
    bgm: {
      id: 5,
      name: "charming-love-violin-drums",
      bgmUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/charming-love-violin-drums.mp3",
      volume: 100,
    },
    scenes: [
      {
        id: "cmaao9or80003nn3px7biovnq",
        number: 17,
        start: 58986,
        end: 62722,
        motionTemplateId: "pan-bottom-up-zoom-out",
        imagePrompt:
          "Empty chairs stacked on tables in a dimly lit restaurant, four-shot, high-angle, pan-bottom-up-zoom-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Empty%20chairs%20stacked%20on%20tables%20in%20a%20dimly%20lit%20restaurant%2C%20four-shot%2C%20high-angle%2C%20pan-bottom-up-zoom-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7821582&nologo=true&private=true",
        shotSize: "four-shot",
        cameraAngle: "high-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9ot40004nn3pyus2xgpc",
        number: 14,
        start: 48370,
        end: 51802,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A maze with no exit, winding paths stretching into the distance, overhead-shot, high-angle, zoom-out-pull-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20maze%20with%20no%20exit%2C%20winding%20paths%20stretching%20into%20the%20distance%2C%20overhead-shot%2C%20high-angle%2C%20zoom-out-pull-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5445003&nologo=true&private=true",
        shotSize: "overhead-shot",
        cameraAngle: "high-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9r7z000cnn3pfesyd43k",
        number: 10,
        start: 34322,
        end: 37754,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "Construction site with mangled metal and debris, hard hat lying on the ground, wide-shot, overhead-shot, scale-down-fade, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Construction%20site%20with%20mangled%20metal%20and%20debris%2C%20hard%20hat%20lying%20on%20the%20ground%2C%20wide-shot%2C%20overhead-shot%2C%20scale-down-fade%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4936451&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "overhead-shot",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9rkz000knn3pzqp13dts",
        number: 28,
        start: 99848,
        end: 103280,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A map of the world with glowing pins marking different locations, establishing-shot, high-angle, zoom-out-pull-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20map%20of%20the%20world%20with%20glowing%20pins%20marking%20different%20locations%2C%20establishing-shot%2C%20high-angle%2C%20zoom-out-pull-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7821253&nologo=true&private=true",
        shotSize: "establishing-shot",
        cameraAngle: "high-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9qza0006nn3pgrzoxb16",
        number: 26,
        start: 92600,
        end: 96432,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "Hands carefully crafting a wig, focused attention to detail, close-up, eye-level, scale-down-up, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Hands%20carefully%20crafting%20a%20wig%2C%20focused%20attention%20to%20detail%2C%20close-up%2C%20eye-level%2C%20scale-down-up%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5673318&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9qza0005nn3prvx03rix",
        number: 27,
        start: 96496,
        end: 99776,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "Two women, one with cancer and one without, smiling, two-shot, eye-level, pan-right-left-zoom-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Two%20women%2C%20one%20with%20cancer%20and%20one%20without%2C%20smiling%2C%20two-shot%2C%20eye-level%2C%20pan-right-left-zoom-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=224732&nologo=true&private=true",
        shotSize: "two-shot",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9r3p0008nn3pmkyjcz18",
        number: 13,
        start: 44090,
        end: 47950,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "Spotlight on an empty stage, microphone stand center, single-shot, eye-level, enter-slide-top-down-exit-left, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Spotlight%20on%20an%20empty%20stage%2C%20microphone%20stand%20center%2C%20single-shot%2C%20eye-level%2C%20enter-slide-top-down-exit-left%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9085314&nologo=true&private=true",
        shotSize: "single-shot",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9r460009nn3p5w2gcrnv",
        number: 22,
        start: 77538,
        end: 81456,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "A chessboard with pieces strategically positioned, a hand moving a piece, medium-shot, high-angle, pan-bottom-up-zoom-in, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20chessboard%20with%20pieces%20strategically%20positioned%2C%20a%20hand%20moving%20a%20piece%2C%20medium-shot%2C%20high-angle%2C%20pan-bottom-up-zoom-in%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7418270&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "high-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9r090007nn3pgyq2v9ie",
        number: 5,
        start: 15520,
        end: 19448,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A crowd of people following a charismatic leader on a stage, bathed in spotlights, medium-wide-shot, low-angle, enter-slide-top-down-exit-left, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20crowd%20of%20people%20following%20a%20charismatic%20leader%20on%20a%20stage%2C%20bathed%20in%20spotlights%2C%20medium-wide-shot%2C%20low-angle%2C%20enter-slide-top-down-exit-left%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2304892&nologo=true&private=true",
        shotSize: "medium-wide-shot",
        cameraAngle: "low-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9r48000ann3pjyf6gxhw",
        number: 20,
        start: 69618,
        end: 72910,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "Bustling restaurant, smiling patrons, warm lighting, medium-wide-shot, eye-level, scale-down-fade, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Bustling%20restaurant%2C%20smiling%20patrons%2C%20warm%20lighting%2C%20medium-wide-shot%2C%20eye-level%2C%20scale-down-fade%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8622543&nologo=true&private=true",
        shotSize: "medium-wide-shot",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9r87000dnn3pqhpdus41",
        number: 3,
        start: 7600,
        end: 11608,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A rising cityscape at sunset, construction cranes silhouetted against the vibrant sky, establishing-shot, low-angle, pull-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20rising%20cityscape%20at%20sunset%2C%20construction%20cranes%20silhouetted%20against%20the%20vibrant%20sky%2C%20establishing-shot%2C%20low-angle%2C%20pull-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5203863&nologo=true&private=true",
        shotSize: "establishing-shot",
        cameraAngle: "low-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9r9c000fnn3pqmuh9dyh",
        number: 19,
        start: 66090,
        end: 69586,
        motionTemplateId: "pull-out",
        imagePrompt:
          "Chef carefully measuring ingredients, concentrating intensely, medium-close-up, eye-level, pull-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Chef%20carefully%20measuring%20ingredients%2C%20concentrating%20intensely%2C%20medium-close-up%2C%20eye-level%2C%20pull-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2227492&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9r5j000bnn3poh57nopb",
        number: 9,
        start: 31074,
        end: 34314,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "A wheelchair tilted at a dynamic angle, spotlight on the seat, single-shot, hip-level, pan-right-left-zoom-in, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20wheelchair%20tilted%20at%20a%20dynamic%20angle%2C%20spotlight%20on%20the%20seat%2C%20single-shot%2C%20hip-level%2C%20pan-right-left-zoom-in%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1920409&nologo=true&private=true",
        shotSize: "single-shot",
        cameraAngle: "hip-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9ra0000gnn3ppiw4if2r",
        number: 29,
        start: 103320,
        end: 107152,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "A tree with deep roots extending far below the surface, full-shot, low-angle, pan-top-down-zoom-in, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20tree%20with%20deep%20roots%20extending%20far%20below%20the%20surface%2C%20full-shot%2C%20low-angle%2C%20pan-top-down-zoom-in%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3354705&nologo=true&private=true",
        shotSize: "full-shot",
        cameraAngle: "low-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9r94000enn3pfhr92rbc",
        number: 32,
        start: 114564,
        end: 117700,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "Mathematical symbol for infinity, glowing against a dark background, extreme-close-up, eye-level, zoom-out-pull-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Mathematical%20symbol%20for%20infinity%2C%20glowing%20against%20a%20dark%20background%2C%20extreme-close-up%2C%20eye-level%2C%20zoom-out-pull-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2985759&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9rf1000inn3p1wz3zd1m",
        number: 8,
        start: 27104,
        end: 31018,
        motionTemplateId: "pull-out",
        imagePrompt:
          "Marathon runner collapsing from exhaustion, crowd blurred in the background, full-shot, high-angle, pull-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Marathon%20runner%20collapsing%20from%20exhaustion%2C%20crowd%20blurred%20in%20the%20background%2C%20full-shot%2C%20high-angle%2C%20pull-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5798664&nologo=true&private=true",
        shotSize: "full-shot",
        cameraAngle: "high-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9reh000hnn3pj313iemc",
        number: 25,
        start: 88528,
        end: 92180,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "Wigs displayed on mannequins, various styles and colors, medium-shot, eye-level, pan-left-right-zoom-in, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Wigs%20displayed%20on%20mannequins%2C%20various%20styles%20and%20colors%2C%20medium-shot%2C%20eye-level%2C%20pan-left-right-zoom-in%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4497419&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9rf5000jnn3pwhp6o86z",
        number: 30,
        start: 107176,
        end: 110884,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A relay race, baton being passed between runners, blurred motion, medium-shot, eye-level, enter-slide-top-down-exit-left, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20relay%20race%2C%20baton%20being%20passed%20between%20runners%2C%20blurred%20motion%2C%20medium-shot%2C%20eye-level%2C%20enter-slide-top-down-exit-left%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8896301&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9sx5000rnn3pl1w6ihlw",
        number: 31,
        start: 110932,
        end: 114388,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A person standing tall amidst a raging storm, determined expression, full-shot, low-angle, scale-down-up, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20standing%20tall%20amidst%20a%20raging%20storm%2C%20determined%20expression%2C%20full-shot%2C%20low-angle%2C%20scale-down-up%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8306571&nologo=true&private=true",
        shotSize: "full-shot",
        cameraAngle: "low-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9s6p000mnn3p5tqs1xmy",
        number: 24,
        start: 85000,
        end: 88496,
        motionTemplateId: "pull-out",
        imagePrompt:
          "Woman looking in a mirror, face etched with concern, thinning hair visible, medium-close-up, eye-level, pull-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Woman%20looking%20in%20a%20mirror%2C%20face%20etched%20with%20concern%2C%20thinning%20hair%20visible%2C%20medium-close-up%2C%20eye-level%2C%20pull-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=580113&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9skg000nnn3p6tvbwcsw",
        number: 1,
        start: 240,
        end: 3992,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A man precariously balancing on the edge of a cliff, stormy clouds swirling, wide-shot, high-angle, scale-down-fade, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20man%20precariously%20balancing%20on%20the%20edge%20of%20a%20cliff%2C%20stormy%20clouds%20swirling%2C%20wide-shot%2C%20high-angle%2C%20scale-down-fade%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=374752&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "high-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9rwl000lnn3pe9zv6hv0",
        number: 11,
        start: 37842,
        end: 40442,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "Muscular arms spinning a wheelchair wheel, intense focus, close-up, low-angle, pan-bottom-up-zoom-in, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Muscular%20arms%20spinning%20a%20wheelchair%20wheel%2C%20intense%20focus%2C%20close-up%2C%20low-angle%2C%20pan-bottom-up-zoom-in%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7964009&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9st0000onn3ppathhvd6",
        number: 7,
        start: 23608,
        end: 26918,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "Sprinter at the starting line, muscles tensed, focused expression, medium-close-up, eye-level, pan-left-right-zoom-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Sprinter%20at%20the%20starting%20line%2C%20muscles%20tensed%2C%20focused%20expression%2C%20medium-close-up%2C%20eye-level%2C%20pan-left-right-zoom-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1910470&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9su0000pnn3pzfl4siyt",
        number: 21,
        start: 73450,
        end: 77506,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "Hand writing in a notebook, calculations and scribbles, close-up, overhead-shot, pan-right-left-zoom-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Hand%20writing%20in%20a%20notebook%2C%20calculations%20and%20scribbles%2C%20close-up%2C%20overhead-shot%2C%20pan-right-left-zoom-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4742195&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "overhead-shot",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9sw2000qnn3p344ep8f8",
        number: 18,
        start: 62786,
        end: 66050,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A scale overflowing with food waste, darkened and unappetizing, close-up, eye-level, enter-slide-top-down-exit-left, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20scale%20overflowing%20with%20food%20waste%2C%20darkened%20and%20unappetizing%2C%20close-up%2C%20eye-level%2C%20enter-slide-top-down-exit-left%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7830141&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9sy4000snn3psb8cydi5",
        number: 2,
        start: 4136,
        end: 7560,
        motionTemplateId: "pan-bottom-up-zoom-out",
        imagePrompt:
          "Empty wallet lying on a dark street, a skyscraper in the distant background, medium-shot, eye-level, pan-bottom-up-zoom-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Empty%20wallet%20lying%20on%20a%20dark%20street%2C%20a%20skyscraper%20in%20the%20distant%20background%2C%20medium-shot%2C%20eye-level%2C%20pan-bottom-up-zoom-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8013164&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9t06000tnn3pd2jtmw47",
        number: 12,
        start: 40546,
        end: 44010,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "A man in a wheelchair performing an acrobatic feat, crowd cheering in the background, full-shot, low-angle, pan-right-left-zoom-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20man%20in%20a%20wheelchair%20performing%20an%20acrobatic%20feat%2C%20crowd%20cheering%20in%20the%20background%2C%20full-shot%2C%20low-angle%2C%20pan-right-left-zoom-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=49283&nologo=true&private=true",
        shotSize: "full-shot",
        cameraAngle: "low-angle",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9t1i000unn3p4snmyhoh",
        number: 16,
        start: 55578,
        end: 58962,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "Chef in a kitchen, meticulously plating a dish, medium-shot, shoulder-level, pan-left-right-zoom-in, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Chef%20in%20a%20kitchen%2C%20meticulously%20plating%20a%20dish%2C%20medium-shot%2C%20shoulder-level%2C%20pan-left-right-zoom-in%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4799441&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "shoulder-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9t2h000vnn3pifgecal3",
        number: 4,
        start: 11664,
        end: 15180,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "Complex gears turning inside a clock mechanism, gleaming metallic surfaces, close-up, eye-level, zoom-out-pull-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Complex%20gears%20turning%20inside%20a%20clock%20mechanism%2C%20gleaming%20metallic%20surfaces%2C%20close-up%2C%20eye-level%2C%20zoom-out-pull-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4082851&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9t2w000wnn3p1jl395bq",
        number: 6,
        start: 19624,
        end: 23416,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "Person running on a treadmill, face strained with effort, sweat dripping down, medium-shot, eye-level, scale-down-up, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Person%20running%20on%20a%20treadmill%2C%20face%20strained%20with%20effort%2C%20sweat%20dripping%20down%2C%20medium-shot%2C%20eye-level%2C%20scale-down-up%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7693815&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9t42000xnn3pghtpwy3p",
        number: 15,
        start: 51986,
        end: 55506,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A magnifying glass hovering over a complex circuit board, extreme-close-up, eye-level, scale-down-up, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20magnifying%20glass%20hovering%20over%20a%20complex%20circuit%20board%2C%20extreme-close-up%2C%20eye-level%2C%20scale-down-up%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3168252&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao9tab000ynn3ptbx91q65",
        number: 23,
        start: 81528,
        end: 84700,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "People playing a board game, laughing and engaging, medium-shot, eye-level, zoom-out-pull-out, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/People%20playing%20a%20board%20game%2C%20laughing%20and%20engaging%2C%20medium-shot%2C%20eye-level%2C%20zoom-out-pull-out%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6473278&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
    ],
    voiceOver: [
      {
        id: "cmaao8zpu0002nn3pcosh2czd",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/bf2c5783-f188-4c53-82a5-48ae7a0054de.mp3",
        voiceId: "en-US-ChristopherNeural",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
      {
        id: "cmaao83pb0001nn3p1igl7umt",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/bf2c5783-f188-4c53-82a5-48ae7a0054de.mp3",
        voiceId: "en-US-ChristopherNeural",
        videoId: "cmaao7g350000nn3pkvaepysd",
      },
    ],
  },
  {
    id: "cma9gujpu0000nn33ock9hari",
    prompt: "Experience, enjoy, live, understand and then renounce",
    title: "The Mystic's Paradox",
    script:
      "Empty hands. Shattered smile. A soul laid bare. You thought enlightenment was bliss? Prepare for the razor's edge. I'll show you how to truly awaken, not just dream of it. Most seek knowledge; few dare to live it. The mind fears the abyss. It clings to what it knows, even if it's poison. The ego whispers, \"Stay safe.\" I say, \"Leap.\" Rule #1: The Alchemist's Burn. Meet Maya, a Wall Street shark, drowning in gold. She chased pleasure, devoured experience, yet felt hollow. Her salvation? She burned it all. Her penthouse, her portfolio, her pride. From the ashes, clarity. You must incinerate your attachments. Not for poverty, but for purity. Feel the pain. Then, let it go. Rule #2: The Wanderer's Wound. Kai, a Zen monk, meditated for decades, seeking nothingness. He found only emptiness. One day, he stumbled into a brothel. Embraced chaos, heartbreak, the raw animal of life. He emerged transformed. You must bleed. Taste the bitter truth of the world. Only then can you understand what truly matters. Rule #3: The Silent Vow. Imagine a king, stripped of his crown, kneeling in mud. He whispers a vow: \"I am nothing. I own nothing. I desire nothing.\" This isn't weakness. It's the ultimate power. Every morning, before you speak, bow to the universe. Acknowledge your insignificance. This act silences the ego, opens the door to grace. Don't just seek enlightenment. Become the enlightened. A warrior of the soul, forged in fire and silence. You are not a seeker. You are the answer.",
    transcriptionId: "f866c195-8a98-4575-b010-2f7f6cbf4014",
    transcribedWords:
      '[{"start":160,"end":2184,"subs":"Empty hands, shattered","textPosition":"center"},{"start":2232,"end":3784,"subs":"smile. A soul","textPosition":"center"},{"start":3832,"end":5352,"subs":"laid bare. You","textPosition":"center"},{"start":5376,"end":6232,"subs":"thought enlightenment was","textPosition":"end"},{"start":6256,"end":7864,"subs":"bliss. Prepare for","textPosition":"center"},{"start":7872,"end":9176,"subs":"the razor\'s edge.","textPosition":"end"},{"start":9368,"end":10152,"subs":"I\'ll show you","textPosition":"end"},{"start":10176,"end":10696,"subs":"how to truly","textPosition":"center"},{"start":10728,"end":11672,"subs":"awaken, not just","textPosition":"center"},{"start":11696,"end":12712,"subs":"dream of it.","textPosition":"end"},{"start":12896,"end":14088,"subs":"Most seek knowledge,","textPosition":"center"},{"start":14184,"end":14824,"subs":"few dare to","textPosition":"end"},{"start":14832,"end":16072,"subs":"live it. The","textPosition":"end"},{"start":16096,"end":16792,"subs":"mind fears the","textPosition":"center"},{"start":16816,"end":18424,"subs":"abyss. It clings","textPosition":"center"},{"start":18472,"end":18952,"subs":"to what it","textPosition":"end"},{"start":18976,"end":19752,"subs":"knows, even if","textPosition":"center"},{"start":19776,"end":21352,"subs":"it\'s poison. The","textPosition":"end"},{"start":21376,"end":22648,"subs":"ego whispers, stay","textPosition":"end"},{"start":22704,"end":24408,"subs":"safe, I say","textPosition":"center"},{"start":24464,"end":26226,"subs":"leap. Rule one.","textPosition":"center"},{"start":26298,"end":27858,"subs":"The Alchemist\'s burn.","textPosition":"end"},{"start":28034,"end":29122,"subs":"Meet Maya, a","textPosition":"center"},{"start":29146,"end":29954,"subs":"Wall street shark","textPosition":"end"},{"start":30002,"end":31150,"subs":"drowning in gold.","textPosition":"end"},{"start":31610,"end":32770,"subs":"She chased pleasure,","textPosition":"center"},{"start":32850,"end":34290,"subs":"devoured experience, yet","textPosition":"center"},{"start":34330,"end":35970,"subs":"felt hollow. Her","textPosition":"end"},{"start":36010,"end":37714,"subs":"salvation. She burned","textPosition":"center"},{"start":37762,"end":39042,"subs":"it all. Her","textPosition":"end"},{"start":39066,"end":40738,"subs":"penthouse, her portfolio,","textPosition":"end"},{"start":40834,"end":42482,"subs":"her pride. From","textPosition":"center"},{"start":42506,"end":44226,"subs":"the ashes, clarity.","textPosition":"center"},{"start":44418,"end":45506,"subs":"You must incinerate","textPosition":"end"},{"start":45538,"end":47362,"subs":"your attachments. Not","textPosition":"center"},{"start":47386,"end":48210,"subs":"for poverty, but","textPosition":"end"},{"start":48250,"end":49922,"subs":"for purity. Feel","textPosition":"end"},{"start":49946,"end":51484,"subs":"the pain, then","textPosition":"center"},{"start":51572,"end":52440,"subs":"let it go.","textPosition":"center"},{"start":53540,"end":55040,"subs":"The Wanderer\'s wound.","textPosition":"end"},{"start":55380,"end":56444,"subs":"Kai, a Zen","textPosition":"center"},{"start":56492,"end":57580,"subs":"monk, meditated for","textPosition":"end"},{"start":57620,"end":59360,"subs":"decades, seeking nothingness.","textPosition":"end"},{"start":59780,"end":60668,"subs":"He found only","textPosition":"center"},{"start":60724,"end":62668,"subs":"emptiness. One day,","textPosition":"center"},{"start":62724,"end":63500,"subs":"he stumbled into","textPosition":"end"},{"start":63540,"end":65404,"subs":"a brothel. Embraced","textPosition":"center"},{"start":65452,"end":66892,"subs":"chaos, heartbreak, the","textPosition":"end"},{"start":66916,"end":67692,"subs":"raw animal of","textPosition":"end"},{"start":67716,"end":69484,"subs":"life. He emerged,","textPosition":"center"},{"start":69532,"end":71340,"subs":"transformed. You must","textPosition":"center"},{"start":71380,"end":72972,"subs":"bleed. Taste the","textPosition":"end"},{"start":72996,"end":73644,"subs":"bitter truth of","textPosition":"center"},{"start":73652,"end":75116,"subs":"the world. Only","textPosition":"end"},{"start":75188,"end":75692,"subs":"then can you","textPosition":"end"},{"start":75716,"end":76636,"subs":"understand what truly","textPosition":"center"},{"start":76668,"end":78656,"subs":"matters. Rule three.","textPosition":"center"},{"start":78728,"end":80096,"subs":"The Silent Vow.","textPosition":"end"},{"start":80288,"end":81408,"subs":"Imagine a king","textPosition":"center"},{"start":81504,"end":82112,"subs":"stripped of his","textPosition":"end"},{"start":82136,"end":83072,"subs":"crown. Kneeling in","textPosition":"end"},{"start":83096,"end":84688,"subs":"mud. He whispers","textPosition":"center"},{"start":84704,"end":85472,"subs":"a vow. I","textPosition":"center"},{"start":85496,"end":86912,"subs":"am nothing. I","textPosition":"end"},{"start":86936,"end":88512,"subs":"own nothing. I","textPosition":"center"},{"start":88536,"end":90272,"subs":"desire nothing. This","textPosition":"end"},{"start":90296,"end":92096,"subs":"isn\'t weakness. It\'s","textPosition":"end"},{"start":92128,"end":93340,"subs":"the ultimate power.","textPosition":"center"},{"start":93720,"end":94960,"subs":"Every morning, before","textPosition":"center"},{"start":95000,"end":95904,"subs":"you speak, bow","textPosition":"end"},{"start":95952,"end":96980,"subs":"to the universe.","textPosition":"center"},{"start":97320,"end":99140,"subs":"Acknowledge your insignificance.","textPosition":"end"},{"start":99560,"end":100704,"subs":"This act silences","textPosition":"end"},{"start":100752,"end":101776,"subs":"the ego, opens","textPosition":"center"},{"start":101808,"end":102272,"subs":"the door to","textPosition":"center"},{"start":102296,"end":103910,"subs":"grace. Don\'t just","textPosition":"end"},{"start":103950,"end":105750,"subs":"seek enlightenment. Become","textPosition":"center"},{"start":105790,"end":107462,"subs":"the enlightened. A","textPosition":"end"},{"start":107486,"end":108102,"subs":"warrior of the","textPosition":"end"},{"start":108126,"end":109222,"subs":"soul, forged in","textPosition":"center"},{"start":109246,"end":110570,"subs":"fire and silence.","textPosition":"center"},{"start":110990,"end":111574,"subs":"You are not","textPosition":"end"},{"start":111582,"end":113062,"subs":"a seeker. You","textPosition":"center"},{"start":113086,"end":113670,"subs":"are the answer.","textPosition":"end"}]',
    transcribedSubtitles: null,
    fps: 30,
    totalDuration: 123670,
    imageStyle: "cyberpunk",
    captionStyle: "caption-style-one",
    thumbnailUrl: "",
    bgmId: 13,
    aspectRatioId: 1,
    userId: "cma56j0q90000nnlb7uhulfpa",
    createdAt: "2025-05-04T09:45:27.870Z",
    updatedAt: "2025-05-04T09:49:08.717Z",
    aspectRatio: {
      id: 1,
      name: "video",
      width: 1280,
      height: 720,
    },
    bgm: {
      id: 13,
      name: "dark-intense-tension-orchestra",
      bgmUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dark-intense-tension-orchestra.mp3",
      volume: 100,
    },
    scenes: [
      {
        id: "cma9gz1ug0004nn33kwkahl1x",
        number: 19,
        start: 67564,
        end: 72156,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "Face etched with lines of suffering and wisdom, eyes filled with understanding, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Face%20etched%20with%20lines%20of%20suffering%20and%20wisdom%2C%20eyes%20filled%20with%20understanding%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=563081&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz3eg000lnn331wds53cn",
        number: 8,
        start: 24464,
        end: 27858,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "Burning ritual, flames consuming worldly possessions, intense heat radiating, medium-shot ground-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Burning%20ritual%2C%20flames%20consuming%20worldly%20possessions%2C%20intense%20heat%20radiating%2C%20medium-shot%20ground-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4179173&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "ground-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz2z00007nn3383xydzdy",
        number: 14,
        start: 47050,
        end: 50824,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "Close-up of a clenched fist gradually opening, revealing a small, fragile flower, symbolic of resilience, close-up ground-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20a%20clenched%20fist%20gradually%20opening%2C%20revealing%20a%20small%2C%20fragile%20flower%2C%20symbolic%20of%20resilience%2C%20close-up%20ground-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9645057&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "ground-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz2yo0005nn33qqeeq5xa",
        number: 25,
        start: 90672,
        end: 94592,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A single lit candle in the darkness, representing inner strength, close-up low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20single%20lit%20candle%20in%20the%20darkness%2C%20representing%20inner%20strength%2C%20close-up%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=696969&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz2z00006nn33e5du4gi4",
        number: 23,
        start: 82560,
        end: 86416,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "King kneeling in mud, head bowed, hands clasped in prayer, humility and surrender, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/King%20kneeling%20in%20mud%2C%20head%20bowed%2C%20hands%20clasped%20in%20prayer%2C%20humility%20and%20surrender%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8939082&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz2z00008nn33ofkfol6s",
        number: 21,
        start: 75396,
        end: 78656,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "Two roads diverging in a forest, one bright and clear, the other dark and overgrown, creating a sense of choice, wide-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Two%20roads%20diverging%20in%20a%20forest%2C%20one%20bright%20and%20clear%2C%20the%20other%20dark%20and%20overgrown%2C%20creating%20a%20sense%20of%20choice%2C%20wide-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7870747&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz2z00009nn33k7fvizth",
        number: 24,
        start: 86608,
        end: 90624,
        motionTemplateId: "pan-top-down-zoom-in",
        imagePrompt:
          "Empty throne room, vast and echoing, suggesting relinquishment of power, wide-shot overhead-shot, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Empty%20throne%20room%2C%20vast%20and%20echoing%2C%20suggesting%20relinquishment%20of%20power%2C%20wide-shot%20overhead-shot%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8574486&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "overhead-shot",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz37g000cnn339qs98xlw",
        number: 11,
        start: 35618,
        end: 39762,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A luxurious penthouse engulfed in flames, silhouette of a figure watching it burn, dramatic lighting, wide-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20luxurious%20penthouse%20engulfed%20in%20flames%2C%20silhouette%20of%20a%20figure%20watching%20it%20burn%2C%20dramatic%20lighting%2C%20wide-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2998173&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "low-angle",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz37g000bnn33czb0i2ee",
        number: 26,
        start: 94696,
        end: 99140,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "Person bowing deeply before a starlit sky, reverent gesture, awe-inspiring scene, medium-shot ground-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Person%20bowing%20deeply%20before%20a%20starlit%20sky%2C%20reverent%20gesture%2C%20awe-inspiring%20scene%2C%20medium-shot%20ground-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7064679&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "ground-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz3ee000hnn33pbi7lfya",
        number: 5,
        start: 14184,
        end: 17656,
        motionTemplateId: "pan-top-down-zoom-out",
        imagePrompt:
          "A dark abyss with swirling shadows, faint light at the bottom, creating a sense of foreboding, extreme-wide-shot overhead-shot, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20dark%20abyss%20with%20swirling%20shadows%2C%20faint%20light%20at%20the%20bottom%2C%20creating%20a%20sense%20of%20foreboding%2C%20extreme-wide-shot%20overhead-shot%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=758894&nologo=true&private=true",
        shotSize: "extreme-wide-shot",
        cameraAngle: "overhead-shot",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz607000tnn33xebyawik",
        number: 3,
        start: 7200,
        end: 10696,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person cautiously walking on a thin beam over a chasm, fog below, tension in their posture, medium-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20cautiously%20walking%20on%20a%20thin%20beam%20over%20a%20chasm%2C%20fog%20below%2C%20tension%20in%20their%20posture%2C%20medium-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2986464&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "high-angle",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz3eg000knn330nw527i3",
        number: 9,
        start: 28034,
        end: 31150,
        motionTemplateId: "pan-bottom-up-zoom-out",
        imagePrompt:
          "Opulent penthouse overlooking a city, but the room is dark and empty, contrast between wealth and loneliness, wide-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Opulent%20penthouse%20overlooking%20a%20city%2C%20but%20the%20room%20is%20dark%20and%20empty%2C%20contrast%20between%20wealth%20and%20loneliness%2C%20wide-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7700916&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "high-angle",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz61f000unn33osn95rvx",
        number: 29,
        start: 107174,
        end: 110570,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "Sword being forged in fire, sparks flying, intense heat and creation, medium-close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Sword%20being%20forged%20in%20fire%2C%20sparks%20flying%2C%20intense%20heat%20and%20creation%2C%20medium-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5401229&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz3ed000gnn33d19u4ekp",
        number: 28,
        start: 103310,
        end: 106998,
        motionTemplateId: "pan-bottom-up-zoom-out",
        imagePrompt:
          "Figure ascending a staircase towards a blinding light, hopeful journey, medium-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Figure%20ascending%20a%20staircase%20towards%20a%20blinding%20light%2C%20hopeful%20journey%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4694961&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz3eb000fnn33jotcpt51",
        number: 4,
        start: 10728,
        end: 14088,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "Open book with faint glowing pages, a candle illuminating the scene, ancient library in the background, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Open%20book%20with%20faint%20glowing%20pages%2C%20a%20candle%20illuminating%20the%20scene%2C%20ancient%20library%20in%20the%20background%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3376614&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz378000ann33hejq37a9",
        number: 12,
        start: 39826,
        end: 43218,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A heap of ashes with a single diamond sparkling amidst them, contrast between loss and enduring beauty, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20heap%20of%20ashes%20with%20a%20single%20diamond%20sparkling%20amidst%20them%2C%20contrast%20between%20loss%20and%20enduring%20beauty%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3666679&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz37g000enn33a0wu22gg",
        number: 17,
        start: 59780,
        end: 63500,
        motionTemplateId: "pull-out",
        imagePrompt:
          "Empty meditation mat in a quiet room, sunlight streaming through the window, feeling of absence, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Empty%20meditation%20mat%20in%20a%20quiet%20room%2C%20sunlight%20streaming%20through%20the%20window%2C%20feeling%20of%20absence%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9402731&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz3ee000inn33ihaiadhq",
        number: 1,
        start: 160,
        end: 3784,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "Close-up of cracked hands reaching out, a faint smile on a weathered face, soft lighting, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20cracked%20hands%20reaching%20out%2C%20a%20faint%20smile%20on%20a%20weathered%20face%2C%20soft%20lighting%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3449257&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz61f000vnn330nh6xh62",
        number: 13,
        start: 43314,
        end: 46550,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "Figure standing in a field of tall grass, looking towards a bright horizon, peaceful yet resolute, medium-wide-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Figure%20standing%20in%20a%20field%20of%20tall%20grass%2C%20looking%20towards%20a%20bright%20horizon%2C%20peaceful%20yet%20resolute%2C%20medium-wide-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2764344&nologo=true&private=true",
        shotSize: "medium-wide-shot",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz67c000wnn3334p3cpkd",
        number: 10,
        start: 31610,
        end: 35426,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A person reaching for a shining object that fades upon touch, leaving them empty handed, medium-shot eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20reaching%20for%20a%20shining%20object%20that%20fades%20upon%20touch%2C%20leaving%20them%20empty%20handed%2C%20medium-shot%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5167692&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz5ic000mnn331mrbi2h3",
        number: 2,
        start: 3832,
        end: 6860,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "Person standing on a mountaintop, back to the camera, vast landscape stretching before them, sunlight breaking through clouds, wide-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Person%20standing%20on%20a%20mountaintop%2C%20back%20to%20the%20camera%2C%20vast%20landscape%20stretching%20before%20them%2C%20sunlight%20breaking%20through%20clouds%2C%20wide-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4326846&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "low-angle",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz3ef000jnn33s5rfp247",
        number: 7,
        start: 21040,
        end: 24408,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A shadowy figure whispering into someone's ear, ominous atmosphere, dramatic lighting, medium-close-up shoulder-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20shadowy%20figure%20whispering%20into%20someone's%20ear%2C%20ominous%20atmosphere%2C%20dramatic%20lighting%2C%20medium-close-up%20shoulder-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7907192&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "shoulder-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz5ng000nnn3398akhy0v",
        number: 22,
        start: 78728,
        end: 82480,
        motionTemplateId: "pull-out",
        imagePrompt:
          "King stripped of his royal garments, crown discarded, conveying vulnerability, medium-shot high-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/King%20stripped%20of%20his%20royal%20garments%2C%20crown%20discarded%2C%20conveying%20vulnerability%2C%20medium-shot%20high-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5409802&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "high-angle",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz5nm000onn33yaoj4io6",
        number: 16,
        start: 55380,
        end: 59360,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "Zen monk meditating under a waterfall, serene yet powerful scene, sunlight filtering through trees, medium-shot low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Zen%20monk%20meditating%20under%20a%20waterfall%2C%20serene%20yet%20powerful%20scene%2C%20sunlight%20filtering%20through%20trees%2C%20medium-shot%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8522467&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz37g000dnn33h5bv8c47",
        number: 30,
        start: 110990,
        end: 113670,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "Mirror reflecting a peaceful, confident face, inner transformation, close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Mirror%20reflecting%20a%20peaceful%2C%20confident%20face%2C%20inner%20transformation%2C%20close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2891238&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz5of000pnn33r05sksx0",
        number: 20,
        start: 72348,
        end: 75372,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "Close-up of blood dripping onto the earth, signifying sacrifice and raw reality, extreme-close-up ground-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20blood%20dripping%20onto%20the%20earth%2C%20signifying%20sacrifice%20and%20raw%20reality%2C%20extreme-close-up%20ground-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=905272&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "ground-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz5ot000qnn331pljkh4v",
        number: 27,
        start: 99560,
        end: 102900,
        motionTemplateId: "pull-out",
        imagePrompt:
          "Mouth clamped shut, lips sealed, symbolizing silence and control, extreme-close-up eye-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Mouth%20clamped%20shut%2C%20lips%20sealed%2C%20symbolizing%20silence%20and%20control%2C%20extreme-close-up%20eye-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7834526&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz5va000rnn33tnd7yobc",
        number: 15,
        start: 51002,
        end: 55040,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "A lone figure wandering through a desolate landscape, wind blowing, a sense of searching and hardship, wide-shot hip-level, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20lone%20figure%20wandering%20through%20a%20desolate%20landscape%2C%20wind%20blowing%2C%20a%20sense%20of%20searching%20and%20hardship%2C%20wide-shot%20hip-level%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2833561&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "hip-level",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz5vy000snn334m27uao4",
        number: 18,
        start: 63540,
        end: 67548,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "Ornate brothel interior, dimly lit, chaotic energy, mix of sadness and pleasure, medium-shot dutch-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Ornate%20brothel%20interior%2C%20dimly%20lit%2C%20chaotic%20energy%2C%20mix%20of%20sadness%20and%20pleasure%2C%20medium-shot%20dutch-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4538944&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "dutch-angle",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gz68s000xnn339emxbwnz",
        number: 6,
        start: 17848,
        end: 20620,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "Hand tightly gripping a thorny vine, blood trickling down, contrast between fragility and resilience, close-up low-angle, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
        imageUrl:
          "https://image.pollinations.ai/prompt/Hand%20tightly%20gripping%20a%20thorny%20vine%2C%20blood%20trickling%20down%2C%20contrast%20between%20fragility%20and%20resilience%2C%20close-up%20low-angle%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6808546&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
    ],
    voiceOver: [
      {
        id: "cma9gyd9p0003nn33q85z4n6o",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/4e44155d-fd81-4dee-81a8-f5ce7c991f3f.mp3",
        voiceId: "en-US-ChristopherNeural",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gwp3h0002nn33hw599xkx",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/4e44155d-fd81-4dee-81a8-f5ce7c991f3f.mp3",
        voiceId: "en-US-ChristopherNeural",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
      {
        id: "cma9gv9el0001nn33i9kp4q54",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/4e44155d-fd81-4dee-81a8-f5ce7c991f3f.mp3",
        voiceId: "en-US-ChristopherNeural",
        videoId: "cma9gujpu0000nn33ock9hari",
      },
    ],
  },
  {
    id: "cmadsyvuu0000nnltjqp7gwlf",
    prompt: "Slow life",
    title: "Slow Life",
    script:
      "Crashing... Burning out... Another day, another deadline missed. The relentless race, is it worth the prize? Today, I'll reveal three Timeless Pillars to reclaim your existence. Pillars that dragged me from the brink of oblivion... Pillars that will resurrect you. The Myth of Productivity You’re told more hustle equals more life. Lie. Your soul is drowning in the noise. Let me show you the truth: Every notification, every meeting, every pointless task...is a brick in your self-made prison. You're not lazy. You're just suffocating... Pillar 1: The Hour of Zero Meet... Elon Musk... A man who seems to defy the laws of time. His secret? The Hour of Zero. The first 60 minutes of his day are sacred—no calls, no emails, just pure, unadulterated reflection. Your rule: Before the world grabs you, grab yourself back. Meditate. Walk in silence. Read poetry. This isn't about being selfish. It's about refueling your soul... Pillar 2: The Art of 'No' Maria, a CEO who tripled her company's profits by doing less. Her secret? Ruthless elimination. She cut 80% of her meetings, delegated everything that wasn't essential, and focused on the vital few. Your rule: Say 'no' to everything that doesn't set your soul on fire. Because every 'yes' to the wrong thing is a 'no' to your own life... Pillar 3: The Digital Sabbath Most people are slaves to their screens, their minds perpetually buzzing with anxiety. The fix? Unplug. Completely. For one day a week. No phone, no laptop, no notifications. Just nature, connection, and the quiet hum of your own being. Say: Today, I reclaim my mind. This ritual rewires your brain to crave stillness, not stimulation. Train your soul to seek peace more than progress. Slow living isn't a trend. It's a rebellion. The world wants you to be a machine. But you—you're different. You've got: The Hour of Zero... The Art of 'No'... The Digital Sabbath... Now go live.",
    transcriptionId: "a67aebe4-d750-4c3f-b01a-0442412a50f6",
    transcribedWords:
      '[{"start":240,"end":1512,"subs":"Crashing, burning out.","textPosition":"center"},{"start":1616,"end":2680,"subs":"Another day, another","textPosition":"center"},{"start":2720,"end":3912,"subs":"deadline missed. The","textPosition":"center"},{"start":3936,"end":5032,"subs":"relentless race. Is","textPosition":"end"},{"start":5056,"end":5432,"subs":"it worth the","textPosition":"center"},{"start":5456,"end":6936,"subs":"prize? Today, I\'ll","textPosition":"end"},{"start":6968,"end":8184,"subs":"reveal three timeless","textPosition":"end"},{"start":8232,"end":9144,"subs":"pillars to reclaim","textPosition":"center"},{"start":9192,"end":10664,"subs":"your existence. Pillars","textPosition":"center"},{"start":10712,"end":11432,"subs":"that dragged me","textPosition":"end"},{"start":11456,"end":11944,"subs":"from the brink","textPosition":"center"},{"start":11992,"end":13384,"subs":"of oblivion. Pillars","textPosition":"end"},{"start":13432,"end":14104,"subs":"that will resurrect","textPosition":"end"},{"start":14152,"end":14888,"subs":"you. The myth","textPosition":"center"},{"start":14904,"end":15944,"subs":"of productivity. You\'re","textPosition":"center"},{"start":15992,"end":16952,"subs":"told more hustle","textPosition":"end"},{"start":17016,"end":18088,"subs":"equals more life.","textPosition":"center"},{"start":18224,"end":19304,"subs":"Lie. Your soul","textPosition":"end"},{"start":19352,"end":20024,"subs":"is drowning in","textPosition":"end"},{"start":20032,"end":21032,"subs":"the noise. Let","textPosition":"center"},{"start":21056,"end":21512,"subs":"me show you","textPosition":"center"},{"start":21536,"end":22600,"subs":"the truth. Every","textPosition":"end"},{"start":22640,"end":24440,"subs":"notification, every meeting,","textPosition":"center"},{"start":24560,"end":25968,"subs":"every pointless task","textPosition":"end"},{"start":26104,"end":26704,"subs":"is a brick","textPosition":"end"},{"start":26752,"end":27296,"subs":"in your self","textPosition":"center"},{"start":27328,"end":28368,"subs":"made prison. You\'re","textPosition":"center"},{"start":28384,"end":29328,"subs":"not lazy. You\'re","textPosition":"end"},{"start":29344,"end":30704,"subs":"just suffocating. Pillar","textPosition":"center"},{"start":30752,"end":31440,"subs":"one, the hour","textPosition":"end"},{"start":31480,"end":32368,"subs":"of Zero. Meat.","textPosition":"end"},{"start":32464,"end":33664,"subs":"Elon Musk. A","textPosition":"center"},{"start":33672,"end":34336,"subs":"man who seems","textPosition":"center"},{"start":34368,"end":34912,"subs":"to defy the","textPosition":"end"},{"start":34936,"end":35712,"subs":"laws of time.","textPosition":"center"},{"start":35816,"end":36912,"subs":"His secret. The","textPosition":"end"},{"start":36936,"end":37808,"subs":"hour of zero.","textPosition":"end"},{"start":37944,"end":38816,"subs":"The first 60","textPosition":"center"},{"start":38888,"end":39440,"subs":"minutes of his","textPosition":"center"},{"start":39480,"end":40496,"subs":"day are sacred.","textPosition":"end"},{"start":40608,"end":41680,"subs":"No calls, no","textPosition":"center"},{"start":41720,"end":43328,"subs":"emails. Just pure,","textPosition":"end"},{"start":43424,"end":45280,"subs":"unadulterated reflection. Your","textPosition":"end"},{"start":45320,"end":46272,"subs":"rule. Before the","textPosition":"center"},{"start":46296,"end":47136,"subs":"world grabs you,","textPosition":"center"},{"start":47208,"end":48368,"subs":"grab yourself back.","textPosition":"end"},{"start":48504,"end":49632,"subs":"Meditate. Walk in","textPosition":"center"},{"start":49656,"end":51382,"subs":"silence. Read poetry.","textPosition":"end"},{"start":51496,"end":52122,"subs":"This isn\'t about","textPosition":"end"},{"start":52146,"end":53338,"subs":"being selfish. It\'s","textPosition":"center"},{"start":53354,"end":54202,"subs":"about refueling your","textPosition":"center"},{"start":54226,"end":55562,"subs":"soul. Pillar two,","textPosition":"end"},{"start":55666,"end":56250,"subs":"the art of","textPosition":"center"},{"start":56290,"end":57402,"subs":"no. Maria. A","textPosition":"end"},{"start":57426,"end":58426,"subs":"CEO who tripled","textPosition":"end"},{"start":58458,"end":59450,"subs":"her company\'s profits","textPosition":"center"},{"start":59530,"end":60490,"subs":"by doing less.","textPosition":"center"},{"start":60610,"end":61994,"subs":"Her secret? Ruthless","textPosition":"end"},{"start":62042,"end":63338,"subs":"elimination. She cut","textPosition":"center"},{"start":63394,"end":64202,"subs":"80% of her","textPosition":"end"},{"start":64226,"end":65866,"subs":"meetings, delegated everything","textPosition":"end"},{"start":65938,"end":67066,"subs":"that wasn\'t essential,","textPosition":"center"},{"start":67178,"end":67994,"subs":"and focused on","textPosition":"center"},{"start":68002,"end":68794,"subs":"the vital few.","textPosition":"end"},{"start":68882,"end":70010,"subs":"Your rule. Say","textPosition":"center"},{"start":70050,"end":71018,"subs":"no to everything","textPosition":"end"},{"start":71074,"end":71722,"subs":"that doesn\'t set","textPosition":"end"},{"start":71746,"end":72362,"subs":"your soul on","textPosition":"center"},{"start":72386,"end":73610,"subs":"fire. Because every","textPosition":"center"},{"start":73650,"end":74362,"subs":"yes to the","textPosition":"end"},{"start":74386,"end":75082,"subs":"wrong thing is","textPosition":"center"},{"start":75106,"end":75674,"subs":"a no to","textPosition":"end"},{"start":75682,"end":76410,"subs":"your own life.","textPosition":"end"},{"start":76530,"end":77704,"subs":"Pillar three. The","textPosition":"center"},{"start":77712,"end":78760,"subs":"digital Sabbath. Most","textPosition":"center"},{"start":78800,"end":79656,"subs":"people are slaves","textPosition":"end"},{"start":79688,"end":80488,"subs":"to their screens,","textPosition":"center"},{"start":80584,"end":81752,"subs":"their minds perpetually","textPosition":"end"},{"start":81816,"end":83064,"subs":"buzzing with anxiety.","textPosition":"end"},{"start":83192,"end":84776,"subs":"The fix? Unplug","textPosition":"center"},{"start":84888,"end":85992,"subs":"completely for one","textPosition":"center"},{"start":86016,"end":86712,"subs":"day a week.","textPosition":"end"},{"start":86816,"end":87880,"subs":"No phone, no","textPosition":"center"},{"start":87920,"end":89592,"subs":"laptop, no notifications.","textPosition":"end"},{"start":89736,"end":91288,"subs":"Just nature connection","textPosition":"end"},{"start":91384,"end":92024,"subs":"and the quiet","textPosition":"center"},{"start":92072,"end":92584,"subs":"hum of your","textPosition":"center"},{"start":92592,"end":93864,"subs":"own being. Say,","textPosition":"end"},{"start":93952,"end":94936,"subs":"today I reclaim","textPosition":"center"},{"start":94968,"end":95928,"subs":"my mind. This","textPosition":"end"},{"start":95984,"end":97080,"subs":"ritual rewires your","textPosition":"end"},{"start":97120,"end":97912,"subs":"brain to crave","textPosition":"center"},{"start":97976,"end":99752,"subs":"stillness, not stimulation.","textPosition":"center"},{"start":99896,"end":100664,"subs":"Train your soul","textPosition":"end"},{"start":100712,"end":101432,"subs":"to seek peace","textPosition":"center"},{"start":101496,"end":102552,"subs":"more than progress.","textPosition":"end"},{"start":102696,"end":103528,"subs":"Slow living isn\'t","textPosition":"end"},{"start":103544,"end":104468,"subs":"a trend. It\'s","textPosition":"center"},{"start":104484,"end":105412,"subs":"a rebellion. The","textPosition":"center"},{"start":105436,"end":106052,"subs":"world wants you","textPosition":"end"},{"start":106076,"end":106404,"subs":"to be a","textPosition":"center"},{"start":106412,"end":107508,"subs":"machine, but you,","textPosition":"end"},{"start":107564,"end":108628,"subs":"you\'re different. You\'ve","textPosition":"end"},{"start":108644,"end":109332,"subs":"got the hour","textPosition":"center"},{"start":109356,"end":110212,"subs":"of zero. The","textPosition":"center"},{"start":110236,"end":110964,"subs":"Art of no.","textPosition":"end"},{"start":111052,"end":112196,"subs":"The Digital Sabbath.","textPosition":"center"},{"start":112308,"end":112780,"subs":"Now go live.","textPosition":"end"}]',
    transcribedSubtitles: null,
    fps: 30,
    totalDuration: 122780,
    imageStyle: "cinematic",
    captionStyle: "caption-style-one",
    thumbnailUrl: "",
    bgmId: 78,
    aspectRatioId: 1,
    userId: "cma56j0q90000nnlb7uhulfpa",
    createdAt: "2025-05-07T10:35:50.598Z",
    updatedAt: "2025-05-07T10:37:02.549Z",
    aspectRatio: {
      id: 1,
      name: "video",
      width: 1280,
      height: 720,
    },
    bgm: {
      id: 78,
      name: "emotional-comeback-transformation",
      bgmUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-comeback-transformation.mp3",
      volume: 100,
    },
    scenes: [
      {
        id: "cmadt09e30002nnlt2s0hgvfq",
        number: 9,
        start: 30304,
        end: 33408,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "A sunrise over a calm lake, a lone figure silhouetted on the shore, serenity, establishing-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20sunrise%20over%20a%20calm%20lake%2C%20a%20lone%20figure%20silhouetted%20on%20the%20shore%2C%20serenity%2C%20establishing-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1873071&nologo=true&private=true",
        shotSize: "establishing-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt09fq0003nnltcpxql8l0",
        number: 32,
        start: 109996,
        end: 112780,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A bird taking flight from an open hand, freedom, close-up, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20bird%20taking%20flight%20from%20an%20open%20hand%2C%20freedom%2C%20close-up%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=7384111&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt09gg0004nnltubqotpc8",
        number: 6,
        start: 18224,
        end: 22184,
        motionTemplateId: "pan-top-down-zoom-out",
        imagePrompt:
          "A dark, murky body of water, ripples disturbing the surface, muted colors, medium-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20dark%2C%20murky%20body%20of%20water%2C%20ripples%20disturbing%20the%20surface%2C%20muted%20colors%2C%20medium-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8003013&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0al4000bnnlt01aaj7zp",
        number: 24,
        start: 81816,
        end: 85528,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A hand reaching out to unplug a device, action, close-up, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20hand%20reaching%20out%20to%20unplug%20a%20device%2C%20action%2C%20close-up%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=4317990&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0awi000knnlt9q4slxu2",
        number: 14,
        start: 47208,
        end: 50272,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "Bare feet walking silently on a dew-covered lawn at dawn, stillness, close-up, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/Bare%20feet%20walking%20silently%20on%20a%20dew-covered%20lawn%20at%20dawn%2C%20stillness%2C%20close-up%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3194918&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "ground-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0afa0005nnltgb9c6e2d",
        number: 25,
        start: 85624,
        end: 89592,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A deserted park bench under a starry night sky, peace, wide-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20deserted%20park%20bench%20under%20a%20starry%20night%20sky%2C%20peace%2C%20wide-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3621181&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0ai50006nnltkjya4zd6",
        number: 5,
        start: 14904,
        end: 18088,
        motionTemplateId: "pan-bottom-up-zoom-out",
        imagePrompt:
          "A hamster wheel spinning rapidly, a hamster blurred with motion, close-up, high-key lighting, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20hamster%20wheel%20spinning%20rapidly%2C%20a%20hamster%20blurred%20with%20motion%2C%20close-up%2C%20high-key%20lighting%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=4664760&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0aia0007nnltdt52sjda",
        number: 27,
        start: 93424,
        end: 96888,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A single thought bubble emerging from the side of a person's head, close-up, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20single%20thought%20bubble%20emerging%20from%20the%20side%20of%20a%20person's%20head%2C%20close-up%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2426472&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0aix0009nnltg4qgghwx",
        number: 17,
        start: 58066,
        end: 61370,
        motionTemplateId: "pan-bottom-up-zoom-out",
        imagePrompt:
          "A chessboard with only a few pieces remaining, strategic, overhead-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20chessboard%20with%20only%20a%20few%20pieces%20remaining%2C%20strategic%2C%20overhead-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=9736709&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "overhead-shot",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0aiy000annltj43gu1lm",
        number: 30,
        start: 103288,
        end: 106404,
        motionTemplateId: "pan-top-down-zoom-out",
        imagePrompt:
          "A group of wildflowers pushing through concrete, resilience, close-up, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20group%20of%20wildflowers%20pushing%20through%20concrete%2C%20resilience%2C%20close-up%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6572310&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "ground-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0aik0008nnltc5io48s3",
        number: 7,
        start: 22312,
        end: 25968,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "A cascade of smartphone notifications flooding a person's face, overwhelmed expression, close-up, dramatic lighting, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20cascade%20of%20smartphone%20notifications%20flooding%20a%20person's%20face%2C%20overwhelmed%20expression%2C%20close-up%2C%20dramatic%20lighting%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=9531131&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0bzz000snnltkixhy9ti",
        number: 22,
        start: 75266,
        end: 78472,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A winding road leading to a distant, unknown destination, hope, wide-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20winding%20road%20leading%20to%20a%20distant%2C%20unknown%20destination%2C%20hope%2C%20wide-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6874540&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0c07000tnnltbo167rx0",
        number: 29,
        start: 99896,
        end: 103256,
        motionTemplateId: "pan-bottom-up-zoom-out",
        imagePrompt:
          "A person sitting cross-legged on a mountain top, peaceful expression, full-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20sitting%20cross-legged%20on%20a%20mountain%20top%2C%20peaceful%20expression%2C%20full-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=628375&nologo=true&private=true",
        shotSize: "full-shot",
        cameraAngle: "high-angle",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0c0u000unnltyvleq8fg",
        number: 13,
        start: 43424,
        end: 47136,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "A person sitting in lotus position, eyes closed, sunlight streaming through a window, calmness, medium-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20sitting%20in%20lotus%20position%2C%20eyes%20closed%2C%20sunlight%20streaming%20through%20a%20window%2C%20calmness%2C%20medium-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8929283&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0b0z000lnnltv7zktgm1",
        number: 15,
        start: 50416,
        end: 54026,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A hand gently turning the pages of an old poetry book, soft light, close-up, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20hand%20gently%20turning%20the%20pages%20of%20an%20old%20poetry%20book%2C%20soft%20light%2C%20close-up%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6298302&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0ald000cnnltqt37ckpy",
        number: 21,
        start: 71906,
        end: 75242,
        motionTemplateId: "pan-bottom-up-zoom-in",
        imagePrompt:
          "A person rejecting a handshake, firm stance, medium-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20rejecting%20a%20handshake%2C%20firm%20stance%2C%20medium-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1993948&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0alm000dnnltylij4wzo",
        number: 1,
        start: 240,
        end: 3640,
        motionTemplateId: "scale-down-fade",
        imagePrompt:
          "Overhead shot of a person slumped over a desk covered in papers, a half-empty coffee mug nearby, dimly lit, medium-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/Overhead%20shot%20of%20a%20person%20slumped%20over%20a%20desk%20covered%20in%20papers%2C%20a%20half-empty%20coffee%20mug%20nearby%2C%20dimly%20lit%2C%20medium-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=9502338&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "overhead-shot",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0ao0000ennlt2ukdj1md",
        number: 31,
        start: 106412,
        end: 109892,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "A factory churning out identical products, anonymity, wide-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20factory%20churning%20out%20identical%20products%2C%20anonymity%2C%20wide-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1109826&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0aok000fnnltlgnkm3bw",
        number: 8,
        start: 26104,
        end: 30208,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A person trapped inside a brick cell with hands on the bars, claustrophobia, extreme-wide-shot, high-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20trapped%20inside%20a%20brick%20cell%20with%20hands%20on%20the%20bars%2C%20claustrophobia%2C%20extreme-wide-shot%2C%20high-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8383192&nologo=true&private=true",
        shotSize: "extreme-wide-shot",
        cameraAngle: "high-angle",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0aou000gnnltmk8dque2",
        number: 10,
        start: 33504,
        end: 37120,
        motionTemplateId: "pan-left-right-zoom-in",
        imagePrompt:
          "A sundial casting a long shadow across a stone courtyard, ancient feel, medium-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20sundial%20casting%20a%20long%20shadow%20across%20a%20stone%20courtyard%2C%20ancient%20feel%2C%20medium-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8028903&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0aou000hnnltl2r2k2u4",
        number: 2,
        start: 3720,
        end: 7688,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A lone runner on a treadmill, face strained, pushing against the limit, gym environment, eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20lone%20runner%20on%20a%20treadmill%2C%20face%20strained%2C%20pushing%20against%20the%20limit%2C%20gym%20environment%2C%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=4557301&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0ap4000innltmdwz5qgh",
        number: 4,
        start: 11456,
        end: 14888,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A person clinging to the edge of a cliff, looking down into the abyss, danger implied, wide-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20clinging%20to%20the%20edge%20of%20a%20cliff%2C%20looking%20down%20into%20the%20abyss%2C%20danger%20implied%2C%20wide-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3541259&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "high-angle",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0ark000jnnltgdo8ezjc",
        number: 11,
        start: 37160,
        end: 40496,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "A monk meditating peacefully in a zen garden, tranquility, full-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20monk%20meditating%20peacefully%20in%20a%20zen%20garden%2C%20tranquility%2C%20full-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=852870&nologo=true&private=true",
        shotSize: "full-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0bdz000mnnlt0h8oord1",
        number: 12,
        start: 40608,
        end: 43328,
        motionTemplateId: "enter-slide-top-down-exit-left",
        imagePrompt:
          "A phone ringing unanswered on a desk, solitude, medium-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20phone%20ringing%20unanswered%20on%20a%20desk%2C%20solitude%2C%20medium-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8285304&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0bp6000nnnltdhr2q6in",
        number: 28,
        start: 96904,
        end: 99752,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A neural network glowing, synapses, close-up, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20neural%20network%20glowing%2C%20synapses%2C%20close-up%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=124705&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0bv5000onnltci2du6hz",
        number: 20,
        start: 68442,
        end: 71882,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A single burning candle in a dark room, focus on the flame, close-up, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20single%20burning%20candle%20in%20a%20dark%20room%2C%20focus%20on%20the%20flame%2C%20close-up%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=517095&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0bw6000pnnltnshubbmr",
        number: 19,
        start: 64874,
        end: 68394,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "A person handing off a stack of files to another, delegation, over-the-shoulder-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20handing%20off%20a%20stack%20of%20files%20to%20another%2C%20delegation%2C%20over-the-shoulder-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=7154942&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0bye000qnnlt3i6ox5ij",
        number: 26,
        start: 89736,
        end: 93288,
        motionTemplateId: "scale-down-up",
        imagePrompt:
          "A gentle stream flowing through a lush forest, sound of nature, medium-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20gentle%20stream%20flowing%20through%20a%20lush%20forest%2C%20sound%20of%20nature%2C%20medium-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2168345&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0bzy000rnnltk87ff9q6",
        number: 16,
        start: 54058,
        end: 58042,
        motionTemplateId: "zoom-out-pull-out",
        imagePrompt:
          "A blooming lotus flower in a serene pond, clear water, medium-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20blooming%20lotus%20flower%20in%20a%20serene%20pond%2C%20clear%20water%2C%20medium-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1831015&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0c1v000vnnltagf5pu40",
        number: 3,
        start: 7744,
        end: 11432,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A weathered compass pointing towards a distant mountain range, dawn light, nature, medium-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20weathered%20compass%20pointing%20towards%20a%20distant%20mountain%20range%2C%20dawn%20light%2C%20nature%2C%20medium-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8991490&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0c36000wnnlttdutw3hm",
        number: 18,
        start: 61490,
        end: 64778,
        motionTemplateId: "pan-top-down-zoom-out",
        imagePrompt:
          "A sharp pair of scissors cutting through a pile of paperwork, decisive action, close-up, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20sharp%20pair%20of%20scissors%20cutting%20through%20a%20pile%20of%20paperwork%2C%20decisive%20action%2C%20close-up%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1700691&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
      {
        id: "cmadt0c4b000xnnltkqulv2jl",
        number: 23,
        start: 78536,
        end: 81752,
        motionTemplateId: "pan-right-left-zoom-in",
        imagePrompt:
          "A tangled web of wires, frustration, close-up, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20tangled%20web%20of%20wires%2C%20frustration%2C%20close-up%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2292728&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
    ],
    voiceOver: [
      {
        id: "cmadszkse0001nnlts7h67gn0",
        audioUrl:
          "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cma56j0q90000nnlb7uhulfpa/voiceovers/336491b4-9a63-4246-a0ca-b00a3771036e.mp3",
        voiceId: "en-US-AndrewNeural",
        videoId: "cmadsyvuu0000nnltjqp7gwlf",
      },
    ],
  },
  {
    id: "cmae6xsbj0000nnjca12d2wuv",
    prompt: "Just do it",
    title: "Just do it",
    script:
      "Doubt. It's a silent killer. A thief of dreams. It whispers you're not ready. While opportunity bleeds out. But what if doubt is a lie? Today, I hand you three brutal truths to shatter that lie and unleash the beast within. These are the rules forged in the fires of failure. The code I live by. When the world screams give up. They're what separate those who merely exist from those who truly live. The grand deception. We're told to be realistic, to wait for the right moment. That's a trap. Your brain is a master of procrastination. A sculptor of excuses. It will always find a reason to delay. But reality doesn't wait. Let me show you why. Every time you postpone action, you feed the monster of inertia. Science proves it. Momentum is the ultimate cheat code. Action breeds action. You're not cautious. You're just crippled by fear. Brutal truth number one. The three second override. Meet Anya. A coder paralyzed by imposter syndrome. She forced herself to type one line of code within three seconds of doubt. Hitting. Not a perfect program, just one line. After a year, she launched a six figure app. Her secret, the three second rule. When hesitation strikes, attack it head on. Write one word, do one rep, make one call. This isn't about perfection. It's about proving to yourself. I control my fear. Brutal truth 2. Embrace the carnage. Mark failed seven times before launching his game. Seven times he faced ridicule, bankruptcy, despair. His secret. Celebrate the failures. Every rejection letter went on his wall. Every setback became a war story. By owning the carnage, he disarmed his fear of it. Your rule. Fail. Fast, fail. Forward. Each scar is a badge of honor. A testament to your resilience. Brutal truth number three. The victory cry. Most people shrink in the face of challenges. They internalize doubt, letting it fester. The fix. Scream your intentions. Literally. Before every big meeting. Before every lift. Before every risk. Roar your commitment. Visualize success. Feel the power surge. I am unstoppable. This ritual rewires your brain to associate action with victory, not fear. Train your mind to crave the battlefield. You're not seeking comfort. You're hunting greatness. Unleashing isn't something you achieve. It's someone you become. The world wants you to cower, but you. You're a force of nature. You've got the three second override. Embrace the carnage. The victory cry. Now go. Seize your destiny.",
    transcriptionId: "044954c5-d0e1-4e66-aa29-71e2d34ab34a",
    transcribedWords:
      '[{"start":320,"end":1464,"subs":"Doubt. It\'s a","textPosition":"center"},{"start":1472,"end":2584,"subs":"silent killer. A","textPosition":"center"},{"start":2592,"end":3576,"subs":"thief of dreams.","textPosition":"center"},{"start":3688,"end":4728,"subs":"It whispers you\'re","textPosition":"end"},{"start":4744,"end":5512,"subs":"not ready. While","textPosition":"center"},{"start":5536,"end":6744,"subs":"opportunity bleeds out.","textPosition":"end"},{"start":6832,"end":7496,"subs":"But what if","textPosition":"end"},{"start":7568,"end":8184,"subs":"doubt is a","textPosition":"center"},{"start":8192,"end":9400,"subs":"lie? Today, I","textPosition":"center"},{"start":9440,"end":9960,"subs":"hand you three","textPosition":"end"},{"start":10000,"end":11512,"subs":"brutal truths to","textPosition":"center"},{"start":11536,"end":12312,"subs":"shatter that lie","textPosition":"end"},{"start":12376,"end":13064,"subs":"and unleash the","textPosition":"end"},{"start":13072,"end":14072,"subs":"beast within. These","textPosition":"center"},{"start":14096,"end":14728,"subs":"are the rules","textPosition":"center"},{"start":14824,"end":15464,"subs":"forged in the","textPosition":"end"},{"start":15472,"end":16760,"subs":"fires of failure.","textPosition":"center"},{"start":16920,"end":17544,"subs":"The code I","textPosition":"end"},{"start":17552,"end":17992,"subs":"live by. When","textPosition":"end"},{"start":18016,"end":18872,"subs":"the world screams","textPosition":"center"},{"start":18936,"end":19816,"subs":"give up. They\'re","textPosition":"center"},{"start":19848,"end":20552,"subs":"what separate those","textPosition":"end"},{"start":20576,"end":21740,"subs":"who merely exist","textPosition":"center"},{"start":22160,"end":22792,"subs":"from those who","textPosition":"end"},{"start":22816,"end":23912,"subs":"truly live. The","textPosition":"end"},{"start":23936,"end":25496,"subs":"grand deception. We\'re","textPosition":"center"},{"start":25528,"end":26040,"subs":"told to be","textPosition":"center"},{"start":26080,"end":27048,"subs":"realistic, to wait","textPosition":"end"},{"start":27064,"end":27432,"subs":"for the right","textPosition":"center"},{"start":27456,"end":28492,"subs":"moment. That\'s a","textPosition":"end"},{"start":28516,"end":29516,"subs":"trap. Your brain","textPosition":"end"},{"start":29548,"end":30108,"subs":"is a master","textPosition":"center"},{"start":30124,"end":31452,"subs":"of procrastination. A","textPosition":"center"},{"start":31476,"end":32636,"subs":"sculptor of excuses.","textPosition":"end"},{"start":32748,"end":33388,"subs":"It will always","textPosition":"center"},{"start":33444,"end":34076,"subs":"find a reason","textPosition":"end"},{"start":34148,"end":35052,"subs":"to delay. But","textPosition":"end"},{"start":35076,"end":36588,"subs":"reality doesn\'t wait.","textPosition":"center"},{"start":36684,"end":37132,"subs":"Let me show","textPosition":"center"},{"start":37156,"end":38412,"subs":"you why. Every","textPosition":"end"},{"start":38436,"end":39164,"subs":"time you postpone","textPosition":"center"},{"start":39212,"end":40428,"subs":"action, you feed","textPosition":"end"},{"start":40444,"end":40972,"subs":"the monster of","textPosition":"end"},{"start":40996,"end":42476,"subs":"inertia. Science proves","textPosition":"center"},{"start":42508,"end":44060,"subs":"it. Momentum is","textPosition":"center"},{"start":44100,"end":44844,"subs":"the ultimate cheat","textPosition":"end"},{"start":44892,"end":46156,"subs":"code. Action breeds","textPosition":"center"},{"start":46188,"end":47212,"subs":"action. You\'re not","textPosition":"end"},{"start":47236,"end":48732,"subs":"cautious. You\'re just","textPosition":"end"},{"start":48756,"end":49756,"subs":"crippled by fear.","textPosition":"center"},{"start":49868,"end":50780,"subs":"Brutal truth number","textPosition":"center"},{"start":50820,"end":51580,"subs":"one. The three","textPosition":"end"},{"start":51620,"end":53420,"subs":"second override. Meet","textPosition":"center"},{"start":53460,"end":54412,"subs":"Anya. A coder","textPosition":"end"},{"start":54476,"end":55564,"subs":"paralyzed by imposter","textPosition":"end"},{"start":55612,"end":56786,"subs":"syndrome. She forced","textPosition":"center"},{"start":56818,"end":57922,"subs":"herself to type","textPosition":"center"},{"start":58066,"end":58722,"subs":"one line of","textPosition":"end"},{"start":58746,"end":59890,"subs":"code within three","textPosition":"center"},{"start":59930,"end":60626,"subs":"seconds of doubt.","textPosition":"end"},{"start":60658,"end":61474,"subs":"Hitting. Not a","textPosition":"end"},{"start":61482,"end":62690,"subs":"perfect program, just","textPosition":"center"},{"start":62730,"end":63682,"subs":"one line. After","textPosition":"center"},{"start":63706,"end":64482,"subs":"a year, she","textPosition":"end"},{"start":64506,"end":65090,"subs":"launched a six","textPosition":"center"},{"start":65130,"end":66130,"subs":"figure app. Her","textPosition":"end"},{"start":66170,"end":67170,"subs":"secret, the three","textPosition":"end"},{"start":67210,"end":68242,"subs":"second rule. When","textPosition":"center"},{"start":68266,"end":69490,"subs":"hesitation strikes, attack","textPosition":"center"},{"start":69530,"end":70466,"subs":"it head on.","textPosition":"end"},{"start":70618,"end":71618,"subs":"Write one word,","textPosition":"center"},{"start":71714,"end":72610,"subs":"do one rep,","textPosition":"end"},{"start":72730,"end":73602,"subs":"make one call.","textPosition":"end"},{"start":73706,"end":74370,"subs":"This isn\'t about","textPosition":"center"},{"start":74410,"end":75970,"subs":"perfection. It\'s about","textPosition":"center"},{"start":76010,"end":77138,"subs":"proving to yourself.","textPosition":"end"},{"start":77314,"end":78162,"subs":"I control my","textPosition":"center"},{"start":78186,"end":79538,"subs":"fear. Brutal truth","textPosition":"end"},{"start":79634,"end":80642,"subs":"2. Embrace the","textPosition":"end"},{"start":80666,"end":82620,"subs":"carnage. Mark failed","textPosition":"center"},{"start":82700,"end":83468,"subs":"seven times before","textPosition":"center"},{"start":83524,"end":84540,"subs":"launching his game.","textPosition":"end"},{"start":84660,"end":85660,"subs":"Seven times he","textPosition":"center"},{"start":85700,"end":87532,"subs":"faced ridicule, bankruptcy,","textPosition":"end"},{"start":87596,"end":89068,"subs":"despair. His secret.","textPosition":"end"},{"start":89204,"end":90524,"subs":"Celebrate the failures.","textPosition":"center"},{"start":90652,"end":91804,"subs":"Every rejection letter","textPosition":"center"},{"start":91852,"end":92332,"subs":"went on his","textPosition":"end"},{"start":92356,"end":93740,"subs":"wall. Every setback","textPosition":"center"},{"start":93820,"end":94428,"subs":"became a war","textPosition":"end"},{"start":94484,"end":95516,"subs":"story. By owning","textPosition":"end"},{"start":95548,"end":96892,"subs":"the carnage, he","textPosition":"center"},{"start":96916,"end":97596,"subs":"disarmed his fear","textPosition":"center"},{"start":97628,"end":98380,"subs":"of it. Your","textPosition":"end"},{"start":98420,"end":99884,"subs":"rule. Fail. Fast,","textPosition":"center"},{"start":100012,"end":101180,"subs":"fail. Forward. Each","textPosition":"end"},{"start":101220,"end":101804,"subs":"scar is a","textPosition":"end"},{"start":101812,"end":102876,"subs":"badge of honor.","textPosition":"center"},{"start":103068,"end":103852,"subs":"A testament to","textPosition":"center"},{"start":103876,"end":105196,"subs":"your resilience. Brutal","textPosition":"end"},{"start":105228,"end":106156,"subs":"truth number three.","textPosition":"center"},{"start":106228,"end":107510,"subs":"The victory cry.","textPosition":"end"},{"start":107700,"end":108546,"subs":"Most people shrink","textPosition":"end"},{"start":108578,"end":108962,"subs":"in the face","textPosition":"center"},{"start":108986,"end":110130,"subs":"of challenges. They","textPosition":"center"},{"start":110170,"end":111458,"subs":"internalize doubt, letting","textPosition":"end"},{"start":111474,"end":112530,"subs":"it fester. The","textPosition":"center"},{"start":112570,"end":113762,"subs":"fix. Scream your","textPosition":"end"},{"start":113786,"end":115826,"subs":"intentions. Literally. Before","textPosition":"end"},{"start":115898,"end":116910,"subs":"every big meeting.","textPosition":"center"},{"start":117290,"end":118626,"subs":"Before every lift.","textPosition":"center"},{"start":118818,"end":120242,"subs":"Before every risk.","textPosition":"end"},{"start":120426,"end":121618,"subs":"Roar your commitment.","textPosition":"center"},{"start":121714,"end":123330,"subs":"Visualize success. Feel","textPosition":"end"},{"start":123370,"end":124550,"subs":"the power surge.","textPosition":"end"},{"start":125290,"end":126386,"subs":"I am unstoppable.","textPosition":"center"},{"start":126498,"end":127618,"subs":"This ritual rewires","textPosition":"center"},{"start":127634,"end":128882,"subs":"your brain to","textPosition":"end"},{"start":128906,"end":129810,"subs":"associate action with","textPosition":"center"},{"start":129850,"end":131154,"subs":"victory, not fear.","textPosition":"end"},{"start":131282,"end":132066,"subs":"Train your mind","textPosition":"end"},{"start":132138,"end":132722,"subs":"to crave the","textPosition":"center"},{"start":132746,"end":133862,"subs":"battlefield. You\'re not","textPosition":"center"},{"start":133886,"end":135446,"subs":"seeking comfort. You\'re","textPosition":"end"},{"start":135478,"end":137382,"subs":"hunting greatness. Unleashing","textPosition":"center"},{"start":137526,"end":138342,"subs":"isn\'t something you","textPosition":"end"},{"start":138366,"end":139750,"subs":"achieve. It\'s someone","textPosition":"end"},{"start":139870,"end":140902,"subs":"you become. The","textPosition":"center"},{"start":140926,"end":141542,"subs":"world wants you","textPosition":"center"},{"start":141566,"end":142790,"subs":"to cower, but","textPosition":"end"},{"start":142830,"end":143814,"subs":"you. You\'re a","textPosition":"center"},{"start":143822,"end":144646,"subs":"force of nature.","textPosition":"end"},{"start":144758,"end":146150,"subs":"You\'ve got the","textPosition":"end"},{"start":146190,"end":147478,"subs":"three second override.","textPosition":"center"},{"start":147574,"end":148678,"subs":"Embrace the carnage.","textPosition":"center"},{"start":148774,"end":149958,"subs":"The victory cry.","textPosition":"end"},{"start":150054,"end":151046,"subs":"Now go. Seize","textPosition":"center"},{"start":151078,"end":151430,"subs":"your destiny.","textPosition":"end"}]',
    transcribedSubtitles: null,
    fps: 30,
    totalDuration: 161430,
    imageStyle: "cinematic",
    captionStyle: "caption-style-one",
    thumbnailUrl: "",
    bgmId: 4,
    aspectRatioId: 1,
    userId: "cma56j0q90000nnlb7uhulfpa",
    createdAt: "2025-05-07T17:06:53.983Z",
    updatedAt: "2025-05-07T17:07:53.523Z",
    aspectRatio: {
      id: 1,
      name: "video",
      width: 1280,
      height: 720,
    },
    bgm: {
      id: 4,
      name: "badass-aggressive-smart-brass-drums",
      bgmUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/badass-aggressive-smart-brass-drums.mp3",
      volume: 100,
    },
    scenes: [
      {
        id: "cmae6yupz0002nnjc03ywstvs",
        number: 32,
        start: 114578,
        end: 117890,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person screaming at the top of their lungs, determined, close-up low-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20screaming%20at%20the%20top%20of%20their%20lungs%2C%20determined%2C%20close-up%20low-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2163652&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yv410003nnjcrder4e9x",
        number: 2,
        start: 3688,
        end: 7496,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A hand reaching for a distant shining object, with dark clouds surrounding it, medium-shot eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20hand%20reaching%20for%20a%20distant%20shining%20object%2C%20with%20dark%20clouds%20surrounding%20it%2C%20medium-shot%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1972045&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yw8d0006nnjc1n2rzbty",
        number: 8,
        start: 25872,
        end: 28908,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person trapped in a cage of societal expectations, medium-shot eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20trapped%20in%20a%20cage%20of%20societal%20expectations%2C%20medium-shot%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2740939&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yw2a0004nnjcm7yg4fsn",
        number: 34,
        start: 121714,
        end: 124550,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person visualizing success, eyes closed, focus, close-up eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20visualizing%20success%2C%20eyes%20closed%2C%20focus%2C%20close-up%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=4745444&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yw2e0005nnjcr6mv52va",
        number: 42,
        start: 150718,
        end: 151430,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A hand reaching for the sky, seizing destiny, close-up low-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20hand%20reaching%20for%20the%20sky%2C%20seizing%20destiny%2C%20close-up%20low-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2197058&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yx4i000gnnjc6xywhrpp",
        number: 16,
        start: 56260,
        end: 59618,
        motionTemplateId: "pull-out",
        imagePrompt:
          "Close-up of fingers hovering over a keyboard, about to type, extreme-close-up eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20fingers%20hovering%20over%20a%20keyboard%2C%20about%20to%20type%2C%20extreme-close-up%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1250178&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6ywpk0009nnjcicz66waz",
        number: 31,
        start: 109858,
        end: 114466,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A dark cloud enveloping a person, internal struggle, medium-shot shoulder-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20dark%20cloud%20enveloping%20a%20person%2C%20internal%20struggle%2C%20medium-shot%20shoulder-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=5481123&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "shoulder-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yxao000lnnjckmxf9oa5",
        number: 3,
        start: 7568,
        end: 11080,
        motionTemplateId: "pan-right-left-zoom-out",
        imagePrompt:
          "A person standing at a crossroads, looking determined, wide-shot hip-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20standing%20at%20a%20crossroads%2C%20looking%20determined%2C%20wide-shot%20hip-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=5680034&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "hip-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6ywpj0007nnjc3ylqtyai",
        number: 41,
        start: 147574,
        end: 150646,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "Embracing destruction and shouting in victory, close-up eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/Embracing%20destruction%20and%20shouting%20in%20victory%2C%20close-up%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=502291&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yyw7000rnnjcctzbjm49",
        number: 27,
        start: 95548,
        end: 98876,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A person facing their fears head-on, fearless, close-up eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20facing%20their%20fears%20head-on%2C%20fearless%2C%20close-up%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6578168&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6ywpj0008nnjc2k22bb5f",
        number: 26,
        start: 91852,
        end: 95516,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A warrior with battle scars, standing tall, silhouette against the sun, medium-shot low-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20warrior%20with%20battle%20scars%2C%20standing%20tall%2C%20silhouette%20against%20the%20sun%2C%20medium-shot%20low-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1046020&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6ywwy000annjcly5uo1a5",
        number: 30,
        start: 106228,
        end: 109746,
        motionTemplateId: "pull-out",
        imagePrompt:
          "People shrinking under the weight of massive challenges, wide-shot high-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/People%20shrinking%20under%20the%20weight%20of%20massive%20challenges%2C%20wide-shot%20high-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=9949518&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "high-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6ywy4000bnnjcfgqfp2np",
        number: 39,
        start: 139870,
        end: 143814,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "People cowering in fear, while one stands tall, rebellion, wide-shot eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/People%20cowering%20in%20fear%2C%20while%20one%20stands%20tall%2C%20rebellion%2C%20wide-shot%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2597563&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6ywy5000cnnjcunrx8mab",
        number: 29,
        start: 103068,
        end: 106156,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "Close-up of scars on a warrior's arm, telling a story, extreme-close-up eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/Close-up%20of%20scars%20on%20a%20warrior's%20arm%2C%20telling%20a%20story%2C%20extreme-close-up%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=5393968&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6ywym000ennjcklpqsrfd",
        number: 25,
        start: 87596,
        end: 91804,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "Rejection letters tacked to a wall, filling the space, medium-wide-shot eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/Rejection%20letters%20tacked%20to%20a%20wall%2C%20filling%20the%20space%2C%20medium-wide-shot%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1595335&nologo=true&private=true",
        shotSize: "medium-wide-shot",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6ywym000dnnjcwdb8fpc4",
        number: 13,
        start: 44100,
        end: 47920,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A domino effect of falling blocks, one triggering another, medium-close-up overhead-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20domino%20effect%20of%20falling%20blocks%2C%20one%20triggering%20another%2C%20medium-close-up%20overhead-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=5366318&nologo=true&private=true",
        shotSize: "medium-close-up",
        cameraAngle: "overhead-shot",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yx2e000fnnjcwx8x3hp6",
        number: 36,
        start: 129362,
        end: 133390,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A soldier stepping onto a battlefield, eager, medium-shot hip-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20soldier%20stepping%20onto%20a%20battlefield%2C%20eager%2C%20medium-shot%20hip-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=5974462&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "hip-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yx4l000innjci1im67sw",
        number: 11,
        start: 36684,
        end: 40428,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A person standing at the edge of a cliff, looking at the horizon, wide-shot eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20standing%20at%20the%20edge%20of%20a%20cliff%2C%20looking%20at%20the%20horizon%2C%20wide-shot%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1202375&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yx4k000hnnjcdm0k3iig",
        number: 19,
        start: 66730,
        end: 70466,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A fist punching through a wall, determined and forceful, close-up low-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20fist%20punching%20through%20a%20wall%2C%20determined%20and%20forceful%2C%20close-up%20low-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8018381&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yx51000jnnjczaxggwqd",
        number: 37,
        start: 133490,
        end: 136326,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A serene landscape turning into a stormy one, contrast, medium-wide-shot eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20serene%20landscape%20turning%20into%20a%20stormy%20one%2C%20contrast%2C%20medium-wide-shot%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=7242245&nologo=true&private=true",
        shotSize: "medium-wide-shot",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yx51000knnjc2nhj8oln",
        number: 20,
        start: 70618,
        end: 74370,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A single drop of ink falling into water, rippling outwards, extreme-close-up overhead-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20single%20drop%20of%20ink%20falling%20into%20water%2C%20rippling%20outwards%2C%20extreme-close-up%20overhead-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1847065&nologo=true&private=true",
        shotSize: "extreme-close-up",
        cameraAngle: "overhead-shot",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yz8l0012nnjcs0lt3pvc",
        number: 38,
        start: 136438,
        end: 139750,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person morphing into a powerful being, transformation, medium-shot low-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20morphing%20into%20a%20powerful%20being%2C%20transformation%2C%20medium-shot%20low-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6075046&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "low-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yza90013nnjciwxsdec3",
        number: 7,
        start: 22160,
        end: 25864,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A labyrinth with no exit in sight, extreme-wide-shot overhead-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20labyrinth%20with%20no%20exit%20in%20sight%2C%20extreme-wide-shot%20overhead-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2859727&nologo=true&private=true",
        shotSize: "extreme-wide-shot",
        cameraAngle: "overhead-shot",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yxpp000mnnjc9ly2so4d",
        number: 23,
        start: 80122,
        end: 84060,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A field of war, destroyed buildings and remnants of past battles, extreme-wide-shot high-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20field%20of%20war%2C%20destroyed%20buildings%20and%20remnants%20of%20past%20battles%2C%20extreme-wide-shot%20high-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=5582049&nologo=true&private=true",
        shotSize: "extreme-wide-shot",
        cameraAngle: "high-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yz2y000ynnjcxneqbhx3",
        number: 40,
        start: 143822,
        end: 147478,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A force of nature, hurricane or tornado, unstoppable, extreme-wide-shot low-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20force%20of%20nature%2C%20hurricane%20or%20tornado%2C%20unstoppable%2C%20extreme-wide-shot%20low-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6934670&nologo=true&private=true",
        shotSize: "extreme-wide-shot",
        cameraAngle: "low-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yxu9000nnnjc3sg2bgjt",
        number: 10,
        start: 32748,
        end: 36588,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A clock with hands stuck, dust accumulating, close-up high-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20clock%20with%20hands%20stuck%2C%20dust%20accumulating%2C%20close-up%20high-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=4778944&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "high-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yzbd0014nnjcoa1528cw",
        number: 15,
        start: 53100,
        end: 56150,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A young woman sitting in front of a computer looking frustrated, medium-shot shoulder-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20young%20woman%20sitting%20in%20front%20of%20a%20computer%20looking%20frustrated%2C%20medium-shot%20shoulder-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=7666715&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "shoulder-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yy12000onnjcey9mbx8l",
        number: 22,
        start: 77314,
        end: 80034,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person staring down their fear, shadows behind them, close-up low-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20staring%20down%20their%20fear%2C%20shadows%20behind%20them%2C%20close-up%20low-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=1449230&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "low-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yzlm0015nnjcfg1lll3y",
        number: 14,
        start: 48260,
        end: 52940,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A person chained to a wall, struggling to break free, medium-shot eye-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20person%20chained%20to%20a%20wall%2C%20struggling%20to%20break%20free%2C%20medium-shot%20eye-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=7104200&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "eye-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yy9g000pnnjciye9r7wf",
        number: 4,
        start: 11240,
        end: 14728,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A blacksmith hammering a glowing sword, sparks flying, medium-shot shoulder-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20blacksmith%20hammering%20a%20glowing%20sword%2C%20sparks%20flying%2C%20medium-shot%20shoulder-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=2106654&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "shoulder-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yzlp0016nnjcxch593xg",
        number: 35,
        start: 125290,
        end: 129314,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "Brain rewiring itself with positive energy, close-up overhead-shot, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/Brain%20rewiring%20itself%20with%20positive%20energy%2C%20close-up%20overhead-shot%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=8543961&nologo=true&private=true",
        shotSize: "close-up",
        cameraAngle: "overhead-shot",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yydv000qnnjcy6z6nvsf",
        number: 24,
        start: 84100,
        end: 87532,
        motionTemplateId: "pull-out",
        imagePrompt:
          "A man sitting alone in a dark room, head in his hands, medium-shot shoulder-level, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20man%20sitting%20alone%20in%20a%20dark%20room%2C%20head%20in%20his%20hands%2C%20medium-shot%20shoulder-level%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=6374639&nologo=true&private=true",
        shotSize: "medium-shot",
        cameraAngle: "shoulder-level",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yzs80017nnjczf9soi68",
        number: 1,
        start: 320,
        end: 3576,
        motionTemplateId: "pan-left-right-zoom-out",
        imagePrompt:
          "A dark, empty street with shadows, representing doubt, extreme-wide-shot high-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/A%20dark%2C%20empty%20street%20with%20shadows%2C%20representing%20doubt%2C%20extreme-wide-shot%20high-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=9489912&nologo=true&private=true",
        shotSize: "extreme-wide-shot",
        cameraAngle: "high-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      {
        id: "cmae6yyw9000snnjcqabog3si",
        number: 6,
        start: 18112,
        end: 21740,
        motionTemplateId: "pull-out",
        imagePrompt:
          "People climbing a steep mountain, one helping another, wide-shot low-angle, cinematic look:1.4, soothing tones, insane details, intricate details, hyperdetailed, low contrast, soft cinematic light, dim colors, exposure blend, hdr, faded, slate gray atmosphere",
        imageUrl:
          "https://image.pollinations.ai/prompt/People%20climbing%20a%20steep%20mountain%2C%20one%20helping%20another%2C%20wide-shot%20low-angle%2C%20cinematic%20look%3A1.4%2C%20soothing%20tones%2C%20insane%20details%2C%20intricate%20details%2C%20hyperdetailed%2C%20low%20contrast%2C%20soft%20cinematic%20light%2C%20dim%20colors%2C%20exposure%20blend%2C%20hdr%2C%20faded%2C%20slate%20gray%20atmosphere?width=720&height=540&seed=3945758&nologo=true&private=true",
        shotSize: "wide-shot",
        cameraAngle: "low-angle",
        videoId: "cmae6xsbj0000nnjca12d2wuv",
      },
      "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
      "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
      "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
      "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
      "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
      "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
      "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
      "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
    ],
    voiceOver:
      "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",
  },
];
