import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getroot() {
    return this.userService.getroot();
  }

  @Post('signup')
  postsignp(@Body() userData) {
    return this.userService.signup(userData);
  }
}
