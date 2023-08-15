import { Module } from '@nestjs/common';
import { DocmoduleController } from './docmodule.controller';
import { DocmoduleService } from './docmodule.service';
import { DocModule } from 'src/model/module.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DocModule])],
  controllers: [DocmoduleController],
  providers: [DocmoduleService],
  exports: [DocmoduleService],
})
export class DocmoduleModule {}
