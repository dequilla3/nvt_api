import { Test, TestingModule } from '@nestjs/testing';
import { ProductCatService } from './product-cat.service';

describe('ProductCatService', () => {
  let service: ProductCatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCatService],
    }).compile();

    service = module.get<ProductCatService>(ProductCatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
