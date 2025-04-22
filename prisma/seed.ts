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
];


async function main() {
  console.log('Seeding vocals...')
  for (const vocal of vocals) {
    await prisma.voiceOver.upsert({where: {id: vocal.id}, create: {previewUrl: vocal.previewUrl,
      voice: vocal.voice}, update: {}})
  }
  console.log("seeding bgms...")
  for (const bgm of bgms) {
    await prisma.bgm.upsert({where: {id: bgm.id}, create: {name: bgm.name,
      bgmUrl: bgm.bgmUrl}, update: {}})
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