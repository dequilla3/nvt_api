import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/model/product.entity';
import { ProductCatService } from 'src/product-cat/product-cat.service';
import { ProductCat } from 'src/model/productCat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductCat])],
  controllers: [ProductController],
  providers: [ProductService, ProductCatService],
})
export class ProductModule {}
