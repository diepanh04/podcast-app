/*
  Warnings:

  - Made the column `description` on table `Channel` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Channel" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" DROP DEFAULT;
