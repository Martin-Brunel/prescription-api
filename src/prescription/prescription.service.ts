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
}
