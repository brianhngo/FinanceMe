import express from 'express';
import { Users } from '../database/models/index.js';

const usersRouter = express.Router();

// GET all users
usersRouter.get('/', async (req, res) => {
  try {
    const users = await Users.findAll();

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET a particular User Information
usersRouter.put('/userinfo', async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        userIdentifer: req.body.uid,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create New Users to the Database when they create an account

usersRouter.put('/createUser', async (req, res) => {
  try {
    const newUser = await Users.create({
      userIdentifer: req.body.uid,
      email: req.body.email,
      name: req.body.name || null,
    });

    if (newUser) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (error) {
    console.error(error);
  }
});

export default usersRouter;
