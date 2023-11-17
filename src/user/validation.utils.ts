export const reg = {
  hasUpperCase: new RegExp(/[A-Z]/),
  hasNumber: new RegExp(/\d/),
  hasSpecialCharacter: new RegExp(/[!@#$%^&*(),.?":{}|<>]/),
  emailCheck: new RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z]{2,}$/),
};

export const validateEmail = (email: string): boolean => {
  return reg.emailCheck.test(email);
};

export const validatePassword = (password: string) => {
  const { hasNumber, hasSpecialCharacter, hasUpperCase } = reg;
  const regTests = [hasNumber, hasSpecialCharacter, hasUpperCase].map((reg) =>
    reg.test(password),
  );
  return regTests.every((test) => test === true);
};

export const validateName = (name: string) => {
  return name.length < 16 && name.length > 0;
};
