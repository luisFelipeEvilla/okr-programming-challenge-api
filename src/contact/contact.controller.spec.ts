import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';
import { ConstantContactService } from '../constant-contact/constant-contact.service';

describe('ContactController', () => {
  let controller: ContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
      providers: [ConstantContactService],
    }).compile();

    controller = module.get<ContactController>(ContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
