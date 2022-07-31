import { Test, TestingModule } from '@nestjs/testing';
import { ReferencialController } from './referencial.controller';

describe('ReferencialController', () => {
  let controller: ReferencialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferencialController],
    }).compile();

    controller = module.get<ReferencialController>(ReferencialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
