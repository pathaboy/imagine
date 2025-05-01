-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "credits" INTEGER NOT NULL DEFAULT 3,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "title" TEXT,
    "script" TEXT,
    "transcriptionId" TEXT,
    "transcribedWords" TEXT,
    "transcribedSubtitles" TEXT,
    "fps" INTEGER NOT NULL DEFAULT 30,
    "totalDuration" INTEGER,
    "imageStyle" TEXT NOT NULL,
    "captionStyle" TEXT NOT NULL,
    "thumbnailUrl" TEXT,
    "bgmId" INTEGER,
    "aspectRatioId" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AspectRatio" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,

    CONSTRAINT "AspectRatio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scene" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "start" INTEGER NOT NULL,
    "end" INTEGER NOT NULL,
    "motionTemplateId" TEXT NOT NULL DEFAULT 'pull-out',
    "imagePrompt" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "shotSize" TEXT NOT NULL DEFAULT 'full-shot',
    "cameraAngle" TEXT NOT NULL DEFAULT 'shoulder-level',
    "videoId" TEXT NOT NULL,

    CONSTRAINT "Scene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoiceOverContent" (
    "id" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,
    "voiceId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,

    CONSTRAINT "VoiceOverContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoiceOver" (
    "id" SERIAL NOT NULL,
    "voiceId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "previewUrl" TEXT NOT NULL,

    CONSTRAINT "VoiceOver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bgm" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bgmUrl" TEXT NOT NULL,
    "volume" INTEGER NOT NULL DEFAULT 100,

    CONSTRAINT "Bgm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AspectRatio_name_key" ON "AspectRatio"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VoiceOver_voiceId_key" ON "VoiceOver"("voiceId");

-- CreateIndex
CREATE UNIQUE INDEX "VoiceOver_name_key" ON "VoiceOver"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Bgm_name_key" ON "Bgm"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_bgmId_fkey" FOREIGN KEY ("bgmId") REFERENCES "Bgm"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_aspectRatioId_fkey" FOREIGN KEY ("aspectRatioId") REFERENCES "AspectRatio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scene" ADD CONSTRAINT "Scene_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoiceOverContent" ADD CONSTRAINT "VoiceOverContent_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
