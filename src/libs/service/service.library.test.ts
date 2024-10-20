import { Book } from '../entitites/Book';
import { InMemoryBookStorage } from '../infra/Book';
import { libraryService } from './library';

const demoBooks: Book[] = [
  {
    author: 'Perris',
    AuthorId: '123',
    id: '1',
    ISBN: '123',
    publishDate: '10/10/2010',
    title: 'The book',
  },
];
describe('This is a test for the library service', () => {
  let libraryServiceTest: libraryService | null = null;

  beforeAll(() => {
    const infraInMemory = new InMemoryBookStorage();
    libraryServiceTest = new libraryService(infraInMemory);
  });
  test('We can add a book to the library', () => {
    libraryServiceTest?.add(demoBooks[0]);
  });

  test('We cannot add a duplicate book to the library', () => {});

  test('should find a book by ISBN', () => {
    const searchISBN = libraryServiceTest?.findByISBN(demoBooks[0].ISBN);
    expect(searchISBN).toEqual(demoBooks[0]);
  });

  test('should list all books by author', () => {
    const searchBooks = libraryServiceTest?.listByAuthor(demoBooks[0].author);
    expect(searchBooks?.length).toBe(1);
  });
});
