import {
  Body,
  Controller,
  Injectable,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/enums/roles.enum';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { Prescription } from './entities/precription.entity';
import { PrescriptionService } from './prescription.service';

@Controller('prescription')
@ApiBearerAuth()
@ApiTags('prescription')
@Injectable()
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiCreatedResponse({
    status: 201,
    type: Prescription,
  })
  async create(
    @Body() createPrescriptionDto: CreatePrescriptionDto,
    @Request() req,
  ): Promise<Prescription> {
    console.log(req.user);
    return this.prescriptionService.create(createPrescriptionDto, req.user);
  }
}
