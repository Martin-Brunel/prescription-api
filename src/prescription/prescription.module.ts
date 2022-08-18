import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { PrescriptionController } from './prescription.controller';
import { Prescription } from './entities/precription.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LexiqueModule } from 'src/lexique/lexique.module';
import { DictionaryModule } from 'src/dictionary/dictionary.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Prescription]),
    LexiqueModule,
    DictionaryModule,
  ],
  exports: [PrescriptionService],
  providers: [PrescriptionService],
  controllers: [PrescriptionController],
})
export class PrescriptionModule {}
