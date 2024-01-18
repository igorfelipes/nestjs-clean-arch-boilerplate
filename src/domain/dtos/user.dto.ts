import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator'
// import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({
    example: '+5583981234567'
  })
  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string
}

// export class UpdateUserDto extends PartialType(CreateUserDto) {}
