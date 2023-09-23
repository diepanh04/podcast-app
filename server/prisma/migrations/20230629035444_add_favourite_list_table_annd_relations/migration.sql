/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "FavouriteList" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "FavouriteList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavouriteChannel" (
    "id" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "favouriteListId" TEXT NOT NULL,

    CONSTRAINT "FavouriteChannel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FavouriteList_userId_key" ON "FavouriteList"("userId");

-- AddForeignKey
ALTER TABLE "FavouriteList" ADD CONSTRAINT "FavouriteList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteChannel" ADD CONSTRAINT "FavouriteChannel_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteChannel" ADD CONSTRAINT "FavouriteChannel_favouriteListId_fkey" FOREIGN KEY ("favouriteListId") REFERENCES "FavouriteList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
