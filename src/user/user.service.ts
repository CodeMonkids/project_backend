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
import { LoginBody, SignupBody, User } from 'src/model/user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  signup(signupData: SignupBody) {
    const { password, email, name } = signupData;
    if (!validateEmail(email))
      throw new BadRequestException('please enter a valid email address.');
    if (!validatePassword(password))
      throw new BadRequestException('please enter a valid password.');
    if (!validateName(name))
      throw new BadRequestException('please enter a valid name.');
    this.users.push(signupData);
    return { message: 'signup success' };
  }

  login(loginData: LoginBody) {
    const { email, password } = loginData;
    const currentUser = this.users.find((user) => user.email === email);
    if (!currentUser) return new NotFoundException('email not found.');
    if (currentUser.password !== password)
      return new UnauthorizedException('password is not correct');
    return { message: 'login success' };
  }

  getRoot(): string {
    return 'root';
  }
}
