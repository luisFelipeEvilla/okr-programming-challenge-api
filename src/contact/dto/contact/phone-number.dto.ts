import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PhoneNumberDto {
  @ApiProperty({
    description: 'Phone number ID',
    example: 'a181ce5a-02bf-11f0-bfe9-fa163ea70839',
  })
  @IsString()
  phone_number_id: string;

  @ApiProperty({
    description: 'Phone number',
    example: '(634) 316-8909',
  })
  @IsString()
  phone_number: string;

  @ApiProperty({
    description: 'Phone number type',
    example: 'home',
  })
  @IsString()
  kind: string;

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