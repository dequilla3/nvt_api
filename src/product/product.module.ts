import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/model/product.entity';
import { ProductCatService } from 'src/product-cat/product-cat.service';
import { ProductCat } from 'src/model/productCat.entity';
import { SkuService } from 'src/sku/sku.service';
import { Sku } from 'src/model/sku.entity';
import { ProductUnitService } from 'src/product-unit/product-unit.service';
import { ProductUnit } from 'src/model/productUnit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductCat, Sku, ProductUnit])],
  controllers: [ProductController],
  providers: [
    ProductService,
    ProductCatService,
    SkuService,
    ProductUnitService,
  ],
})
export class ProductModule {}
