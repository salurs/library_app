import Book from '../models/Book';

export interface IBook {
  id?: number;
  name: string;
  rating?: number;
  isBorrowed: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export const getBookById = async (id: number): Promise<IBook | undefined> => {
  return await Book.query().findById(id);
};

export const getAllBooks = async (): Promise<IBook[]> => {
  return await Book.query();
};

export const createBook = async (book: Omit<IBook, 'id' | 'created_at' | 'updated_at'>): Promise<IBook> => {
  const newBook = await Book.query().insert(book);
  return newBook;
};

export const updateBook = async (id: number, book: Partial<Book>) => {
  await Book.query().where({ id }).update(book);
  return getBookById(id);
};

