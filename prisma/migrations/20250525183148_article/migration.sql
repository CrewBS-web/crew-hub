/*
  Warnings:

  - You are about to drop the `Articels` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Articels";

-- CreateTable
CREATE TABLE "Articles" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);
