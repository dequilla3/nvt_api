import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatController } from './product-cat.controller';

describe('ProductCatController', () => {
  let controller: ProductCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductCatController],
    }).compile();

    controller = module.get<ProductCatController>(ProductCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
