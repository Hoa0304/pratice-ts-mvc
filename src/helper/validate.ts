export const nameValidator = (value: string): string | undefined => {
  if (value.trim().length < 3) {
    return 'Name must be at least 3 characters long';
  }
  return undefined;
};

export const emailValidator = (value: string): string | undefined => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(value)
  return emailRegex.test(value) ? undefined : 'Invalid email address';
};

export const passwordValidator = (value: string): string | undefined => {
  if (value.length < 8) {
    return 'Password must be at least 8 characters long';
  }
  if (!/[A-Z]/.test(value)) {
    return 'Password must contain at least one uppercase letter';
  }
  if (!/[a-z]/.test(value)) {
    return 'Password must contain at least one lowercase letter';
  }
  if (!/\d/.test(value)) {
    return 'Password must contain at least one number';
  }
  return undefined;
};
