-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "buildingNumber" TEXT,
    "type" TEXT,
    "floorNumber" TEXT,
    "street" TEXT,
    "barangay" TEXT,
    "city" TEXT,
    "zipCode" TEXT,
    "province" TEXT,
    "region" TEXT,
    "country" TEXT,
    "longitude" TEXT,
    "latitude" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_id_fkey" FOREIGN KEY ("id") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
