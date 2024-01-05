// Seeding file
import {
  db,
  Users,
  Transactions,
  Bills,
  Savings,
  Budgets,
} from './database/models/index.js';

// Function to subtract days from a date
const subtractDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate;
};

// Get the current date
const currentDate = new Date();

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
      date: currentDate,
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 800.0,
      category: 'Savings',
      description: 'Paycheck',
      date: subtractDays(currentDate, 14),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 800.0,
      category: 'Savings',
      description: 'Paycheck',
      date: subtractDays(currentDate, 28),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 800.0,
      category: 'Savings',
      description: 'Paycheck',
      date: subtractDays(currentDate, 42),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 800.0,
      category: 'Savings',
      description: 'Paycheck',
      date: subtractDays(currentDate, 56),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 800.0,
      category: 'Savings',
      description: 'Paycheck',
      date: subtractDays(currentDate, 70),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 800.0,
      category: 'Savings',
      description: 'Paycheck',
      date: subtractDays(currentDate, 84),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 800.0,
      category: 'Savings',
      description: 'Paycheck',
      date: subtractDays(currentDate, 98),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 800.0,
      category: 'Savings',
      description: 'Paycheck',
      date: subtractDays(currentDate, 112),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 200.0,
      category: 'Other',
      description: 'Brothers Bday gift',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 100.0,
      category: 'Other',
      description: 'Sammys Bday gift',
      date: subtractDays(currentDate, 100),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 50.0,
      category: 'Other',
      description: 'Dante Bday gift',
      date: subtractDays(currentDate, 20),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 78.0,
      category: 'Other',
      description: 'Charlie Bday gift',
      date: subtractDays(currentDate, 2),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 540.0,
      category: 'Activities',
      description: 'Coachella',
      date: subtractDays(currentDate, 2),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 540.0,
      category: 'Activities',
      description: 'Top Golf',
      date: subtractDays(currentDate, 18),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 40.0,
      category: 'Activities',
      description: 'Bowling',
      date: subtractDays(currentDate, 18),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 30.0,
      category: 'Activities',
      description: 'Minature Golf',
      date: subtractDays(currentDate, 35),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 40.0,
      category: 'Activities',
      description: 'Arcade',
      date: subtractDays(currentDate, 41),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 63.0,
      category: 'Activities',
      description: 'Concert',
      date: subtractDays(currentDate, 72),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 100.0,
      category: 'Activities',
      description: 'Concert',
      date: subtractDays(currentDate, 101),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 60.0,
      category: 'Activities',
      description: 'Concert',
      date: subtractDays(currentDate, 141),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 60.0,
      category: 'Activities',
      description: 'Fishing',
      date: subtractDays(currentDate, 121),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 51.23,
      category: 'Gas',
      description: 'Car Gas',
      date: currentDate,
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 41.23,
      category: 'Gas',
      description: 'Car Gas',
      date: subtractDays(currentDate, 7),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 21.23,
      category: 'Gas',
      description: 'Car Gas',
      date: subtractDays(currentDate, 14),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 52.23,
      category: 'Gas',
      description: 'Car Gas',
      date: subtractDays(currentDate, 31),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 55.23,
      category: 'Gas',
      description: 'Car Gas',
      date: subtractDays(currentDate, 49),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 59.23,
      category: 'Gas',
      description: 'Car Gas',
      date: subtractDays(currentDate, 65),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 59.23,
      category: 'Gas',
      description: 'Car Gas',
      date: subtractDays(currentDate, 84),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 68.23,
      category: 'Gas',
      description: 'Car Gas',
      date: subtractDays(currentDate, 100),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 59.23,
      category: 'Gas',
      description: 'Car Gas',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 25.0,
      category: 'Health',
      description: 'Copay',
      date: subtractDays(currentDate, 10),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 25.0,
      category: 'Health',
      description: 'Copay',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 25.0,
      category: 'Health',
      description: 'Copay',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 25.0,
      category: 'Health',
      description: 'Prescription',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 25.0,
      category: 'Health',
      description: 'Prescription',
      date: subtractDays(currentDate, 0),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 25.0,
      category: 'Health',
      description: 'Prescription',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 25.0,
      category: 'Health',
      description: 'Prescription',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 10.0,
      category: 'Transportation',
      description: 'City Bus',
      date: subtractDays(currentDate, 0),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 10.0,
      category: 'Transportation',
      description: 'City Bus',
      date: subtractDays(currentDate, 30),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 10.0,
      category: 'Transportation',
      description: 'City Bus',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 10.0,
      category: 'Transportation',
      description: 'City Bus',
      date: subtractDays(currentDate, 90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 10.0,
      category: 'Transportation',
      description: 'City Bus',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 10.0,
      category: 'Transportation',
      description: 'Subway',
      date: subtractDays(currentDate, 30),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 10.0,
      category: 'Transportation',
      description: 'Subway',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Groceries',
      description: 'TraderJoes',
      date: subtractDays(currentDate, 0),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 90.0,
      category: 'Groceries',
      description: 'TraderJoes',
      date: subtractDays(currentDate, 14),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 80.0,
      category: 'Groceries',
      description: 'Costco',
      date: subtractDays(currentDate, 30),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 30.0,
      category: 'Groceries',
      description: 'TraderJoes',
      date: subtractDays(currentDate, 42),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Groceries',
      description: 'TraderJoes',
      date: subtractDays(currentDate, 56),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 200.0,
      category: 'Groceries',
      description: 'Costco',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 24.0,
      category: 'Groceries',
      description: 'TraderJoes',
      date: subtractDays(currentDate, 70),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 40.0,
      category: 'Groceries',
      description: 'TraderJoes',
      date: subtractDays(currentDate, 84),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 150.0,
      category: 'Groceries',
      description: 'Costco',
      date: subtractDays(currentDate, 90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 890.0,
      category: 'Groceries',
      description: 'TraderJoes',
      date: subtractDays(currentDate, 104),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 70.0,
      category: 'Groceries',
      description: 'TraderJoes',
      date: subtractDays(currentDate, 110),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 109.0,
      category: 'Groceries',
      description: 'Costco',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 109.0,
      category: 'Groceries',
      description: 'Costco',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 1100.0,
      category: 'Rent',
      description: 'Housing',
      date: subtractDays(currentDate, 0),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 1100.0,
      category: 'Rent',
      description: 'Housing',
      date: subtractDays(currentDate, 30),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 1100.0,
      category: 'Rent',
      description: 'Housing',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 1100.0,
      category: 'Rent',
      description: 'Housing',
      date: subtractDays(currentDate, 90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 1100.0,
      category: 'Rent',
      description: 'Housing',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 1100.0,
      category: 'Rent',
      description: 'Housing',
      date: subtractDays(currentDate, 150),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 250,
      category: 'Clothing',
      description: 'Suit',
      date: subtractDays(currentDate, 20),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 40.0,
      category: 'Clothing',
      description: 'Work Clothes',
      date: subtractDays(currentDate, 45),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 62.0,
      category: 'Clothing',
      description: 'Work Clothes',
      date: subtractDays(currentDate, 75),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Clothing',
      description: 'Jacket',
      date: subtractDays(currentDate, 90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Water',
      date: subtractDays(currentDate, 0),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Electricity',
      date: subtractDays(currentDate, 0),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Gas + Waste',
      date: subtractDays(currentDate, 0),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Water',
      date: subtractDays(currentDate, 300),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Electricity',
      date: subtractDays(currentDate, 30),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Gas + Waste',
      date: subtractDays(currentDate, 30),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Water',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Electricity',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Gas + Waste',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Water',
      date: subtractDays(currentDate, 90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Electricity',
      date: subtractDays(currentDate, 90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Gas + Waste',
      date: subtractDays(currentDate, 90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Water',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Electricity',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Utilities',
      description: 'Gas + Waste',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Loans',
      description: 'Students',
      date: subtractDays(currentDate, 0),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Loans',
      description: 'Students',
      date: subtractDays(currentDate, 30),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Loans',
      description: 'Students',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Loans',
      description: 'Students',
      date: subtractDays(currentDate, 90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 120.0,
      category: 'Loans',
      description: 'Students',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 20.0,
      category: 'Loans',
      description: 'Car',
      date: subtractDays(currentDate, 120),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 20.0,
      category: 'Loans',
      description: 'Car',
      date: subtractDays(currentDate, 90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 20.0,
      category: 'Loans',
      description: 'Car',
      date: subtractDays(currentDate, 60),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 20.0,
      category: 'Loans',
      description: 'Car',
      date: subtractDays(currentDate, 30),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Transactions.create({
      amount: 20.0,
      category: 'Loans',
      description: 'Car',
      date: subtractDays(currentDate, 0),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Bills.create({
      amount: 1100,
      status: true,
      description: 'rent',
      isRecurring: true,
      recurrenceInterval: 'monthly',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Bills.create({
      amount: 40,
      status: true,
      description: 'Utilities Gas',
      isRecurring: true,
      recurrenceInterval: 'monthly',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Bills.create({
      amount: 20,
      status: true,
      description: 'Utilities Waste',
      isRecurring: true,
      recurrenceInterval: 'monthly',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });
    await Bills.create({
      amount: 60,
      status: true,
      description: 'Utilities Water',
      isRecurring: true,
      recurrenceInterval: 'monthly',
      date: new Date(),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Savings.create({
      amount: 10000,
      status: true,
      date: subtractDays(currentDate, 0),
      endDate: subtractDays(currentDate, -90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    await Budgets.create({
      amount: 10000,
      status: true,
      date: subtractDays(currentDate, 7),
      endDate: subtractDays(currentDate, -90),
      userIdentifer: 'iVuyLC8FgSd4HkLAux7Fauk5ao92',
    });

    console.log('Seed Successful');
  } catch (error) {
    console.log('Seed Unsuccessful');
    console.error(error);
  }
};

db.sync({ force: true }).then(seed);
