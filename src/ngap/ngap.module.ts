import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ngap } from './entities/ngap.entity';
import { NgapController } from './ngap.controller';
import { NgapService } from './ngap.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ngap])],
  exports: [NgapService],
  controllers: [NgapController],
  providers: [NgapService],
})
export class NgapModule {}
