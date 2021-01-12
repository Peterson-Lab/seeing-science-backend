/*
  Warnings:

  - You are about to drop the `ExperimentResponses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExperimentResponses" DROP CONSTRAINT "ExperimentResponses_experimentId_fkey";

-- DropForeignKey
ALTER TABLE "ExperimentResponses" DROP CONSTRAINT "ExperimentResponses_userId_fkey";

-- CreateTable
CREATE TABLE "ExperimentResponse" (
"id" SERIAL,
    "userId" INTEGER,
    "experimentId" INTEGER NOT NULL,
    "responses" JSONB[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "ExperimentResponses";

-- AddForeignKey
ALTER TABLE "ExperimentResponse" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExperimentResponse" ADD FOREIGN KEY("experimentId")REFERENCES "Experiment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
