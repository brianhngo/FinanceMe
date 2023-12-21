// Here I will be importing all the modules, database, and establishing associations between each model.
// Next I will be export it all out.

import db from './db.js';
import Users from './Users.js';
import Transactions from './Transactions.js';
import Goals from './Goals.js';
import Bills from './Bills.js';
import Budgets from './Budget.js';
import Savings from './Savings.js';

Goals.belongsTo(Users, {
  foreignKey: 'userIdentifer',
  targetKey: 'userIdentifer',
});
Users.hasMany(Goals, {
  foreignKey: 'userIdentifer',
  sourceKey: 'userIdentifer',
});

Transactions.belongsTo(Users, {
  foreignKey: 'userIdentifer',
  targetKey: 'userIdentifer',
});
Users.hasMany(Transactions, {
  foreignKey: 'userIdentifer',
  sourceKey: 'userIdentifer',
});

Bills.belongsTo(Users, {
  foreignKey: 'userIdentifer',
  targetKey: 'userIdentifer',
});
Users.hasMany(Bills, {
  foreignKey: 'userIdentifer',
  sourceKey: 'userIdentifer',
});

Budgets.belongsTo(Users, {
  foreignKey: 'userIdentifer',
  sourceKey: 'userIdentifer',
});
Users.hasOne(Budgets, {
  foreignKey: 'userIdentifer',
  sourceKey: 'userIdentifer',
});

Users.hasOne(Savings, {
  foreignKey: 'userIdentifer',
  sourceKey: 'userIdentifer',
});

Savings.belongsTo(Users, {
  foreignKey: 'userIdentifer',
  sourceKey: 'userIdentifer',
});

export { db, Users, Transactions, Goals, Bills, Budgets, Savings };
