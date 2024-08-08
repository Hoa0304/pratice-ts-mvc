import Book from "../model/book.model";
import BookService from "../services/book.service";
import { ManagementView } from "../views";
import BookView from "../views/book.views";
import { AuthController } from "./auth.controller";
import { HomeController } from "./home.controller";
import { ManagementController } from "./management.controller";

export class LoginController {
  public view: BookView;
  public service: BookService;
  private authController: AuthController | undefined;
  private homeController: HomeController | undefined;
  private managementController: ManagementController | undefined;

  onDataChanged = (books: Book[]) => {
    this.view.displayData(books);
  };

  constructor(view: BookView, service: BookService) {
  
      this.view = view;
      this.service = service;
   
    this.flag();
  }

  async handleDisplayData() {
    const book = await this.service.getBooks();
    if (book) this.onDataChanged(book);
  }

  async handleSearchData() {
    const book = await this.service.getBooks();
    if (book) this.onDataChanged(book);
  }

  flag() {
    const paths = window.location.pathname;
    console.log(paths);
    switch (paths) {
      
      case '/home':
        this.homeController = new HomeController();
        this.view.toggleOptions();
        this.view.logout();
        break;
      case '/management':
        this.handleDisplayData();
        this.view.toggleOptions();
        this.view.logout();
        this.managementController = new ManagementController(new BookView(), new BookService(),new ManagementView());
        break;
    }
    if(paths === '/home' || paths === '/management'){
      this.service.bindDataChanged(this.onDataChanged);
      this.handleSearchData();
    }
    if (paths === '/' || paths === '/register') {
      this.authController = new AuthController();
    }
  }
}
