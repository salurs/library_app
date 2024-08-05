import BorrowedBook from '../models/BorrowedBook';

export interface IBorrowedBook {
  id?: number;
  userId: number;
  bookId: number;
  score?: number;
  isReturned?: boolean;
  borrowedAt?: Date;
}

export const borrowBook = async (userId: number, bookId: number) => {
  return await BorrowedBook.query().insert({ userId, bookId, borrowedAt: new Date() });
};

export const returnBook = async (userId: number, bookId: number, score: number) => {
  return await BorrowedBook.query()
    .where({ userId, bookId })
    .update({ isReturned: true, score });
};

export const checkBorrowedBook = async (userId: number, bookId: number): Promise<IBorrowedBook | undefined> => {
  return await BorrowedBook.query()
    .where({ userId, bookId, isReturned: false}).first()
};

export const borrowedBooks = async (bookId: number): Promise<IBorrowedBook[] | undefined> => {
  return await BorrowedBook.query()
  .where({ bookId, isReturned: true })
  .select('score');
};




