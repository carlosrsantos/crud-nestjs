import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateItemDto {
  //Swagger
  @ApiProperty({ example: 'Bananas' })

  //Dados
  @IsString()
  @IsNotEmpty()
  name: string;

  //Swagger
  @ApiPropertyOptional({
    example: 'Sweet',
  })

  //Dados
  @IsOptional()
  @IsString()
  taste: string;

  //Swagger
  @ApiPropertyOptional({
    example: 'Cavendish bananas',
    description: 'Optional description of the item',
  })

  //Dados
  @IsOptional()
  @IsString()
  description: string;

  //Swagger
  @ApiProperty({ example: 5, description: 'Needed quantity' })

  //Dados
  @IsInt()
  @Min(0)
  quantity: number;
}
