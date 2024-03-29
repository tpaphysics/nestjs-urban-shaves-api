import { ApiProperty } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'urban@shaves.com' })
  @IsString()
  //@IsEmail()
  email: string;

  @ApiProperty({ example: 'urban' })
  @IsString()
  //@Matches(/[a-zA-Z0-9_-]{2,20}/)
  name: string;

  @IsString()
  //@MinLength(6)
  //@MaxLength(20)
  //@Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  // message: 'Password too weak!',
  //})
  @ApiProperty({ default: 'myPassword' })
  password: string;
}
