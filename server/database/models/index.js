// Here I will be importing all the modules, database, and establishing associations between each model.
// Next I will be export it all out.

import db from './db.js';
import Users from './Users.js';
import Transactions from './Transactions.js';
import Goals from './Goals.js';

Goals.belongsTo(Users, {
  foreignKey: 'userIdentifer',
  targetKey: 'userIdentifer',
});
Users.hasMany(Goals, {
  foreignKey: 'userIdentifer',
  sourceKey: 'userIdentifer',
});

// Set up the foreign key relationship for Transactions
Transactions.belongsTo(Users, {
  foreignKey: 'userIdentifer',
  targetKey: 'userIdentifer',
});
Users.hasMany(Transactions, {
  foreignKey: 'userIdentifer',
  sourceKey: 'userIdentifer',
});

export { db, Users, Transactions, Goals };
