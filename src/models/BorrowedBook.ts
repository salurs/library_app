import { Model } from 'objection';
import Book from './Book';
import User from './User';

class BorrowedBook extends Model {
  static tableName = 'borrowed_books';

  id!: number;
  userId!: number;
  bookId!: number;
  score!: number;
  isReturned?: boolean;
  borrowedAt!: Date;

  static relationMappings = {
    book: {
      relation: Model.BelongsToOneRelation,
      modelClass: Book,
      join: {
        from: 'borrowed_books.bookId',
        to: 'books.id',
      },
    },
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'borrowed_books.userId',
        to: 'users.id',
      },
    },
  };
}

export default BorrowedBook;
