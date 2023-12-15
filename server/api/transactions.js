import express from 'express';
import { Transactions } from '../database/models/index.js';
import { Sequelize, QueryTypes } from 'sequelize';
import { db } from '../database/models/index.js';

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

// PUT Route Adding a transaction for the user
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

// get that transaction information of particular one
transactionRouter.put('/getTransaction', async (req, res) => {
  try {
    const { userIdentifer, id } = req.body;
    const transaction = await Transactions.findAll({
      where: {
        userIdentifer: userIdentifer,
        id: id,
      },
    });
    if (transaction) {
      res.json(transaction);
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error(error);
  }
});

// updating transaction
transactionRouter.put('/updateTransaction', async (req, res) => {
  const { transactionId, userIdentifer, category, description, amount, date } =
    req.body;

  const transactions = await Transactions.findAll({
    where: {
      userIdentifer: userIdentifer,
      id: transactionId,
    },
  });

  if (transactions.length === 0) {
    // No transaction found
    res.status(404).json({ error: 'Transaction not found' });
    return;
  }

  const transaction = transactions[0];

  try {
    await transaction.update({
      amount: amount,
      category: category,
      description: description,
      date: date,
    });

    res.status(200).json(true);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// deleting transaction
transactionRouter.put('/deleteTransaction', async (req, res) => {
  const { transactionId, userIdentifer } = req.body;

  try {
    const transaction = await Transactions.findOne({
      where: {
        userIdentifer: userIdentifer,
        id: transactionId,
      },
    });

    if (!transaction) {
      res.status(404).json({ error: 'Transaction not found' });
      return;
    }

    await transaction.destroy();

    res.status(200).json(true);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Monthly Expenses
transactionRouter.put('/getMonthlyExpenses', async (req, res) => {
  try {
    const { userIdentifer } = req.body;

    const data = await db.query(
      `SELECT * FROM "Transactions" WHERE EXTRACT(MONTH FROM "Transactions"."updatedAt") = EXTRACT(MONTH FROM CURRENT_TIMESTAMP) AND "Transactions"."userIdentifer" = '${userIdentifer}' `,
      {
        type: QueryTypes.SELECT,
      }
    );

    if (data !== undefined && data !== null) {
      const obj2 = {};
      data.forEach((row) => {
        if (!obj2[row.category]) {
          obj2[row.category] = parseInt(row.amount);
        } else {
          obj2[row.category] += parseInt(row.amount);
        }
      });

      const test2 = Object.keys(obj2);
      const test3 = Object.values(obj2);

      const result = {
        labels: test2,
        datasets: [
          {
            label: 'Amount spent (in $)',
            data: test3,
            backgroundColor: [
              'red', // Red
              'green', // Green
              'blue', // Blue
              'pink', // Pink
              'yellow', // Yellow
              'purple', // Purple
              'cyan', // Cyan
              'brown', // Dark Pink
              'black', // Turquoise
              'gray', // Orange
              'orange', // Violet
            ],
            borderColor: ['black'],
          },
        ],
      };

      res.json(result);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// category monthly comparison
transactionRouter.put('/categoryComparison', async (req, res) => {
  try {
    const { userIdentifer, category, timeframe } = req.body;
    let timeCondition = null;

    if (timeframe === 'alltime') {
      // If 'alltime', no specific time condition is needed
      timeCondition = '';
    } else {
      // For specific timeframes, add the appropriate time condition
      timeCondition = `"Transactions"."date" >= DATE_TRUNC('MONTH', CURRENT_TIMESTAMP) - INTERVAL '${timeframe} months'`;
    }

    const data = await db.query(
      `
    SELECT SUM(sub.amount) AS total_amount, sub.month
    FROM (
        SELECT *, TO_CHAR(DATE_TRUNC('MONTH', "Transactions"."date"), 'YYYY-MM') AS month
        FROM "Transactions"
        WHERE 
        ${timeCondition}
        AND "Transactions"."date" < DATE_TRUNC('MONTH', CURRENT_TIMESTAMP) + INTERVAL '1 month'
        AND "Transactions"."userIdentifer" = '${userIdentifer}'
        AND "Transactions"."category" = '${category}'
    ) AS sub
    GROUP BY sub.month
    ORDER BY sub.month ASC
    `,
      {
        type: QueryTypes.SELECT,
      }
    );

    if (data !== undefined && data !== null) {
      // Extracting total_amount and month arrays using map
      const totalAmountArray = data.map((row) => parseInt(row.total_amount));
      const monthArray = data.map((row) => row.month);

      const result = {
        labels: monthArray,
        datasets: [
          {
            label: `Amount spent (in $) for ${category} `,
            data: totalAmountArray,
            backgroundColor: ['red', 'green', 'blue', 'pink'],
            borderColor: ['black'],
          },
        ],
      };

      res.json(result);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.error(error);
  }
});

export default transactionRouter;
