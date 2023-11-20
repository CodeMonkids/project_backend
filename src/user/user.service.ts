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
import { User } from 'src/model/user.model';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async signup(userData: User) {
    const { password, email, name } = userData;
    console.log(userData);

    if (!validateEmail(email))
      throw new BadRequestException('Please enter a valid email address.');
    if (!validatePassword(password))
      throw new BadRequestException('Please enter a valid password.');
    if (!validateName(name))
      throw new BadRequestException('Please enter a valid name.');
    try {
      await this.prismaService.user1.create({ data: userData });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Email already exists.');
      }
    }
    return { messege: 'signup success' };
  }

  async login(loginData: { email: string; password: string }) {
    const { email, password } = loginData;
    const currentUser = await this.prismaService.user1.findUnique({
      where: { email: String(email) },
    });
    if (!currentUser) return new NotFoundException('Email not found.');
    if (currentUser.password !== password)
      return new UnauthorizedException('Password is not correct');
    return { messege: 'login success' };
  }

  async getAll() {
    return await this.prismaService.user1.findMany();
  }

  getroot(): string {
    return 'root';
  }
}
