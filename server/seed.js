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
    await Goals.create({
      target_amount: 100.0,
      current_amount: 10.0,
      goal_type: 'Savings',
      deadline: oneMonthFromNow,
      userIdentifer: 'cow',
    });
    await Transactions.create({
      amount: 800.0,
      category: 'Savings',
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
