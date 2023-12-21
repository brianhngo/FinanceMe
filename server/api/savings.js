import express from 'express';
import { Transactions } from '../database/models/index.js';
import { Sequelize, QueryTypes } from 'sequelize';
import { db } from '../database/models/index.js';

const savingsRouter = express.Router();

export default savingsRouter;
