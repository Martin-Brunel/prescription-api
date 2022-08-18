import { ApiProperty } from '@nestjs/swagger';
import { Referential } from 'src/referencial/entities/referential.entity';

export class RawDataCotationDto {
  @ApiProperty()
  label: string;

  @ApiProperty()
  ngapId: string;

  @ApiProperty()
  referential: string | null;
}
