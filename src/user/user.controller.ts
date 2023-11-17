import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../model/user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getRoot() {
    return this.userService.getRoot();
  }

  @Post('signup')
  signup(@Body() userData: User) {
    return this.userService.signup(userData);
  }

  @Post('login')
  login(@Body() loginData: User) {
    return this.userService.login(loginData);
  }
}
