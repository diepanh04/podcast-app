-- CreateTable
CREATE TABLE "FavouriteEpisode" (
    "id" TEXT NOT NULL,
    "episodeId" TEXT NOT NULL,
    "favouriteListId" TEXT NOT NULL,

    CONSTRAINT "FavouriteEpisode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavouriteEpisode" ADD CONSTRAINT "FavouriteEpisode_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "Episode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavouriteEpisode" ADD CONSTRAINT "FavouriteEpisode_favouriteListId_fkey" FOREIGN KEY ("favouriteListId") REFERENCES "FavouriteList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
