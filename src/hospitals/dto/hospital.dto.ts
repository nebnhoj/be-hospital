import { Prisma } from '@prisma/client';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class HospitalDTO {
  @IsNotEmpty()
  name: string;
  type: string;
  phoneNumber: string;
  telephoneNumber: string;
  @IsEmail()
  email: string;
  image: string;
  code: string;
  phicCode: string;
  phicAccreditationName: string;
  hciAccreditationNumber: string;
  phicKey: string;
  address: AddressDTO;
}

export class HospitalUpdateDTO extends HospitalDTO {
  @IsNotEmpty()
  id: string;
}

export interface AddressDTO extends Prisma.JsonObject {
  buildingNumber: string;
  type: string;
  floorNumber: string;
  street: string;
  barangay: string;
  city: string;
  zipCode: string;
  province: string;
  region: string;
  country: string;
  longitude: string;
  latitude: string;
}
