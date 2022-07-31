import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { Prescription } from './prescription/entities/precription.entity';
import { CotationModule } from './cotation/cotation.module';
import { Cotation } from './cotation/entities/cotation.entity';
import { NgapModule } from './ngap/ngap.module';
import { KeyLetterModule } from './key-letter/key-letter.module';
import { KeyLetter } from './key-letter/entities/key-letter.entity';
import { Ngap } from './ngap/entities/ngap.entity';
import { ReferencialModule } from './referencial/referencial.module';
import { Referential } from './referencial/entities/referential.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '51.178.48.126',
      port: 3306,
      username: 'mbrunel',
      password: 'Martin118',
      database: 'prescription',
      entities: [User, Prescription, Cotation, KeyLetter, Ngap, Referential],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    PrescriptionModule,
    CotationModule,
    NgapModule,
    KeyLetterModule,
    ReferencialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
