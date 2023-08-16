import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductCat } from 'src/model/productCat.entity';
import { ProductCatService } from './product-cat.service';

@Controller('product-cat')
export class ProductCatController {
  constructor(private productCatService: ProductCatService) {}

  @Get('getProductCats')
  async findAll(): Promise<ProductCat[]> {
    return this.productCatService.findAll();
  }

  @Post('addProductCat')
  async create(@Body() productCat: ProductCat) {
    return this.productCatService.create(productCat);
  }
}
