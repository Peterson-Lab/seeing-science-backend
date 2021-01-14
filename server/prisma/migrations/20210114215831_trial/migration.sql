/*
  Warnings:

  - You are about to drop the `Response` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_experimentId_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_userId_fkey";

-- CreateTable
CREATE TABLE "Trial" (
"id" SERIAL,
    "userId" INTEGER,
    "experimentId" INTEGER NOT NULL,
    "responses" JSONB[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "Response";

-- AddForeignKey
ALTER TABLE "Trial" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trial" ADD FOREIGN KEY("experimentId")REFERENCES "Experiment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
