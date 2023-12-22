import express from 'express';
import { Savings, Transactions } from '../database/models/index.js';
import { Sequelize, QueryTypes } from 'sequelize';
import { db } from '../database/models/index.js';

const savingsRouter = express.Router();

savingsRouter.put('/setSavings', async (req, res) => {
  try {
    const { amount, userIdentifer, status, date, endDate } = req.body;

    const user = await Savings.create({
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

savingsRouter.put('/getSavings', async (req, res) => {
  try {
    const { userIdentifer } = req.body;

    const user = await Savings.findOne({
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

savingsRouter.put('/getChartDataSavings', async (req, res) => {
  try {
    const { userIdentifer } = req.body;

    const user = await Savings.findOne({
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
              AND "Transactions"."category" = 'Savings'
          ) as sub
        GROUP BY TO_CHAR(DATE_TRUNC('MONTH', sub.date), 'YYYY-MM')
        ORDER BY TO_CHAR(DATE_TRUNC('MONTH', sub.date), 'YYYY-MM') ASC
      `,
      {
        replacements: {
          userIdentifer: userIdentifer,
          startDate: user.date,
          endDate: user.endDate,
        },
        type: QueryTypes.SELECT,
      }
    );
    if (data !== undefined && data !== null) {
      const result = {
        labels: ['Amount Saved', 'Amount to go'],
        datasets: [
          {
            label: 'Savings Tracker',
            data: [data[0].total, user.amount - data[0].total],
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
  }
});

export default savingsRouter;
