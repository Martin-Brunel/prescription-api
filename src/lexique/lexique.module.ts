import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lexique } from './entities/lexique.entity';
import { LexiqueService } from './lexique.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lexique])],
  exports: [LexiqueService],
  providers: [LexiqueService],
})
export class LexiqueModule {}
