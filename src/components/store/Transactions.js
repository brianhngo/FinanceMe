import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// getting list of transactions per specific user

export const getTransactionList = createAsyncThunk(
  'PUT/api/transactions/transactionslist',
  async ({ uid }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/transactions/transactionsList',
        {
          uid: uid,
        }
      );
      console.log('data', data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

const Transactions = createSlice({
  name: 'Transactions',
  initialState: {
    transactions: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionList.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })
      .addCase(getTransactionList.rejected, (state, { payload }) => {
        state.transactions = [];
      });
  },
});

export default Transactions.reducer;
