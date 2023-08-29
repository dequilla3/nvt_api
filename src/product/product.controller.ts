import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { Product } from 'src/model/product.entity';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductInterface } from './product.interface';

@UseGuards(AuthGuard)
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('getProducts')
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post('addProduct')
  async create(@Body() product: ProductInterface) {
    return this.productService.create(product);
  }
}
