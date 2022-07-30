import {
  Controller,
  Request,
  Post,
  UseGuards,
  Injectable,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth/local-auth.guard.ts';
import { AuthService } from './auth/auth.service';
import { PostAuthDto } from './auth/dto/post-auth.dto';
import { JwtCredentialsDto } from './auth/dto/jwt-credentials';

@Controller()
@ApiTags('main')
@Injectable()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiCreatedResponse({
    status: 201,
    description: 'jwt_token',
    type: JwtCredentialsDto,
  })
  async login(
    @Request() req,
    @Body() body: PostAuthDto,
  ): Promise<JwtCredentialsDto> {
    return this.authService.login(req.user);
  }
}
