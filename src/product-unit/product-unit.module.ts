import { Module } from '@nestjs/common';
import { ProductUnitController } from './product-unit.controller';
import { ProductUnitService } from './product-unit.service';
import { ProductUnit } from 'src/model/productUnit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProductUnit])],
  controllers: [ProductUnitController],
  providers: [ProductUnitService],
})
export class ProductUnitModule {}
