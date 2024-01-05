import express from 'express';
import { Savings, Transactions } from '../database/models/index.js';
import { Sequelize, QueryTypes } from 'sequelize';
import { db } from '../database/models/index.js';
import { useRef } from 'react';

const savingsRouter = express.Router();

savingsRouter.put('/setSavings', async (req, res) => {
  try {
    const { amount, userIdentifer, status, date, endDate } = req.body;

    // changing the current status and updating it to new settings.
    const oldData = await Savings.findOne({
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

    if (!user) {
      res.json(null);
      return;
    }
    console.log(user);
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
              AND "Transactions"."date" <= :endDate
              AND "Transactions"."category" ILIKE :value
          ) as sub
        GROUP BY TO_CHAR(DATE_TRUNC('MONTH', sub.date), 'YYYY-MM')
        ORDER BY TO_CHAR(DATE_TRUNC('MONTH', sub.date), 'YYYY-MM') ASC
`,
      {
        replacements: {
          userIdentifer: userIdentifer,
          startDate: user.date,
          endDate: user.endDate,
          value: '%Savings%', // Use a specific pattern
        },
        type: QueryTypes.SELECT,
      }
    );
    //  AND "Transactions"."category" ILIKE :value

    if (data !== undefined && data !== null) {
      console.log(data, 'data');
      const result = {
        labels: [
          `Amount Saved - ${parseInt(data[0].total)}$ (${(
            (parseInt(data[0].total) /
              (parseInt(user.amount) + parseInt(data[0].total))) *
            100
          ).toFixed(1)}%)`,
          `Amount Remaining - ${
            parseInt(user.amount) - parseInt(data[0].total)
          }$ (${(
            (parseInt(user.amount - data[0].total) / parseInt(user.amount)) *
            100
          ).toFixed(1)}%)`,
        ],
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

// delete savings => turning it into false
savingsRouter.put('/deleteSavingsChartData', async (req, res) => {
  try {
    const { userIdentifer } = req.body;

    // Use await to get the data
    const data = await Savings.findOne({
      where: {
        userIdentifer: userIdentifer,
        status: true,
      },
    });

    // Check if data is found
    if (data) {
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
export default savingsRouter;
