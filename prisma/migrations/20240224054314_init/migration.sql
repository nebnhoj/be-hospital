-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_id_fkey";

-- AddForeignKey
ALTER TABLE "Hospital" ADD CONSTRAINT "Hospital_id_fkey" FOREIGN KEY ("id") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
