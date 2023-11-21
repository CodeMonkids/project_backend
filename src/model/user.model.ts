export interface Userinterface {
  name: string;
  email: string;
  password: string;
}
export class User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface SignupBody {
  name: string;
  email: string;
  password: string;
}

export interface LoginBody {
  email: string;
  password: string;
}
