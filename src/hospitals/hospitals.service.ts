import { Injectable } from '@nestjs/common';
import { PrismaService } from './../common/prisma.service';
import { Hospital, Prisma } from '@prisma/client';

@Injectable()
export class HospitalService {
  constructor(private prisma: PrismaService) {}

  async Hospital(
    HospitalWhereUniqueInput: Prisma.HospitalWhereUniqueInput,
  ): Promise<Hospital | null> {
    return this.prisma.hospital.findUnique({
      where: HospitalWhereUniqueInput,
    });
  }

  async Hospitals(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HospitalWhereUniqueInput;
    where?: Prisma.HospitalWhereInput;
    orderBy?: Prisma.HospitalOrderByWithRelationInput;
  }): Promise<Hospital[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.hospital.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createHospital(data: Prisma.HospitalCreateInput): Promise<Hospital> {
    return this.prisma.hospital.create({
      data,
    });
  }

  async updateHospital(params: {
    where: Prisma.HospitalWhereUniqueInput;
    data: Prisma.HospitalUpdateInput;
  }): Promise<Hospital> {
    const { where, data } = params;
    return this.prisma.hospital.update({
      data,
      where,
    });
  }

  async deleteHospital(
    where: Prisma.HospitalWhereUniqueInput,
  ): Promise<Hospital> {
    return this.prisma.hospital.delete({
      where,
    });
  }
}
