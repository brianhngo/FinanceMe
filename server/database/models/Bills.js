import { Sequelize } from 'sequelize';
import db from './db.js';

const Bills = db.define('Bills', {
  // PK and foreign key will be written when model is created by postgres
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isRecurring: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  recurrenceInterval: {
    type: Sequelize.STRING,
    allowNull: true,
    isIn: ['biweekly', 'weekly', 'monthly', 'quarterly', 'yearly', 'once'],
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

export default Bills;
