import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Ngap } from './entities/ngap.entity';

@Injectable()
export class NgapService {
  constructor(
    @InjectRepository(Ngap)
    private ngapRepository: Repository<Ngap>,
  ) {}

  public findByIds = async (ids: number[]): Promise<Ngap[]> => {
    const res = await this.ngapRepository.find({
      where: { id: In(ids), is_deleted: false },
    });
    return res;
  };
}
