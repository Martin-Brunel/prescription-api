import { Controller, Get, Injectable, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Ngap } from './entities/ngap.entity';
import { NgapService } from './ngap.service';

@Controller('ngap')
@ApiBearerAuth()
@ApiTags('ngap')
@Injectable()
export class NgapController {
  constructor(private readonly ngapService: NgapService) {}

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiCreatedResponse({
    status: 200,
    type: Ngap,
  })
  async getAll(): Promise<Ngap[]> {
    return this.ngapService.findAll();
  }
}
