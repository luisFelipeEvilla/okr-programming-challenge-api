import { Controller, Post, Headers, Get, Param } from '@nestjs/common';
import { ConstantContactService } from 'src/constant-contact/constant-contact.service';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
@Controller('tasks')
@ApiTags('tasks')
@ApiSecurity('bearer')
export class TaskController {
  constructor(private readonly constantContactService: ConstantContactService) {}

  @Post('/export-contacts')
  create(@Headers('Authorization') token: string) {
    return this.constantContactService.exportContacts(token);
  }

  @Get()
  findAll(@Headers('Authorization') token: string) {
    return this.constantContactService.getTasks(token);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Headers('Authorization') token: string) {
    return this.constantContactService.getTask(id, token);
  }
}
