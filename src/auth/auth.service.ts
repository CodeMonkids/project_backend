import { PrismaService } from './../prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Messeges } from 'src/utils/messege.utils';

import { LoginBody, SignupBody } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(userData: SignupBody) {
    const { password, email, name } = userData;
    try {
      const response = await this.userService.createOne(userData);
    } catch (response) {
      if (response.code === 'P2002') {
        throw new BadRequestException(Messeges.already.email);
      }
    }
    return { messege: Messeges.success.signup };
  }

  async login(loginData: LoginBody) {
    const { email, password } = loginData;
    const currentUser = await this.userService.findOne(email);
    if (!currentUser) return new NotFoundException(Messeges.notFound.email);
    if (currentUser.password !== password)
      return new UnauthorizedException(Messeges.correct.password);

    const payload = { email: email };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken: accessToken };
  }
}
