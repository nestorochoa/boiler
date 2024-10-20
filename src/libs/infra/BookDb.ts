import { Book } from '../entitites/Book';
import { BookRepository } from '../repository/Book';

export class BookInfraDb implements BookRepository {
  add(book: Book): void {
    throw new Error('Method not implemented.');
  }
  findByISBN(isbn: string): Book | undefined {
    throw new Error('Method not implemented.');
  }
  listByAuthor(author: string): Book[] {
    throw new Error('Method not implemented.');
  }
}
