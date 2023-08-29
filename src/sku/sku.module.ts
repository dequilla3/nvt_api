import { Module } from '@nestjs/common';
import { SkuController } from './sku.controller';
import { SkuService } from './sku.service';
import { Sku } from 'src/model/sku.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sku])],
  controllers: [SkuController],
  providers: [SkuService],
})
export class SkuModule {}
