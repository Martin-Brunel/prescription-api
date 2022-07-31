import { Module } from '@nestjs/common';
import { KeyLetterController } from './key-letter.controller';
import { KeyLetterService } from './key-letter.service';

@Module({
  controllers: [KeyLetterController],
  providers: [KeyLetterService]
})
export class KeyLetterModule {}
