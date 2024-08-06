import api from '../api/books';
import Book from '../model/book.model';

interface BookService{
  books: Book[];
  onDataChanged: (data: any)=> void;
  
}

class BookService implements BookService {
  constructor() {
    this.books = [];
    this.onDataChanged = () => {};
  }

  async getBooks() {
    try {
      let { data } = await api.get('/books');
      if (data) {
        data = await data.map((book: Book) => new Book(book));
        this.books = data;
        return this.books;
      }
    } catch (error) {
    }
  }
  bindDataChanged(cb: { (books: Book[]):void ; (data: any):void }){
    this.onDataChanged = cb ;
  }
  async deleteBooks(id: string) {
    try {
      let { data } = await api.delete(`/books/${id}`);
      if (data) {
        this.books = this.books.filter((book) => {
          return book.id !== id;
        });
        this.onDataChanged(this.books);
      }
    } catch (error) {
    }
  }
  async addBook(book: Book) {
    try {
      let { data } = await api.post('/books', book);
      if (data) {
        this.books.push(data);
        this.onDataChanged(this.books);
      }
    } catch (error) {
    }
  }
  async edit(id: string , newBook: Book) {
    try {
      const { data } = await api.patch(`books/${id}`, newBook);
      if (data) {
        this.books = this.books.map((book) =>
          book.id === id ? new Book({ ...book, ...newBook }) : book,
        );
        this.onDataChanged(this.books);
      }
    } catch (error) {
    }
  }

  searchBooks(key: string): void {
    this.books = this.books.filter((book: Book) => {
      return book.name.toLowerCase().includes(key.toLowerCase());
    });
    this.onDataChanged(this.books);
  }
}

export default BookService;
