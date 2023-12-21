import express from 'express';
import { Transactions } from '../database/models/index.js';
import { Sequelize, QueryTypes } from 'sequelize';
import { db } from '../database/models/index.js';
import { Budgets } from '../database/models/index.js';

const budgetRouter = express.Router();

budgetRouter.put('/setBudget', async (req, res) => {
  try {
    const { amount, userIdentifer, budgetInterval } = req.body;

    // Calculate the Monday of the current week
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const daysUntilMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
    const mondayOfCurrentWeek = new Date(today);
    mondayOfCurrentWeek.setDate(today.getDate() - daysUntilMonday);

    const user = await Budgets.create({
      userIdentifer: userIdentifer,
      amount: amount,
      budgetInterval: budgetInterval,
      status: true,
      date: mondayOfCurrentWeek,
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

    const user = await Budgets.findOne({
      where: {
        userIdentifer: userIdentifer,
        status: true,
      },
    });
    let timeCondition;

    if (user !== undefined && user !== null) {
      switch (user.budgetInterval) {
        case 'biweekly':
          timeCondition = `"Transactions"."date" >= DATE_TRUNC('MONTH', CURRENT_TIMESTAMP) - INTERVAL '0.5 months'`;
          break;

        case 'weekly':
          timeCondition = `"Transactions"."date" >= DATE_TRUNC('MONTH', CURRENT_TIMESTAMP) - INTERVAL '0.25 months'`;
          break;

        case 'monthly':
          timeCondition = `"Transactions"."date" >= DATE_TRUNC('MONTH', CURRENT_TIMESTAMP) - INTERVAL '1 month'`;
          break;

        case 'quarterly':
          timeCondition = `"Transactions"."date" >= DATE_TRUNC('MONTH', CURRENT_TIMESTAMP) - INTERVAL '3 months'`;
          break;

        case 'yearly':
          timeCondition = `"Transactions"."date" >= DATE_TRUNC('MONTH', CURRENT_TIMESTAMP) - INTERVAL '12 months'`;
          break;

        default:
          // Handle unexpected cases or set a default value
          console.error('Unexpected budget interval:', user.budgetInterval);
          // You might want to set a default condition or handle this case accordingly
          timeCondition = '';
          break;
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
        "Transactions"."userIdentifer" = ${userIdentifer}
        AND DATE_TRUNC('MONTH', "Transactions"."date") < DATE_TRUNC('MONTH', ${user.date}) 
        AND ${timeCondition}
    ) as sub
    GROUP BY TO_CHAR(DATE_TRUNC('MONTH', sub.date), 'YYYY-MM')
    ORDER BY TO_CHAR(DATE_TRUNC('MONTH', sub.date), 'YYYY-MM') ASC
  `,
        {
          type: QueryTypes.SELECT,
        }
      );

      if (data !== undefined && data !== null) {
        // Extracting total_amount and month arrays using map

        const result = {
          labels: ['Spent', 'Amount Remaining'],
          datasets: [
            {
              // label: `Amount spent (in $) for ${category} `,
              data: data,
              backgroundColor: [
                'red', // Red
                'green', // Green
              ],
              borderColor: ['black'],
            },
          ],
        };
        res.json(result);
      } else {
        res.json(false);
      }
    }
  } catch (error) {
    console.error(error);
  }
});

export default budgetRouter;
