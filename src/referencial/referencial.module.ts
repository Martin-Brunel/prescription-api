import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Referential } from './entities/referential.entity';
import { ReferencialController } from './referencial.controller';
import { ReferencialService } from './referencial.service';

@Module({
  imports: [TypeOrmModule.forFeature([Referential])],
  exports: [ReferencialService],
  controllers: [ReferencialController],
  providers: [ReferencialService],
})
export class ReferencialModule {}
