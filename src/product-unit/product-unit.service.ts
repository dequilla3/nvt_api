import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductUnit } from 'src/model/productUnit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductUnitService {
  constructor(
    @InjectRepository(ProductUnit)
    private productUnitRepository: Repository<ProductUnit>,
  ) {}

  async findAll(): Promise<ProductUnit[]> {
    return this.productUnitRepository.find();
  }

  async findOneByUnit(unit: string) {
    return this.productUnitRepository.findOneBy({ unit });
  }

  async create(productUnit: Partial<ProductUnit>) {
    if (await this.findOneByUnit(productUnit.unit)) {
      throw new HttpException('Unit already exists!', HttpStatus.BAD_REQUEST);
    }

    return this.productUnitRepository.save(
      this.productUnitRepository.create(productUnit),
    );
  }

  async update(id: number, productUnit: ProductUnit) {
    this.productUnitRepository.update(id, productUnit);
    return 'Successfully updated!';
  }
}
