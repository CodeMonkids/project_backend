import { BadRequestException, Injectable } from '@nestjs/common';
import {
  validateEmail,
  validatePassword,
  validateName,
} from './validation.utils';

@Injectable()
export class UserService {
  signup(userData: User) {
    const { password, email, name } = userData;

    if (!validateEmail(email))
      throw new BadRequestException('이메일이 유효하지 않습니다.');
    if (!validatePassword(password))
      throw new BadRequestException('비밀번호가 유효하지 않습니다.');
    if (!validateName(name))
      throw new BadRequestException('이름이 유효하지 않습니다.');

    console.log(userData);
    return true;
  }

  getroot() {
    return 'root';
  }
}
