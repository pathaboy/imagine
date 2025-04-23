import { CaptionStyleOne } from "../remotion/caption-styles/caption-style-one";
import React from "react";
import { EnterSlideTopDownExitLeft, MotionProps } from "../remotion/motion-templates/enter-slide-top-down-exit-left";
import { ScaleDownFade } from "../remotion/motion-templates/scale-down-fade";
import { ScaleDownUp } from "../remotion/motion-templates/scale-down-up";
import { CaptionStyleTwo } from "../remotion/caption-styles/caption-style.two";

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
    name: "chill-lofi",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/chill-lofi.mp3",
  },
  {
    id: 2,
    name: "comedic-jazz",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/comedic-jazz.mp3",
  },
  {
    id: 3,
    name: "dramatic-intense-buildup",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dramatic-intense-buildup.mp3",
  },
  {
    id: 4,
    name: "emotional-comeback-hero-journey-personal-transformation-style-1",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-comeback-hero-journey-personal-transformation-style-1.mp3",
  },
  {
    id: 5,
    name: "emotional-comeback-hero-journey-personal-transformation-style-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-comeback-hero-journey-personal-transformation-style-2.mp3",
  },
  {
    id: 6,
    name: "epic-crescendo-high-pitched-synths-rapid-strings-tension-peak-sudden-impact-stop-1",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/epic-crescendo-high-pitched-synths-rapid-strings-tension-peak-sudden-impact-stop-1.mp3",
  },
  {
    id: 7,
    name: "epic-crescendo-high-pitched-synths-rapid-strings-tension-peak-sudden-impact-stop-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/epic-crescendo-high-pitched-synths-rapid-strings-tension-peak-sudden-impact-stop-2.mp3",
  },
  {
    id: 8,
    name: "fight-for-your-dreams-motivation-never-give-up energy-style-1",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/fight-for-your-dreams-motivation-never-give-up%20energy-style-1.mp3",
  },
  {
    id: 9,
    name: "fight-for-your-dreams-motivation-never-give-up energy-style-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/fight-for-your-dreams-motivation-never-give-up%20energy-style-2.mp3",
  },
  {
    id: 10,
    name: "hope-bittersweet-guitar",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/hope-bittersweet-guitar.mp3",
  },
  {
    id: 11,
    name: "legendary warriors-great leaders-overcoming impossible-style-1",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/legendary%20warriors-great%20leaders-overcoming%20impossible-style-1.mp3",
  },
  {
    id: 12,
    name: "legendary warriors-great leaders-overcoming impossible-style-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/legendary%20warriors-great%20leaders-overcoming%20impossible-style-2.mp3",
  },
  {
    id: 13,
    name: "motivation-orchestra-drums",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/motivation-orchestra-drums.mp3",
  },
  {
    id: 14,
    name: "motivation-success-dare-to-do-style-1",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/motivation-success-dare-to-do-style-1.mp3",
  },
  {
    id: 15,
    name: "motivation-success-dare-to-do-style-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/motivation-success-dare-to-do-style-2.mp3",
  },
  {
    id: 16,
    name: "motivational-bgm",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/motivational-bgm.mp3",
  },
  {
    id: 17,
    name: "nostalgic-orchestra",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/nostalgic-orchestra.mp3",
  },
  {
    id: 18,
    name: "quirky-playful-jazz",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/quirky-playful-jazz.mp3",
  },
  {
    id: 19,
    name: "sad-melodrama-orchestra",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/sad-melodrama-orchestra.mp3",
  },
  {
    id: 20,
    name: "sentimental-piano",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/sentimental-piano.mp3",
  },
  {
    id: 21,
    name: "soft-ambient-piano",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/soft-ambient-piano.mp3",
  },
  {
    id: 22,
    name: "soft-eerie-synths",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/soft-eerie-synths.mp3",
  },
  {
    id: 23,
    name: "soft-piano-melancholic-undertone",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/soft-piano-melancholic-undertone.mp3",
  },
  {
    id: 24,
    name: "zen-wisdom-monk-ancient-style-1",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/zen-wisdom-monk-ancient-style-1.mp3",
  },
  {
    id: 25,
    name: "zen-wisdom-monk-ancient-style-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/zen-wisdom-monk-ancient-style-2.mp3",
  },
  {
    id: 26,
    name: "ethereal-ambient-with-slow-melodic-progressions-and-emotional-depth-1",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/ethereal-ambient-with-slow-melodic-progressions-and-emotional-depth-1.mp3",
  },
  {
    id: 27,
    name: "gentle-tibetan-flute-soft-ambient-pads-with-distant-temple-bells-evoking-peaceful-himalayas-1",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/gentle-tibetan-flute-soft-ambient-pads-with-distant-temple-bells-evoking-peaceful-himalayas-1.mp3",
  },
  {
    id: 28,
    name: "gentle-tibetan-flute-soft-ambient-pads-with-distant-temple-bells-evoking-peaceful-himalayas-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/gentle-tibetan-flute-soft-ambient-pads-with-distant-temple-bells-evoking-peaceful-himalayas-2.mp3",
  },
  {
    id: 29,
    name: "meditative-bgm-shakuhachi-flute-low-chants-flowing-water-sounds-1",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/meditative-bgm-shakuhachi-flute-low-chants-flowing-water-sounds-1.mp3",
  },
  {
    id: 30,
    name: "meditative-bgm-shakuhachi-flute-low-chants-flowing-water-sounds-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/meditative-bgm-shakuhachi-flute-low-chants-flowing-water-sounds-2.mp3",
  },
  {
    id: 31,
    name: "ambient-guitar-soft-cinematic-drums-evolving-synth-textures-1",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/ambient-guitar-soft-cinematic-drums-evolving-synth-textures-1.mp3",
  },
  {
    id: 32,
    name: "ambient-guitar-soft-cinematic-drums-evolving-synth-textures-2",
    bgmUrl:
      "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/ambient-guitar-soft-cinematic-drums-evolving-synth-textures-2.mp3",
  },
  {
    id: 33,
    name: "attitude-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/shorts-bgm/attitude-beats.mp3"
  }
];

export const getVoicePrompt = (narrationScript: any, tone: string) => {
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
];

interface Motion {
  id: string;
  name: string;
  component: React.FC<MotionProps>;
}

interface MotionImage {
  id: number;
  start: number;
  end: number;
  imagePrompt: string;
  imageSrc: string;
  motion?: Motion;
}

export const addMotionToImages = (images: MotionImage[]) => {
  const motionArray: Motion[] = [
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
      component: ScaleDownUp,
    },
  ];

  const motionImages = images.map((item, index) => {
    return {
      ...item,
      motion: motionArray[index % motionArray.length],
    };
  });

  return motionImages;
};
