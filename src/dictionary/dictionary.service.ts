import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { Dictionary } from './entities/dictionary.entity';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(Dictionary)
    private dictionaryRepository: Repository<Dictionary>,
  ) {}

  public saveNewWord = async (newWord: string): Promise<Dictionary> => {
    const existDictionary = await this.dictionaryRepository.findOneBy({
      label: newWord,
      is_deleted: false,
    });
    if (existDictionary) return existDictionary;
    const newDictionnary = this.dictionaryRepository.create({
      label: newWord,
    });
    return await this.dictionaryRepository.save(newDictionnary);
  };

  public findFromDictionary = async (
    word: string,
  ): Promise<Dictionary | null> => {
    return await this.dictionaryRepository.findOneBy({
      label: word,
      is_deleted: false,
      translation: Not(IsNull()),
    });
  };
}
