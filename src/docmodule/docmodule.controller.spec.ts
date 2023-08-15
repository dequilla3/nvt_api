import { Test, TestingModule } from '@nestjs/testing';
import { DocmoduleController } from './docmodule.controller';

describe('DocmoduleController', () => {
  let controller: DocmoduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocmoduleController],
    }).compile();

    controller = module.get<DocmoduleController>(DocmoduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
