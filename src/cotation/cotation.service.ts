import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NgapService } from 'src/ngap/ngap.service';
import { PrescriptionService } from 'src/prescription/prescription.service';
import { ReferencialService } from 'src/referencial/referencial.service';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCotationDto } from './dto/create-cotation.dto';
import { Cotation } from './entities/cotation.entity';

@Injectable()
export class CotationService {
  constructor(
    @InjectRepository(Cotation)
    private cotationRepository: Repository<Cotation>,
    private readonly ngapService: NgapService,
    private readonly prescriptionService: PrescriptionService,
    private readonly referencialService: ReferencialService,
  ) {}

  public create = async (
    createCotationDto: CreateCotationDto,
    user: User,
  ): Promise<any> => {
    const ngap = await this.ngapService.findByIds(createCotationDto.ngap);
    const presciption = await this.prescriptionService.findOneById(
      createCotationDto.prescription,
    );
    const referential = createCotationDto.referential
      ? await this.referencialService.findOneById(createCotationDto.referential)
      : undefined;
    if (ngap.length === 0) throw new HttpException('no ngap valid', 400);
    if (!presciption) throw new HttpException('no prescription found', 400);
    const newCotation = new Cotation();
    newCotation.ngaps = ngap;
    newCotation.isDomicile = createCotationDto.isDomicile;
    newCotation.createdBy = user;
    newCotation.prescription = presciption;
    newCotation.explain = createCotationDto.explain;
    newCotation.nbAppointment = createCotationDto.nbAppointment;
    newCotation.referential = referential;

    if (
      referential &&
      (newCotation.nbAppointment > referential.agreement ||
        newCotation.nbAppointment === undefined)
    ) {
      newCotation.nbAppointment = referential.agreement;
    }

    return await this.cotationRepository.save(newCotation);
  };
}
