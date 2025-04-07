/*
  Warnings:

  - You are about to drop the column `vocalId` on the `Voiceover` table. All the data in the column will be lost.
  - You are about to drop the `Script` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imageStyle` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `script` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `narrationTone` to the `VoiceContent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Script" DROP CONSTRAINT "Script_videoId_fkey";

-- DropForeignKey
ALTER TABLE "VoiceContent" DROP CONSTRAINT "VoiceContent_voiceOverId_fkey";

-- DropIndex
DROP INDEX "VoiceContent_videoId_key";

-- DropIndex
DROP INDEX "Voiceover_vocalId_key";

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "imageStyle" TEXT NOT NULL,
ADD COLUMN     "script" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "VoiceContent" ADD COLUMN     "narrationTone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Voiceover" DROP COLUMN "vocalId";

-- DropTable
DROP TABLE "Script";

-- CreateTable
CREATE TABLE "Caption" (
    "id" TEXT NOT NULL,
    "start" INTEGER NOT NULL,
    "end" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "captionStyle" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,

    CONSTRAINT "Caption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Caption" ADD CONSTRAINT "Caption_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
