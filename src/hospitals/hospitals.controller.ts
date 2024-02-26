import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { HospitalService } from './hospitals.service';
import { Hospital as HospitalModel } from '@prisma/client';

import { HospitalDTO, HospitalUpdateDTO } from './dto/hospital.dto';
import { Unprotected } from 'nest-keycloak-connect';

@Controller()
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Get('hospitals/:id')
  async getHospitalById(@Param('id') id: string): Promise<HospitalModel> {
    return this.hospitalService.Hospital({ id });
  }
  @Get('hospitals')
  @Unprotected()
  async getHospitals(@Query('q') q: string): Promise<HospitalModel[]> {
    return this.hospitalService.Hospitals({
      where: {
        OR: [
          {
            name: { contains: q },
          },
          {
            email: { contains: q },
          },
        ],
      },
    });
  }

  @Post('hospitals')
  async create(
    @Body()
    hospitalData: HospitalDTO,
  ): Promise<HospitalModel> {
    return this.hospitalService.createHospital(hospitalData);
  }
  @Put('hospitals')
  async update(
    @Body()
    hospitalData: HospitalUpdateDTO,
  ): Promise<HospitalModel> {
    return this.hospitalService.updateHospital({
      where: {
        id: hospitalData.id,
      },
      data: hospitalData,
    });
  }

  @Delete('hospitals/:id')
  async delete(@Param('id') id: string): Promise<HospitalModel> {
    return this.hospitalService.deleteHospital({
      id,
    });
  }
}
