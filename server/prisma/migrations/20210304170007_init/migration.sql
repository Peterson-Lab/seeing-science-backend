/*
  Warnings:

  - You are about to drop the column `userId` on the `Trial` table. All the data in the column will be lost.
  - You are about to drop the column `experimentId` on the `Trial` table. All the data in the column will be lost.
  - Added the required column `experiment_id` to the `Trial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Trial" DROP CONSTRAINT "Trial_experimentId_fkey";

-- DropForeignKey
ALTER TABLE "Trial" DROP CONSTRAINT "Trial_userId_fkey";

-- AlterTable
ALTER TABLE "Trial" DROP COLUMN "userId",
DROP COLUMN "experimentId",
ADD COLUMN     "user_id" INTEGER,
ADD COLUMN     "experiment_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Trial" ADD FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trial" ADD FOREIGN KEY ("experiment_id") REFERENCES "Experiment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
