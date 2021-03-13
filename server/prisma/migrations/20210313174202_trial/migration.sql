/*
  Warnings:

  - You are about to drop the column `user_id` on the `Trial` table. All the data in the column will be lost.
  - Added the required column `participant_id` to the `Trial` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Trial" DROP CONSTRAINT "Trial_user_id_fkey";

-- AlterTable
ALTER TABLE "Trial" DROP COLUMN "user_id",
ADD COLUMN     "participant_id" INTEGER NOT NULL;
