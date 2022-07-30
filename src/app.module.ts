import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { Prescription } from './prescription/entities/precription.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33210,
      username: 'root',
      password: 'pIthsDlZE5z1uBbJ',
      database: 'prescription',
      entities: [User, Prescription],
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    PrescriptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
