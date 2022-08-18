import {
  Body,
  Controller,
  Injectable,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { Role } from 'src/enums/roles.enum';
import { Prescription } from 'src/prescription/entities/precription.entity';
import { CotationService } from './cotation.service';
import { CreateCotationDto } from './dto/create-cotation.dto';
import { RawDataCotationDto } from './dto/rawData-cotation.dto';
import { Cotation } from './entities/cotation.entity';

@Controller('cotation')
@ApiBearerAuth()
@ApiTags('cotation')
@Injectable()
export class CotationController {
  constructor(private readonly cotationService: CotationService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiCreatedResponse({
    status: 201,
    type: Cotation,
  })
  async create(
    @Body() createCotationDto: CreateCotationDto,
    @Request() req,
  ): Promise<Cotation> {
    return this.cotationService.create(createCotationDto, req.user);
  }

  @Get('/rawData')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiCreatedResponse({
    status: 200,
    type: [RawDataCotationDto],
  })
  async getRawData(): Promise<RawDataCotationDto[]> {
    return this.cotationService.getRawData();
  }
}
