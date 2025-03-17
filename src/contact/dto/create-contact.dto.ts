import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class PhoneNumberDto {
  @ApiProperty({
    description: 'Phone number',
    example: '+1234567890',
  })
  @IsString()
  phone_number: string;

  @ApiProperty({
    description: 'Phone number type',
    example: 'mobile',
  })
  @IsString()
  kind: "home" | "work" | "other";
}

export class AddressDto {
  @ApiProperty({
    description: 'Street',
    example: '123 Main St',
  })
  @IsString()
  street: string;

  @ApiProperty({
    description: 'City',
    example: 'New York',
  })
  @IsString()
  city: string;

  @ApiProperty({
    description: 'State',
    example: 'NY',
  })
  @IsString()
  state: string;

  @ApiProperty({
    description: 'Postal code',
    example: '10001',
  })
  @IsString()
  postal_code: string;

  @ApiProperty({
    description: 'Country',
    example: 'US',
  })
  @IsString()
  country: string;

  @ApiProperty({
    description: 'Kind',
    example: 'home',
  })
  @IsString()
  kind: "home" | "work" | "other";
}

export class EmailAddressDto {
  @ApiProperty({
    description: 'address',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  address: string;

  @ApiProperty({
    description: 'Permission to send',
    example: 'implicit',
  })
  @IsString()
  permission_to_send: string;
}

export class CreateContactDto {
  @ApiProperty({
    description: 'First name',
    example: 'John',
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    description: 'Last name',
    example: 'Doe',
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    description: 'Email address',
    example: 'john.doe@example.com',
  })
  @ValidateNested()
  @Type(() => EmailAddressDto)
  email_address: EmailAddressDto;

  @ApiProperty({
    description: 'Create source',
    example: 'Account',
  })
  @IsString()
  create_source: string;

  @ApiProperty({
    description: 'Phone numbers',
    type: [PhoneNumberDto],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PhoneNumberDto)
  phone_numbers?: PhoneNumberDto[];

  @ApiProperty({
    description: 'Street addresses',
    type: [AddressDto],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AddressDto)
  street_addresses?: AddressDto[];
}