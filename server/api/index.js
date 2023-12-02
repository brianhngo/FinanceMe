import express from 'express';
import usersRouter from './users.js';

const apiRouter = express.Router();

apiRouter.use('/users', usersRouter);

export default apiRouter;
