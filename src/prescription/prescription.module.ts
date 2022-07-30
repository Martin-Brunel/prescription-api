import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { PrescriptionController } from './prescription.controller';
import { Prescription } from './entities/precription.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Prescription])],
  exports: [PrescriptionService],
  providers: [PrescriptionService],
  controllers: [PrescriptionController],
})
export class PrescriptionModule {}
