import User  from "../model/users.model";
import { emailValidator, nameValidator, passwordValidator } from "./validate";

export const validateUser = (user: User): Partial<User> => {
  const errors: Partial<User> = {};

  const nameError = nameValidator(user.name);
  if (nameError) {
    errors.name = nameError;
  }else{
    errors.name = "";
  }

  const emailError = emailValidator(user.email);
  if (emailError) {
    errors.email = emailError;
  }else{
    errors.email = "";
  }

  const passwordError = passwordValidator(user.password);
  if (passwordError) {
    errors.password = passwordError;
  }else{
    errors.password = "";
  }

  return errors;
};

export function checkValidForm(form: HTMLFormElement, isLogin: boolean = false): boolean {
  let nameInput: HTMLInputElement | null ;
  let emailInput: HTMLInputElement | null ;
  let passwordInput: HTMLInputElement | null ;

  nameInput = form.querySelector('#name');
  emailInput = form.querySelector('#email');
  passwordInput = form.querySelector('#password');
  console.log(passwordInput)

  const user: User = {
    name: isLogin ? '1234' : (nameInput?.value || ''),
    email: emailInput?.value || '',
    password: passwordInput?.value || '',
  };
console.log(user)
  const errors = validateUser(user);

  let hasError = false;
  for (const key of Object.keys(errors)) {
    console.log(key)
    const errorMessage = errors[key as keyof Partial<User>];
    showError(form, key, errorMessage || '');
    if (errorMessage) {
      hasError = true;
    }
  }

  return !hasError;
}

export function showError(form: HTMLFormElement, field: string, message: string): void {
  const errorElement = form.querySelector(`#${field} + p.error`) as HTMLElement;
  if(errorElement)
  errorElement.textContent = message;
}
