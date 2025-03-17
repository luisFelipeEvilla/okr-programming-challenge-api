import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConstantContactService } from './constant-contact/constant-contact.service';
import { ContactModule } from './contact/contact.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ContactModule, TaskModule],
  controllers: [AppController],
  providers: [AppService, ConstantContactService],
})
export class AppModule {}
