import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

const imageStyles = [
  {
    id: 1,
    name: "anime",
    tags: ", anime:1.3, line drawing, asian influence, vibrant colors, cel shading, large expressive eyes, detailed hair, dynamic poses, action scenes",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/anime.jpg`,
  },
  {
    id: 2,
    name: "2d-traditional-animation",
    tags: ", traditional 2D animation, hand-drawn, frames, expressive, vibrant colors, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/2d-traditional-animation.jpg`,
  },
  {
    id: 3,
    name: "3d-movie",
    tags: ", epic realistic, pixar style, disney, cycles render:1.3, caustics, glossy:0.58, artstation:0.2, cute",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/3d-movie.jpg`,
  },
  {
    id: 4,
    name: "2d-cartoon",
    tags: ", 2D, 2-d, line drawing, cartoon, flat, vibrant, drawn, animation, illustration, exaggerated features, expressive poses, whimsical, dynamic motion, humorous, colorful, lively, imaginative, stylized, caricatured, energetic, playful, surreal, fantastical, animated, expressive, fluid, bold outlines, clear shapes, simple forms, iconic, classic",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/2d-cartoon.jpg`,
  },
  {
    id: 5,
    name: "caricature",
    tags: ", big head, big eyes, caricature, a caricature, digital rendering, figurativism:0.8",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/caricature.jpg`,
  },
  {
    id: 6,
    name: "comic-book",
    tags: ", neutral palette, comic style, muted colors, illustration, cartoon, soothing tones, low saturation",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/comic-book.jpg`,
  },
  {
    id: 7,
    name: "cyberpunk",
    tags: ", cyberpunk, futuristic, neon colors, dark atmosphere, highly detailed, neon lights, urban, dystopian, high-tech, low-life",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/cyberpunk.jpg`,
  },
  {
    id: 8,
    name: "digital-painting",
    tags: ", digital painting, smooth gradients, vibrant colors, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/digital-painting.jpg`,
  },
  {
    id: 9,
    name: "pixar",
    tags: ", in the style of Pixar, 3D animation, heartwarming stories, photorealistic environments, appealing character designs, emotional depth, detailed, professional",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/pixar.jpg`,
  },
  {
    id: 10,
    name: "fantasy",
    tags: ", fantasy art, imaginative, vibrant colors, mythical creatures, detailed, epic, magical, dynamic, mythical, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/fantasy.jpg`,
  },
  {
    id: 11,
    name: "ghibli",
    tags: ", in the style of Studio Ghibli, Anime, magical realism, environmental themes, unique characters, breathtaking landscapes, highly detailed",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/ghibli-style.jpg`,
  },
  {
    id: 12,
    name: "pixar-tintin",
    tags: ", bold outlines with smooth shading, vivid colors, warm and slightly nostalgic tones, stylized proportions (slightly exaggerated head/eyes, cartoony face), detailed environment with rural aesthetics ,sunlit, cinematic lighting with dramatic rays ,a mix between Pixar concept art and Tintin-style comic realism",
    imageUrl: `https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/image-styles/pixar-tintin.jpg`,
  },
];


const vocals = [
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


const bgms = [
  {
    id: 1,
    name: "arabic-inspirational-loud-soft-strings",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/arabic-inspirational-loud-soft-strings.mp3"
  },
  {
    id: 2,
    name: "attitude-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/attitude-beats.mp3"
  },
  {
    id: 3,
    name: "attitude-edm-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/attitude-edm-beats.mp3"
  },
  {
    id: 4,
    name: "badass-aggressive-smart-brass-drums",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/badass-aggressive-smart-brass-drums.mp3"
  },
  {
    id: 5,
    name: "charming-love-violin-drums",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/charming-love-violin-drums.mp3"
  },
  {
    id: 6,
    name: "chill-lofi",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/chill-lofi.mp3"
  },
  {
    id: 7,
    name: "comedy-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/comedy-beats.mp3"
  },
  {
    id: 8,
    name: "crazy-comedy",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/crazy-comedy.mp3"
  },
  {
    id: 9,
    name: "crazy-siren-stylish-villian-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/crazy-siren-stylish-villian-beats.mp3"
  },
  {
    id: 10,
    name: "cunning-hero-grand-fast-tabla-cresendo",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/cunning-hero-grand-fast-tabla-cresendo.mp3"
  },
  {
    id:11,
    name: "cute-feel-good-piano-tabla-fusion",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/cute-feel-good-piano-tabla-fusion.mp3"
  },
  {
    id: 12,
    name: "dangerous-stylish-aggressive-relentless-drums-brass",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dangerous-stylish-aggressive-relentless-drums-brass.mp3"
  },
  {
    id: 13,
    name: "dark-intense-tension-orchestra",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dark-intense-tension-orchestra.mp3"
  },
  {
    id: 14,
    name: "dramatic-piano",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dramatic-piano.mp3"
  },
  {
    id: 15,
    name: "emotional-nostalgia-happy-bagpipe",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-nostalgia-happy-bagpipe.mp3"
  },
  {
    id: 16,
    name: "emotional-piano-humming-violin",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-piano-humming-violin.mp3"
  },
  {
    id: 17,
    name: "emotional-piano",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-piano.mp3"
  },
  {
    id: 18,
    name: "emotional-trauma-piano",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/emotional-trauma-piano.mp3"
  },
  {
    id: 19,
    name: "energetic-strings-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/energetic-strings-beats.mp3"
  },
  {
    id: 20,
    name: "feel-good-flute-tabla",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/feel-good-flute-tabla.mp3"
  },
  {
    id: 21,
    name: "flashback-lost-revival-violin-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/flashback-lost-revival-violin-beats.mp3"
  },
  {
    id: 22,
    name: "gangsta-revenge-drum-edm-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/gangsta-revenge-drum-edm-beats.mp3"
  },
  {
    id: 23,
    name: "goosebumps",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/goosebumps.mp3"
  },
  {
    id: 24,
    name: "grand-emotion-drama-pain-tragedy-violin-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/grand-emotion-drama-pain-tragedy-violin-beats.mp3"
  },
  {
    id: 25,
    name: "grand-introspective-bgm",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/grand-introspective-bgm.mp3"
  },
  {
    id: 26,
    name: "happy-arabic-ukulele",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/happy-arabic-ukulele.mp3"
  },
  {
    id: 27,
    name: "happy-flute-tabla-strings",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/happy-flute-tabla-strings.mp3"
  },
  {
    id: 28,
    name: "happy-innocent-pulsati",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/happy-innocent-pulsati.mp3"
  },
  {
    id: 29,
    name: "happy-mood-piano",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/happy-mood-piano.mp3"
  },
  {
    id: 30,
    name: "heart-strings",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/heart-strings.mp3"
  },
  {
    id: 31,
    name: "heroic-band",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/heroic-band.mp3"
  },
  {
    id: 32,
    name: "hidden-secrets",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/hidden-secrets.mp3"
  },
  {
    id: 33,
    name: "hope-bittersweet-guitar",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/hope-bittersweet-guitar.mp3"
  },
  {
    id: 34,
    name: "lost-memories-happy-feeling-pulsati",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/lost-memories-happy-feeling-pulsati.mp3"
  },
  {
    id: 35,
    name: "lost-ominous-synth-searching-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/lost-ominous-synth-searching-beats.mp3"
  },
  {
    id: 36,
    name: "love-arabic-ukulele",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/love-arabic-ukulele.mp3"
  },{
    id: 37,
    name: "love-flute",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/love-flute.mp3"
  },{
    id: 38,
    name: "motivational-ukulele",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/motivational-ukulele.mp3"
  },{
    id: 39,
    name: "musical-uplifting-strings",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/musical-uplifting-strings.mp3"
  },{
    id: 40,
    name: "mystery-remorse-violin-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/mystery-remorse-violin-beats.mp3"
  },{
    id: 41,
    name: "mystery-tabla",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/mystery-tabla.mp3"
  },{
    id: 42,
    name: "nostalgic-orchestra",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/nostalgic-orchestra.mp3"
  },{
    id: 43,
    name: "querky-swag-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/querky-swag-beats.mp3"
  },{
    id: 44,
    name: "regret-strings-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/regret-strings-beats.mp3"
  },{
    id: 45,
    name: "returning-home-strings",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/returning-home-strings.mp3"
  },{
    id: 46,
    name: "revenge-supicion-tabla-flute",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/revenge-supicion-tabla-flute.mp3"
  },{
    id: 47,
    name: "royal-posh-piano-lofi-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/royal-posh-piano-lofi-beats.mp3"
  },{
    id: 48,
    name: "sad-guitar",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/sad-guitar.mp3"
  },{
    id: 49,
    name: "sad-melodrama-orchestra",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/sad-melodrama-orchestra.mp3"
  },{
    id: 50,
    name: "sentimental-piano",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/sentimental-piano.mp3"
  },{
    id: 51,
    name: "silly-comedy",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/silly-comedy.mp3"
  },{
    id: 52,
    name: "soft-ambient-piano",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/soft-ambient-piano.mp3"
  },{
    id: 53,
    name: "soft-piano-melancholic-undertone",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/soft-piano-melancholic-undertone.mp3"
  },{
    id: 54,
    name: "spiritual-minimalistic-hopeful-piano",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/spiritual-minimalistic-hopeful-piano.mp3"
  },{
    id: 55,
    name: "stylish-violin-attitude-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/stylish-violin-attitude-beats.mp3"
  },{
    id: 56,
    name: "suffering-deep-anger-piano-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/suffering-deep-anger-piano-beats.mp3"
  },{
    id: 57,
    name: "suspense-flute-tabla-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/suspense-flute-tabla-beats.mp3"
  },{
    id: 58,
    name: "suspense-revealing-tabla-flute",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/suspense-revealing-tabla-flute.mp3"
  },{
    id: 59,
    name: "suspicion-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/suspicion-beats.mp3"
  },
  {
    id: 60,
    name: "swag-attitiude-piano-high-beats-long",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/swag-attitiude-piano-high-beats-long.mp3"
  },
  {
    id: 61,
    name: "swag-attitude-piano-high-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/swag-attitude-piano-high-beats.mp3"
  },
  {
    id: 62,
    name: "sweet-ukulele",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/sweet-ukulele.mp3"
  },
  {
    id: 63,
    name: "tense-rustic-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/tense-rustic-beats.mp3"
  },
  {
    id: 64,
    name: "tense-strings-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/tense-strings-beats.mp3"
  },
  {
    id: 65,
    name: "unknown-curious-piano",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/unknown-curious-piano.mp3"
  },
  {
    id: 66,
    name: "uplifting-ukulele-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/uplifting-ukulele-beats.mp3"
  },
  {
    id: 67,
    name: "vengeance-revenge-pain-piano-drums",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/vengeance-revenge-pain-piano-drums.mp3"
  },
  {
    id: 68,
    name: "vibing-guitar-snaps",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/vibing-guitar-snaps.mp3"
  },
  {
    id: 69,
    name: "whistles-romantic-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/whistles-romantic-beats.mp3"
  },
  {
    id: 70,
    name: "whistles-romantic-humming-beats",
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/whistles-romantic-humming-beats.mp3"
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
    bgmUrl: "https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/bgm/dare-to-do-motivation-2.mp3",
  },
];


export const aspectRatios = [
  {
    id: 1,
    name: "video-full-screen",
    width: 1280,
    height: 720,
    frameWidth: 1280,
    frameHeight: 720,
  },
  {
    id: 2,
    name: "mobile-full-screen",
    width: 720,
    height: 1280,
    frameWidth: 720,
    frameHeight: 1280,
  },
  {
    id: 3,
    name: "video-sixteen-by-nine",
    width: 1280,
    height: 720,
    frameWidth: 720,
    frameHeight: 540,
  },
  {
    id: 4,
    name: "mobile-four-by-three",
    width: 720,
    height: 1280,
    frameWidth: 720,
    frameHeight: 540,
  },
]

async function main() {
  console.log('Seeding vocals...')
  for (const vocal of vocals) {
    await prisma.voiceOver.upsert({where: {id: vocal.id}, create: {previewUrl: vocal.previewUrl,
      voiceId: vocal.voiceId, name: vocal.name}, update: {}})
  }
  console.log("seeding bgms...")
  for (const bgm of bgms) {
    await prisma.bgm.upsert({where: {id: bgm.id}, create: {name: bgm.name,
      bgmUrl: bgm.bgmUrl}, update: {}})
  }
  console.log("Seeding aspect ratios")
  for (const ar of aspectRatios) {
    await prisma.aspectRatio.upsert({where: {id: ar.id}, create: {name: ar.name, width: ar.width, height: ar.height, frameHeight: ar.frameHeight, frameWidth: ar.frameWidth}, update:{}})
  }
}

main().catch(e => {
  console.log(e)
  process.exit(1)
}).then(()=> {
  console.log("Data seeded successfully")
}).finally(async()=> {
  await prisma.$disconnect()
})