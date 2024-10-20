import { Book } from '../entitites/Book';
import { BookRepository } from '../repository/Book';

export class libraryService implements BookRepository {
  constructor(private bookRepository: BookRepository) {}
  add(book: Book): void {
    return this.bookRepository.add(book);
  }
  findByISBN(isbn: string): Book | undefined {
    return this.bookRepository.findByISBN(isbn);
  }
  listByAuthor(author: string): Book[] {
    return this.bookRepository.listByAuthor(author);
  }
}
