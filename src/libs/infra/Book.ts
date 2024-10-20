import { Book } from '../entitites/Book';
import { BookRepository } from '../repository/Book';

export class InMemoryBookStorage implements BookRepository {
  private books: Book[] = [];

  add(book: Book): void {
    this.books.push(book);
  }
  findByISBN(isbn: string): Book | undefined {
    return this.books.find((book) => book.ISBN === isbn);
  }
  listByAuthor(author: string): Book[] {
    return this.books.filter((book) => book.author === author);
  }
}
