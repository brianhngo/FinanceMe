// Seeding file
import { db, Users, Transactions, Goals } from './database/models/index.js';

const oneMonthFromNow = new Date();
oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

const seed = async () => {
  try {
    await Users.create({
      userIdentifer: 'cow',
      email: 'cow@gmail.com',
      name: 'cow',
    });
    await Users.create({
      userIdentifer: 'chicken',
      email: 'chicken@gmail.com',
      name: 'chicken',
    });
    await Goals.create({
      target_amount: 100.0,
      current_amount: 10.0,
      goal_type: 'savings',
      deadline: oneMonthFromNow,
      userIdentifer: 'cow',
    });
    await Goals.create({
      target_amount: 300.0,
      current_amount: 10.0,
      goal_type: 'savings',
      deadline: oneMonthFromNow,
      userIdentifer: 'cow',
    });
    await Goals.create({
      target_amount: 300.0,
      current_amount: 10.0,
      goal_type: 'savings',
      deadline: oneMonthFromNow,
      userIdentifer: 'chicken',
    });
    await Transactions.create({
      amount: 800.0,
      category: 'savings',
      description: 'paycheck',
      date: new Date(),
      userIdentifer: 'cow',
    });
    await Transactions.create({
      amount: 900.0,
      category: 'savings',
      description: 'paycheck',
      date: new Date(),
      userIdentifer: 'cow',
    });
    await Transactions.create({
      amount: 20.0,
      category: 'savings',
      description: 'paycheck',
      date: new Date(),
      userIdentifer: 'cow',
    });
    await Transactions.create({
      amount: 30.0,
      category: 'savings',
      description: 'paycheck',
      date: new Date(),
      userIdentifer: 'cow',
    });
    await Transactions.create({
      amount: 60.0,
      category: 'savings',
      description: 'paycheck',
      date: new Date(),
      userIdentifer: 'cow',
    });
    await Transactions.create({
      amount: 70.0,
      category: 'savings',
      description: 'paycheck',
      date: new Date(),
      userIdentifer: 'cow',
    });
    await Transactions.create({
      amount: 80.0,
      category: 'savings',
      description: 'paycheck',
      date: new Date(),
      userIdentifer: 'cow',
    });
    await Transactions.create({
      amount: 90.0,
      category: 'savings',
      description: 'paycheck',
      date: new Date(),
      userIdentifer: 'cow',
    });

    console.log('Seed Successful');
  } catch (error) {
    console.log('Seed Unsuccessful');
    console.error(error);
  }
};

db.sync({ force: true }).then(seed);
