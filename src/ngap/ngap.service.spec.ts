import { Test, TestingModule } from '@nestjs/testing';
import { NgapService } from './ngap.service';

describe('NgapService', () => {
  let service: NgapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NgapService],
    }).compile();

    service = module.get<NgapService>(NgapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
