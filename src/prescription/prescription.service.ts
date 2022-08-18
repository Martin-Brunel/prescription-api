import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DictionaryService } from 'src/dictionary/dictionary.service';
import { LexiqueService } from 'src/lexique/lexique.service';
import { User } from 'src/user/entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { Prescription } from './entities/precription.entity';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectRepository(Prescription)
    private prescriptionRepository: Repository<Prescription>,
    private lexiqueService: LexiqueService,
    private dictionaryService: DictionaryService,
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

  public getAll = async (): Promise<Prescription[]> => {
    return this.prescriptionRepository.findBy({
      is_deleted: false,
    });
  };

  public sanitize = async (
    presciption: Prescription,
  ): Promise<UpdateResult> => {
    const destruct = presciption.label
      .split(/[ -+:;().]/)
      .filter(
        (word) =>
          ![
            'de',
            'le',
            'la',
            'à',
            'a',
            'des',
            'merci',
            'et',
            'du',
            'les',
            'pour',
            'au',
            'un',
            'sur',
            'avec',
            'AMK',
            'par',
          ].includes(word.toLowerCase().trim()),
      );
    const res = [];
    for (const word of destruct) {
      const sanitizedWord = word
        .replace('-', '')
        .replace('+', '')
        .replace(';', '')
        .replace('(', '')
        .replace('.', '')
        .replace(')', '')
        .replace(',', '')
        .replace('\n', '')
        .replace(':', '');

      if (sanitizedWord.toLowerCase().trim() === 'g') {
        res.push('gauche');
      } else {
        const lexique = await this.lexiqueService.findOneByOrtho(sanitizedWord);
        if (lexique) {
          res.push(lexique.lemme);
        } else if (sanitizedWord.trim().length > 0) {
          const existDictionary =
            await this.dictionaryService.findFromDictionary(
              sanitizedWord.trim(),
            );
          if (existDictionary && existDictionary.translation) {
            res.push(existDictionary.translation.toLowerCase());
          } else {
            await this.dictionaryService.saveNewWord(sanitizedWord.trim());
            res.push(sanitizedWord.toLowerCase().trim());
          }
        }
      }
    }
    console.log(res.join(' '));
    return await this.prescriptionRepository.update(
      {
        id: presciption.id,
      },
      { sanitize: res.join(' ') },
    );
  };

  public sanitizeAll = async (): Promise<Prescription[]> => {
    const all = await this.getAll();
    for (const presciption of all) {
      await this.sanitize(presciption);
    }
    return [];
  };
}
