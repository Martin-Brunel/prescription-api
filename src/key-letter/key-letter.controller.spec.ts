import { Test, TestingModule } from '@nestjs/testing';
import { KeyLetterController } from './key-letter.controller';

describe('KeyLetterController', () => {
  let controller: KeyLetterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeyLetterController],
    }).compile();

    controller = module.get<KeyLetterController>(KeyLetterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
