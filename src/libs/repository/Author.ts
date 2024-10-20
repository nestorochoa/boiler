import { Author } from '../entitites/Author';

export interface AuthorRepository {
  add(author: Author): void;
}
