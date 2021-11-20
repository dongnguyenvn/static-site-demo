/*
  Warnings:

  - You are about to drop the `Film` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Studio` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `avatarUrl` to the `Artist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Film" DROP CONSTRAINT "Film_studioId_fkey";

-- AlterTable
ALTER TABLE "Artist" ADD COLUMN     "avatarUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "Film";

-- DropTable
DROP TABLE "Studio";

-- RenameIndex
ALTER INDEX "Artist_name_key" RENAME TO "Artist.name_unique";
