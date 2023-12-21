import { Sequelize } from 'sequelize';
import db from './db.js';

const Budgets = db.define('Budgets', {
  // PK and foreign key will be written when model is created by postgres
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  budgetInterval: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    isIn: [['weekly', 'biweekly', 'monthly', 'quarterly', 'yearly']],
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

export default Budgets;
