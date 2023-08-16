import {
  Controller,
  UseGuards,
  Get,
  Body,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { ProductUnitService } from './product-unit.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductUnit } from 'src/model/productUnit.entity';

@UseGuards(AuthGuard)
@Controller('product-unit')
export class ProductUnitController {
  constructor(private productUnitService: ProductUnitService) {}

  @Get('getProductUnits')
  async findAll(): Promise<ProductUnit[]> {
    return this.productUnitService.findAll();
  }

  @Post('addProductUnit')
  async create(@Body() productUnit: Partial<ProductUnit>) {
    return this.productUnitService.create(productUnit);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() productUnit: ProductUnit) {
    return this.productUnitService.update(id, productUnit);
  }
}
