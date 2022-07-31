import { Test, TestingModule } from '@nestjs/testing';
import { ReferencialService } from './referencial.service';

describe('ReferencialService', () => {
  let service: ReferencialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReferencialService],
    }).compile();

    service = module.get<ReferencialService>(ReferencialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
