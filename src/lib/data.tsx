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
  confidence: number;
  speaker: null;
}

interface NewObj {
  start: number;
  end: number;
  textPosition?: string;
  subs: string;
}

export const getFormattedSubs = (inputSubs: Subs[]) => {
  const subsCopy = [...inputSubs];
  const formattedSubs = [];

  while (subsCopy.length !== 0) {
    const batchSize = Math.min(3, subsCopy.length);
    const newObj: NewObj = {
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
        index === formattedSubs.length || index === 0
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
    tags: ", cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
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
    name: "hybrid-cinematic-bgm-blending-orchestral-and-modern-electronic-elements",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/hybrid-cinematic-bgm-blending-orchestral-and-modern-electronic-elements.mp3",
  },
  {
    id: 74,
    name: "zen-instrumental-with-soft-flute-koto-and-ambient-background",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/zen-instrumental-with-soft-flute-koto-and-ambient-background.mp3",
  },
  {
    id: 75,
    name: "motivation-never-give-up-energy",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/motivation-never-give-up-energy.mp3",
  },
  {
    id: 76,
    name: "overcoming-impossible",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/overcoming-impossible.mp3",
  },
  {
    id: 77,
    name: "overcoming-impossible-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/overcoming-impossible-2.mp3",
  },
  {
    id: 78,
    name: "emotional-comeback-transformation",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-comeback-transformation.mp3",
  },
  {
    id: 79,
    name: "dare-to-do-motivation",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dare-to-do-motivation.mp3",
  },
  {
    id: 80,
    name: "dare-to-do-motivation-2",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dare-to-do-motivation-2.mp3",
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
  id: "cma9gujpu0000nn33ock9hari",
  prompt: "Experience, enjoy, live, understand and then renounce",
  title: "The Mystic's Paradox",
  script:
    "Empty hands. Shattered smile. A soul laid bare. You thought enlightenment was bliss? Prepare for the razor's edge. I'll show you how to truly awaken, not just dream of it. Most seek knowledge; few dare to live it. The mind fears the abyss. It clings to what it knows, even if it's poison. The ego whispers, \"Stay safe.\" I say, \"Leap.\" Rule #1: The Alchemist's Burn. Meet Maya, a Wall Street shark, drowning in gold. She chased pleasure, devoured experience, yet felt hollow. Her salvation? She burned it all. Her penthouse, her portfolio, her pride. From the ashes, clarity. You must incinerate your attachments. Not for poverty, but for purity. Feel the pain. Then, let it go. Rule #2: The Wanderer's Wound. Kai, a Zen monk, meditated for decades, seeking nothingness. He found only emptiness. One day, he stumbled into a brothel. Embraced chaos, heartbreak, the raw animal of life. He emerged transformed. You must bleed. Taste the bitter truth of the world. Only then can you understand what truly matters. Rule #3: The Silent Vow. Imagine a king, stripped of his crown, kneeling in mud. He whispers a vow: \"I am nothing. I own nothing. I desire nothing.\" This isn't weakness. It's the ultimate power. Every morning, before you speak, bow to the universe. Acknowledge your insignificance. This act silences the ego, opens the door to grace. Don't just seek enlightenment. Become the enlightened. A warrior of the soul, forged in fire and silence. You are not a seeker. You are the answer.",
  transcriptionId: "f866c195-8a98-4575-b010-2f7f6cbf4014",
  transcribedWords:
    '[{"text":"Empty","start":160,"end":480,"confidence":0.952,"speaker":null},{"text":"hands,","start":520,"end":1336,"confidence":0.99901,"speaker":null},{"text":"shattered","start":1528,"end":2184,"confidence":0.99672,"speaker":null},{"text":"smile.","start":2232,"end":2860,"confidence":0.95076,"speaker":null},{"text":"A","start":3200,"end":3464,"confidence":0.99924,"speaker":null},{"text":"soul","start":3472,"end":3784,"confidence":0.59149,"speaker":null},{"text":"laid","start":3832,"end":4104,"confidence":0.99991,"speaker":null},{"text":"bare.","start":4152,"end":4888,"confidence":0.99877,"speaker":null},{"text":"You","start":5064,"end":5352,"confidence":0.99789,"speaker":null},{"text":"thought","start":5376,"end":5560,"confidence":0.99993,"speaker":null},{"text":"enlightenment","start":5600,"end":6056,"confidence":0.99997,"speaker":null},{"text":"was","start":6088,"end":6232,"confidence":1,"speaker":null},{"text":"bliss.","start":6256,"end":6860,"confidence":0.99847,"speaker":null},{"text":"Prepare","start":7200,"end":7736,"confidence":0.99466,"speaker":null},{"text":"for","start":7768,"end":7864,"confidence":0.99998,"speaker":null},{"text":"the","start":7872,"end":7992,"confidence":0.99993,"speaker":null},{"text":"razor\'s","start":8016,"end":8456,"confidence":0.80191,"speaker":null},{"text":"edge.","start":8488,"end":9176,"confidence":0.98592,"speaker":null},{"text":"I\'ll","start":9368,"end":9816,"confidence":0.99894,"speaker":null},{"text":"show","start":9848,"end":9992,"confidence":0.99996,"speaker":null},{"text":"you","start":10016,"end":10152,"confidence":0.99999,"speaker":null},{"text":"how","start":10176,"end":10264,"confidence":0.99997,"speaker":null},{"text":"to","start":10272,"end":10392,"confidence":0.99992,"speaker":null},{"text":"truly","start":10416,"end":10696,"confidence":0.99998,"speaker":null},{"text":"awaken,","start":10728,"end":11176,"confidence":0.93603,"speaker":null},{"text":"not","start":11288,"end":11512,"confidence":0.99979,"speaker":null},{"text":"just","start":11536,"end":11672,"confidence":1,"speaker":null},{"text":"dream","start":11696,"end":11896,"confidence":0.84382,"speaker":null},{"text":"of","start":11928,"end":12072,"confidence":0.99992,"speaker":null},{"text":"it.","start":12096,"end":12712,"confidence":0.99976,"speaker":null},{"text":"Most","start":12896,"end":13240,"confidence":0.99932,"speaker":null},{"text":"seek","start":13280,"end":13576,"confidence":0.9284,"speaker":null},{"text":"knowledge,","start":13608,"end":14088,"confidence":0.9861,"speaker":null},{"text":"few","start":14184,"end":14440,"confidence":0.99998,"speaker":null},{"text":"dare","start":14480,"end":14696,"confidence":0.99989,"speaker":null},{"text":"to","start":14728,"end":14824,"confidence":0.99999,"speaker":null},{"text":"live","start":14832,"end":15000,"confidence":0.99995,"speaker":null},{"text":"it.","start":15040,"end":15624,"confidence":0.9999,"speaker":null},{"text":"The","start":15792,"end":16072,"confidence":0.99975,"speaker":null},{"text":"mind","start":16096,"end":16280,"confidence":0.99996,"speaker":null},{"text":"fears","start":16320,"end":16616,"confidence":0.79813,"speaker":null},{"text":"the","start":16648,"end":16792,"confidence":0.99997,"speaker":null},{"text":"abyss.","start":16816,"end":17656,"confidence":0.99994,"speaker":null},{"text":"It","start":17848,"end":18152,"confidence":0.99995,"speaker":null},{"text":"clings","start":18176,"end":18424,"confidence":0.99408,"speaker":null},{"text":"to","start":18472,"end":18632,"confidence":0.99994,"speaker":null},{"text":"what","start":18656,"end":18792,"confidence":0.99998,"speaker":null},{"text":"it","start":18816,"end":18952,"confidence":0.99999,"speaker":null},{"text":"knows,","start":18976,"end":19352,"confidence":0.98097,"speaker":null},{"text":"even","start":19416,"end":19592,"confidence":0.99996,"speaker":null},{"text":"if","start":19616,"end":19752,"confidence":0.9993,"speaker":null},{"text":"it\'s","start":19776,"end":19976,"confidence":0.76817,"speaker":null},{"text":"poison.","start":20008,"end":20620,"confidence":0.99626,"speaker":null},{"text":"The","start":21040,"end":21352,"confidence":0.90453,"speaker":null},{"text":"ego","start":21376,"end":21672,"confidence":0.99814,"speaker":null},{"text":"whispers,","start":21736,"end":22312,"confidence":0.99265,"speaker":null},{"text":"stay","start":22376,"end":22648,"confidence":0.99991,"speaker":null},{"text":"safe,","start":22704,"end":23340,"confidence":0.73105,"speaker":null},{"text":"I","start":23680,"end":24088,"confidence":0.88077,"speaker":null},{"text":"say","start":24144,"end":24408,"confidence":0.99499,"speaker":null},{"text":"leap.","start":24464,"end":25100,"confidence":0.96581,"speaker":null},{"text":"Rule","start":25450,"end":25874,"confidence":0.99505,"speaker":null},{"text":"one.","start":25922,"end":26226,"confidence":0.67812,"speaker":null},{"text":"The","start":26298,"end":26482,"confidence":0.99936,"speaker":null},{"text":"Alchemist\'s","start":26506,"end":27106,"confidence":0.70378,"speaker":null},{"text":"burn.","start":27138,"end":27858,"confidence":0.9975,"speaker":null},{"text":"Meet","start":28034,"end":28370,"confidence":0.99833,"speaker":null},{"text":"Maya,","start":28410,"end":28882,"confidence":0.88994,"speaker":null},{"text":"a","start":28946,"end":29122,"confidence":0.99752,"speaker":null},{"text":"Wall","start":29146,"end":29346,"confidence":0.99995,"speaker":null},{"text":"street","start":29378,"end":29570,"confidence":0.99827,"speaker":null},{"text":"shark","start":29610,"end":29954,"confidence":0.99988,"speaker":null},{"text":"drowning","start":30002,"end":30338,"confidence":0.99023,"speaker":null},{"text":"in","start":30354,"end":30530,"confidence":0.85964,"speaker":null},{"text":"gold.","start":30570,"end":31150,"confidence":0.99997,"speaker":null},{"text":"She","start":31610,"end":31922,"confidence":0.99975,"speaker":null},{"text":"chased","start":31946,"end":32274,"confidence":0.94904,"speaker":null},{"text":"pleasure,","start":32322,"end":32770,"confidence":0.99762,"speaker":null},{"text":"devoured","start":32850,"end":33298,"confidence":0.99973,"speaker":null},{"text":"experience,","start":33314,"end":33826,"confidence":0.99983,"speaker":null},{"text":"yet","start":33978,"end":34290,"confidence":0.99972,"speaker":null},{"text":"felt","start":34330,"end":34594,"confidence":0.85179,"speaker":null},{"text":"hollow.","start":34642,"end":35426,"confidence":0.8914,"speaker":null},{"text":"Her","start":35618,"end":35970,"confidence":0.99777,"speaker":null},{"text":"salvation.","start":36010,"end":36866,"confidence":0.99957,"speaker":null},{"text":"She","start":37058,"end":37410,"confidence":0.99988,"speaker":null},{"text":"burned","start":37450,"end":37714,"confidence":0.946,"speaker":null},{"text":"it","start":37762,"end":37922,"confidence":0.99996,"speaker":null},{"text":"all.","start":37946,"end":38562,"confidence":0.99958,"speaker":null},{"text":"Her","start":38746,"end":39042,"confidence":0.99776,"speaker":null},{"text":"penthouse,","start":39066,"end":39762,"confidence":0.57821,"speaker":null},{"text":"her","start":39826,"end":40050,"confidence":0.99964,"speaker":null},{"text":"portfolio,","start":40090,"end":40738,"confidence":0.85179,"speaker":null},{"text":"her","start":40834,"end":41090,"confidence":0.99905,"speaker":null},{"text":"pride.","start":41130,"end":41750,"confidence":0.96639,"speaker":null},{"text":"From","start":42170,"end":42482,"confidence":0.96675,"speaker":null},{"text":"the","start":42506,"end":42642,"confidence":0.99993,"speaker":null},{"text":"ashes,","start":42666,"end":43218,"confidence":0.81563,"speaker":null},{"text":"clarity.","start":43314,"end":44226,"confidence":0.99676,"speaker":null},{"text":"You","start":44418,"end":44770,"confidence":0.99978,"speaker":null},{"text":"must","start":44810,"end":44962,"confidence":1,"speaker":null},{"text":"incinerate","start":44986,"end":45506,"confidence":0.99977,"speaker":null},{"text":"your","start":45538,"end":45682,"confidence":0.99965,"speaker":null},{"text":"attachments.","start":45706,"end":46550,"confidence":0.99986,"speaker":null},{"text":"Not","start":47050,"end":47362,"confidence":0.99917,"speaker":null},{"text":"for","start":47386,"end":47522,"confidence":0.99999,"speaker":null},{"text":"poverty,","start":47546,"end":47986,"confidence":0.99997,"speaker":null},{"text":"but","start":48018,"end":48210,"confidence":0.5311,"speaker":null},{"text":"for","start":48250,"end":48402,"confidence":0.99996,"speaker":null},{"text":"purity.","start":48426,"end":49190,"confidence":0.99998,"speaker":null},{"text":"Feel","start":49610,"end":49922,"confidence":0.9998,"speaker":null},{"text":"the","start":49946,"end":50130,"confidence":0.99737,"speaker":null},{"text":"pain,","start":50170,"end":50824,"confidence":0.99787,"speaker":null},{"text":"then","start":51002,"end":51484,"confidence":0.95669,"speaker":null},{"text":"let","start":51572,"end":51772,"confidence":0.99978,"speaker":null},{"text":"it","start":51796,"end":51884,"confidence":0.9999,"speaker":null},{"text":"go.","start":51892,"end":52440,"confidence":0.99993,"speaker":null},{"text":"The","start":53540,"end":53852,"confidence":0.99992,"speaker":null},{"text":"Wanderer\'s","start":53876,"end":54396,"confidence":0.5951,"speaker":null},{"text":"wound.","start":54428,"end":55040,"confidence":0.99243,"speaker":null},{"text":"Kai,","start":55380,"end":55932,"confidence":0.94681,"speaker":null},{"text":"a","start":55996,"end":56172,"confidence":0.99946,"speaker":null},{"text":"Zen","start":56196,"end":56444,"confidence":0.99879,"speaker":null},{"text":"monk,","start":56492,"end":56812,"confidence":0.67911,"speaker":null},{"text":"meditated","start":56876,"end":57356,"confidence":0.9999,"speaker":null},{"text":"for","start":57388,"end":57580,"confidence":0.99087,"speaker":null},{"text":"decades,","start":57620,"end":58140,"confidence":0.90464,"speaker":null},{"text":"seeking","start":58220,"end":58556,"confidence":0.99982,"speaker":null},{"text":"nothingness.","start":58588,"end":59360,"confidence":0.99731,"speaker":null},{"text":"He","start":59780,"end":60140,"confidence":0.99997,"speaker":null},{"text":"found","start":60180,"end":60380,"confidence":0.99996,"speaker":null},{"text":"only","start":60420,"end":60668,"confidence":1,"speaker":null},{"text":"emptiness.","start":60724,"end":61520,"confidence":0.99999,"speaker":null},{"text":"One","start":62020,"end":62380,"confidence":0.99994,"speaker":null},{"text":"day,","start":62420,"end":62668,"confidence":1,"speaker":null},{"text":"he","start":62724,"end":62940,"confidence":0.99998,"speaker":null},{"text":"stumbled","start":62980,"end":63276,"confidence":0.73107,"speaker":null},{"text":"into","start":63308,"end":63500,"confidence":0.57734,"speaker":null},{"text":"a","start":63540,"end":63644,"confidence":0.99996,"speaker":null},{"text":"brothel.","start":63652,"end":64556,"confidence":0.99873,"speaker":null},{"text":"Embraced","start":64748,"end":65404,"confidence":0.99949,"speaker":null},{"text":"chaos,","start":65452,"end":65948,"confidence":0.99988,"speaker":null},{"text":"heartbreak,","start":66044,"end":66652,"confidence":0.94555,"speaker":null},{"text":"the","start":66716,"end":66892,"confidence":0.99124,"speaker":null},{"text":"raw","start":66916,"end":67196,"confidence":0.99986,"speaker":null},{"text":"animal","start":67228,"end":67548,"confidence":0.7981,"speaker":null},{"text":"of","start":67564,"end":67692,"confidence":0.99996,"speaker":null},{"text":"life.","start":67716,"end":68280,"confidence":0.99994,"speaker":null},{"text":"He","start":68580,"end":68940,"confidence":0.99986,"speaker":null},{"text":"emerged,","start":68980,"end":69484,"confidence":0.75482,"speaker":null},{"text":"transformed.","start":69532,"end":70588,"confidence":0.9946,"speaker":null},{"text":"You","start":70764,"end":71100,"confidence":0.99837,"speaker":null},{"text":"must","start":71140,"end":71340,"confidence":0.99999,"speaker":null},{"text":"bleed.","start":71380,"end":72156,"confidence":0.98757,"speaker":null},{"text":"Taste","start":72348,"end":72828,"confidence":0.99125,"speaker":null},{"text":"the","start":72844,"end":72972,"confidence":0.99998,"speaker":null},{"text":"bitter","start":72996,"end":73276,"confidence":0.99999,"speaker":null},{"text":"truth","start":73308,"end":73516,"confidence":0.91489,"speaker":null},{"text":"of","start":73548,"end":73644,"confidence":0.99999,"speaker":null},{"text":"the","start":73652,"end":73772,"confidence":0.99998,"speaker":null},{"text":"world.","start":73796,"end":74360,"confidence":0.99945,"speaker":null},{"text":"Only","start":74660,"end":75116,"confidence":0.99999,"speaker":null},{"text":"then","start":75188,"end":75372,"confidence":0.99998,"speaker":null},{"text":"can","start":75396,"end":75532,"confidence":0.99961,"speaker":null},{"text":"you","start":75556,"end":75692,"confidence":0.99998,"speaker":null},{"text":"understand","start":75716,"end":75996,"confidence":0.99998,"speaker":null},{"text":"what","start":76068,"end":76300,"confidence":0.99998,"speaker":null},{"text":"truly","start":76340,"end":76636,"confidence":0.99994,"speaker":null},{"text":"matters.","start":76668,"end":77360,"confidence":0.99839,"speaker":null},{"text":"Rule","start":77800,"end":78272,"confidence":0.98298,"speaker":null},{"text":"three.","start":78336,"end":78656,"confidence":0.95234,"speaker":null},{"text":"The","start":78728,"end":78912,"confidence":0.99913,"speaker":null},{"text":"Silent","start":78936,"end":79344,"confidence":0.67903,"speaker":null},{"text":"Vow.","start":79392,"end":80096,"confidence":0.99518,"speaker":null},{"text":"Imagine","start":80288,"end":80816,"confidence":0.95248,"speaker":null},{"text":"a","start":80848,"end":80992,"confidence":0.99997,"speaker":null},{"text":"king","start":81016,"end":81408,"confidence":0.99992,"speaker":null},{"text":"stripped","start":81504,"end":81856,"confidence":0.99983,"speaker":null},{"text":"of","start":81888,"end":81984,"confidence":0.99997,"speaker":null},{"text":"his","start":81992,"end":82112,"confidence":0.99999,"speaker":null},{"text":"crown.","start":82136,"end":82480,"confidence":0.74313,"speaker":null},{"text":"Kneeling","start":82560,"end":82896,"confidence":0.99999,"speaker":null},{"text":"in","start":82928,"end":83072,"confidence":0.99994,"speaker":null},{"text":"mud.","start":83096,"end":83776,"confidence":0.99899,"speaker":null},{"text":"He","start":83968,"end":84272,"confidence":0.99828,"speaker":null},{"text":"whispers","start":84296,"end":84688,"confidence":0.99994,"speaker":null},{"text":"a","start":84704,"end":84880,"confidence":0.99977,"speaker":null},{"text":"vow.","start":84920,"end":85232,"confidence":0.69148,"speaker":null},{"text":"I","start":85296,"end":85472,"confidence":0.99873,"speaker":null},{"text":"am","start":85496,"end":85680,"confidence":0.99985,"speaker":null},{"text":"nothing.","start":85720,"end":86416,"confidence":0.79807,"speaker":null},{"text":"I","start":86608,"end":86912,"confidence":0.99963,"speaker":null},{"text":"own","start":86936,"end":87168,"confidence":0.70582,"speaker":null},{"text":"nothing.","start":87224,"end":88016,"confidence":0.99996,"speaker":null},{"text":"I","start":88208,"end":88512,"confidence":0.9999,"speaker":null},{"text":"desire","start":88536,"end":88944,"confidence":0.5311,"speaker":null},{"text":"nothing.","start":88992,"end":89776,"confidence":0.99989,"speaker":null},{"text":"This","start":89968,"end":90272,"confidence":0.99999,"speaker":null},{"text":"isn\'t","start":90296,"end":90624,"confidence":0.96484,"speaker":null},{"text":"weakness.","start":90672,"end":91380,"confidence":0.9999,"speaker":null},{"text":"It\'s","start":91720,"end":92096,"confidence":0.57729,"speaker":null},{"text":"the","start":92128,"end":92272,"confidence":0.99997,"speaker":null},{"text":"ultimate","start":92296,"end":92672,"confidence":0.99987,"speaker":null},{"text":"power.","start":92736,"end":93340,"confidence":0.99982,"speaker":null},{"text":"Every","start":93720,"end":94128,"confidence":0.99994,"speaker":null},{"text":"morning,","start":94184,"end":94592,"confidence":0.99986,"speaker":null},{"text":"before","start":94696,"end":94960,"confidence":0.99999,"speaker":null},{"text":"you","start":95000,"end":95200,"confidence":0.99993,"speaker":null},{"text":"speak,","start":95240,"end":95552,"confidence":0.99961,"speaker":null},{"text":"bow","start":95616,"end":95904,"confidence":0.76632,"speaker":null},{"text":"to","start":95952,"end":96064,"confidence":1,"speaker":null},{"text":"the","start":96072,"end":96192,"confidence":1,"speaker":null},{"text":"universe.","start":96216,"end":96980,"confidence":0.99989,"speaker":null},{"text":"Acknowledge","start":97320,"end":97936,"confidence":0.84326,"speaker":null},{"text":"your","start":97968,"end":98112,"confidence":0.98962,"speaker":null},{"text":"insignificance.","start":98136,"end":99140,"confidence":0.67895,"speaker":null},{"text":"This","start":99560,"end":99872,"confidence":0.99999,"speaker":null},{"text":"act","start":99896,"end":100176,"confidence":0.96484,"speaker":null},{"text":"silences","start":100248,"end":100704,"confidence":0.99992,"speaker":null},{"text":"the","start":100752,"end":100912,"confidence":1,"speaker":null},{"text":"ego,","start":100936,"end":101328,"confidence":0.99951,"speaker":null},{"text":"opens","start":101424,"end":101776,"confidence":0.89381,"speaker":null},{"text":"the","start":101808,"end":101904,"confidence":0.99998,"speaker":null},{"text":"door","start":101912,"end":102096,"confidence":0.99999,"speaker":null},{"text":"to","start":102128,"end":102272,"confidence":0.99995,"speaker":null},{"text":"grace.","start":102296,"end":102900,"confidence":0.99827,"speaker":null},{"text":"Don\'t","start":103310,"end":103686,"confidence":0.98144,"speaker":null},{"text":"just","start":103718,"end":103910,"confidence":0.99997,"speaker":null},{"text":"seek","start":103950,"end":104166,"confidence":0.99998,"speaker":null},{"text":"enlightenment.","start":104198,"end":105206,"confidence":0.99931,"speaker":null},{"text":"Become","start":105398,"end":105750,"confidence":0.99981,"speaker":null},{"text":"the","start":105790,"end":105990,"confidence":0.9997,"speaker":null},{"text":"enlightened.","start":106030,"end":106998,"confidence":0.97612,"speaker":null},{"text":"A","start":107174,"end":107462,"confidence":0.99972,"speaker":null},{"text":"warrior","start":107486,"end":107846,"confidence":0.99991,"speaker":null},{"text":"of","start":107878,"end":107974,"confidence":0.99999,"speaker":null},{"text":"the","start":107982,"end":108102,"confidence":0.99993,"speaker":null},{"text":"soul,","start":108126,"end":108518,"confidence":0.98687,"speaker":null},{"text":"forged","start":108614,"end":109014,"confidence":0.99971,"speaker":null},{"text":"in","start":109062,"end":109222,"confidence":0.99998,"speaker":null},{"text":"fire","start":109246,"end":109430,"confidence":0.99995,"speaker":null},{"text":"and","start":109470,"end":109718,"confidence":0.99029,"speaker":null},{"text":"silence.","start":109774,"end":110570,"confidence":0.99849,"speaker":null},{"text":"You","start":110990,"end":111302,"confidence":0.99987,"speaker":null},{"text":"are","start":111326,"end":111462,"confidence":0.99986,"speaker":null},{"text":"not","start":111486,"end":111574,"confidence":0.99997,"speaker":null},{"text":"a","start":111582,"end":111702,"confidence":0.99986,"speaker":null},{"text":"seeker.","start":111726,"end":112598,"confidence":0.75432,"speaker":null},{"text":"You","start":112774,"end":113062,"confidence":0.99964,"speaker":null},{"text":"are","start":113086,"end":113222,"confidence":0.99997,"speaker":null},{"text":"the","start":113246,"end":113382,"confidence":0.99997,"speaker":null},{"text":"answer.","start":113406,"end":113670,"confidence":0.90406,"speaker":null}]',
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
  bgm: {
    id: 13,
    name: "dark-intense-tension-orchestra",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dark-intense-tension-orchestra.mp3",
    volume: 100,
  },
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
  aspectRatio: {
    id: 1,
    name: "video",
    width: 1280,
    height: 720,
  },
  scenes: [
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
  ],
};

export const fetchVideoData = async (videoId: string) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/video-data?videoid=${videoId}`
    );
    const data = await res.json();
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
