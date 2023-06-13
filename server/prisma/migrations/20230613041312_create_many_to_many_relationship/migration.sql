/*
  Warnings:

  - You are about to drop the column `genreId` on the `Channel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Channel" DROP CONSTRAINT "Channel_genreId_fkey";

-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "genreId";

-- CreateTable
CREATE TABLE "GenresOnChannels" (
    "channelId" TEXT NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "GenresOnChannels_pkey" PRIMARY KEY ("channelId","genreId")
);

-- AddForeignKey
ALTER TABLE "GenresOnChannels" ADD CONSTRAINT "GenresOnChannels_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenresOnChannels" ADD CONSTRAINT "GenresOnChannels_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
