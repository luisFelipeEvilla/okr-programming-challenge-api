import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PhoneNumberDto } from './phone-number.dto';
import { StreetAddressDto } from './street-address.dto';
import { EmailAddressDto } from './email-address.dto';

export class ContactDto {
  @ApiProperty({
    description: 'Contact ID',
    example: 'a18170d6-02bf-11f0-bfe9-fa163ea70839',
  })
  @IsString()
  contact_id: string;

  @ApiProperty({
    description: 'Email address information',
    type: EmailAddressDto,
  })
  @ValidateNested()
  @Type(() => EmailAddressDto)
  email_address: EmailAddressDto;

  @ApiProperty({
    description: 'First name',
    example: 'Claud',
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    description: 'Last name',
    example: 'Pfannerstill',
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'Creation source',
    example: 'Account',
  })
  @IsString()
  create_source: string;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2025-03-16T23:37:32Z',
  })
  @IsString()
  created_at: string;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2025-03-16T23:37:32Z',
  })
  @IsString()
  updated_at: string;

  @ApiProperty({
    description: 'Phone numbers',
    type: [PhoneNumberDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhoneNumberDto)
  phone_numbers: PhoneNumberDto[];

  @ApiProperty({
    description: 'Street addresses',
    type: [StreetAddressDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => StreetAddressDto)
  street_addresses: StreetAddressDto[];
} 