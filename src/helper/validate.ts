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

export const imageValidator = (value: string): string | undefined => {
  if (!value.trim()) {
    return 'Image is required';
  }
  return undefined;
};

export const nameBookValidator = (value: string): string | undefined => {
  if (value.trim().length < 3) {
    return 'Name must be at least 3 characters long';
  }
  return undefined;
};

export const authorValidator = (value: string): string | undefined => {
  if (value.trim().length < 3) {
    return 'Author name must be at least 3 characters long';
  }
  return undefined;
};

export const yearValidator = (value: string): string | undefined => {
  const year = parseInt(value);
  if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
    return 'Year must be a valid year between 1900 and the current year';
  }
  return undefined;
};

export const categoryValidator = (value: string): string | undefined => {
  if (value.trim().length < 3) {
    return 'Category must be at least 3 characters long';
  }
  return undefined;
};
