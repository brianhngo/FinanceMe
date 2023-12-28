import express from 'express';
import usersRouter from './users.js';
import transactionRouter from './transactions.js';
import budgetRouter from './budgets.js';
import savingsRouter from './savings.js';
import billingsRouter from './billings.js';

const apiRouter = express.Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/transactions', transactionRouter);
apiRouter.use('/budgets', budgetRouter);
apiRouter.use('/savings', savingsRouter);
apiRouter.use('/billings', billingsRouter);

export default apiRouter;
