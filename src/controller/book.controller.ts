import Book from "../model/book.model";
import BookService from "../services/book.service";
import BookView from "../views/book.views";
import { AuthController } from "./auth.controller";

class LoginController {
  private view: BookView;
  private service: BookService;
  private authController: AuthController;
  onDataChanged = (books: Book[]) => {
    this.view.displayData(books);
  };

  constructor(view: BookView, service: BookService, authController: AuthController) {
    this.view = view;
    this.service = service;
    this.authController = authController;
    this.flag();
    
  }



  async handleShowEditForm() {
    const books = await this.service.getBooks();
    if (books) this.view.toggleFormEdit(books, this.handleEdit);
  }

  async handleDisplayData() {
    const book = await this.service.getBooks();
    if (book) this.onDataChanged(book);
  }

  async handleSearchData() {
    const book = await this.service.getBooks();
    if (book) this.onDataChanged(book);
  }

  handleDeleteData(id: string) {
    this.service.deleteBooks(id);
  }

  async handleDelete() {
    await this.handleDisplayData();
    const books = await this.service.getBooks();
    if (books)
    this.view.bindDelete(books, this.handleDeleteData);
  }


  handleAddBook(book: Book) {
    this.service.addBook(book);
  }

  handleEdit(id: string, book: Book) {
    this.service.edit(id, book);
  }

  handleSearch(key: string) {
    this.service.searchBooks(key);
  }

  flag() {
    const paths = window.location.pathname;
    console.log(paths);
    switch (paths) {
      case '/home':
        this.view.changeQuote();
        this.view.toggleOptions();
        this.handleDisplayData();
        this.view.logout();
        break;
      case '/management':
        this.handleDisplayData();
        this.view.toggleForm();
        this.view.bindAddBook(this.handleAddBook);
        this.view.logout();
        this.handleDelete();
        this.handleShowEditForm();
        break;
    }
    if(paths === '/home' || paths === '/management'){
      this.service.bindDataChanged(this.onDataChanged);
      this.handleSearchData();
    }
  }
}

export default LoginController;