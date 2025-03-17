import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { ConstantContactService } from 'src/constant-contact/constant-contact.service';

@Module({
  controllers: [TaskController],
  providers: [ConstantContactService],
})
export class TaskModule {}
