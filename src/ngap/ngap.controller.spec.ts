import { Test, TestingModule } from '@nestjs/testing';
import { NgapController } from './ngap.controller';

describe('NgapController', () => {
  let controller: NgapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NgapController],
    }).compile();

    controller = module.get<NgapController>(NgapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
