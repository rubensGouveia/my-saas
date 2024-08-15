/*
  Warnings:

  - Changed the type of `time` on the `appointments` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "appointments" DROP COLUMN "time",
ADD COLUMN     "time" TIME(1) NOT NULL;
