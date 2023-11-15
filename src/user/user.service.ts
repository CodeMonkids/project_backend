import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  signup(userData: User) {
    const { Password, email, name, password, id } = userData;
    const passwordCheckPatton =
      /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    if (passwordCheckPatton.test(email) === false) return false;

    function checkPassword(str: string): boolean {
      const hasUpperCase = /[A-Z]/.test(str);
      const hasNumber = /\d/.test(str);
      const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(str);

      return hasUpperCase && hasNumber && hasSpecialCharacter;
    }

    if (!checkPassword(password)) return false;
    if (name.length > 16) return false;

    console.log(userData);
    return true;
  }

  getroot() {
    return 'root';
  }
}
