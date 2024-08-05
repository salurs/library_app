import { Request, Response } from 'express';
import { bookSchema } from '../validators/bookValidator';
import * as bookService from '../services/bookService';
import { successResponse, errorResponse } from '../utils/apiResponse';


export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await bookService.getBookById(Number(id));
    if (!book) {
      return res.status(404).json(errorResponse(null, 'Book not found'));
    }
    return res.json(successResponse(book));
  } catch (err) {
    return res.status(500).json(errorResponse(err,'Internal Server Error'));
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooks();
    return res.json(successResponse(books));
  } catch (err) {
    console.log(err);
    
    return res.status(500).json(errorResponse(err,'Internal Server Error'));
  }
};

export const createBook = async (req: Request, res: Response) => {
  const { error } = bookSchema.validate(req.body, { abortEarly: false });  
  if (error) {
    const errorMessages = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message,
    }));
    return res.status(400).json(errorResponse(errorMessages,'Validation error'));
  }
    

  try {
    const book = await bookService.createBook(req.body);
    return res.status(201).json(successResponse(book));
  } catch (err) {
    return res.status(500).json(errorResponse(err,'Internal Server Error'));
  }
};