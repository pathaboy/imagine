-- DropForeignKey
ALTER TABLE "Scene" DROP CONSTRAINT "Scene_videoId_fkey";

-- DropForeignKey
ALTER TABLE "VoiceOverContent" DROP CONSTRAINT "VoiceOverContent_videoId_fkey";

-- AddForeignKey
ALTER TABLE "Scene" ADD CONSTRAINT "Scene_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoiceOverContent" ADD CONSTRAINT "VoiceOverContent_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;
