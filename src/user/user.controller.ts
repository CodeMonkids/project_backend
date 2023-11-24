import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LoginBody, SignupBody } from 'src/model/user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getRoot() {
    return this.userService.getRoot();
  }

  @Get('alluser')
  getAllusers() {
    return this.userService.getAll();
  }

  @Post('signup')
  postSignup(@Body() userData: SignupBody) {
    return this.userService.signup(userData);
  }

  @Post('login')
  postLogin(@Body() loginData: LoginBody) {
    return this.userService.login(loginData);
  }

  @Delete(':id')
  deleteOneUser(@Param('id') uesrID: string) {
    return this.userService.deleteOne(uesrID);
  }
}
