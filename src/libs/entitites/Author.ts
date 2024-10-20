import { Book } from './Book';

export interface Author {
  id: string;
  name: string;
  books: Array<Book>;
}
