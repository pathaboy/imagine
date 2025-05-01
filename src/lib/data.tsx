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
    name: "enter-slide-top-down-exit-left",
  },
  {
    id: 5,
    name: "pull-out",
  },
  {
    id: 6,
    name: "scale-down-up",
  },
  {
    id: 7,
    name: "enter-slide-top-down-exit-left",
  },
  {
    id: 8,
    name: "scale-down-fade",
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
  id: "cma5k10cv0000nn0qs9oisu5i",
  prompt: "Just do it",
  title: "Unleash",
  script:
    "Doubt. It's a silent killer. A thief of dreams. It whispers, 'You're not ready,' while opportunity bleeds out. But what if doubt is a lie? Today, I hand you three brutal truths to shatter that lie and unleash the beast within. These are the rules forged in the fires of failure, the code I live by when the world screams, 'Give up.' They’re what separate those who merely exist, from those who truly live. The Grand Deception We're told to 'be realistic,' to 'wait for the right moment.' That's a trap. Your brain is a master of procrastination, a sculptor of excuses. It will always find a reason to delay. But reality doesn't wait. Let me show you why: Every time you postpone action, you feed the monster of inertia. Science proves that momentum is the ultimate cheat code. Action breeds action. You’re not cautious. You're just crippled by fear. Brutal Truth #1: The 3-Second Override Meet Anya—a coder paralyzed by imposter syndrome. She forced herself to type ONE line of code within three seconds of doubt hitting. Not a perfect program. Just one line. After a year, she launched a six-figure app. Her secret: the 3-second rule When hesitation strikes, attack it head-on: Write one word. Do one rep. Make one call. This isn't about perfection. It's about proving to yourself: I control my fear. Brutal Truth #2: Embrace the Carnage Mark failed seven times before launching his game. Seven times he faced ridicule, bankruptcy, despair. His secret? Celebrate the failures. Every rejection letter went on his wall. Every setback became a war story. By owning the carnage, he disarmed his fear of it. Your rule: Fail fast. Fail forward. Each scar is a badge of honor, a testament to your resilience. Brutal Truth #3: The Victory Cry Most people shrink in the face of challenges. They internalize doubt, letting it fester. The fix? Scream your intentions. Literally. Before every big meeting, before every lift, before every risk, roar your commitment. Visualize success. Feel the power surge. Say: I am unstoppable. This ritual rewires your brain to associate action with victory, not fear. Train your mind to crave the battlefield. You're not seeking comfort. You're hunting greatness. Unleashing isn't something you achieve. It's someone you become. The world wants you to cower. But you—you’re a force of nature. You've got: The 3-Second Override Embrace the Carnage The Victory Cry Now go seize your destiny.",
  transcriptionId: "9183985c-c940-4209-942d-cf29fd1fb236",
  transcribedWords:
    '[{"text":"Doubt.","start":320,"end":688,"confidence":0.76219,"speaker":null},{"text":"It\'s","start":744,"end":968,"confidence":0.99611,"speaker":null},{"text":"a","start":984,"end":1064,"confidence":0.99956,"speaker":null},{"text":"silent","start":1072,"end":1416,"confidence":0.99943,"speaker":null},{"text":"killer.","start":1448,"end":1976,"confidence":0.53068,"speaker":null},{"text":"A","start":2088,"end":2312,"confidence":0.99601,"speaker":null},{"text":"thief","start":2336,"end":2536,"confidence":0.99982,"speaker":null},{"text":"of","start":2568,"end":2712,"confidence":0.99976,"speaker":null},{"text":"dreams.","start":2736,"end":3336,"confidence":0.85877,"speaker":null},{"text":"It","start":3448,"end":3672,"confidence":0.98978,"speaker":null},{"text":"whispers","start":3696,"end":4104,"confidence":0.99636,"speaker":null},{"text":"you\'re","start":4152,"end":4328,"confidence":0.99017,"speaker":null},{"text":"not","start":4344,"end":4472,"confidence":0.99983,"speaker":null},{"text":"ready.","start":4496,"end":4744,"confidence":0.99971,"speaker":null},{"text":"While","start":4792,"end":5048,"confidence":0.99809,"speaker":null},{"text":"opportunity","start":5104,"end":5656,"confidence":0.9998,"speaker":null},{"text":"bleeds","start":5688,"end":5944,"confidence":0.86074,"speaker":null},{"text":"out.","start":5992,"end":6296,"confidence":0.99966,"speaker":null},{"text":"But","start":6368,"end":6552,"confidence":0.9982,"speaker":null},{"text":"what","start":6576,"end":6664,"confidence":0.99872,"speaker":null},{"text":"if","start":6672,"end":6792,"confidence":0.99085,"speaker":null},{"text":"doubt","start":6816,"end":7016,"confidence":0.99635,"speaker":null},{"text":"is","start":7048,"end":7192,"confidence":0.99882,"speaker":null},{"text":"a","start":7216,"end":7304,"confidence":0.99876,"speaker":null},{"text":"lie?","start":7312,"end":7736,"confidence":0.99869,"speaker":null},{"text":"Today,","start":7848,"end":8168,"confidence":0.99903,"speaker":null},{"text":"I","start":8224,"end":8392,"confidence":0.9993,"speaker":null},{"text":"hand","start":8416,"end":8600,"confidence":0.99984,"speaker":null},{"text":"you","start":8640,"end":8840,"confidence":0.99962,"speaker":null},{"text":"three","start":8880,"end":9032,"confidence":0.99961,"speaker":null},{"text":"brutal","start":9056,"end":9368,"confidence":0.99933,"speaker":null},{"text":"truths","start":9384,"end":9768,"confidence":0.73017,"speaker":null},{"text":"to","start":9784,"end":9912,"confidence":0.99969,"speaker":null},{"text":"shatter","start":9936,"end":10232,"confidence":0.99994,"speaker":null},{"text":"that","start":10296,"end":10472,"confidence":0.99976,"speaker":null},{"text":"lie","start":10496,"end":10696,"confidence":0.98263,"speaker":null},{"text":"and","start":10728,"end":10920,"confidence":0.88067,"speaker":null},{"text":"unleash","start":10960,"end":11304,"confidence":0.99998,"speaker":null},{"text":"the","start":11352,"end":11464,"confidence":0.9999,"speaker":null},{"text":"beast","start":11472,"end":11704,"confidence":0.99928,"speaker":null},{"text":"within.","start":11752,"end":12296,"confidence":0.998,"speaker":null},{"text":"These","start":12448,"end":12712,"confidence":0.99935,"speaker":null},{"text":"are","start":12736,"end":12872,"confidence":0.99989,"speaker":null},{"text":"the","start":12896,"end":12984,"confidence":0.99939,"speaker":null},{"text":"rules","start":12992,"end":13272,"confidence":0.99672,"speaker":null},{"text":"forged","start":13336,"end":13624,"confidence":0.69238,"speaker":null},{"text":"in","start":13672,"end":13784,"confidence":0.99969,"speaker":null},{"text":"the","start":13792,"end":13912,"confidence":0.99973,"speaker":null},{"text":"fires","start":13936,"end":14296,"confidence":0.98873,"speaker":null},{"text":"of","start":14328,"end":14472,"confidence":0.99962,"speaker":null},{"text":"failure.","start":14496,"end":14872,"confidence":0.98569,"speaker":null},{"text":"The","start":14936,"end":15112,"confidence":0.98348,"speaker":null},{"text":"code","start":15136,"end":15336,"confidence":0.83521,"speaker":null},{"text":"I","start":15368,"end":15512,"confidence":0.99973,"speaker":null},{"text":"live","start":15536,"end":15672,"confidence":0.99996,"speaker":null},{"text":"by","start":15696,"end":15880,"confidence":0.99987,"speaker":null},{"text":"when","start":15920,"end":16072,"confidence":0.99962,"speaker":null},{"text":"the","start":16096,"end":16232,"confidence":0.99953,"speaker":null},{"text":"world","start":16256,"end":16824,"confidence":0.99957,"speaker":null},{"text":"give","start":16992,"end":17272,"confidence":0.99043,"speaker":null},{"text":"up.","start":17296,"end":17624,"confidence":0.99884,"speaker":null},{"text":"They\'re","start":17712,"end":18008,"confidence":0.98925,"speaker":null},{"text":"what","start":18024,"end":18200,"confidence":0.99691,"speaker":null},{"text":"separate","start":18240,"end":18616,"confidence":0.99654,"speaker":null},{"text":"those","start":18648,"end":18792,"confidence":0.99981,"speaker":null},{"text":"who","start":18816,"end":19000,"confidence":0.99987,"speaker":null},{"text":"merely","start":19040,"end":19416,"confidence":0.99989,"speaker":null},{"text":"exist","start":19448,"end":19832,"confidence":0.99985,"speaker":null},{"text":"from","start":19896,"end":20072,"confidence":0.99975,"speaker":null},{"text":"those","start":20096,"end":20280,"confidence":0.99989,"speaker":null},{"text":"who","start":20320,"end":20472,"confidence":0.9999,"speaker":null},{"text":"truly","start":20496,"end":20856,"confidence":0.91471,"speaker":null},{"text":"live.","start":20888,"end":21368,"confidence":0.98885,"speaker":null},{"text":"The","start":21504,"end":21752,"confidence":0.99593,"speaker":null},{"text":"grand","start":21776,"end":21976,"confidence":0.99974,"speaker":null},{"text":"deception.","start":22008,"end":22504,"confidence":0.55678,"speaker":null},{"text":"We\'re","start":22552,"end":22776,"confidence":0.77283,"speaker":null},{"text":"told","start":22808,"end":23000,"confidence":0.99945,"speaker":null},{"text":"to","start":23040,"end":23192,"confidence":0.99814,"speaker":null},{"text":"be","start":23216,"end":23352,"confidence":0.99864,"speaker":null},{"text":"realistic,","start":23376,"end":23960,"confidence":0.71483,"speaker":null},{"text":"to","start":24040,"end":24232,"confidence":0.99751,"speaker":null},{"text":"wait","start":24256,"end":24408,"confidence":0.99952,"speaker":null},{"text":"for","start":24424,"end":24552,"confidence":0.9997,"speaker":null},{"text":"the","start":24576,"end":24712,"confidence":0.9998,"speaker":null},{"text":"right","start":24736,"end":24872,"confidence":0.99891,"speaker":null},{"text":"moment.","start":24896,"end":25470,"confidence":0.99729,"speaker":null},{"text":"That\'s","start":25600,"end":25906,"confidence":0.99122,"speaker":null},{"text":"a","start":25938,"end":26034,"confidence":0.99992,"speaker":null},{"text":"trap.","start":26042,"end":26514,"confidence":0.61984,"speaker":null},{"text":"Your","start":26642,"end":26882,"confidence":0.98181,"speaker":null},{"text":"brain","start":26906,"end":27154,"confidence":0.99881,"speaker":null},{"text":"is","start":27202,"end":27362,"confidence":0.99963,"speaker":null},{"text":"a","start":27386,"end":27474,"confidence":0.99959,"speaker":null},{"text":"master","start":27482,"end":27826,"confidence":0.99836,"speaker":null},{"text":"of","start":27858,"end":28050,"confidence":0.99976,"speaker":null},{"text":"procrastination.","start":28090,"end":28866,"confidence":0.9915,"speaker":null},{"text":"A","start":28978,"end":29154,"confidence":0.99792,"speaker":null},{"text":"sculptor","start":29162,"end":29586,"confidence":0.97928,"speaker":null},{"text":"of","start":29618,"end":29762,"confidence":0.99987,"speaker":null},{"text":"excuses.","start":29786,"end":30514,"confidence":0.56179,"speaker":null},{"text":"It","start":30642,"end":30882,"confidence":0.99943,"speaker":null},{"text":"will","start":30906,"end":31138,"confidence":0.99969,"speaker":null},{"text":"always","start":31194,"end":31458,"confidence":0.99994,"speaker":null},{"text":"find","start":31514,"end":31730,"confidence":0.99995,"speaker":null},{"text":"a","start":31770,"end":31922,"confidence":0.99955,"speaker":null},{"text":"reason","start":31946,"end":32130,"confidence":0.99995,"speaker":null},{"text":"to","start":32170,"end":32322,"confidence":0.99946,"speaker":null},{"text":"delay.","start":32346,"end":32866,"confidence":0.99962,"speaker":null},{"text":"But","start":32978,"end":33202,"confidence":0.99914,"speaker":null},{"text":"reality","start":33226,"end":33714,"confidence":0.99998,"speaker":null},{"text":"doesn\'t","start":33762,"end":33986,"confidence":0.97322,"speaker":null},{"text":"wait.","start":34018,"end":34514,"confidence":0.99851,"speaker":null},{"text":"Let","start":34642,"end":34882,"confidence":0.99917,"speaker":null},{"text":"me","start":34906,"end":35042,"confidence":0.9998,"speaker":null},{"text":"show","start":35066,"end":35202,"confidence":0.99979,"speaker":null},{"text":"you","start":35226,"end":35362,"confidence":0.99976,"speaker":null},{"text":"why.","start":35386,"end":35666,"confidence":0.98277,"speaker":null},{"text":"Every","start":35738,"end":35970,"confidence":0.9998,"speaker":null},{"text":"time","start":36010,"end":36162,"confidence":0.99825,"speaker":null},{"text":"you","start":36186,"end":36370,"confidence":0.99979,"speaker":null},{"text":"postpone","start":36410,"end":36914,"confidence":0.9998,"speaker":null},{"text":"action,","start":36962,"end":37266,"confidence":0.99999,"speaker":null},{"text":"you","start":37338,"end":37522,"confidence":0.99983,"speaker":null},{"text":"feed","start":37546,"end":37698,"confidence":0.99956,"speaker":null},{"text":"the","start":37714,"end":37842,"confidence":0.9996,"speaker":null},{"text":"monster","start":37866,"end":38178,"confidence":0.9973,"speaker":null},{"text":"of","start":38194,"end":38322,"confidence":0.99942,"speaker":null},{"text":"inertia.","start":38346,"end":39122,"confidence":0.99302,"speaker":null},{"text":"Science","start":39266,"end":39714,"confidence":0.99961,"speaker":null},{"text":"proves","start":39762,"end":39986,"confidence":0.97059,"speaker":null},{"text":"that","start":40018,"end":40210,"confidence":0.99976,"speaker":null},{"text":"momentum","start":40250,"end":40706,"confidence":0.99991,"speaker":null},{"text":"is","start":40738,"end":40834,"confidence":0.99989,"speaker":null},{"text":"the","start":40842,"end":40962,"confidence":0.99967,"speaker":null},{"text":"ultimate","start":40986,"end":41362,"confidence":0.99967,"speaker":null},{"text":"cheat","start":41426,"end":41746,"confidence":0.92138,"speaker":null},{"text":"code.","start":41778,"end":42306,"confidence":0.99809,"speaker":null},{"text":"Action","start":42418,"end":42738,"confidence":0.99988,"speaker":null},{"text":"breeds","start":42794,"end":43186,"confidence":0.78721,"speaker":null},{"text":"action.","start":43218,"end":43698,"confidence":0.99798,"speaker":null},{"text":"You\'re","start":43834,"end":44178,"confidence":0.99555,"speaker":null},{"text":"not","start":44194,"end":44370,"confidence":0.99988,"speaker":null},{"text":"cautious.","start":44410,"end":45042,"confidence":0.81681,"speaker":null},{"text":"You\'re","start":45186,"end":45506,"confidence":0.60711,"speaker":null},{"text":"just","start":45538,"end":45682,"confidence":0.99976,"speaker":null},{"text":"crippled","start":45706,"end":45986,"confidence":0.99955,"speaker":null},{"text":"by","start":46018,"end":46162,"confidence":0.99986,"speaker":null},{"text":"fear.","start":46186,"end":46706,"confidence":0.99933,"speaker":null},{"text":"Brutal","start":46818,"end":47186,"confidence":0.77449,"speaker":null},{"text":"truth","start":47218,"end":47506,"confidence":0.95581,"speaker":null},{"text":"1.","start":47538,"end":47778,"confidence":0.94672,"speaker":null},{"text":"The","start":47834,"end":48002,"confidence":0.99275,"speaker":null},{"text":"3","start":48026,"end":48258,"confidence":0.99879,"speaker":null},{"text":"second","start":48314,"end":48578,"confidence":0.99539,"speaker":null},{"text":"override.","start":48634,"end":49186,"confidence":0.98434,"speaker":null},{"text":"Meet","start":49218,"end":49458,"confidence":0.99107,"speaker":null},{"text":"Anya.","start":49514,"end":49986,"confidence":0.99826,"speaker":null},{"text":"A","start":50018,"end":50114,"confidence":0.98117,"speaker":null},{"text":"coder","start":50122,"end":50482,"confidence":0.83093,"speaker":null},{"text":"paralyzed","start":50546,"end":51106,"confidence":0.97182,"speaker":null},{"text":"by","start":51138,"end":51282,"confidence":0.99913,"speaker":null},{"text":"imposter","start":51306,"end":51842,"confidence":0.42561,"speaker":null},{"text":"syndrome.","start":51906,"end":52592,"confidence":0.85176,"speaker":null},{"text":"She","start":52746,"end":53060,"confidence":0.99889,"speaker":null},{"text":"forced","start":53100,"end":53316,"confidence":0.99964,"speaker":null},{"text":"herself","start":53348,"end":53684,"confidence":0.99964,"speaker":null},{"text":"to","start":53732,"end":53892,"confidence":0.99985,"speaker":null},{"text":"type","start":53916,"end":54164,"confidence":0.97062,"speaker":null},{"text":"one","start":54212,"end":54420,"confidence":0.99982,"speaker":null},{"text":"line","start":54460,"end":54612,"confidence":0.99998,"speaker":null},{"text":"of","start":54636,"end":54772,"confidence":0.99989,"speaker":null},{"text":"code","start":54796,"end":55124,"confidence":0.74201,"speaker":null},{"text":"within","start":55172,"end":55476,"confidence":0.99971,"speaker":null},{"text":"three","start":55548,"end":55828,"confidence":0.99989,"speaker":null},{"text":"seconds","start":55884,"end":56228,"confidence":0.99949,"speaker":null},{"text":"of","start":56244,"end":56372,"confidence":0.9997,"speaker":null},{"text":"doubt.","start":56396,"end":56676,"confidence":0.90359,"speaker":null},{"text":"Hitting.","start":56708,"end":57236,"confidence":0.99543,"speaker":null},{"text":"Not","start":57348,"end":57620,"confidence":0.9995,"speaker":null},{"text":"a","start":57660,"end":57764,"confidence":0.99994,"speaker":null},{"text":"perfect","start":57772,"end":58052,"confidence":0.89322,"speaker":null},{"text":"program,","start":58116,"end":58724,"confidence":0.99976,"speaker":null},{"text":"just","start":58892,"end":59220,"confidence":0.99845,"speaker":null},{"text":"one","start":59260,"end":59460,"confidence":0.99984,"speaker":null},{"text":"line.","start":59500,"end":59988,"confidence":0.99998,"speaker":null},{"text":"After","start":60124,"end":60420,"confidence":0.99946,"speaker":null},{"text":"a","start":60460,"end":60612,"confidence":0.9998,"speaker":null},{"text":"year,","start":60636,"end":60868,"confidence":0.66533,"speaker":null},{"text":"she","start":60924,"end":61140,"confidence":0.99989,"speaker":null},{"text":"launched","start":61180,"end":61428,"confidence":0.99996,"speaker":null},{"text":"a","start":61444,"end":61620,"confidence":0.99975,"speaker":null},{"text":"six","start":61660,"end":61860,"confidence":0.9999,"speaker":null},{"text":"figure","start":61900,"end":62196,"confidence":0.99965,"speaker":null},{"text":"app.","start":62228,"end":62660,"confidence":0.99605,"speaker":null},{"text":"Her","start":62780,"end":63060,"confidence":0.88002,"speaker":null},{"text":"secret,","start":63100,"end":63396,"confidence":0.96061,"speaker":null},{"text":"the","start":63468,"end":63700,"confidence":0.99256,"speaker":null},{"text":"three","start":63740,"end":63940,"confidence":0.99967,"speaker":null},{"text":"second","start":63980,"end":64228,"confidence":0.99776,"speaker":null},{"text":"rule.","start":64284,"end":64564,"confidence":0.99538,"speaker":null},{"text":"When","start":64612,"end":64772,"confidence":0.99952,"speaker":null},{"text":"hesitation","start":64796,"end":65412,"confidence":0.99955,"speaker":null},{"text":"strikes,","start":65476,"end":65892,"confidence":0.97872,"speaker":null},{"text":"attack","start":65956,"end":66228,"confidence":0.99969,"speaker":null},{"text":"it","start":66284,"end":66452,"confidence":0.99618,"speaker":null},{"text":"head","start":66476,"end":66660,"confidence":0.98133,"speaker":null},{"text":"on.","start":66700,"end":67044,"confidence":0.84724,"speaker":null},{"text":"Write","start":67132,"end":67396,"confidence":0.98657,"speaker":null},{"text":"one","start":67428,"end":67620,"confidence":0.99845,"speaker":null},{"text":"word,","start":67660,"end":68116,"confidence":0.97533,"speaker":null},{"text":"do","start":68228,"end":68500,"confidence":0.99886,"speaker":null},{"text":"one","start":68540,"end":68740,"confidence":0.99969,"speaker":null},{"text":"rep,","start":68780,"end":69124,"confidence":0.99985,"speaker":null},{"text":"make","start":69212,"end":69412,"confidence":0.99989,"speaker":null},{"text":"one","start":69436,"end":69620,"confidence":0.99939,"speaker":null},{"text":"call.","start":69660,"end":70148,"confidence":0.99966,"speaker":null},{"text":"This","start":70284,"end":70532,"confidence":0.99985,"speaker":null},{"text":"isn\'t","start":70556,"end":70836,"confidence":0.99978,"speaker":null},{"text":"about","start":70868,"end":71060,"confidence":0.99981,"speaker":null},{"text":"perfection.","start":71100,"end":71764,"confidence":0.53087,"speaker":null},{"text":"It\'s","start":71892,"end":72228,"confidence":0.99711,"speaker":null},{"text":"about","start":72244,"end":72420,"confidence":0.99996,"speaker":null},{"text":"proving","start":72460,"end":72676,"confidence":0.93235,"speaker":null},{"text":"to","start":72708,"end":72852,"confidence":0.9989,"speaker":null},{"text":"yourself.","start":72876,"end":73300,"confidence":0.8926,"speaker":null},{"text":"I","start":73380,"end":73572,"confidence":0.99742,"speaker":null},{"text":"control","start":73596,"end":73876,"confidence":0.99969,"speaker":null},{"text":"my","start":73948,"end":74132,"confidence":0.99992,"speaker":null},{"text":"fear.","start":74156,"end":74596,"confidence":0.9994,"speaker":null},{"text":"Brutal","start":74708,"end":75156,"confidence":0.55336,"speaker":null},{"text":"truth","start":75188,"end":75444,"confidence":0.9841,"speaker":null},{"text":"2.","start":75492,"end":75748,"confidence":0.92756,"speaker":null},{"text":"Embrace","start":75804,"end":76244,"confidence":0.99726,"speaker":null},{"text":"the","start":76292,"end":76404,"confidence":0.99937,"speaker":null},{"text":"carnage.","start":76412,"end":76804,"confidence":0.99881,"speaker":null},{"text":"Mark","start":76852,"end":77108,"confidence":0.99311,"speaker":null},{"text":"failed","start":77164,"end":77524,"confidence":0.99938,"speaker":null},{"text":"seven","start":77572,"end":77828,"confidence":0.99954,"speaker":null},{"text":"times","start":77884,"end":78148,"confidence":0.9999,"speaker":null},{"text":"before","start":78204,"end":78516,"confidence":0.99996,"speaker":null},{"text":"launching","start":78588,"end":78996,"confidence":0.99973,"speaker":null},{"text":"his","start":79028,"end":79172,"confidence":0.99908,"speaker":null},{"text":"game.","start":79196,"end":79764,"confidence":0.99593,"speaker":null},{"text":"Seven","start":79932,"end":80308,"confidence":0.99859,"speaker":null},{"text":"times","start":80364,"end":80580,"confidence":0.99983,"speaker":null},{"text":"he","start":80620,"end":80772,"confidence":0.99925,"speaker":null},{"text":"faced","start":80796,"end":81076,"confidence":0.99984,"speaker":null},{"text":"ridicule,","start":81108,"end":81732,"confidence":0.9999,"speaker":null},{"text":"bankruptcy,","start":81796,"end":82532,"confidence":0.79812,"speaker":null},{"text":"despair.","start":82596,"end":83284,"confidence":0.9982,"speaker":null},{"text":"His","start":83412,"end":83700,"confidence":0.96652,"speaker":null},{"text":"secret,","start":83740,"end":84372,"confidence":0.9983,"speaker":null},{"text":"Celebrate","start":84556,"end":85076,"confidence":0.99954,"speaker":null},{"text":"the","start":85108,"end":85252,"confidence":0.9997,"speaker":null},{"text":"failures.","start":85276,"end":86020,"confidence":0.99924,"speaker":null},{"text":"Every","start":86180,"end":86500,"confidence":0.99994,"speaker":null},{"text":"rejection","start":86540,"end":86996,"confidence":0.98197,"speaker":null},{"text":"letter","start":87028,"end":87316,"confidence":0.99993,"speaker":null},{"text":"went","start":87348,"end":87492,"confidence":0.99986,"speaker":null},{"text":"on","start":87516,"end":87700,"confidence":0.99996,"speaker":null},{"text":"his","start":87740,"end":87940,"confidence":0.99974,"speaker":null},{"text":"wall.","start":87980,"end":88484,"confidence":0.99741,"speaker":null},{"text":"Every","start":88612,"end":88900,"confidence":0.99996,"speaker":null},{"text":"setback","start":88940,"end":89396,"confidence":0.99991,"speaker":null},{"text":"became","start":89428,"end":89636,"confidence":0.99955,"speaker":null},{"text":"a","start":89668,"end":89812,"confidence":0.99991,"speaker":null},{"text":"war","start":89836,"end":90020,"confidence":0.99954,"speaker":null},{"text":"story.","start":90060,"end":90596,"confidence":0.99747,"speaker":null},{"text":"By","start":90748,"end":91012,"confidence":0.99994,"speaker":null},{"text":"owning","start":91036,"end":91348,"confidence":0.70565,"speaker":null},{"text":"the","start":91364,"end":91492,"confidence":0.99993,"speaker":null},{"text":"carnage,","start":91516,"end":91876,"confidence":0.99981,"speaker":null},{"text":"he","start":91908,"end":92052,"confidence":0.99991,"speaker":null},{"text":"disarmed","start":92076,"end":92516,"confidence":0.99993,"speaker":null},{"text":"his","start":92548,"end":92692,"confidence":0.99996,"speaker":null},{"text":"fear","start":92716,"end":92868,"confidence":0.99985,"speaker":null},{"text":"of","start":92884,"end":92964,"confidence":0.99981,"speaker":null},{"text":"it.","start":92972,"end":93332,"confidence":0.99428,"speaker":null},{"text":"Your","start":93436,"end":93652,"confidence":0.81062,"speaker":null},{"text":"rule.","start":93676,"end":94052,"confidence":0.84079,"speaker":null},{"text":"Fail,","start":94116,"end":94388,"confidence":0.99165,"speaker":null},{"text":"fast,","start":94444,"end":95012,"confidence":0.92461,"speaker":null},{"text":"fail.","start":95156,"end":95508,"confidence":0.99429,"speaker":null},{"text":"Forward.","start":95564,"end":96116,"confidence":0.96263,"speaker":null},{"text":"Each","start":96268,"end":96628,"confidence":0.99988,"speaker":null},{"text":"scar","start":96684,"end":97044,"confidence":0.99996,"speaker":null},{"text":"is","start":97092,"end":97204,"confidence":0.99995,"speaker":null},{"text":"a","start":97212,"end":97332,"confidence":0.99982,"speaker":null},{"text":"badge","start":97356,"end":97588,"confidence":0.99995,"speaker":null},{"text":"of","start":97604,"end":97732,"confidence":0.99991,"speaker":null},{"text":"honor.","start":97756,"end":98004,"confidence":0.61231,"speaker":null},{"text":"A","start":98052,"end":98212,"confidence":0.98364,"speaker":null},{"text":"testament","start":98236,"end":98596,"confidence":0.95528,"speaker":null},{"text":"to","start":98628,"end":98772,"confidence":0.99997,"speaker":null},{"text":"your","start":98796,"end":98932,"confidence":0.99955,"speaker":null},{"text":"resilience.","start":98956,"end":99652,"confidence":0.99976,"speaker":null},{"text":"Brutal","start":99796,"end":100276,"confidence":0.8299,"speaker":null},{"text":"Truth","start":100308,"end":100516,"confidence":0.99133,"speaker":null},{"text":"three.","start":100548,"end":100788,"confidence":0.98806,"speaker":null},{"text":"The","start":100844,"end":100964,"confidence":0.99116,"speaker":null},{"text":"victory","start":100972,"end":101284,"confidence":0.99975,"speaker":null},{"text":"cry.","start":101332,"end":101652,"confidence":0.99158,"speaker":null},{"text":"Most","start":101716,"end":101940,"confidence":0.99318,"speaker":null},{"text":"people","start":101980,"end":102180,"confidence":0.99997,"speaker":null},{"text":"shrink","start":102220,"end":102516,"confidence":0.99363,"speaker":null},{"text":"in","start":102548,"end":102644,"confidence":0.99971,"speaker":null},{"text":"the","start":102652,"end":102772,"confidence":0.99987,"speaker":null},{"text":"face","start":102796,"end":102932,"confidence":0.99999,"speaker":null},{"text":"of","start":102956,"end":103140,"confidence":0.98592,"speaker":null},{"text":"challenges.","start":103180,"end":103892,"confidence":0.99842,"speaker":null},{"text":"They","start":104036,"end":104340,"confidence":0.99848,"speaker":null},{"text":"internalize","start":104380,"end":104964,"confidence":0.82735,"speaker":null},{"text":"doubt,","start":105012,"end":105284,"confidence":0.99535,"speaker":null},{"text":"letting","start":105332,"end":105508,"confidence":0.99927,"speaker":null},{"text":"it","start":105524,"end":105652,"confidence":0.99985,"speaker":null},{"text":"fester.","start":105676,"end":106342,"confidence":0.99931,"speaker":null},{"text":"The","start":106476,"end":106770,"confidence":0.99674,"speaker":null},{"text":"fix.","start":106810,"end":107314,"confidence":0.98109,"speaker":null},{"text":"Scream","start":107442,"end":107874,"confidence":0.56879,"speaker":null},{"text":"your","start":107922,"end":108082,"confidence":0.96675,"speaker":null},{"text":"intentions,","start":108106,"end":108882,"confidence":0.99843,"speaker":null},{"text":"literally.","start":109026,"end":109842,"confidence":0.99274,"speaker":null},{"text":"Before","start":109986,"end":110338,"confidence":0.99996,"speaker":null},{"text":"every","start":110394,"end":110658,"confidence":0.99997,"speaker":null},{"text":"big","start":110714,"end":110882,"confidence":0.99979,"speaker":null},{"text":"meeting.","start":110906,"end":111282,"confidence":0.67912,"speaker":null},{"text":"Before","start":111386,"end":111698,"confidence":0.99995,"speaker":null},{"text":"every","start":111754,"end":112018,"confidence":0.99995,"speaker":null},{"text":"lift.","start":112074,"end":112402,"confidence":0.9979,"speaker":null},{"text":"Before","start":112466,"end":112786,"confidence":0.99995,"speaker":null},{"text":"every","start":112858,"end":113090,"confidence":0.99994,"speaker":null},{"text":"risk.","start":113130,"end":113474,"confidence":0.99984,"speaker":null},{"text":"Roar","start":113562,"end":113874,"confidence":0.5607,"speaker":null},{"text":"your","start":113922,"end":114082,"confidence":0.99763,"speaker":null},{"text":"commitment.","start":114106,"end":114722,"confidence":0.99909,"speaker":null},{"text":"Visualize","start":114866,"end":115474,"confidence":0.98244,"speaker":null},{"text":"success.","start":115522,"end":116114,"confidence":0.99916,"speaker":null},{"text":"Feel","start":116282,"end":116610,"confidence":0.99961,"speaker":null},{"text":"the","start":116650,"end":116802,"confidence":0.99984,"speaker":null},{"text":"power","start":116826,"end":117058,"confidence":0.99995,"speaker":null},{"text":"surge.","start":117114,"end":117762,"confidence":0.99169,"speaker":null},{"text":"Say","start":117906,"end":118210,"confidence":0.99117,"speaker":null},{"text":"I","start":118250,"end":118402,"confidence":0.99865,"speaker":null},{"text":"am","start":118426,"end":118610,"confidence":0.99803,"speaker":null},{"text":"unstoppable.","start":118650,"end":119394,"confidence":0.53441,"speaker":null},{"text":"This","start":119522,"end":119810,"confidence":0.99963,"speaker":null},{"text":"ritual","start":119850,"end":120194,"confidence":0.99997,"speaker":null},{"text":"rewires","start":120242,"end":120786,"confidence":0.99827,"speaker":null},{"text":"your","start":120818,"end":120962,"confidence":0.99986,"speaker":null},{"text":"brain","start":120986,"end":121234,"confidence":0.99991,"speaker":null},{"text":"to","start":121282,"end":121490,"confidence":0.9999,"speaker":null},{"text":"associate","start":121530,"end":122034,"confidence":0.99991,"speaker":null},{"text":"action","start":122082,"end":122338,"confidence":0.99998,"speaker":null},{"text":"with","start":122394,"end":122610,"confidence":0.95782,"speaker":null},{"text":"victory,","start":122650,"end":123042,"confidence":0.99987,"speaker":null},{"text":"not","start":123106,"end":123330,"confidence":0.99917,"speaker":null},{"text":"fear.","start":123370,"end":123874,"confidence":0.99803,"speaker":null},{"text":"Train","start":124002,"end":124306,"confidence":0.99137,"speaker":null},{"text":"your","start":124338,"end":124482,"confidence":0.99877,"speaker":null},{"text":"mind","start":124506,"end":124690,"confidence":0.99998,"speaker":null},{"text":"to","start":124730,"end":124882,"confidence":0.99992,"speaker":null},{"text":"crave","start":124906,"end":125106,"confidence":0.9998,"speaker":null},{"text":"the","start":125138,"end":125282,"confidence":0.99973,"speaker":null},{"text":"battlefield.","start":125306,"end":126066,"confidence":0.79561,"speaker":null},{"text":"You\'re","start":126178,"end":126466,"confidence":0.54523,"speaker":null},{"text":"not","start":126498,"end":126642,"confidence":0.99995,"speaker":null},{"text":"seeking","start":126666,"end":126914,"confidence":0.8871,"speaker":null},{"text":"comfort.","start":126962,"end":127538,"confidence":0.96545,"speaker":null},{"text":"You\'re","start":127634,"end":127906,"confidence":0.97014,"speaker":null},{"text":"hunting","start":127938,"end":128194,"confidence":0.96109,"speaker":null},{"text":"greatness.","start":128242,"end":128914,"confidence":0.99652,"speaker":null},{"text":"Unleashing","start":129042,"end":129666,"confidence":0.99974,"speaker":null},{"text":"isn\'t","start":129698,"end":129986,"confidence":0.99957,"speaker":null},{"text":"something","start":130018,"end":130210,"confidence":0.99994,"speaker":null},{"text":"you","start":130250,"end":130450,"confidence":0.99992,"speaker":null},{"text":"achieve.","start":130490,"end":131026,"confidence":0.99848,"speaker":null},{"text":"It\'s","start":131138,"end":131426,"confidence":0.92108,"speaker":null},{"text":"someone","start":131458,"end":131650,"confidence":0.99985,"speaker":null},{"text":"you","start":131690,"end":131842,"confidence":0.99987,"speaker":null},{"text":"become.","start":131866,"end":132398,"confidence":0.99912,"speaker":null},{"text":"The","start":132554,"end":132822,"confidence":0.99776,"speaker":null},{"text":"world","start":132846,"end":133078,"confidence":0.9999,"speaker":null},{"text":"wants","start":133134,"end":133318,"confidence":0.99952,"speaker":null},{"text":"you","start":133334,"end":133462,"confidence":0.99968,"speaker":null},{"text":"to","start":133486,"end":133622,"confidence":0.99974,"speaker":null},{"text":"cower,","start":133646,"end":134150,"confidence":0.97872,"speaker":null},{"text":"but","start":134230,"end":134470,"confidence":0.99878,"speaker":null},{"text":"you.","start":134510,"end":134710,"confidence":0.99702,"speaker":null},{"text":"You\'re","start":134750,"end":134918,"confidence":0.70492,"speaker":null},{"text":"a","start":134934,"end":135014,"confidence":0.99955,"speaker":null},{"text":"force","start":135022,"end":135206,"confidence":0.9902,"speaker":null},{"text":"of","start":135238,"end":135382,"confidence":0.99969,"speaker":null},{"text":"nature.","start":135406,"end":135894,"confidence":0.99586,"speaker":null},{"text":"You\'ve","start":136022,"end":136406,"confidence":0.94963,"speaker":null},{"text":"got","start":136438,"end":136630,"confidence":0.9947,"speaker":null},{"text":"the","start":136670,"end":136870,"confidence":0.99418,"speaker":null},{"text":"three","start":136910,"end":137158,"confidence":0.99942,"speaker":null},{"text":"second","start":137214,"end":137478,"confidence":0.998,"speaker":null},{"text":"override.","start":137534,"end":138054,"confidence":0.99414,"speaker":null},{"text":"Embrace","start":138102,"end":138454,"confidence":0.99816,"speaker":null},{"text":"the","start":138502,"end":138614,"confidence":0.99943,"speaker":null},{"text":"carnage.","start":138622,"end":138966,"confidence":0.99811,"speaker":null},{"text":"The","start":138998,"end":139142,"confidence":0.99757,"speaker":null},{"text":"victory","start":139166,"end":139494,"confidence":0.99962,"speaker":null},{"text":"cry.","start":139542,"end":139766,"confidence":0.98927,"speaker":null},{"text":"Now","start":139798,"end":139990,"confidence":0.99528,"speaker":null},{"text":"go.","start":140030,"end":140230,"confidence":0.99496,"speaker":null},{"text":"Seize","start":140270,"end":140566,"confidence":0.91807,"speaker":null},{"text":"your","start":140598,"end":140742,"confidence":0.97621,"speaker":null},{"text":"destiny.","start":140766,"end":141030,"confidence":0.98292,"speaker":null}]',
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
  bgm: {
    id: 4,
    name: "badass-aggressive-smart-brass-drums",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/badass-aggressive-smart-brass-drums.mp3",
    volume: 100,
  },
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
  aspectRatio: {
    id: 1,
    name: "video",
    width: 1920,
    height: 1080,
  },
  scenes: [
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
