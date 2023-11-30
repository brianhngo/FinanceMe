//App Routes

import path from 'path';
import express from 'express';
import morgan from 'morgan';

const app = express();

import bodyParser from 'body-parser';
import cors from 'cors';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

export default app;
