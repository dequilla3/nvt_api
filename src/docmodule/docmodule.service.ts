import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocModule } from 'src/model/module.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocmoduleService {
  constructor(
    @InjectRepository(DocModule)
    private docModuleRepository: Repository<DocModule>,
  ) {}

  async findAll() {
    return this.docModuleRepository.find();
  }

  async create(docModule: Partial<DocModule>) {
    const create = this.docModuleRepository.create(docModule);
    return this.docModuleRepository.save(create); //persist
  }
}
