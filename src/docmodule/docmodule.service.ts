import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocModule } from 'src/model/module.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocmoduleService {
  constructor(
    @InjectRepository(DocModule)
    private docModuleRepository: Repository<DocModule>,
  ) {}

  findAll() {
    return this.docModuleRepository.find();
  }

  findByCode(moduleCode: string) {
    return this.docModuleRepository.findOneBy({ moduleCode });
  }

  async create(docModule: Partial<DocModule>) {
    if (!docModule.moduleCode) {
      throw new HttpException('Module Code is Empty!', HttpStatus.BAD_REQUEST);
    }
    if (!docModule.moduleName) {
      throw new HttpException('Module Name is Empty!', HttpStatus.BAD_REQUEST);
    }
    if (await this.findByCode(docModule.moduleCode)) {
      throw new HttpException(
        'Module Code already exists!',
        HttpStatus.BAD_REQUEST,
      );
    }
    //persist
    return this.docModuleRepository.save(
      this.docModuleRepository.create(docModule),
    );
  }
}
