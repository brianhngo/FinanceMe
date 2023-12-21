import { configureStore } from '@reduxjs/toolkit';
import Users from './Users';
import Transactions from './Transactions';
import Budgets from './Budgets';
import Savings from './Savings';

const store = configureStore({
  reducer: {
    Users: Users,
    Transactions: Transactions,
    Budgets: Budgets,
    Savings: Savings,
  },
});

export default store;
