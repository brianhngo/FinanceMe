import { Sequelize } from 'sequelize';
import db from './db.js';

const Transactions = db.define('Transaction', {
  // PK and foreign key will be written when model is created by postgres
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.STRING(50),
    allowNull: false,
    isIn: [
      [
        'Loans',
        'Utilities',
        'Clothing',
        'Rent',
        'Groceries',
        'Transportation',
        'Health',
        'Gas',
        'Savings',
        'Activities',
        'Other',
      ],
    ],
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

export default Transactions;
