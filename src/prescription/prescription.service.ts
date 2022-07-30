import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  ): Promise<Prescription> => {
    const newUser = new Prescription();
    newUser.label = createPrescriptionDto.label;
    return await this.prescriptionRepository.save(newUser);
  };
}
