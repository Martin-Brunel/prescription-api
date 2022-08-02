import { ApiProperty } from '@nestjs/swagger';
import {
  isArray,
  IsBoolean,
  IsNotEmpty,
  isNumber,
  IsNumberString,
} from 'class-validator';

export class CreateCotationDto {
  @ApiProperty()
  @IsNotEmpty()
  ngap: number[];

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  prescription: number;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  isDomicile: boolean;

  @ApiProperty()
  nbAppointment?: number;

  @ApiProperty()
  explain?: string;

  @ApiProperty()
  referential?: number;
}
