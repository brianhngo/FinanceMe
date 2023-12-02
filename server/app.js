//App Routes
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import apiRouter from './api/index.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

export default app;
