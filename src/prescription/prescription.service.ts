import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { Prescription } from './entities/precription.entity';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectRepository(Prescription)
    private prescriptionRepository: Repository<Prescription>,
  ) {}

  public create = async (
    createPrescriptionDto: CreatePrescriptionDto,
    user: User,
  ): Promise<Prescription> => {
    const newPrescription = new Prescription();
    newPrescription.label = createPrescriptionDto.label;
    newPrescription.user = user;
    return await this.prescriptionRepository.save(newPrescription);
  };

  public getToCotation = async (user: User): Promise<Prescription> => {
    const req = await this.prescriptionRepository
      .createQueryBuilder('prescription')
      .leftJoinAndSelect('prescription.cotations', 'cotation')
      .where('prescription.is_deleted = 0')
      .andWhere('cotation.id is null')
      .getOne();

    return req;
  };

  public findOneById = async (id: number): Promise<Prescription> => {
    return await this.prescriptionRepository.findOneBy({
      id,
      is_deleted: false,
    });
  };
}
