import { Test, TestingModule } from '@nestjs/testing';
import { LexiqueService } from './lexique.service';

describe('LexiqueService', () => {
  let service: LexiqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LexiqueService],
    }).compile();

    service = module.get<LexiqueService>(LexiqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
