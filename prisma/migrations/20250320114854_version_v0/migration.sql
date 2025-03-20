-- AlterTable
ALTER TABLE "User" ADD COLUMN     "credits" INTEGER NOT NULL DEFAULT 3;

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "fps" INTEGER NOT NULL,
    "totalFrames" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "bgmId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Script" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "videoId" TEXT,

    CONSTRAINT "Script_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scene" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "fromFrameNumber" INTEGER NOT NULL,
    "totalFrames" INTEGER NOT NULL,
    "sceneTemplateId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,

    CONSTRAINT "Scene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "prompt" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "sceneId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoiceContent" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "voiceOverId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,

    CONSTRAINT "VoiceContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Voiceover" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sampleUrl" TEXT NOT NULL,
    "vocalId" TEXT NOT NULL,

    CONSTRAINT "Voiceover_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bgm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bgmUrl" TEXT NOT NULL,

    CONSTRAINT "Bgm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VoiceContent_videoId_key" ON "VoiceContent"("videoId");

-- CreateIndex
CREATE UNIQUE INDEX "Voiceover_name_key" ON "Voiceover"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Voiceover_vocalId_key" ON "Voiceover"("vocalId");

-- CreateIndex
CREATE UNIQUE INDEX "Bgm_name_key" ON "Bgm"("name");

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_bgmId_fkey" FOREIGN KEY ("bgmId") REFERENCES "Bgm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Script" ADD CONSTRAINT "Script_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scene" ADD CONSTRAINT "Scene_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "Scene"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoiceContent" ADD CONSTRAINT "VoiceContent_voiceOverId_fkey" FOREIGN KEY ("voiceOverId") REFERENCES "Voiceover"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoiceContent" ADD CONSTRAINT "VoiceContent_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
