import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConstantContactService } from './constant-contact/constant-contact.service';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [ContactModule],
  controllers: [AppController],
  providers: [AppService, ConstantContactService],
})
export class AppModule {}
