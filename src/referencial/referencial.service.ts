import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Referential } from './entities/referential.entity';

@Injectable()
export class ReferencialService {
  constructor(
    @InjectRepository(Referential)
    private referentialRepository: Repository<Referential>,
  ) {}

  public findOneById = async (id: number): Promise<Referential> => {
    return await this.referentialRepository.findOneBy({
      id,
      is_deleted: false,
    });
  };

  public findAll = async (): Promise<Referential[]> => {
    return await this.referentialRepository.find({
      where: {
        is_deleted: false,
      },
    });
  };
}
