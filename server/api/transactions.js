import express from 'express';
import { Transactions } from '../database/models/index.js';

const transactionRouter = express.Router();

// PUT Route. Get list of all transactions by a specific user. For Pagination
transactionRouter.put('/transactionsList', async (req, res) => {
  const pageSize = 10; // Number of records per page

  try {
    const transactions = await Transactions.findAndCountAll({
      where: {
        userIdentifer: req.body.uid,
      },
      order: [['id', 'DESC']],
      limit: 10,
      offset: (req.body.page - 1) * pageSize,
    });

    if (transactions) {
      res.json(transactions);
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error(error);
  }
});

transactionRouter.put('/addTransaction', async (req, res) => {
  try {
    const { amount, category, description, date, userIdentifer } = req.body;

    const transaction = await Transactions.create({
      amount: amount,
      category: category,
      description: description,
      date: date,
      userIdentifer: userIdentifer,
    });
    if (transaction) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.error(error);
  }
});

export default transactionRouter;
