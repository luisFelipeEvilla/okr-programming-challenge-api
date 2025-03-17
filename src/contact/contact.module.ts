import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ConstantContactService } from '../constant-contact/constant-contact.service';

@Module({
  controllers: [ContactController],
  providers: [ConstantContactService],
})
export class ContactModule {}
