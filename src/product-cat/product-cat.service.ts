import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCat } from 'src/model/productCat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCatService {
  constructor(
    @InjectRepository(ProductCat)
    private productCatRepository: Repository<ProductCat>,
  ) {}

  async findAll(): Promise<ProductCat[]> {
    return this.productCatRepository.find();
  }

  fineOneByName(productCatName: string) {
    return this.productCatRepository.findOneBy({ productCatName });
  }

  fineOneById(id: number) {
    return this.productCatRepository.findOneBy({ id });
  }

  async create(productCat: Partial<ProductCat>) {
    if (await this.fineOneByName(productCat.productCatName)) {
      throw new HttpException(
        'Product name already exists!',
        HttpStatus.BAD_REQUEST,
      );
    }
    //persist
    this.productCatRepository.save(
      this.productCatRepository.create(productCat),
    );

    return 'Successfully Saved!';
  }
}
