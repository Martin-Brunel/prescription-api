import { ApiProperty } from '@nestjs/swagger';

export class JwtCredentialsDto {
  @ApiProperty()
  access_token: string;
}
