import { Book } from '../entitites/Book';

export interface BookRepository {
  add(book: Book): void;
  findByISBN(isbn: string): Book | undefined;
  listByAuthor(author: string): Book[];
}
