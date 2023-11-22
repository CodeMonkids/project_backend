import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getroot() {
    return this.userService.getRoot();
  }

  @Get('alluser')
  getAllusers() {
    return this.userService.getAll();
  }

  @Post('signup')
  postsignup(@Body() userData) {
    return this.userService.signup(userData);
  }

  @Post('login')
  postlogin(@Body() loginData) {
    return this.userService.login(loginData);
  }

  @Delete(':id')
  deleteOneUser(@Param('id') uesrID) {
    return this.userService.deleteOne(uesrID);
  }
}
