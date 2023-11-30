import { Sequelize } from 'sequelize';
import db from './db.js';

const Users = db.define('Users', {
  userIdentifer: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

export default Users;
