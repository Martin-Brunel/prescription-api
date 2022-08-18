import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lexique } from './entities/lexique.entity';

@Injectable()
export class LexiqueService {
  constructor(
    @InjectRepository(Lexique)
    private lexiqueRepository: Repository<Lexique>,
  ) {}

  public findOneByOrtho = async (ortho: string): Promise<Lexique | null> => {
    return await this.lexiqueRepository.findOneBy({
      ortho,
    });
  };
}
