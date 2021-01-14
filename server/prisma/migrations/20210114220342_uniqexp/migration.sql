/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[name]` on the table `Experiment`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Experiment.name_unique" ON "Experiment"("name");
