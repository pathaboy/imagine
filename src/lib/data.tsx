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
  console.log(inputSubs);
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
    voice: "alloy",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/alloy.mp3`,
  },
  {
    id: 2,
    voice: "echo",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/echo.mp3`,
  },
  {
    id: 3,
    voice: "fable",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/fable.mp3`,
  },
  {
    id: 4,
    voice: "onyx",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/onyx.mp3`,
  },
  {
    id: 5,
    voice: "nova",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/nova.mp3`,
  },
  {
    id: 6,
    voice: "shimmer",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/shimmer.mp3`,
  },
  {
    id: 7,
    voice: "coral",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/coral.mp3`,
  },
  {
    id: 8,
    voice: "verse",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/verse.mp3`,
  },
  {
    id: 9,
    voice: "ballad",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/ballad.mp3`,
  },
  {
    id: 10,
    voice: "ash",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/ash.mp3`,
  },
  {
    id: 11,
    voice: "sage",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/sage.mp3`,
  },
  {
    id: 12,
    voice: "amuch",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/amuch.mp3`,
  },
  {
    id: 13,
    voice: "dan",
    previewUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/voices/dan.mp3`,
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

export const getVoicePrompt = (narrationScript: string, tone: string) => {
  const audioPrompt = `Repeat after me in ${tone}: "${narrationScript}"`;
  return audioPrompt;
};

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

export const cleanTextForUrl = (text: string) => {
  return encodeURIComponent(
    text
      .replace(/\n+/g, " ")
      .replace(/\s+/g, " ")
      .replace(/[*_`~>#+=\[\](){}]/g, "")
      .trim()
  );
};

export const demoVideo = {
  id: "cm9vq3ag40000nnue22o4jyt4",
  prompt: "Vengeance",
  title: "Vengeance",
  script:
    "Someone broke you. They lied. They stole. They walked away smiling. The fire is real. The need to strike back undeniable. They tell you vengeance is a poison. They're wrong. It's fuel. Today, I'll show you how to burn their world down. Not with destruction, but with untouchable power. The big lie. You think vengeance is about making them pay. That's why you fail. You let them own your thoughts, your days, your identity. You become a prisoner of their past action. Your power drains away. Consumed by ghosts. Architect's Law one. The Furnace Protocol. Meet Amir. His partner, a trusted friend gutted their company, leaving Amir with nothing but debt and public shame. Amir didn't retaliate directly. He built every hour. He wanted to scream. He coded. Every time the memory burned, he networked harder. He poured the white hot rage into a new venture. Two years later, his new company acquired the shell of his old one. His betrayer watched from the unemployment line. Amir's revenge wasn't destruction. It was creation. Your rule. Channel the fire into building. Something they can never touch. Architect's Law 2. The echo chamber Trap. Sarah was betrayed deeply. Instead of building, she spoke. She told everyone. Posted everywhere. She relived the pain daily. Seeking validation, sympathy. She wanted the world to punish them. But the world moved on. Her betrayer thrived. Sarah remained trapped. Her identity now permanently defined by the wrong done to her. The vengeance she sought became obsession. And that obsession became her cage. Your rule. Silence is your weapon. Your energy flows forward into your build. Never backward into their past. Architect's Law 3. The Elevation Ritual. The ultimate revenge isn't their fall. It's your untouchable rise. This is your ritual. Every time the memory hits and the rage swells, do not curse them. Do not replay the scene. Instead, write one sentence. Do one rep, make one call. Add one brick to your empire. Train your mind to associate their wrong with your elevation. The pain becomes the signal to ascend. The blackout protocol. Erase their footprint. Control the fire Memory quarantine. Set a 15 minute timer once a day. To allow yourself to feel it outside that time, shut it down ruthlessly. Success Scoreboard. Daily I list three things you built or improved unrelated to them. Focus on your power. The Ghost Protocol. Never acknowledge their existence or their act as fuel. Your rise must appear effortless, divine, inevitable. Vengeance isn't a debt you collect. It's a power you claim. You are not the victim of their act. You are the architect. The fire is yours now. Build your untouchable reality. Become the vengeance.",
  transcriptionId: "76fa3578-d273-487c-9c8f-61c78f4c9648",
  transcribedWords: `[{"text":"Someone","start":160,"end":416,"confidence":0.99964,"speaker":null},{"text":"broke","start":448,"end":744,"confidence":0.9987,"speaker":null},{"text":"you.","start":792,"end":1240,"confidence":0.99984,"speaker":null},{"text":"They","start":1360,"end":1592,"confidence":0.99962,"speaker":null},{"text":"lied.","start":1616,"end":2280,"confidence":0.50969,"speaker":null},{"text":"They","start":2440,"end":2760,"confidence":0.99996,"speaker":null},{"text":"stole.","start":2800,"end":3512,"confidence":0.94958,"speaker":null},{"text":"They","start":3656,"end":3960,"confidence":0.99997,"speaker":null},{"text":"walked","start":4000,"end":4248,"confidence":0.99997,"speaker":null},{"text":"away","start":4264,"end":4820,"confidence":0.9999,"speaker":null},{"text":"smiling.","start":5200,"end":6216,"confidence":0.92227,"speaker":null},{"text":"The","start":6408,"end":6712,"confidence":0.99961,"speaker":null},{"text":"fire","start":6736,"end":6968,"confidence":0.99993,"speaker":null},{"text":"is","start":7024,"end":7288,"confidence":0.99995,"speaker":null},{"text":"real.","start":7344,"end":7992,"confidence":0.99884,"speaker":null},{"text":"The","start":8176,"end":8472,"confidence":0.99949,"speaker":null},{"text":"need","start":8496,"end":8680,"confidence":0.99997,"speaker":null},{"text":"to","start":8720,"end":8872,"confidence":0.99997,"speaker":null},{"text":"strike","start":8896,"end":9192,"confidence":0.93625,"speaker":null},{"text":"back","start":9256,"end":9864,"confidence":0.99676,"speaker":null},{"text":"undeniable.","start":10032,"end":11288,"confidence":0.99974,"speaker":null},{"text":"They","start":11464,"end":11800,"confidence":0.99996,"speaker":null},{"text":"tell","start":11840,"end":11992,"confidence":0.99999,"speaker":null},{"text":"you","start":12016,"end":12200,"confidence":0.99997,"speaker":null},{"text":"vengeance","start":12240,"end":12616,"confidence":0.99937,"speaker":null},{"text":"is","start":12648,"end":12792,"confidence":0.99993,"speaker":null},{"text":"a","start":12816,"end":13000,"confidence":0.75484,"speaker":null},{"text":"poison.","start":13040,"end":13592,"confidence":0.99857,"speaker":null},{"text":"They're","start":13736,"end":14136,"confidence":0.9731,"speaker":null},{"text":"wrong.","start":14168,"end":14712,"confidence":0.99829,"speaker":null},{"text":"It's","start":14856,"end":15256,"confidence":0.99717,"speaker":null},{"text":"fuel.","start":15288,"end":16056,"confidence":0.96635,"speaker":null},{"text":"Today,","start":16248,"end":16980,"confidence":0.99888,"speaker":null},{"text":"I'll","start":17280,"end":17736,"confidence":0.98716,"speaker":null},{"text":"show","start":17768,"end":17960,"confidence":0.99902,"speaker":null},{"text":"you","start":18000,"end":18152,"confidence":0.99999,"speaker":null},{"text":"how","start":18176,"end":18312,"confidence":0.99996,"speaker":null},{"text":"to","start":18336,"end":18472,"confidence":0.9999,"speaker":null},{"text":"burn","start":18496,"end":18696,"confidence":0.99998,"speaker":null},{"text":"their","start":18728,"end":18872,"confidence":0.99995,"speaker":null},{"text":"world","start":18896,"end":19176,"confidence":0.9724,"speaker":null},{"text":"down.","start":19248,"end":19720,"confidence":0.99945,"speaker":null},{"text":"Not","start":19840,"end":20120,"confidence":0.99986,"speaker":null},{"text":"with","start":20160,"end":20312,"confidence":0.99981,"speaker":null},{"text":"destruction,","start":20336,"end":21048,"confidence":0.81738,"speaker":null},{"text":"but","start":21144,"end":21448,"confidence":0.92389,"speaker":null},{"text":"with","start":21504,"end":21768,"confidence":0.99984,"speaker":null},{"text":"untouchable","start":21824,"end":22552,"confidence":0.83534,"speaker":null},{"text":"power.","start":22616,"end":23128,"confidence":0.99945,"speaker":null},{"text":"The","start":23264,"end":23512,"confidence":0.97368,"speaker":null},{"text":"big","start":23536,"end":23720,"confidence":0.99996,"speaker":null},{"text":"lie.","start":23760,"end":24456,"confidence":0.74786,"speaker":null},{"text":"You","start":24648,"end":25000,"confidence":0.99949,"speaker":null},{"text":"think","start":25040,"end":25240,"confidence":0.99999,"speaker":null},{"text":"vengeance","start":25280,"end":25704,"confidence":0.99987,"speaker":null},{"text":"is","start":25752,"end":25864,"confidence":0.99987,"speaker":null},{"text":"about","start":25872,"end":26088,"confidence":0.83543,"speaker":null},{"text":"making","start":26144,"end":26360,"confidence":0.99997,"speaker":null},{"text":"them","start":26400,"end":26600,"confidence":0.99994,"speaker":null},{"text":"pay.","start":26640,"end":27248,"confidence":0.99992,"speaker":null},{"text":"That's","start":27424,"end":27808,"confidence":0.99936,"speaker":null},{"text":"why","start":27824,"end":27952,"confidence":0.99999,"speaker":null},{"text":"you","start":27976,"end":28160,"confidence":0.99996,"speaker":null},{"text":"fail.","start":28200,"end":28736,"confidence":0.99558,"speaker":null},{"text":"You","start":28888,"end":29200,"confidence":0.99979,"speaker":null},{"text":"let","start":29240,"end":29392,"confidence":1,"speaker":null},{"text":"them","start":29416,"end":29552,"confidence":0.99998,"speaker":null},{"text":"own","start":29576,"end":29760,"confidence":0.99995,"speaker":null},{"text":"your","start":29800,"end":29952,"confidence":0.99979,"speaker":null},{"text":"thoughts,","start":29976,"end":30576,"confidence":0.99877,"speaker":null},{"text":"your","start":30688,"end":31008,"confidence":0.99487,"speaker":null},{"text":"days,","start":31064,"end":31616,"confidence":0.99859,"speaker":null},{"text":"your","start":31768,"end":32080,"confidence":0.98749,"speaker":null},{"text":"identity.","start":32120,"end":32928,"confidence":0.99997,"speaker":null},{"text":"You","start":33104,"end":33392,"confidence":0.99987,"speaker":null},{"text":"become","start":33416,"end":33648,"confidence":0.99997,"speaker":null},{"text":"a","start":33704,"end":33824,"confidence":0.99999,"speaker":null},{"text":"prisoner","start":33832,"end":34176,"confidence":0.99992,"speaker":null},{"text":"of","start":34208,"end":34304,"confidence":0.99999,"speaker":null},{"text":"their","start":34312,"end":34432,"confidence":0.99992,"speaker":null},{"text":"past","start":34456,"end":34688,"confidence":0.99735,"speaker":null},{"text":"action.","start":34744,"end":35340,"confidence":0.99995,"speaker":null},{"text":"Your","start":35720,"end":36032,"confidence":0.96263,"speaker":null},{"text":"power","start":36056,"end":36288,"confidence":0.56205,"speaker":null},{"text":"drains","start":36344,"end":36656,"confidence":0.99999,"speaker":null},{"text":"away.","start":36688,"end":37216,"confidence":0.83533,"speaker":null},{"text":"Consumed","start":37368,"end":37936,"confidence":0.99892,"speaker":null},{"text":"by","start":37968,"end":38112,"confidence":0.99996,"speaker":null},{"text":"ghosts.","start":38136,"end":38880,"confidence":0.99672,"speaker":null},{"text":"Architect's","start":39040,"end":39776,"confidence":0.83071,"speaker":null},{"text":"Law","start":39808,"end":40048,"confidence":0.95961,"speaker":null},{"text":"one.","start":40104,"end":40704,"confidence":0.69048,"speaker":null},{"text":"The","start":40872,"end":41152,"confidence":0.97358,"speaker":null},{"text":"Furnace","start":41176,"end":41584,"confidence":0.99877,"speaker":null},{"text":"Protocol.","start":41632,"end":42352,"confidence":0.9956,"speaker":null},{"text":"Meet","start":42496,"end":42752,"confidence":0.9996,"speaker":null},{"text":"Amir.","start":42776,"end":43540,"confidence":0.92036,"speaker":null},{"text":"His","start":43880,"end":44240,"confidence":0.99998,"speaker":null},{"text":"partner,","start":44280,"end":44800,"confidence":0.99991,"speaker":null},{"text":"a","start":44880,"end":45072,"confidence":0.99613,"speaker":null},{"text":"trusted","start":45096,"end":45504,"confidence":0.99994,"speaker":null},{"text":"friend","start":45552,"end":45952,"confidence":0.99996,"speaker":null},{"text":"gutted","start":46056,"end":46496,"confidence":0.99989,"speaker":null},{"text":"their","start":46528,"end":46672,"confidence":0.99995,"speaker":null},{"text":"company,","start":46696,"end":47120,"confidence":0.99995,"speaker":null},{"text":"leaving","start":47240,"end":47536,"confidence":0.99679,"speaker":null},{"text":"Amir","start":47568,"end":48064,"confidence":0.54557,"speaker":null},{"text":"with","start":48112,"end":48272,"confidence":0.99994,"speaker":null},{"text":"nothing","start":48296,"end":48448,"confidence":0.99999,"speaker":null},{"text":"but","start":48464,"end":48640,"confidence":0.99902,"speaker":null},{"text":"debt","start":48680,"end":49088,"confidence":0.98583,"speaker":null},{"text":"and","start":49184,"end":49488,"confidence":0.67912,"speaker":null},{"text":"public","start":49544,"end":49856,"confidence":0.99999,"speaker":null},{"text":"shame.","start":49928,"end":50368,"confidence":0.99995,"speaker":null},{"text":"Amir","start":50464,"end":51024,"confidence":0.85101,"speaker":null},{"text":"didn't","start":51072,"end":51328,"confidence":0.99903,"speaker":null},{"text":"retaliate","start":51344,"end":51744,"confidence":0.99997,"speaker":null},{"text":"directly.","start":51792,"end":52416,"confidence":0.99871,"speaker":null},{"text":"He","start":52528,"end":52800,"confidence":0.99916,"speaker":null},{"text":"built","start":52840,"end":53424,"confidence":0.98707,"speaker":null},{"text":"every","start":53552,"end":53888,"confidence":0.99929,"speaker":null},{"text":"hour.","start":53944,"end":54160,"confidence":0.99999,"speaker":null},{"text":"He","start":54200,"end":54352,"confidence":0.99996,"speaker":null},{"text":"wanted","start":54376,"end":54576,"confidence":0.99998,"speaker":null},{"text":"to","start":54608,"end":54752,"confidence":0.99989,"speaker":null},{"text":"scream.","start":54776,"end":55296,"confidence":0.99745,"speaker":null},{"text":"He","start":55408,"end":55680,"confidence":0.99925,"speaker":null},{"text":"coded.","start":55720,"end":56416,"confidence":0.95686,"speaker":null},{"text":"Every","start":56528,"end":56800,"confidence":0.9997,"speaker":null},{"text":"time","start":56840,"end":56992,"confidence":0.99961,"speaker":null},{"text":"the","start":57016,"end":57152,"confidence":0.99986,"speaker":null},{"text":"memory","start":57176,"end":57504,"confidence":0.9999,"speaker":null},{"text":"burned,","start":57552,"end":58064,"confidence":0.97389,"speaker":null},{"text":"he","start":58192,"end":58480,"confidence":0.99994,"speaker":null},{"text":"networked","start":58520,"end":58976,"confidence":0.9992,"speaker":null},{"text":"harder.","start":59008,"end":59440,"confidence":0.99984,"speaker":null},{"text":"He","start":59520,"end":59712,"confidence":0.99995,"speaker":null},{"text":"poured","start":59736,"end":59936,"confidence":0.99917,"speaker":null},{"text":"the","start":59968,"end":60112,"confidence":0.99991,"speaker":null},{"text":"white","start":60136,"end":60320,"confidence":0.99995,"speaker":null},{"text":"hot","start":60360,"end":60560,"confidence":0.99978,"speaker":null},{"text":"rage","start":60600,"end":60864,"confidence":0.98573,"speaker":null},{"text":"into","start":60912,"end":61072,"confidence":0.99995,"speaker":null},{"text":"a","start":61096,"end":61184,"confidence":0.99993,"speaker":null},{"text":"new","start":61192,"end":61408,"confidence":0.99994,"speaker":null},{"text":"venture.","start":61464,"end":62064,"confidence":0.99983,"speaker":null},{"text":"Two","start":62192,"end":62480,"confidence":0.9999,"speaker":null},{"text":"years","start":62520,"end":62720,"confidence":0.99991,"speaker":null},{"text":"later,","start":62760,"end":63200,"confidence":0.99973,"speaker":null},{"text":"his","start":63320,"end":63648,"confidence":0.9999,"speaker":null},{"text":"new","start":63704,"end":63872,"confidence":0.99994,"speaker":null},{"text":"company","start":63896,"end":64176,"confidence":0.99994,"speaker":null},{"text":"acquired","start":64248,"end":64576,"confidence":0.99996,"speaker":null},{"text":"the","start":64608,"end":64752,"confidence":0.99993,"speaker":null},{"text":"shell","start":64776,"end":64976,"confidence":0.59275,"speaker":null},{"text":"of","start":65008,"end":65104,"confidence":0.99998,"speaker":null},{"text":"his","start":65112,"end":65232,"confidence":0.99994,"speaker":null},{"text":"old","start":65256,"end":65440,"confidence":0.99995,"speaker":null},{"text":"one.","start":65480,"end":65824,"confidence":0.99965,"speaker":null},{"text":"His","start":65912,"end":66112,"confidence":0.99995,"speaker":null},{"text":"betrayer","start":66136,"end":66656,"confidence":0.99917,"speaker":null},{"text":"watched","start":66688,"end":66896,"confidence":0.97961,"speaker":null},{"text":"from","start":66928,"end":67024,"confidence":0.99993,"speaker":null},{"text":"the","start":67032,"end":67104,"confidence":0.99995,"speaker":null},{"text":"unemployment","start":67112,"end":67664,"confidence":0.92396,"speaker":null},{"text":"line.","start":67712,"end":68064,"confidence":0.99928,"speaker":null},{"text":"Amir's","start":68152,"end":68768,"confidence":0.70269,"speaker":null},{"text":"revenge","start":68784,"end":69056,"confidence":0.98086,"speaker":null},{"text":"wasn't","start":69088,"end":69424,"confidence":0.97936,"speaker":null},{"text":"destruction.","start":69472,"end":70080,"confidence":0.99859,"speaker":null},{"text":"It","start":70160,"end":70352,"confidence":0.99895,"speaker":null},{"text":"was","start":70376,"end":70560,"confidence":1,"speaker":null},{"text":"creation.","start":70600,"end":71312,"confidence":0.99904,"speaker":null},{"text":"Your","start":71456,"end":71808,"confidence":0.97326,"speaker":null},{"text":"rule.","start":71864,"end":72240,"confidence":0.65708,"speaker":null},{"text":"Channel","start":72320,"end":72688,"confidence":0.99948,"speaker":null},{"text":"the","start":72704,"end":72832,"confidence":0.99958,"speaker":null},{"text":"fire","start":72856,"end":73040,"confidence":0.99996,"speaker":null},{"text":"into","start":73080,"end":73328,"confidence":0.5311,"speaker":null},{"text":"building.","start":73384,"end":73696,"confidence":0.99995,"speaker":null},{"text":"Something","start":73768,"end":74336,"confidence":0.99998,"speaker":null},{"text":"they","start":74488,"end":74800,"confidence":0.99939,"speaker":null},{"text":"can","start":74840,"end":74992,"confidence":0.99965,"speaker":null},{"text":"never","start":75016,"end":75200,"confidence":0.99998,"speaker":null},{"text":"touch.","start":75240,"end":75840,"confidence":0.9145,"speaker":null},{"text":"Architect's","start":76000,"end":76736,"confidence":0.72357,"speaker":null},{"text":"Law","start":76768,"end":77008,"confidence":0.9943,"speaker":null},{"text":"2.","start":77064,"end":77616,"confidence":0.80854,"speaker":null},{"text":"The","start":77768,"end":78032,"confidence":0.99875,"speaker":null},{"text":"echo","start":78056,"end":78416,"confidence":0.99533,"speaker":null},{"text":"chamber","start":78448,"end":78784,"confidence":0.99283,"speaker":null},{"text":"Trap.","start":78832,"end":79460,"confidence":0.81515,"speaker":null},{"text":"Sarah","start":79760,"end":80376,"confidence":0.79648,"speaker":null},{"text":"was","start":80408,"end":80552,"confidence":0.99998,"speaker":null},{"text":"betrayed","start":80576,"end":81352,"confidence":0.99992,"speaker":null},{"text":"deeply.","start":81496,"end":82312,"confidence":0.99902,"speaker":null},{"text":"Instead","start":82456,"end":82856,"confidence":0.99996,"speaker":null},{"text":"of","start":82888,"end":82984,"confidence":0.99999,"speaker":null},{"text":"building,","start":82992,"end":83544,"confidence":0.67912,"speaker":null},{"text":"she","start":83712,"end":84040,"confidence":0.99964,"speaker":null},{"text":"spoke.","start":84080,"end":84616,"confidence":0.99982,"speaker":null},{"text":"She","start":84728,"end":85000,"confidence":0.99992,"speaker":null},{"text":"told","start":85040,"end":85288,"confidence":0.99998,"speaker":null},{"text":"everyone.","start":85344,"end":85896,"confidence":0.99993,"speaker":null},{"text":"Posted","start":86048,"end":86584,"confidence":0.99893,"speaker":null},{"text":"everywhere.","start":86632,"end":87304,"confidence":0.99962,"speaker":null},{"text":"She","start":87432,"end":87720,"confidence":0.9999,"speaker":null},{"text":"relived","start":87760,"end":88136,"confidence":0.97898,"speaker":null},{"text":"the","start":88168,"end":88312,"confidence":0.99995,"speaker":null},{"text":"pain","start":88336,"end":88584,"confidence":0.99991,"speaker":null},{"text":"daily.","start":88632,"end":89192,"confidence":0.99981,"speaker":null},{"text":"Seeking","start":89336,"end":89784,"confidence":0.81138,"speaker":null},{"text":"validation,","start":89832,"end":90728,"confidence":0.99889,"speaker":null},{"text":"sympathy.","start":90904,"end":91784,"confidence":0.99806,"speaker":null},{"text":"She","start":91912,"end":92200,"confidence":0.99992,"speaker":null},{"text":"wanted","start":92240,"end":92456,"confidence":0.99999,"speaker":null},{"text":"the","start":92488,"end":92584,"confidence":0.99997,"speaker":null},{"text":"world","start":92592,"end":92760,"confidence":1,"speaker":null},{"text":"to","start":92800,"end":92952,"confidence":0.99997,"speaker":null},{"text":"punish","start":92976,"end":93256,"confidence":1,"speaker":null},{"text":"them.","start":93288,"end":93576,"confidence":0.99995,"speaker":null},{"text":"But","start":93648,"end":93928,"confidence":0.7541,"speaker":null},{"text":"the","start":93984,"end":94152,"confidence":0.99995,"speaker":null},{"text":"world","start":94176,"end":94696,"confidence":0.8267,"speaker":null},{"text":"moved","start":94848,"end":95208,"confidence":0.99933,"speaker":null},{"text":"on.","start":95224,"end":95688,"confidence":0.99878,"speaker":null},{"text":"Her","start":95824,"end":96072,"confidence":0.99995,"speaker":null},{"text":"betrayer","start":96096,"end":96664,"confidence":0.86666,"speaker":null},{"text":"thrived.","start":96712,"end":97400,"confidence":0.95787,"speaker":null},{"text":"Sarah","start":97560,"end":98056,"confidence":0.74521,"speaker":null},{"text":"remained","start":98088,"end":98424,"confidence":0.99995,"speaker":null},{"text":"trapped.","start":98472,"end":98968,"confidence":0.85128,"speaker":null},{"text":"Her","start":99064,"end":99272,"confidence":0.99998,"speaker":null},{"text":"identity","start":99296,"end":99736,"confidence":0.99968,"speaker":null},{"text":"now","start":99768,"end":99960,"confidence":0.63704,"speaker":null},{"text":"permanently","start":100000,"end":100456,"confidence":0.98756,"speaker":null},{"text":"defined","start":100488,"end":100856,"confidence":0.99986,"speaker":null},{"text":"by","start":100888,"end":101032,"confidence":0.97703,"speaker":null},{"text":"the","start":101056,"end":101192,"confidence":0.99998,"speaker":null},{"text":"wrong","start":101216,"end":101560,"confidence":0.99998,"speaker":null},{"text":"done","start":101640,"end":101832,"confidence":0.99989,"speaker":null},{"text":"to","start":101856,"end":101992,"confidence":0.99992,"speaker":null},{"text":"her.","start":102016,"end":102536,"confidence":0.99992,"speaker":null},{"text":"The","start":102688,"end":102952,"confidence":0.99989,"speaker":null},{"text":"vengeance","start":102976,"end":103384,"confidence":0.8519,"speaker":null},{"text":"she","start":103432,"end":103592,"confidence":0.99962,"speaker":null},{"text":"sought","start":103616,"end":104136,"confidence":0.93287,"speaker":null},{"text":"became","start":104248,"end":104664,"confidence":0.99968,"speaker":null},{"text":"obsession.","start":104712,"end":105330,"confidence":0.5617,"speaker":null},{"text":"And","start":105440,"end":105758,"confidence":0.65119,"speaker":null},{"text":"that","start":105814,"end":105982,"confidence":0.99991,"speaker":null},{"text":"obsession","start":106006,"end":106782,"confidence":0.67902,"speaker":null},{"text":"became","start":106926,"end":107326,"confidence":0.99946,"speaker":null},{"text":"her","start":107358,"end":107550,"confidence":0.99995,"speaker":null},{"text":"cage.","start":107590,"end":108142,"confidence":0.94462,"speaker":null},{"text":"Your","start":108286,"end":108638,"confidence":0.94869,"speaker":null},{"text":"rule.","start":108694,"end":109166,"confidence":0.98571,"speaker":null},{"text":"Silence","start":109278,"end":109726,"confidence":0.97573,"speaker":null},{"text":"is","start":109758,"end":109902,"confidence":0.99784,"speaker":null},{"text":"your","start":109926,"end":110062,"confidence":0.994,"speaker":null},{"text":"weapon.","start":110086,"end":110558,"confidence":0.99581,"speaker":null},{"text":"Your","start":110654,"end":110910,"confidence":0.95234,"speaker":null},{"text":"energy","start":110950,"end":111198,"confidence":0.99996,"speaker":null},{"text":"flows","start":111254,"end":111646,"confidence":0.98392,"speaker":null},{"text":"forward","start":111678,"end":112158,"confidence":0.99967,"speaker":null},{"text":"into","start":112294,"end":112638,"confidence":0.99976,"speaker":null},{"text":"your","start":112694,"end":112910,"confidence":0.99713,"speaker":null},{"text":"build.","start":112950,"end":113486,"confidence":0.99902,"speaker":null},{"text":"Never","start":113638,"end":113998,"confidence":0.99998,"speaker":null},{"text":"backward","start":114054,"end":114414,"confidence":0.99843,"speaker":null},{"text":"into","start":114462,"end":114670,"confidence":0.9998,"speaker":null},{"text":"their","start":114710,"end":114958,"confidence":0.99901,"speaker":null},{"text":"past.","start":115014,"end":115614,"confidence":0.9996,"speaker":null},{"text":"Architect's","start":115782,"end":116526,"confidence":0.3621,"speaker":null},{"text":"Law","start":116558,"end":116798,"confidence":0.99834,"speaker":null},{"text":"3.","start":116854,"end":117406,"confidence":0.98357,"speaker":null},{"text":"The","start":117558,"end":117822,"confidence":0.99712,"speaker":null},{"text":"Elevation","start":117846,"end":118334,"confidence":0.99981,"speaker":null},{"text":"Ritual.","start":118382,"end":119070,"confidence":0.77674,"speaker":null},{"text":"The","start":119230,"end":119550,"confidence":0.99581,"speaker":null},{"text":"ultimate","start":119590,"end":119982,"confidence":0.99983,"speaker":null},{"text":"revenge","start":120046,"end":120606,"confidence":0.73078,"speaker":null},{"text":"isn't","start":120718,"end":121166,"confidence":0.99851,"speaker":null},{"text":"their","start":121198,"end":121390,"confidence":0.99467,"speaker":null},{"text":"fall.","start":121430,"end":121918,"confidence":0.99916,"speaker":null},{"text":"It's","start":122054,"end":122398,"confidence":0.99452,"speaker":null},{"text":"your","start":122414,"end":122638,"confidence":0.9978,"speaker":null},{"text":"untouchable","start":122694,"end":123342,"confidence":0.99938,"speaker":null},{"text":"rise.","start":123406,"end":123966,"confidence":0.95228,"speaker":null},{"text":"This","start":124078,"end":124302,"confidence":0.9994,"speaker":null},{"text":"is","start":124326,"end":124462,"confidence":0.99993,"speaker":null},{"text":"your","start":124486,"end":124622,"confidence":0.99948,"speaker":null},{"text":"ritual.","start":124646,"end":125438,"confidence":0.99909,"speaker":null},{"text":"Every","start":125614,"end":125950,"confidence":0.9999,"speaker":null},{"text":"time","start":125990,"end":126142,"confidence":0.98825,"speaker":null},{"text":"the","start":126166,"end":126302,"confidence":0.99981,"speaker":null},{"text":"memory","start":126326,"end":126574,"confidence":0.88072,"speaker":null},{"text":"hits","start":126622,"end":127022,"confidence":0.99916,"speaker":null},{"text":"and","start":127086,"end":127358,"confidence":0.56205,"speaker":null},{"text":"the","start":127414,"end":127582,"confidence":0.99966,"speaker":null},{"text":"rage","start":127606,"end":127902,"confidence":0.97951,"speaker":null},{"text":"swells,","start":127966,"end":128654,"confidence":0.87878,"speaker":null},{"text":"do","start":128782,"end":129070,"confidence":0.99903,"speaker":null},{"text":"not","start":129110,"end":129262,"confidence":0.99994,"speaker":null},{"text":"curse","start":129286,"end":129534,"confidence":0.85189,"speaker":null},{"text":"them.","start":129582,"end":130030,"confidence":0.9983,"speaker":null},{"text":"Do","start":130150,"end":130382,"confidence":0.99968,"speaker":null},{"text":"not","start":130406,"end":130542,"confidence":0.99988,"speaker":null},{"text":"replay","start":130566,"end":130958,"confidence":0.99967,"speaker":null},{"text":"the","start":130974,"end":131102,"confidence":0.99951,"speaker":null},{"text":"scene.","start":131126,"end":131728,"confidence":0.99614,"speaker":null},{"text":"Instead,","start":131894,"end":132700,"confidence":0.98519,"speaker":null},{"text":"write","start":132860,"end":133244,"confidence":0.99538,"speaker":null},{"text":"one","start":133292,"end":133548,"confidence":0.9998,"speaker":null},{"text":"sentence.","start":133604,"end":134204,"confidence":0.91388,"speaker":null},{"text":"Do","start":134332,"end":134620,"confidence":0.9975,"speaker":null},{"text":"one","start":134660,"end":134860,"confidence":0.99962,"speaker":null},{"text":"rep,","start":134900,"end":135388,"confidence":0.99321,"speaker":null},{"text":"make","start":135524,"end":135820,"confidence":0.99975,"speaker":null},{"text":"one","start":135860,"end":136060,"confidence":0.99954,"speaker":null},{"text":"call.","start":136100,"end":136588,"confidence":0.99452,"speaker":null},{"text":"Add","start":136724,"end":136972,"confidence":0.9994,"speaker":null},{"text":"one","start":136996,"end":137180,"confidence":0.99975,"speaker":null},{"text":"brick","start":137220,"end":137484,"confidence":0.97663,"speaker":null},{"text":"to","start":137532,"end":137644,"confidence":0.99968,"speaker":null},{"text":"your","start":137652,"end":137772,"confidence":0.9992,"speaker":null},{"text":"empire.","start":137796,"end":138412,"confidence":0.62234,"speaker":null},{"text":"Train","start":138556,"end":138876,"confidence":0.96331,"speaker":null},{"text":"your","start":138908,"end":139052,"confidence":0.99893,"speaker":null},{"text":"mind","start":139076,"end":139260,"confidence":0.99998,"speaker":null},{"text":"to","start":139300,"end":139404,"confidence":0.99997,"speaker":null},{"text":"associate","start":139412,"end":139916,"confidence":0.9998,"speaker":null},{"text":"their","start":139948,"end":140092,"confidence":0.97789,"speaker":null},{"text":"wrong","start":140116,"end":140636,"confidence":0.58868,"speaker":null},{"text":"with","start":140748,"end":141020,"confidence":0.9966,"speaker":null},{"text":"your","start":141060,"end":141212,"confidence":0.9994,"speaker":null},{"text":"elevation.","start":141236,"end":141964,"confidence":0.9997,"speaker":null},{"text":"The","start":142092,"end":142332,"confidence":0.99928,"speaker":null},{"text":"pain","start":142356,"end":142732,"confidence":0.56071,"speaker":null},{"text":"becomes","start":142796,"end":143116,"confidence":0.99993,"speaker":null},{"text":"the","start":143148,"end":143292,"confidence":0.9998,"speaker":null},{"text":"signal","start":143316,"end":143596,"confidence":0.99979,"speaker":null},{"text":"to","start":143628,"end":143772,"confidence":0.99987,"speaker":null},{"text":"ascend.","start":143796,"end":144588,"confidence":0.60734,"speaker":null},{"text":"The","start":144764,"end":145052,"confidence":0.99901,"speaker":null},{"text":"blackout","start":145076,"end":145532,"confidence":0.55836,"speaker":null},{"text":"protocol.","start":145596,"end":145996,"confidence":0.99986,"speaker":null},{"text":"Erase","start":146028,"end":146316,"confidence":0.99817,"speaker":null},{"text":"their","start":146348,"end":146540,"confidence":0.99858,"speaker":null},{"text":"footprint.","start":146580,"end":147148,"confidence":0.99418,"speaker":null},{"text":"Control","start":147244,"end":147596,"confidence":0.98993,"speaker":null},{"text":"the","start":147668,"end":147852,"confidence":0.9992,"speaker":null},{"text":"fire","start":147876,"end":148396,"confidence":0.99421,"speaker":null},{"text":"Memory","start":148548,"end":149004,"confidence":0.89132,"speaker":null},{"text":"quarantine.","start":149052,"end":149948,"confidence":0.99211,"speaker":null},{"text":"Set","start":150124,"end":150412,"confidence":0.99992,"speaker":null},{"text":"a","start":150436,"end":150572,"confidence":0.99959,"speaker":null},{"text":"15","start":150596,"end":150828,"confidence":0.99992,"speaker":null},{"text":"minute","start":150884,"end":151196,"confidence":0.99923,"speaker":null},{"text":"timer","start":151228,"end":151756,"confidence":0.99192,"speaker":null},{"text":"once","start":151868,"end":152140,"confidence":0.93085,"speaker":null},{"text":"a","start":152180,"end":152332,"confidence":0.99957,"speaker":null},{"text":"day.","start":152356,"end":152780,"confidence":0.99985,"speaker":null},{"text":"To","start":152900,"end":153132,"confidence":0.99744,"speaker":null},{"text":"allow","start":153156,"end":153340,"confidence":0.99991,"speaker":null},{"text":"yourself","start":153380,"end":153676,"confidence":0.99976,"speaker":null},{"text":"to","start":153708,"end":153852,"confidence":0.99974,"speaker":null},{"text":"feel","start":153876,"end":154012,"confidence":0.99986,"speaker":null},{"text":"it","start":154036,"end":154412,"confidence":0.99966,"speaker":null},{"text":"outside","start":154516,"end":154876,"confidence":0.99834,"speaker":null},{"text":"that","start":154948,"end":155180,"confidence":0.99989,"speaker":null},{"text":"time,","start":155220,"end":155756,"confidence":0.98805,"speaker":null},{"text":"shut","start":155908,"end":156236,"confidence":0.99966,"speaker":null},{"text":"it","start":156268,"end":156364,"confidence":0.99985,"speaker":null},{"text":"down","start":156372,"end":156978,"confidence":0.99735,"speaker":null},{"text":"ruthlessly.","start":157164,"end":158358,"confidence":0.93561,"speaker":null},{"text":"Success","start":158534,"end":159014,"confidence":0.99676,"speaker":null},{"text":"Scoreboard.","start":159102,"end":159990,"confidence":0.98696,"speaker":null},{"text":"Daily","start":160150,"end":160534,"confidence":0.9901,"speaker":null},{"text":"I","start":160582,"end":160886,"confidence":0.73019,"speaker":null},{"text":"list","start":160958,"end":161190,"confidence":0.99865,"speaker":null},{"text":"three","start":161230,"end":161382,"confidence":0.9999,"speaker":null},{"text":"things","start":161406,"end":161590,"confidence":0.9999,"speaker":null},{"text":"you","start":161630,"end":161782,"confidence":0.9997,"speaker":null},{"text":"built","start":161806,"end":162006,"confidence":0.67785,"speaker":null},{"text":"or","start":162038,"end":162230,"confidence":0.99929,"speaker":null},{"text":"improved","start":162270,"end":162934,"confidence":0.99755,"speaker":null},{"text":"unrelated","start":163062,"end":163606,"confidence":0.99703,"speaker":null},{"text":"to","start":163638,"end":163782,"confidence":0.99942,"speaker":null},{"text":"them.","start":163806,"end":164230,"confidence":0.99733,"speaker":null},{"text":"Focus","start":164350,"end":164678,"confidence":0.99989,"speaker":null},{"text":"on","start":164734,"end":164902,"confidence":0.99992,"speaker":null},{"text":"your","start":164926,"end":165158,"confidence":0.99612,"speaker":null},{"text":"power.","start":165214,"end":165718,"confidence":0.96434,"speaker":null},{"text":"The","start":165854,"end":166102,"confidence":0.9585,"speaker":null},{"text":"Ghost","start":166126,"end":166374,"confidence":0.99957,"speaker":null},{"text":"Protocol.","start":166422,"end":167290,"confidence":0.99903,"speaker":null},{"text":"Never","start":167630,"end":167990,"confidence":0.9999,"speaker":null},{"text":"acknowledge","start":168030,"end":168486,"confidence":0.78555,"speaker":null},{"text":"their","start":168518,"end":168662,"confidence":0.99937,"speaker":null},{"text":"existence","start":168686,"end":169414,"confidence":0.99724,"speaker":null},{"text":"or","start":169542,"end":169830,"confidence":0.99744,"speaker":null},{"text":"their","start":169870,"end":170070,"confidence":0.99981,"speaker":null},{"text":"act","start":170110,"end":170454,"confidence":0.99927,"speaker":null},{"text":"as","start":170542,"end":170790,"confidence":0.99841,"speaker":null},{"text":"fuel.","start":170830,"end":171590,"confidence":0.99467,"speaker":null},{"text":"Your","start":171750,"end":172070,"confidence":0.95281,"speaker":null},{"text":"rise","start":172110,"end":172486,"confidence":0.88165,"speaker":null},{"text":"must","start":172518,"end":172662,"confidence":0.99991,"speaker":null},{"text":"appear","start":172686,"end":172918,"confidence":0.99994,"speaker":null},{"text":"effortless,","start":172974,"end":173814,"confidence":0.59212,"speaker":null},{"text":"divine,","start":173942,"end":174694,"confidence":0.99946,"speaker":null},{"text":"inevitable.","start":174822,"end":175926,"confidence":0.98799,"speaker":null},{"text":"Vengeance","start":176118,"end":176646,"confidence":0.99914,"speaker":null},{"text":"isn't","start":176678,"end":176886,"confidence":0.79221,"speaker":null},{"text":"a","start":176918,"end":177014,"confidence":0.99987,"speaker":null},{"text":"debt","start":177022,"end":177206,"confidence":0.99956,"speaker":null},{"text":"you","start":177238,"end":177382,"confidence":0.99979,"speaker":null},{"text":"collect.","start":177406,"end":177926,"confidence":0.99968,"speaker":null},{"text":"It's","start":178038,"end":178326,"confidence":0.99057,"speaker":null},{"text":"a","start":178358,"end":178502,"confidence":0.99987,"speaker":null},{"text":"power","start":178526,"end":178998,"confidence":0.99954,"speaker":null},{"text":"you","start":179134,"end":179478,"confidence":0.99634,"speaker":null},{"text":"claim.","start":179534,"end":180038,"confidence":0.99952,"speaker":null},{"text":"You","start":180174,"end":180422,"confidence":0.9989,"speaker":null},{"text":"are","start":180446,"end":180582,"confidence":0.99936,"speaker":null},{"text":"not","start":180606,"end":180742,"confidence":0.99993,"speaker":null},{"text":"the","start":180766,"end":180854,"confidence":0.99983,"speaker":null},{"text":"victim","start":180862,"end":181174,"confidence":0.9998,"speaker":null},{"text":"of","start":181222,"end":181334,"confidence":0.99991,"speaker":null},{"text":"their","start":181342,"end":181510,"confidence":0.99943,"speaker":null},{"text":"act.","start":181550,"end":181894,"confidence":0.99878,"speaker":null},{"text":"You","start":181982,"end":182182,"confidence":0.99974,"speaker":null},{"text":"are","start":182206,"end":182342,"confidence":0.99985,"speaker":null},{"text":"the","start":182366,"end":182502,"confidence":0.99982,"speaker":null},{"text":"architect.","start":182526,"end":183206,"confidence":0.99812,"speaker":null},{"text":"The","start":183318,"end":183542,"confidence":0.99978,"speaker":null},{"text":"fire","start":183566,"end":183750,"confidence":0.99983,"speaker":null},{"text":"is","start":183790,"end":183942,"confidence":0.99986,"speaker":null},{"text":"yours","start":183966,"end":184246,"confidence":0.99971,"speaker":null},{"text":"now.","start":184278,"end":184758,"confidence":0.99962,"speaker":null},{"text":"Build","start":184894,"end":185190,"confidence":0.99952,"speaker":null},{"text":"your","start":185230,"end":185382,"confidence":0.99777,"speaker":null},{"text":"untouchable","start":185406,"end":186054,"confidence":0.93163,"speaker":null},{"text":"reality.","start":186102,"end":186822,"confidence":0.99875,"speaker":null},{"text":"Become","start":186966,"end":187318,"confidence":0.99921,"speaker":null},{"text":"the","start":187374,"end":187542,"confidence":0.99977,"speaker":null},{"text":"vengeance.","start":187566,"end":187830,"confidence":0.99905,"speaker":null}]`,
  transcribedSubtitles: null,
  fps: 30,
  totalDuration: 187830,
  imageStyle: "cyberpunk",
  captionStyle: "caption-style-one",
  thumbnailUrl: "",
  bgmId: null,
  userId: "cm9uvn27x0000nn5mid6v76m2",
  createdAt: "2025-04-24T18:55:26.116Z",
  updatedAt: "2025-04-24T18:55:38.623Z",
  bgm: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/attitude-beats.mp3",
  voiceOver: [
    {
      id: "cm9uvp2m50002nn5mjftom4ay",
      narrationTone: "revenge",
      audioUrl:
        "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/videos/cm9uvn27x0000nn5mid6v76m2/voiceovers/157a92aa-10d7-43c8-b6e8-1b1bc86a3be7.mp3",
      voiceId: "onyx",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
  ],
  scenes: [
    {
      id: "cm9vq5q4b0005nnuejmtgxi09",
      number: 1,
      start: 160,
      end: 3512,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A close-up of a person's distressed face in dim light, showing emotional pain and betrayal, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20close-up%20of%20a%20person's%20distressed%20face%20in%20dim%20light%2C%20showing%20emotional%20pain%20and%20betrayal%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1960211&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5q9o0009nnue46diu90j",
      number: 2,
      start: 3656,
      end: 6216,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A shadowy figure walking away with a sly smile down an urban street at dusk, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20shadowy%20figure%20walking%20away%20with%20a%20sly%20smile%20down%20an%20urban%20street%20at%20dusk%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9450323&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5q9v000bnnue95w29rhs",
      number: 3,
      start: 6408,
      end: 9864,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A glowing ember fire crackling intensely in a dark, quiet room evoking a sense of burning determination, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20glowing%20ember%20fire%20crackling%20intensely%20in%20a%20dark%2C%20quiet%20room%20evoking%20a%20sense%20of%20burning%20determination%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3565149&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rjw000mnnuex51a78bi",
      number: 4,
      start: 10032,
      end: 13592,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A person standing firm with clenched fists, shadowed in low light conveying unstoppable resolve, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20standing%20firm%20with%20clenched%20fists%2C%20shadowed%20in%20low%20light%20conveying%20unstoppable%20resolve%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8131710&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5qhr000fnnueoy5b66ip",
      number: 5,
      start: 13736,
      end: 16980,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "Fiery abstract flames rising, symbolizing energy and power transforming pain into strength, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/Fiery%20abstract%20flames%20rising%2C%20symbolizing%20energy%20and%20power%20transforming%20pain%20into%20strength%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1259598&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sen0015nnuefzppvu1r",
      number: 6,
      start: 17280,
      end: 21048,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A man standing confidently on a rooftop at night overlooking a city ablaze with lights, exuding quiet power, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20man%20standing%20confidently%20on%20a%20rooftop%20at%20night%20overlooking%20a%20city%20ablaze%20with%20lights%2C%20exuding%20quiet%20power%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=937718&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rvb000ynnuebdnuqcn2",
      number: 7,
      start: 21144,
      end: 24456,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "Bright sunlight breaking through clouds onto a lone figure standing tall, radiating unstoppable energy, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/Bright%20sunlight%20breaking%20through%20clouds%20onto%20a%20lone%20figure%20standing%20tall%2C%20radiating%20unstoppable%20energy%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1870913&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5q9j0006nnue45uf29a9",
      number: 8,
      start: 24648,
      end: 27248,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A person sitting thoughtfully at a desk full of scribbles and blueprints, lost in planning and ambition, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20sitting%20thoughtfully%20at%20a%20desk%20full%20of%20scribbles%20and%20blueprints%2C%20lost%20in%20planning%20and%20ambition%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4731401&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sot001gnnueoyqgs23p",
      number: 9,
      start: 27424,
      end: 30576,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A shadow looming over a person’s shoulders, symbolizing mental captivity and struggle with inner demons, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20shadow%20looming%20over%20a%20person%E2%80%99s%20shoulders%2C%20symbolizing%20mental%20captivity%20and%20struggle%20with%20inner%20demons%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6015553&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sdc0014nnueb88q4e9a",
      number: 10,
      start: 30688,
      end: 33824,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "Dimly lit scene of a person in a cage made of translucent shadows representing mental imprisonment, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/Dimly%20lit%20scene%20of%20a%20person%20in%20a%20cage%20made%20of%20translucent%20shadows%20representing%20mental%20imprisonment%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4823864&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sfp0016nnuece32a5cm",
      number: 11,
      start: 33832,
      end: 37216,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A fading ghostly silhouette surrounded by a draining dark mist, emphasizing loss of power and haunting memories, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20fading%20ghostly%20silhouette%20surrounded%20by%20a%20draining%20dark%20mist%2C%20emphasizing%20loss%20of%20power%20and%20haunting%20memories%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5958432&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sgw0018nnuep49gj6ra",
      number: 12,
      start: 37368,
      end: 40704,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A man named Amir staring into the distance, face a mix of hurt and determination in a stark office setting, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20man%20named%20Amir%20staring%20into%20the%20distance%2C%20face%20a%20mix%20of%20hurt%20and%20determination%20in%20a%20stark%20office%20setting%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4436398&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sob001ennue0j1cw8c6",
      number: 13,
      start: 40872,
      end: 43540,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "An intense business meeting with a betrayal scene: a partner shaking hands while concealing a knife behind back, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/An%20intense%20business%20meeting%20with%20a%20betrayal%20scene%3A%20a%20partner%20shaking%20hands%20while%20concealing%20a%20knife%20behind%20back%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=545921&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sga0017nnuenjexb479",
      number: 14,
      start: 43880,
      end: 47120,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A man overwhelmed by creditors and fading business signs outside a corporate building, feeling bankrupt, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20man%20overwhelmed%20by%20creditors%20and%20fading%20business%20signs%20outside%20a%20corporate%20building%2C%20feeling%20bankrupt%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4130944&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rs6000wnnuey0g0vcio",
      number: 15,
      start: 47240,
      end: 50368,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A lone figure working late into the night coding on multiple screens, determination shining in tired eyes, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20lone%20figure%20working%20late%20into%20the%20night%20coding%20on%20multiple%20screens%2C%20determination%20shining%20in%20tired%20eyes%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1378597&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5r5s000knnuedfos6mgk",
      number: 16,
      start: 50464,
      end: 54576,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A man angrily clenching fists but then refocusing on a glowing laptop screen, embodying channeling rage into work, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20man%20angrily%20clenching%20fists%20but%20then%20refocusing%20on%20a%20glowing%20laptop%20screen%2C%20embodying%20channeling%20rage%20into%20work%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4592554&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5q9j0007nnuer9cm8rgg",
      number: 17,
      start: 54608,
      end: 58064,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "Time-lapse style montage of a man networking and building connections, deep focus and purposeful motion, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/Time-lapse%20style%20montage%20of%20a%20man%20networking%20and%20building%20connections%2C%20deep%20focus%20and%20purposeful%20motion%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8208828&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5qaa000dnnuenpvvf9lk",
      number: 18,
      start: 58192,
      end: 62064,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A man celebrating quietly as he signs ownership papers of a revived company, victorious and composed, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20man%20celebrating%20quietly%20as%20he%20signs%20ownership%20papers%20of%20a%20revived%20company%2C%20victorious%20and%20composed%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8017606&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5qhs000gnnuelx6g9i0s",
      number: 19,
      start: 62192,
      end: 65824,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A bitter former partner standing forlorn in line at an unemployment office with a defeated posture, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20bitter%20former%20partner%20standing%20forlorn%20in%20line%20at%20an%20unemployment%20office%20with%20a%20defeated%20posture%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4456066&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5ru1000xnnuevddr1e4o",
      number: 20,
      start: 65912,
      end: 69424,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A man building a glowing architectural model representing creation and rebirth in a dark room, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20man%20building%20a%20glowing%20architectural%20model%20representing%20creation%20and%20rebirth%20in%20a%20dark%20room%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9595621&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5s8u0012nnuelvgk841h",
      number: 21,
      start: 69472,
      end: 73040,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "Bright flames transforming into a strong structure, symbolizing channeling pain into unbreakable foundations, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/Bright%20flames%20transforming%20into%20a%20strong%20structure%2C%20symbolizing%20channeling%20pain%20into%20unbreakable%20foundations%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6901681&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sh60019nnuehz7fc8p8",
      number: 22,
      start: 73080,
      end: 77008,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A woman sitting alone, speaking passionately to a group, a mix of pain and desperation shadowing her face, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20woman%20sitting%20alone%2C%20speaking%20passionately%20to%20a%20group%2C%20a%20mix%20of%20pain%20and%20desperation%20shadowing%20her%20face%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6728869&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5qhr000ennueflw5olxr",
      number: 23,
      start: 77064,
      end: 80552,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A woman scrolling through social media late at night, her face illuminated by cold blue light, anxious and restless, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20woman%20scrolling%20through%20social%20media%20late%20at%20night%2C%20her%20face%20illuminated%20by%20cold%20blue%20light%2C%20anxious%20and%20restless%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2712644&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5soj001fnnuellxur3fa",
      number: 24,
      start: 80576,
      end: 84616,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A woman repetitively touching her phone, her eyes filled with sorrow and longing for connection, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20woman%20repetitively%20touching%20her%20phone%2C%20her%20eyes%20filled%20with%20sorrow%20and%20longing%20for%20connection%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1995880&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5ro9000rnnuewfv84m4q",
      number: 25,
      start: 84728,
      end: 88136,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "Crowded urban scenes continuing life, unaware and indifferent to a lone woman crying silently on a bench, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/Crowded%20urban%20scenes%20continuing%20life%2C%20unaware%20and%20indifferent%20to%20a%20lone%20woman%20crying%20silently%20on%20a%20bench%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8689626&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rga000lnnuet1d7abb6",
      number: 26,
      start: 88168,
      end: 91784,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A confident man enjoying success in a sunny café, smiling broadly, oblivious to the woman’s suffering, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20confident%20man%20enjoying%20success%20in%20a%20sunny%20caf%C3%A9%2C%20smiling%20broadly%2C%20oblivious%20to%20the%20woman%E2%80%99s%20suffering%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6019416&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5q4a0004nnueqyxtn4pq",
      number: 27,
      start: 91912,
      end: 95688,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A woman trapped inside a glass cage surrounded by shadows of her own making, isolated and sorrowful, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20woman%20trapped%20inside%20a%20glass%20cage%20surrounded%20by%20shadows%20of%20her%20own%20making%2C%20isolated%20and%20sorrowful%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3426866&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5q9s000annuexqw7m092",
      number: 28,
      start: 95824,
      end: 98968,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A woman’s face reflected on a window, her expression hardened and identity consumed by past betrayal, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20woman%E2%80%99s%20face%20reflected%20on%20a%20window%2C%20her%20expression%20hardened%20and%20identity%20consumed%20by%20past%20betrayal%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1656332&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sin001annueymtq5kpy",
      number: 29,
      start: 99064,
      end: 102536,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A dark spiraling cage made of chains closing in on a woman struggling inside, embodying obsession, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20dark%20spiraling%20cage%20made%20of%20chains%20closing%20in%20on%20a%20woman%20struggling%20inside%2C%20embodying%20obsession%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6382077&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5ryz0011nnue6x8ivhew",
      number: 30,
      start: 102688,
      end: 106782,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A person quietly meditating in a sunlit room, serenity and strength replacing turmoil and obsession, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20quietly%20meditating%20in%20a%20sunlit%20room%2C%20serenity%20and%20strength%20replacing%20turmoil%20and%20obsession%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9839188&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rvo000znnue4ufz1qc8",
      number: 31,
      start: 106926,
      end: 110558,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "Focused hands pressing play on a silent mode on a phone, a deliberate act of cutting off noise, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/Focused%20hands%20pressing%20play%20on%20a%20silent%20mode%20on%20a%20phone%2C%20a%20deliberate%20act%20of%20cutting%20off%20noise%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=6794658&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5q490003nnue5gwkwat8",
      number: 32,
      start: 110654,
      end: 113486,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A powerful silhouette running forward on a trail, energy and momentum pushing past the shadows behind, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20powerful%20silhouette%20running%20forward%20on%20a%20trail%2C%20energy%20and%20momentum%20pushing%20past%20the%20shadows%20behind%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8224447&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rnf000qnnueqdb443n0",
      number: 33,
      start: 113638,
      end: 117406,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A calm person standing on a mountain peak at sunrise, looking forward with hopeful determination, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20calm%20person%20standing%20on%20a%20mountain%20peak%20at%20sunrise%2C%20looking%20forward%20with%20hopeful%20determination%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=5878737&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5roe000snnueffvg4h10",
      number: 34,
      start: 117558,
      end: 121166,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A solitary figure lighting a candle in a dim room, a symbolic ritual of focus and inner power, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20solitary%20figure%20lighting%20a%20candle%20in%20a%20dim%20room%2C%20a%20symbolic%20ritual%20of%20focus%20and%20inner%20power%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4464996&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rvo0010nnue57gav8c1",
      number: 35,
      start: 121198,
      end: 125438,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "An upward shot of a person climbing stairs toward bright sunlight; rays of light breaking through clouds, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/An%20upward%20shot%20of%20a%20person%20climbing%20stairs%20toward%20bright%20sunlight%3B%20rays%20of%20light%20breaking%20through%20clouds%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8599339&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rk8000nnnuedp24xbn1",
      number: 36,
      start: 125614,
      end: 129262,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A person calmly breathing deeply, eyes closed, in a peaceful room with natural morning light, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20calmly%20breathing%20deeply%2C%20eyes%20closed%2C%20in%20a%20peaceful%20room%20with%20natural%20morning%20light%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7519984&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rpn000tnnuej82h276x",
      number: 37,
      start: 129286,
      end: 132700,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A person closing eyes tightly, shaking head slowly as if releasing negative thoughts and emotions, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20closing%20eyes%20tightly%2C%20shaking%20head%20slowly%20as%20if%20releasing%20negative%20thoughts%20and%20emotions%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7178520&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5oyc0001nnuet3t96kx9",
      number: 38,
      start: 132860,
      end: 136588,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A person at a desk writing determinedly, focused expression with sunlight casting long shadows, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20at%20a%20desk%20writing%20determinedly%2C%20focused%20expression%20with%20sunlight%20casting%20long%20shadows%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2058914&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5qhx000innueysnj620q",
      number: 39,
      start: 136724,
      end: 140092,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A strong arm lifting a weight in a gym, sweat shining, embodiment of discipline and pushing limits, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20strong%20arm%20lifting%20a%20weight%20in%20a%20gym%2C%20sweat%20shining%2C%20embodiment%20of%20discipline%20and%20pushing%20limits%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1188165&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sct0013nnueiwt94mqf",
      number: 40,
      start: 140116,
      end: 143292,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A focused person making a determined phone call from a quiet office, urgency and purpose in posture, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20focused%20person%20making%20a%20determined%20phone%20call%20from%20a%20quiet%20office%2C%20urgency%20and%20purpose%20in%20posture%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1187002&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rmc000pnnuei9la0g3t",
      number: 41,
      start: 143316,
      end: 147148,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "Hands laying bricks in slow motion on a growing wall, symbolizing steady building and progress, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/Hands%20laying%20bricks%20in%20slow%20motion%20on%20a%20growing%20wall%2C%20symbolizing%20steady%20building%20and%20progress%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=1813666&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rrd000unnue906i3pby",
      number: 42,
      start: 147244,
      end: 149948,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A thoughtful person staring upward, mind visually connecting rising steps with past pain transforming upward, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20thoughtful%20person%20staring%20upward%2C%20mind%20visually%20connecting%20rising%20steps%20with%20past%20pain%20transforming%20upward%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2165705&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rre000vnnuefoa3nurw",
      number: 43,
      start: 150124,
      end: 153852,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A hand erasing footprints on a sandy beach at sunset, peaceful yet determined control over the past, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20hand%20erasing%20footprints%20on%20a%20sandy%20beach%20at%20sunset%2C%20peaceful%20yet%20determined%20control%20over%20the%20past%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=7893703&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5ska001bnnuebd9w0v09",
      number: 44,
      start: 153876,
      end: 158358,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A solitary timer counting down fifteen minutes on a minimalist desk, symbolizing controlled emotional release, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20solitary%20timer%20counting%20down%20fifteen%20minutes%20on%20a%20minimalist%20desk%2C%20symbolizing%20controlled%20emotional%20release%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3250619&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5sle001cnnue23e5ybqa",
      number: 45,
      start: 158534,
      end: 162230,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A person closing a door firmly behind them, shutting out chaos and pain, expression calm and resolute, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20closing%20a%20door%20firmly%20behind%20them%2C%20shutting%20out%20chaos%20and%20pain%2C%20expression%20calm%20and%20resolute%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9365397&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5slg001dnnuebhyah65x",
      number: 46,
      start: 162270,
      end: 164718,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A journal open with neat handwritten notes and a pen, calm atmosphere of reflection and progress, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20journal%20open%20with%20neat%20handwritten%20notes%20and%20a%20pen%2C%20calm%20atmosphere%20of%20reflection%20and%20progress%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=4140835&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5q9j0008nnuez50krmkb",
      number: 47,
      start: 164854,
      end: 168830,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A shadowy figure fading away into brightness, symbolizing refusal to acknowledge negative influences, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20shadowy%20figure%20fading%20away%20into%20brightness%2C%20symbolizing%20refusal%20to%20acknowledge%20negative%20influences%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9714424&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5qa9000cnnueku1kunsp",
      number: 48,
      start: 168870,
      end: 172814,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A person ascending an elegant staircase bathed in soft divine light, exuding effortless confidence, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20person%20ascending%20an%20elegant%20staircase%20bathed%20in%20soft%20divine%20light%2C%20exuding%20effortless%20confidence%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2468008&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5qhs000hnnuelkjl65jv",
      number: 49,
      start: 172942,
      end: 175382,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A majestic sunrise illuminating a vast horizon, evoking inevitable and natural growth, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20majestic%20sunrise%20illuminating%20a%20vast%20horizon%2C%20evoking%20inevitable%20and%20natural%20growth%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=9285445&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5qnt000jnnueyexwtd4e",
      number: 50,
      start: 175406,
      end: 180134,
      motionTemplateId: "scale-down-fade",
      imagePromt:
        "A powerful figure standing tall on a cliff edge, arms stretched wide embracing newfound strength, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20powerful%20figure%20standing%20tall%20on%20a%20cliff%20edge%2C%20arms%20stretched%20wide%20embracing%20newfound%20strength%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=8252884&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5rl6000onnueff6er58g",
      number: 51,
      start: 180142,
      end: 183758,
      motionTemplateId: "scale-down-up",
      imagePromt:
        "A confident architect reviewing blueprints in a modern office with city skyline through windows, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20confident%20architect%20reviewing%20blueprints%20in%20a%20modern%20office%20with%20city%20skyline%20through%20windows%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=3058758&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
    {
      id: "cm9vq5ozl0002nnueo2ovd81s",
      number: 52,
      start: 183894,
      end: 187830,
      motionTemplateId: "enter-slide-top-down-exit-left",
      imagePromt:
        "A glowing fortress rising high on a mountain peak against a fiery sky, symbolizing building an untouchable fortress, cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
      imageUrl:
        "https://image.pollinations.ai/prompt/A%20glowing%20fortress%20rising%20high%20on%20a%20mountain%20peak%20against%20a%20fiery%20sky%2C%20symbolizing%20building%20an%20untouchable%20fortress%2C%20cyberpunk%2C%20futuristic%2C%20neon%20colors%2C%20dark%20atmosphere%2C%20highly%20detailed%2C%20neon%20lights%2C%20urban%2C%20dystopian%2C%20high-tech%2C%20low-life?width=720&height=540&seed=2159292&nologo=true&private=true",
      videoId: "cm9vq3ag40000nnue22o4jyt4",
    },
  ],
};
