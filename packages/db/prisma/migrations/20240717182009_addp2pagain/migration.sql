/*
  Warnings:

  - You are about to drop the column `toUser` on the `p2p` table. All the data in the column will be lost.
  - Added the required column `toUserId` to the `p2p` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "p2p" DROP CONSTRAINT "p2p_toUser_fkey";

-- AlterTable
ALTER TABLE "p2p" DROP COLUMN "toUser",
ADD COLUMN     "toUserId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "p2p" ADD CONSTRAINT "p2p_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
