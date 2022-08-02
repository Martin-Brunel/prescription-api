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
import { CotationService } from './cotation.service';
import { CreateCotationDto } from './dto/create-cotation.dto';
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
}
