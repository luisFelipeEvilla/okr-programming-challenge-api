import { IsString, IsNotEmpty, IsEmail, IsArray } from 'class-validator';

export class getContactsDto {
  @IsString()
  @IsNotEmpty()
  contact_id: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  email: EmailAddressDto;

  @IsArray()
  @IsNotEmpty()
  street_addresses: StreetAddressDto[];

  @IsArray()
  @IsNotEmpty()
  phone_numbers: PhoneNumberDto[];

  @IsString()
  @IsNotEmpty()
  create_source: string;

  @IsString()
  @IsNotEmpty()
  updated_at: string;

  @IsString()
  @IsNotEmpty()
  created_at: string;
}

class EmailAddressDto {
  @IsEmail()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  permissionToSend: string;
}

class StreetAddressDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  postal_code: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}

class PhoneNumberDto {
  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  @IsNotEmpty()
  kind: string;
}
