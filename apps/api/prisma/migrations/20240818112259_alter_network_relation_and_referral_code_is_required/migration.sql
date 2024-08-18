/*
  Warnings:

  - You are about to drop the column `organization_id` on the `networks` table. All the data in the column will be lost.
  - Added the required column `organization_slug` to the `networks` table without a default value. This is not possible if the table is not empty.
  - Made the column `referral_code` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "networks" DROP CONSTRAINT "networks_organization_id_fkey";

-- AlterTable
ALTER TABLE "networks" DROP COLUMN "organization_id",
ADD COLUMN     "organization_slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "referral_code" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "networks" ADD CONSTRAINT "networks_organization_slug_fkey" FOREIGN KEY ("organization_slug") REFERENCES "organizations"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
