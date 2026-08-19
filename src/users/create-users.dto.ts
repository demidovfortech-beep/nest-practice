import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'expected field is a string' })
  @MinLength(3, { message: 'expected field more than 3' })
  name: string;

  @IsString({ message: 'expected field is a string' })
  @MinLength(5, { message: 'expected field more than 5' })
  bio: string;
}
