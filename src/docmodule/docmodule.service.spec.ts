import { Test, TestingModule } from '@nestjs/testing';
import { DocmoduleService } from './docmodule.service';

describe('DocmoduleService', () => {
  let service: DocmoduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocmoduleService],
    }).compile();

    service = module.get<DocmoduleService>(DocmoduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
