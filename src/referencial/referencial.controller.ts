import { Controller, Get, Injectable, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Ngap } from 'src/ngap/entities/ngap.entity';
import { Referential } from './entities/referential.entity';
import { ReferencialService } from './referencial.service';

@Controller('referencial')
@ApiBearerAuth()
@ApiTags('referencial')
@Injectable()
export class ReferencialController {
  constructor(private readonly referentialService: ReferencialService) {}

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiCreatedResponse({
    status: 200,
    type: Referential,
  })
  async getAll(): Promise<Referential[]> {
    return this.referentialService.findAll();
  }
}
