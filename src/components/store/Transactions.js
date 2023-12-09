import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { user } from 'pg/lib/defaults';

// getting list of transactions per specific user

export const getTransactionList = createAsyncThunk(
  'PUT/api/transactions/transactionslist',
  async ({ uid, page }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/transactions/transactionsList',
        {
          uid: uid,
          page: page,
        }
      );
      console.log('data', data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// Add to Transaction

export const addTransaction = createAsyncThunk(
  'PUT/api/transactions/addTransaction',
  async ({ amount, category, description, date, userIdentifer }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/transactions/addTransaction',
        {
          category: category,
          description: description,
          amount: amount,
          date: date,
          userIdentifer: userIdentifer,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// // Get a particular Transaction
export const getTransaction = createAsyncThunk(
  'GET/api/transactions/getTransaction',
  async ({ userIdentifer, transactionId }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/transactions/getTransaction',
        {
          userIdentifer: userIdentifer,
          id: transactionId,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// Edit Transaction & Save Transaction Change

const Transactions = createSlice({
  name: 'Transactions',
  initialState: {
    transactions: [],
    addTransaction: null,
    transactionInfo: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionList.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })
      .addCase(getTransactionList.rejected, (state, { payload }) => {
        state.transactions = [];
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.addTransaction = true;
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.addTransaction = false;
      })
      .addCase(addTransaction.pending, (state) => {
        state.addTransaction = null;
      })
      .addCase(getTransaction.fulfilled, (state, { payload }) => {
        state.transactionInfo = payload;
      })
      .addCase(getTransaction.rejected, (state, { payload }) => {
        state.transactionInfo = null;
      });
  },
});

export default Transactions.reducer;