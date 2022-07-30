import { Test, TestingModule } from '@nestjs/testing';
import { CotationController } from './cotation.controller';

describe('CotationController', () => {
  let controller: CotationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotationController],
    }).compile();

    controller = module.get<CotationController>(CotationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
