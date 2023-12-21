// Seeding file
import { db, Users, Transactions, Goals } from './database/models/index.js';

const oneMonthFromNow = new Date();
oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

const seed = async () => {
  try {
    await Users.create({
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
      email: 'chau@gmail.com',
      name: 'Chau Chau',
    });

    await Transactions.create({
      amount: 800.0,
      category: 'Savings',
      description: 'Paycheck',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 432.0,
      category: 'Savings',
      description: 'Paycheck',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 513.0,
      category: 'Savings',
      description: 'Paycheck',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 231.0,
      category: 'Savings',
      description: 'Paycheck',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 341.0,
      category: 'Loans',
      description: 'Car Payment',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 1000.0,
      category: 'Loans',
      description: 'Student Loan',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 849.02,
      category: 'Loans',
      description: 'Money Loan',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 52.13,
      category: 'Utilities',
      description: 'Water',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 61.0,
      category: 'Utilities',
      description: 'Electricity',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 32.1,
      category: 'Utilities',
      description: 'Gas',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 800,
      category: 'Rent',
      description: 'December Rent',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 200,
      category: 'Groceries',
      description: 'Food',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 100,
      category: 'Groceries',
      description: 'Food',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 43,
      category: 'Health',
      description: 'Doctor Copay',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 20,
      category: 'Health',
      description: 'Prescription',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 61.59,
      category: 'Gas',
      description: 'Car Gas',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 91.59,
      category: 'Activities',
      description: 'Concert Tickets',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 40.0,
      category: 'Activities',
      description: 'Bowling',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 150.0,
      category: 'Other',
      description: 'Brother Birthday Gift',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    console.log('Seed Successful');
  } catch (error) {
    console.log('Seed Unsuccessful');
    console.error(error);
  }
};

db.sync({ force: true }).then(seed);
