-- CreateTable
CREATE TABLE "Drawing" (
    "id" SERIAL NOT NULL,
    "prompt" TEXT NOT NULL,
    "image" BYTEA NOT NULL,

    PRIMARY KEY ("id")
);
