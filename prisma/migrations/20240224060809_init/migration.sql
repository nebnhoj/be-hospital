/*
  Warnings:

  - You are about to drop the column `addressId` on the `Hospital` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Hospital` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Hospital" DROP CONSTRAINT "Hospital_addressId_fkey";

-- DropIndex
DROP INDEX "Hospital_addressId_key";

-- AlterTable
ALTER TABLE "Hospital" DROP COLUMN "addressId",
ADD COLUMN     "address" JSONB NOT NULL;

-- DropTable
DROP TABLE "Address";
