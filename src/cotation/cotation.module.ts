import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NgapModule } from 'src/ngap/ngap.module';
import { PrescriptionModule } from 'src/prescription/prescription.module';
import { ReferencialModule } from 'src/referencial/referencial.module';
import { CotationController } from './cotation.controller';
import { CotationService } from './cotation.service';
import { Cotation } from './entities/cotation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cotation]),
    NgapModule,
    PrescriptionModule,
    ReferencialModule,
  ],
  exports: [CotationService],
  controllers: [CotationController],
  providers: [CotationService],
})
export class CotationModule {}
