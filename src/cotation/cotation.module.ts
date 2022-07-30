import { Module } from '@nestjs/common';
import { CotationController } from './cotation.controller';
import { CotationService } from './cotation.service';

@Module({
  controllers: [CotationController],
  providers: [CotationService]
})
export class CotationModule {}
