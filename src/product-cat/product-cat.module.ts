import { Module } from '@nestjs/common';
import { ProductCatController } from './product-cat.controller';
import { ProductCatService } from './product-cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCat } from 'src/model/productCat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCat])],
  controllers: [ProductCatController],
  providers: [ProductCatService],
})
export class ProductCatModule {}
