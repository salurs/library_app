import { Request, Response } from 'express';
import { userSchema } from '../validators/userValidator';
import * as userService from '../services/userService';
import { successResponse, errorResponse } from '../utils/apiResponse';


export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(Number(id));
    if (!user) {
      return res.status(404).json(errorResponse(null, 'User not found'));
    }
    return res.json(successResponse(user));
  } catch (err) {
    return res.status(500).json(errorResponse(err,'Internal Server Error'));
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    return res.json(successResponse(users));
  } catch (err) {
    console.log(err);
    
    return res.status(500).json(errorResponse(err,'Internal Server Error'));
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });  
  if (error) {
    const errorMessages = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message,
    }));
    
    return res.status(400).json(errorResponse(errorMessages,'Validation error'));
  }

  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json(successResponse(user));
  } catch (err) {
    return res.status(500).json(errorResponse(err,'Internal Server Error'));
  }
};


