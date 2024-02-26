/*
  Warnings:

  - You are about to drop the column `hospitalId` on the `Address` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `Hospital` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addressId` to the `Hospital` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_hospitalId_fkey";

-- DropIndex
DROP INDEX "Address_hospitalId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "hospitalId";

-- AlterTable
ALTER TABLE "Hospital" ADD COLUMN     "addressId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_addressId_key" ON "Hospital"("addressId");

-- AddForeignKey
ALTER TABLE "Hospital" ADD CONSTRAINT "Hospital_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
