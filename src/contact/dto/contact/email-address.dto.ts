import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class EmailAddressDto {
  @ApiProperty({
    description: 'Email address',
    example: 'john.doe@example.com',
  })
  @IsString()
  email_address: string;
} 