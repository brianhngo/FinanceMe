import { configureStore } from '@reduxjs/toolkit';
import Users from './Users';
import Transactions from './Transactions';
import Budgets from './Budgets';
import Savings from './Savings';
import Billings from './Billings';

const store = configureStore({
  reducer: {
    Users: Users,
    Transactions: Transactions,
    Budgets: Budgets,
    Savings: Savings,
    Billings: Billings,
  },
});

export default store;
