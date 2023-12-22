import { Sequelize } from 'sequelize';
import db from './db.js';

const Savings = db.define('Savings', {
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
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

export default Savings;
