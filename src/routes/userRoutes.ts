import express from 'express';
import { getAllUsers, getUserById, createUser} from '../controllers/userController';
import { borrowBookHandler, returnBookHandler } from '../controllers/borrowedBookController';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.post('/:userId/borrow/:bookId', borrowBookHandler);
router.post('/:userId/return/:bookId', returnBookHandler);

export default router;
