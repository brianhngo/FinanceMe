import { configureStore } from '@reduxjs/toolkit';
import Users from './Users';

const store = configureStore({
  reducer: {
    Users: Users,
  },
});

export default store;
