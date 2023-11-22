import { PrismaService } from './../prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  validateEmail,
  validatePassword,
  validateName,
} from './validation.utils';
import { LoginBody, User } from 'src/model/user.model';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async signup(userData: User) {
    const { password, email, name } = userData;
    if (!validateEmail(email))
      throw new BadRequestException('please enter a valid email address.');
    if (!validatePassword(password))
      throw new BadRequestException('please enter a valid password.');
    if (!validateName(name))
      throw new BadRequestException('please enter a valid name.');
    try {
      await this.prismaService.user1.create({ data: userData });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('email already exists.');
      }
    }
    return { messege: 'signup success' };
  }

  async login(loginData: LoginBody) {
    const { email, password } = loginData;
    const currentUser = await this.prismaService.user1.findUnique({
      where: { email: String(email) },
    });
    if (!currentUser) return new NotFoundException('email not found.');
    if (currentUser.password !== password)
      return new UnauthorizedException('password is not correct');
    return { messege: 'login success' };
  }

  async getAll() {
    return await this.prismaService.user1.findMany();
  }

  async deleteOne(id: string) {
    return await this.prismaService.user1.delete({ where: { id: String(id) } });
  }

  getRoot() {
    return 'root';
  }
}
