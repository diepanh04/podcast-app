/*
  Warnings:

  - Added the required column `description` to the `Channel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Channel" ADD COLUMN "description" TEXT DEFAULT 'No description';
UPDATE "Channel" SET "description" = 'Some value' WHERE "description" IS NULL;

