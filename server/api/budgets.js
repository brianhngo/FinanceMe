import express from 'express';
import { Transactions } from '../database/models/index.js';
import { Sequelize, QueryTypes } from 'sequelize';
import { db } from '../database/models/index.js';
import { Budgets } from '../database/models/index.js';

const budgetRouter = express.Router();

budgetRouter.put('/setBudget', async (req, res) => {
  try {
    const { amount, userIdentifer, status, date, endDate } = req.body;

    // changing the current status and updating it to new settings.
    const oldData = await Budgets.findOne({
      where: {
        userIdentifer: userIdentifer,
        status: true,
      },
    });

    if (oldData) {
      await oldData.update({
        status: false,
      });
    }

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

    if (!budget) {
      // If budget does not exist, return null
      res.json(null);
      return;
    }

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
        labels: [
          `Amount Spent - ${parseInt(data[0].total)}$ (${Math.round(
            (parseInt(data[0].total) /
              (parseInt(budget.amount) + parseInt(data[0].total))) *
              100,
            100
          ).toFixed(1)}%)`,
          `Amount Remaining - ${parseInt(budget.amount)}$ (${Math.round(
            (parseInt(budget.amount) /
              (parseInt(budget.amount) + parseInt(data[0].total))) *
              100,
            100
          ).toFixed(1)}%)`,
        ],
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
// delete budget => turning it into false
budgetRouter.put('/deleteBudgetChartData', async (req, res) => {
  try {
    const { userIdentifer } = req.body;

    // Use await to get the data
    const data = await Budgets.findOne({
      where: {
        userIdentifer: userIdentifer,
        status: true,
      },
    });

    // Check if data is found
    if (data !== undefined && data !== null) {
      // Update status to false
      await data.update({
        status: false,
      });

      // Send response
      res.json(true);
    } else {
      // If data is not found, send an appropriate response
      res.status(404).json(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default budgetRouter;
