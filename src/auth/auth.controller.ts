import { SignupBody, LoginBody } from './dto/auth.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  signUp(@Body() signupBody: SignupBody) {
    return this.authService.signup(signupBody);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  login(@Body() loginBody: LoginBody) {
    return this.authService.login(loginBody);
  }
}
