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
} from '../utils/validation.utils';
import { LoginBody, SignupBody } from 'src/model/user.model';
import { Messeges } from 'src/utils/messege.utils';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async signup(userData: SignupBody) {
    const { password, email, name } = userData;
    const { invalidEmail, invalidName, invalidPassword } =
      Messeges.invaildError;
    if (!validateEmail(email)) throw new BadRequestException(invalidEmail);
    if (!validatePassword(password))
      throw new BadRequestException(invalidPassword);
    if (!validateName(name)) throw new BadRequestException(invalidName);
    try {
      await this.prismaService.user.create({ data: userData });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException(Messeges.already.email);
      }
    }
    return { messege: Messeges.success.signup };
  }

  async login(loginData: LoginBody) {
    const { email, password } = loginData;
    const currentUser = await this.prismaService.user.findUnique({
      where: { email: String(email) },
    });
    if (!currentUser) return new NotFoundException(Messeges.notFound.email);
    if (currentUser.password !== password)
      return new UnauthorizedException(Messeges.correct.password);
    return { messege: Messeges.success.login };
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
