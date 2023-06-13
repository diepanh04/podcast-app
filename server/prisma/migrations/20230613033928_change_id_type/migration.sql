/*
  Warnings:

  - Changed the type of `genreId` on the `Channel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Genre` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Channel" DROP CONSTRAINT "Channel_genreId_fkey";

-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "genreId",
ADD COLUMN     "genreId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Genre_id_key" ON "Genre"("id");

-- AddForeignKey
ALTER TABLE "Channel" ADD CONSTRAINT "Channel_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
