export type BookProps = {
  id: string;
  image: string;
  name: string;
  author: string;
  year: number;
  category: string;
  hardCopy: boolean;
  eBook: boolean;
  audioBook: boolean;
  borrowed: boolean;
  location: string;
};

class Book {
  id: string;
  image: string;
  name: string;
  author: string;
  year: number;
  category: string;
  hardCopy: boolean;
  eBook: boolean;
  audioBook: boolean;
  borrowed: boolean;
  location: string;

  constructor(props: BookProps) {
    this.id = props.id;
    this.image = props.image;
    this.name = props.name;
    this.author = props.author;
    this.year = props.year;
    this.category = props.category;
    this.hardCopy = props.hardCopy;
    this.eBook = props.eBook;
    this.audioBook = props.audioBook;
    this.borrowed = props.borrowed;
    this.location = props.location;
  }
}

export default Book;