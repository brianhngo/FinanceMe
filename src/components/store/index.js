import { configureStore } from '@reduxjs/toolkit';
import Users from './Users';
import Transactions from './Transactions';

const store = configureStore({
  reducer: {
    Users: Users,
    Transactions: Transactions,
  },
});

export default store;
