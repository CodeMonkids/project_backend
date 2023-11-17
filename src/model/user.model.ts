export interface User {
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
