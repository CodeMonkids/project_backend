export const Messeges = {
  invaildError: {
    invalidEmail: 'please enter a valid email address.',
    invalidPassword: 'please enter a valid password.',
    invalidName: 'please enter a valid name.',
  },
  success: {
    login: 'login success',
    signup: 'signup success',
  },
  already: {
    email: 'email already exists.',
    nickname: 'nickname already exists.',
  },
  notFound: {
    email: 'email not found',
  },
  correct: {
    password: 'password is not correct',
  },
} as const;
