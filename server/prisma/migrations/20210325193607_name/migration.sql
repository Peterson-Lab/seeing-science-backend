/*
  Warnings:

  - You are about to drop the `drtTrialResponse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "drtTrialResponse";

-- CreateTable
CREATE TABLE "DrtTrialResponse" (
    "id" SERIAL NOT NULL,
    "participant_id" INTEGER NOT NULL,
    "question" INTEGER NOT NULL,
    "answer" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "correct" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
