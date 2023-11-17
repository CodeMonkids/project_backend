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
  private users: User[] = [];

  signup(userData: User) {
    const { password, email, name } = userData;
    if (!validateEmail(email))
      throw new BadRequestException('Please enter a valid email address.');
    if (!validatePassword(password))
      throw new BadRequestException('Please enter a valid password.');
    if (!validateName(name))
      throw new BadRequestException('Please enter a valid name.');
    this.users.push(userData);
    return { messege: 'signup success' };
  }

  login(loginData: { email: string; password: string }) {
    const { email, password } = loginData;
    const currentUser = this.users.find((user) => user.email === email);
    if (!currentUser) return new NotFoundException('Email not found.');
    if (currentUser.password !== password)
      return new UnauthorizedException('Password is not correct');
    return { messege: 'login success' };
  }

  getroot(): string {
    return 'root';
  }
}
