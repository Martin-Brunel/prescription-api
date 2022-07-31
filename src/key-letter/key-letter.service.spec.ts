import { Test, TestingModule } from '@nestjs/testing';
import { KeyLetterService } from './key-letter.service';

describe('KeyLetterService', () => {
  let service: KeyLetterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyLetterService],
    }).compile();

    service = module.get<KeyLetterService>(KeyLetterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
