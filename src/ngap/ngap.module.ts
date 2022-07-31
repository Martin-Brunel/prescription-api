import { Module } from '@nestjs/common';
import { NgapController } from './ngap.controller';
import { NgapService } from './ngap.service';

@Module({
  controllers: [NgapController],
  providers: [NgapService]
})
export class NgapModule {}
