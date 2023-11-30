// Database Connection to Postgres

// const Sequelize = require('sequelize');
import { Sequelize } from 'sequelize';
const db = new Sequelize('postgres://localhost:5432/financeme', {
  logging: false,
});

export default db;
