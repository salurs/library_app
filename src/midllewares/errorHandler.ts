import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '../utils/apiResponse';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  console.log("test");
  res.status(500).json(errorResponse(err.message, 'Error'));
  
};
