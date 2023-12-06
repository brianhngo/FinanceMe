import express from 'express';
import usersRouter from './users.js';
import transactionRouter from './transactions.js';

const apiRouter = express.Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/transactions', transactionRouter);

export default apiRouter;
