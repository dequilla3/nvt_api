import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sku } from 'src/model/sku.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkuService {
  constructor(
    @InjectRepository(Sku)
    private skuRepository: Repository<Sku>,
  ) {}

  async create(skuCode, product, unit) {
    const createSku = new Sku();
    createSku.skucode = skuCode;
    createSku.product = product;
    createSku.productUnit = unit;

    return this.skuRepository.save(this.skuRepository.create(createSku));
  }
}
