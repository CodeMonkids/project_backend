import { PrismaService } from './../prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { LoginBody, SignupBody } from '../auth/dto/auth.dto';
import { Messeges } from 'src/utils/messege.utils';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async createOne(userData: SignupBody) {
    try {
      await this.prismaService.user.create({ data: userData });
    } catch (error) {
      throw error;
    }
    return { messege: Messeges.success.signup };
  }

  async findOne(email: string) {
    const currentUser = await this.prismaService.user.findUnique({
      where: { email: String(email) },
    });
    if (!currentUser) {
      return null;
    }
    return currentUser;
  }

  async getAll() {
    return await this.prismaService.user.findMany();
  }

  async deleteOne(id: string) {
    return await this.prismaService.user.delete({ where: { id: String(id) } });
  }

  getRoot() {
    return 'root';
  }
}
