import { checkValidForm, collectData } from "../helper";
import Book, { BookProps } from "../model/book.model";
import BookView from "./book.views";
import { EditForm } from "./components";
import { Card, TBody } from "./modules";

export class ManagementView {
    private data: BookView;
    constructor() {
        this.data = new BookView();
    }

    bindAddBook(handle: (book: Book) => void): void {
        const addBtn = document.querySelector('.form-button') as HTMLButtonElement;
        addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const formAdd = document.querySelector('.form') as HTMLFormElement;
            if (checkValidForm(formAdd)) {
                let dtb = collectData(formAdd);
                const bookProps: BookProps= {
                    id: dtb.id as string,
                    image: dtb.image as string,
                    name: dtb.name as string,
                    author: dtb.author as string,
                    year: parseInt(dtb.year as string),
                    category: dtb.category as string,
                    hardCopy: dtb.hardCopy as boolean,
                    eBook: dtb.ebook as boolean,
                    audioBook: dtb.audioBook as boolean,
                    borrowed: false,
                    location: dtb.location as string,
                }
                if (dtb.location === '') {
                    dtb.location = 'CS A-15';
                }
                console.log(dtb.location);
                const book = new Book(bookProps);
                handle(book);
            } else;
        });
    }

    bindDelete(books: Book[] ,handle: (id: string) => void): void {
        const deleteBtn = document.querySelectorAll('.deletebtn');
        deleteBtn.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const parent = btn.closest('.bookitem') as HTMLElement;
                const id = parent.getAttribute('data-id') as string;
                handle(id);
                this.data.displayData(books);
            });
        });
    }

    searchBook(books: Book[]): void {
        books = books;
        const searchip = document.querySelector('.searchinput') as HTMLInputElement;
        searchip.addEventListener('input', (e) => {
            const valueInput = e.target as HTMLInputElement;
            const value = valueInput.value.toLowerCase();
            books.forEach((book) => {
                console.log(book.name);
            });
            const filterdt = books.filter((book) =>
                book.name.toLowerCase().includes(value),
            );
            console.log(value);
            this.data.displayData(filterdt);
            if (value === '') {
                this.data.displayData(books);
            }
        });
    }
    
    toggleForm() {
        const wrapForm = document.querySelector('.mana__form') as HTMLElement;
        const formAdd = document.querySelector('.form') as HTMLFormElement;
        const buttonForm = document.querySelector('.browser-create') as HTMLButtonElement;
    
        buttonForm.addEventListener('click', (e) => {
          wrapForm.classList.toggle('hidden');
        });
        document.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          if (!wrapForm.classList.contains('hidden')) {
            if (!formAdd.contains(target) && !buttonForm.contains(target)) {
              wrapForm.classList.toggle('hidden');
            }
          }
        });
        checkValidForm(formAdd);
    }

    submitForm(
        handel: (id?: number, data?: { [key: string]: any }) => void,
        formName: HTMLFormElement,
        id?: number
      ) {
        const bookData: { [key: string]: any } = collectData(formName);
        id ? handel(id, bookData) : handel(undefined,bookData);
      }


  updateBook<T extends keyof Book>(book: Book, updates: Partial<Record<T, Book[T]>>): Book {
    return { ...book, ...updates };
  }

  toggleFormEdit(books: Book[], handle: (id: string, book: Book) => void ) {
    books = books;
    const wrapForm = document.querySelector('.mana__editForm') as HTMLElement;
    const buttonForm = document.querySelectorAll<HTMLInputElement>('.editbtn');
    buttonForm.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        wrapForm.classList.toggle('hidden');
        const parenttr = btn.closest('.bookitem') as HTMLElement;
        const id = parenttr.getAttribute('data-id') as string;
        books.forEach((book) => {
          if (book.id === id) {
            wrapForm.innerHTML = EditForm(book);
            const btncancel = document.querySelector('.btncancel') as HTMLButtonElement;
            btncancel.addEventListener('click', (e) => {
              e.preventDefault();
              wrapForm.classList.toggle('hidden');
            });
          }
        });
        const btnedits = document.querySelector('.btnedits') as HTMLButtonElement;
        btnedits.addEventListener('click', (e) => {
          e.preventDefault();
          const formEdit = document.querySelector('.editForm') as HTMLFormElement;
          let dtb = collectData(formEdit);
          if (dtb.location === '') {
            dtb.location = 'CS A-15';
          }
          let dataBook: Book | undefined= books.find((item) => item.id === id);
          if (dataBook) {
            let updatedBook = this.updateBook(dataBook, dtb);
            handle(id, updatedBook);
          }
        });
      });
    });
  }

    
}