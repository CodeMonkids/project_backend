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
    return true;
  }

  login(loginData: { email: string; password: string }) {
    const { email, password } = loginData;
    const currentUser = this.users.find((user) => user.email === email);
    if (!currentUser) return new NotFoundException('계정을 찾을 수 없습니다.');
    if (currentUser.password !== password)
      return new UnauthorizedException('비밀번호가 틀렸습니다.');
    return true;
  }

  getroot(): string {
    return 'root';
  }
}
