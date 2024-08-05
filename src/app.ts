import express from 'express';
import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './midllewares/errorHandler';
import './database/knex';

const app = express();

app.use(express.json());
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use(errorHandler);

export default app;
