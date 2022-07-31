import { Module } from '@nestjs/common';
import { ReferencialController } from './referencial.controller';
import { ReferencialService } from './referencial.service';

@Module({
  controllers: [ReferencialController],
  providers: [ReferencialService]
})
export class ReferencialModule {}
