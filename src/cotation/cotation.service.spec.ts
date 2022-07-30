import { Test, TestingModule } from '@nestjs/testing';
import { CotationService } from './cotation.service';

describe('CotationService', () => {
  let service: CotationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotationService],
    }).compile();

    service = module.get<CotationService>(CotationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
