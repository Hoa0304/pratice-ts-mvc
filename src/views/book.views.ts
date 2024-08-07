import {Login, Home, Mana, Register} from './page/';
import Router from '../router/Router';
import { checkValidForm } from '../helper';
import auth from '../helper/auth';
import Book from '../model/book.model';
import { Card, TBody } from './modules';

class BookView {
  private app: HTMLDivElement;
  private router: Router;
  private container: HTMLElement;
  private modal: HTMLElement | undefined;
  private main: HTMLElement | undefined;
  constructor() {
    this.app = document.querySelector('#root') as HTMLDivElement;
    this.router = new Router(this.app);
    this.initRoute();
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.app.appendChild(this.container);
    this.router.changeRoute();

    const pathcr = window.location.pathname;
    auth();
    if (pathcr === '/register') {
      const formrg = document.querySelector('.formregist') as HTMLFormElement;
      checkValidForm(formrg);
    }
  }
  displayData(books: Book[]): void {
    books = books;
    const ttable = document.querySelector('.table__body') as HTMLTableElement;
    let html = '';
    books.forEach((book) => {
        html += TBody(book);
    });

    let cardHtml = '';
    books.forEach((book) => {
        cardHtml += Card(book);
    });
    const card = document.querySelectorAll('.home__main__recommen-card');
    card.forEach((car) => {
        car.innerHTML = cardHtml;
    });

    ttable.innerHTML = html;
  }
  
  initRoute() {
    this.router.addRoute('/', Login());
    this.router.addRoute('/management', Mana());
    this.router.addRoute('/register', Register());
    this.router.addRoute('/home', Home());
  }
  
  toggleOptions() {
    const buttonOption = document.querySelector('.header__profile--button') as HTMLElement;
    const options = document.querySelector('.header__profile--option') as HTMLElement;

    buttonOption.addEventListener('click', (e) => {
      options.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!options.classList.contains('hidden')) {
        if (!options.contains(target) && !buttonOption.contains(target)) {
          options.classList.toggle('hidden');
        }
      }
    });
  }





  
}

export default BookView;
