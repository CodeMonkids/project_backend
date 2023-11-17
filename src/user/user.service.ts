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
      throw new BadRequestException('이메일이 유효하지 않습니다.');
    if (!validatePassword(password))
      throw new BadRequestException('비밀번호가 유효하지 않습니다.');
    if (!validateName(name))
      throw new BadRequestException('이름이 유효하지 않습니다.');
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
