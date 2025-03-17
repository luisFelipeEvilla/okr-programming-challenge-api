import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ConstantContactService } from '../constant-contact/constant-contact.service';
import { ApiQuery, ApiTags, ApiParam, ApiBody, ApiResponse, ApiSecurity } from '@nestjs/swagger';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactDto } from './dto/contact';
import { GetContactsDto } from './dto/get-contacts.dto';

@ApiTags('contacts')
@ApiSecurity('bearer')
@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ConstantContactService) {}

  @Post()
  @ApiBody({
    type: CreateContactDto,
  })
  create(@Body() createContactDto: CreateContactDto, @Headers('Authorization') token: string) {
    return this.contactService.createContact(createContactDto, token);
  }

  @Get()
  @ApiQuery({
    name: 'cursor',
    required: false,
    description: 'The cursor to start the search from',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'The number of contacts to return',
  })
  @ApiResponse({
    status: 200,
    description: 'The contacts have been successfully retrieved',
    type: GetContactsDto, 
  })
  findAll(
    @Headers('Authorization') token: string,
    @Query('cursor') cursor?: string,
    @Query('limit') limit?: string,
  ): Promise<GetContactsDto> {
    return this.contactService.getContacts({ cursor, limit, token });
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'The id of the contact to get',
  })
  @ApiResponse({
    status: 200,
    description: 'The contact has been successfully retrieved',
    type: ContactDto,
  })
  findOne(@Param('id') id: string, @Headers('Authorization') token: string) {
    return this.contactService.getContact(id, token);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'The id of the contact to delete',
  })
  @ApiResponse({
    status: 200,
    description: 'The contact has been successfully deleted',
  })
  remove(@Param('id') id: string, @Headers('Authorization') token: string) {
    return this.contactService.removeContact(id, token);
  }
}
