-- CreateTable
CREATE TABLE "Articels" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "images" TEXT[],

    CONSTRAINT "Articels_pkey" PRIMARY KEY ("id")
);
