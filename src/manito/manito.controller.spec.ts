import { Test, TestingModule } from '@nestjs/testing';
import { ManitoController } from './manito.controller';

describe('ManitoController', () => {
  let controller: ManitoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManitoController],
    }).compile();

    controller = module.get<ManitoController>(ManitoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
