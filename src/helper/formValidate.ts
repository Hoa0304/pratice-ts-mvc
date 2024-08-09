import Book from "../model/book.model";
import User  from "../model/users.model";
import { authorValidator, categoryValidator, emailValidator, imageValidator, nameBookValidator, nameValidator, passwordValidator, yearValidator } from "./validate";

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
  const errors = validateUser(user);

  let hasError = false;
  for (const key of Object.keys(errors)) {
    const errorMessage = errors[key as keyof Partial<User>];
    showError(form, key, errorMessage || '');
    if (errorMessage) {
      hasError = true;
    }
  }

  return !hasError;
}


export const validateBook = (book: Book): Partial<Book> => {
  const errors: Partial<Book> = {};

  const imageError = imageValidator(book.image);
  if (imageError) {
    errors.image = imageError;
  } else {
    errors.image = '';
  }

  const nameError = nameBookValidator(book.name);
  if (nameError) {
    errors.name = nameError;
  } else {
    errors.name = '';
  }

  const authorError = authorValidator(book.author);
  if (authorError) {
    errors.author = authorError;
  } else {
    errors.author = '';
  }

  const yearError = yearValidator(book.year.toString());
  if (yearError) {
    errors.year = yearError ? parseInt(yearError) : 0;
  } else {
    errors.year = 0;
  }

  const categoryError = categoryValidator(book.category);
  if (categoryError) {
    errors.category = categoryError;
  } else {
    errors.category = '';
  }
  return errors;
};

export function checkValidBookForm(form: HTMLFormElement): boolean {
  let imageInput: HTMLInputElement | null;
  let nameInput: HTMLInputElement | null;
  let authorInput: HTMLInputElement | null;
  let yearInput: HTMLInputElement | null;
  let categoryInput: HTMLInputElement | null;

  imageInput = form.querySelector('#image');
  nameInput = form.querySelector('#book');
  authorInput = form.querySelector('#author');
  yearInput = form.querySelector('#year');
  categoryInput = form.querySelector('#category');

  const book: Book = {
    id: '',
    image: imageInput?.value || '',
    name: nameInput?.value || '',
    author: authorInput?.value || '',
    year: parseInt(yearInput?.value || '0'),
    category: categoryInput?.value || '',
    hardCopy: false,
    eBook: false,
    audioBook: false,
    borrowed: false,
    location: '',
  };
  const errors = validateBook(book);

  let hasError = false;
  for (const key of Object.keys(errors)) {
    const errorMessage = errors[key as keyof Partial<Book>];
    showError(form, key, errorMessage as string );
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
