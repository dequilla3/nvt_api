import { Test, TestingModule } from '@nestjs/testing';
import { ProductUnitController } from './product-unit.controller';

describe('ProductUnitController', () => {
  let controller: ProductUnitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductUnitController],
    }).compile();

    controller = module.get<ProductUnitController>(ProductUnitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
