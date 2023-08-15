import { Body, Controller, Get, Post } from '@nestjs/common';
import { DocmoduleService } from './docmodule.service';
import { DocModule } from 'src/model/module.entity';

@Controller('docmodule')
export class DocmoduleController {
  constructor(private docModuleService: DocmoduleService) {}

  @Get('getAllModules')
  findAll() {
    return this.docModuleService.findAll();
  }

  @Post('createModule')
  create(@Body() docModule: DocModule) {
    return this.docModuleService.create(docModule);
  }
}
