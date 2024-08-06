import BookView from './views/book.views';
import LoginController from './controller/book.controller';
import BookService from './services/book.service';
import { AuthView } from './views';
import { AuthController } from './controller/auth.controller';

new LoginController(new BookView(), new BookService(), new AuthController(new AuthView()));
