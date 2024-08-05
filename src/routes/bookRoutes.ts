import express from 'express';
import { createBook, getBookById, getAllBooks } from '../controllers/bookController';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);


export default router;
