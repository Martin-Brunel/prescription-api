import { ApiProperty } from '@nestjs/swagger';

export class PostAuthDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
