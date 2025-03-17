import { Test, TestingModule } from '@nestjs/testing';
import { ConstantContactService } from './constant-contact.service';

describe('ConstantContactService', () => {
  let service: ConstantContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConstantContactService],
    }).compile();

    service = module.get<ConstantContactService>(ConstantContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
