export const reg = {
  hasUpperCase: new RegExp(/[A-Z]/),
  hasNumber: new RegExp(/\d/),
  hasSpecialCharacter: new RegExp(/[!@#$%^&*(),.?":{}|<>]/),
  emailCheck: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
};

export const validateEmail = (email: string): boolean => {
  return reg.emailCheck.test(email);
};

export const validatePassword = (password: string) => {
  const { hasNumber, hasSpecialCharacter, hasUpperCase } = reg;
  const regTests = [hasNumber, hasSpecialCharacter, hasUpperCase];
  return regTests.every((reg) => reg.test(password));
};

export const validateName = (name: string) => {
  return name.length < 16 && name.length > 0;
};
