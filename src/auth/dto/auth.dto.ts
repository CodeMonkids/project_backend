import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignupBody {
  @IsNotEmpty()
  @IsString()
  @Length(1, 16)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 16)
  password: string;
}

export class LoginBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 16)
  password: string;
}
