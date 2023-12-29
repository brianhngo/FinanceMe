import express from 'express';
import { Sequelize, QueryTypes } from 'sequelize';
import { db } from '../database/models/index.js';
import { Bills } from '../database/models/index.js';

const billingsRouter = express.Router();

billingsRouter.put('/getBillings', async (req, res) => {
  try {
    const { userIdentifer } = req.body;

    const data = await Bills.findAll({
      where: {
        userIdentifer: userIdentifer,
        status: true,
      },
      order: [['date', 'ASC']], // Order by 'date' in ascending order
    });

    if (data) {
      res.json(data);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.error(error);
  }
});

billingsRouter.put('/getSingularBillings', async (req, res) => {
  try {
    const { userIdentifer, billId } = req.body;

    const data = await Bills.findAll({
      where: {
        userIdentifer: userIdentifer,
        id: billId,
      },
    });

    if (data) {
      res.json(data);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.error(error);
  }
});

billingsRouter.put('/addBillings', async (req, res) => {
  try {
    const {
      userIdentifer,
      amount,
      status,
      description,
      isRecurring,
      recurrenceInterval,
      date,
    } = req.body;

    const data = await Bills.create({
      userIdentifer: userIdentifer,
      status: status,
      amount: amount,
      description: description,
      isRecurring: isRecurring,
      recurrenceInterval: recurrenceInterval,
      date: date,
    });

    if (data) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

billingsRouter.put('/editBillings', async (req, res) => {
  try {
    const {
      userIdentifer,
      amount,
      status,
      description,
      isRecurring,
      recurrenceInterval,
      id,
    } = req.body;

    const data = await Bills.findOne({
      where: {
        userIdentifer: userIdentifer,
        id: id,
      },
    });

    await data.update({
      userIdentifer: userIdentifer,
      status: status,
      amount: amount,
      description: description,
      isRecurring: isRecurring,
      recurrenceInterval: recurrenceInterval,
    });

    if (data) {
      res.json(true);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

billingsRouter.put('/deleteSingularBillings', async (req, res) => {
  try {
    const { userIdentifer, id } = req.body;

    const data = await Bills.findOne({
      where: {
        userIdentifer: userIdentifer,
        id: id,
      },
    });

    if (data) {
      await data.destroy();

      res.json(true);
    } else {
      res.json(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default billingsRouter;
