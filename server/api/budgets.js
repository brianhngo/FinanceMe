import express from 'express';
import { Transactions } from '../database/models/index.js';
import { Sequelize, QueryTypes } from 'sequelize';
import { db } from '../database/models/index.js';
import { Budgets } from '../database/models/index.js';

const budgetRouter = express.Router();

budgetRouter.put('/setBudget', async (req, res) => {
  try {
    const { amount, userIdentifer, status, date, endDate } = req.body;

    const user = await Budgets.create({
      userIdentifer: userIdentifer,
      amount: amount,
      status: status,
      date: date,
      endDate: endDate,
    });

    if (user) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

budgetRouter.put('/getBudget', async (req, res) => {
  try {
    const { userIdentifer } = req.body;

    const user = await Budgets.findOne({
      where: {
        userIdentifer: userIdentifer,
        status: true,
      },
    });

    if (user) {
      res.json(user);
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error(error);
  }
});

budgetRouter.put('/getChartData', async (req, res) => {
  try {
    const { userIdentifer } = req.body;
    const budget = await Budgets.findOne({
      where: {
        userIdentifer: userIdentifer,
        status: true,
      },
    });

    const data = await db.query(
      `
        SELECT
          SUM(sub.amount) as total,
          TO_CHAR(DATE_TRUNC('MONTH', sub.date), 'YYYY-MM') as month
        FROM
          (
            SELECT * FROM "Transactions"
            WHERE
              "Transactions"."userIdentifer" = :userIdentifer
              AND "Transactions"."date" >= :startDate
              AND "Transactions"."date" < :endDate
          ) as sub
        GROUP BY TO_CHAR(DATE_TRUNC('MONTH', sub.date), 'YYYY-MM')
        ORDER BY TO_CHAR(DATE_TRUNC('MONTH', sub.date), 'YYYY-MM') ASC
      `,
      {
        replacements: {
          userIdentifer: userIdentifer,
          startDate: budget.date, // Assuming budget has a property named date
          endDate: budget.endDate, // Assuming budget has a property named endDate
        },
        type: QueryTypes.SELECT,
      }
    );

    if (data !== undefined && data !== null) {
      // Extracting total_amount and month arrays using map
      const result = {
        labels: ['Amount Spent', 'Amount Remaining'],
        datasets: [
          {
            label: 'Budget Tracker',
            data: [data[0].total, budget.amount - data[0].total],
            backgroundColor: ['red', 'green'],
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
    res.json(false);
  }
});

export default budgetRouter;
