import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class StreetAddressDto {
  @ApiProperty({
    description: 'Street address',
    example: '08801 Audra Island',
  })
  @IsString()
  street: string;

  @ApiProperty({
    description: 'City',
    example: 'North Kasandra',
  })
  @IsString()
  city: string;

  @ApiProperty({
    description: 'State',
    example: 'ID',
  })
  @IsString()
  state: string;

  @ApiProperty({
    description: 'Postal code',
    example: '',
  })
  @IsString()
  postal_code: string;

  @ApiProperty({
    description: 'Country',
    example: 'USA',
  })
  @IsString()
  country: string;

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
} 