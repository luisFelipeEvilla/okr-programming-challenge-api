import { ApiProperty } from '@nestjs/swagger';
import { ContactDto } from './contact';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
export * from './contact';

export class GetContactsDto {
  @ApiProperty({
    description: 'The contacts',
    type: [ContactDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDto)
  contacts: ContactDto[];

  @ApiProperty({
    description: 'The number of contacts',
    type: Number,
  })
  contacts_count: number;
  
  @ApiProperty({
    description: 'The links',
    type: Object,
    example: {
      next: { href: '/v3/contacts?cursor=bGltaXQ9NTAmbmV4dD0y' },
    },
  })
  _links: {
    next: { href: string };
  };
}