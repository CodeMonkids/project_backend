export const validateEmail = (email: string): boolean => {
  const emailCheckPatton = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailCheckPatton.test(email);
};

export const validatePassword = (password: string) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  return hasUpperCase && hasNumber && hasSpecialCharacter;
};

export const validateName = (name: string) => {
  return name.length < 16;
};
