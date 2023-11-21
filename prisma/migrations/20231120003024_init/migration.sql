/*
  Warnings:
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "user1" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "password" VARCHAR(64) NOT NULL,

    CONSTRAINT "user1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user1_id_key" ON "user1"("id");