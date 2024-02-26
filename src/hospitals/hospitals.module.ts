import { Module } from '@nestjs/common';
import { HospitalController } from './hospitals.controller';
import { HospitalService } from './hospitals.service';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  controllers: [HospitalController],
  providers: [HospitalService, PrismaService],
})
export class HospitalsModule {}
