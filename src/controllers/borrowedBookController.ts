import { Request, Response } from 'express';
import { borrowBook, returnBook, checkBorrowedBook, borrowedBooks } from '../services/borrowedBookService';
import * as userService from '../services/userService';
import * as bookService from '../services/bookService';
import { errorResponse } from '../utils/apiResponse';
import Book from '../models/Book';

export const borrowBookHandler = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.params;
    const user = await userService.getUserById(Number(userId));
    if (!user) {
      return res.status(404).json(errorResponse(null, 'User not found'));
    }
    const book = await bookService.getBookById(Number(bookId));
    if (!book) {
      return res.status(404).json(errorResponse(null, 'Book not found'));
    }
    console.log(book);
    
    if (book.isBorrowed) {
      return res.status(400).json(errorResponse(null, 'The book has already borrowed'));
    }
    const result = await borrowBook(parseInt(userId, 10), parseInt(bookId, 10));
    
    if (result) { 
      const result = await bookService.updateBook(parseInt(bookId, 10), {name: book.name, isBorrowed: true});
      res.status(200).json({
        status: true,
        message: 'Book borrowed successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        status: false,
        message: 'User or Book not found or Book already borrowed',
        error: ['User or Book not found or Book already borrowed'],
      });
    }
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'Failed to borrow book',
      error: [error.message],
    });
  }
};


export const returnBookHandler = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.params;
    const score  = req.body.score || null;
    
    const hasBorrowedBook = await checkBorrowedBook(parseInt(userId, 10), parseInt(bookId, 10));
    if (!hasBorrowedBook) {
      return res.status(404).json(errorResponse(null, 'Record not found'));
    }
     await returnBook(parseInt(userId, 10), parseInt(bookId, 10), score);
     const updateData: any = {
      isBorrowed: false
     };
     const borrowedBooksList = await borrowedBooks(parseInt(bookId, 10));
     if(borrowedBooksList?.length){
       const scores = borrowedBooksList.map(({ score }) => score).filter(score => score !== null);
       if(scores.length){
        // @ts-ignore
        const totalScore = scores.reduce((acc, score) => acc + score, 0);
        // @ts-ignore
          const averageRating = totalScore / scores.length;
          updateData.rating = averageRating;
          // await bookService.updateBook(parseInt(bookId, 10), { rating: averageRating});
        }
      }
      await Book.query().patch(updateData).where({ id: bookId });

     res.status(200).json({
      status: true,
      message: 'Book returned successfully',
      data: null,
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to return book',
      // @ts-ignore
      error: [error.message],
    });
  }
};
