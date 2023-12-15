import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { create } from 'domain';
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
export const updateTransaction = createAsyncThunk(
  'GET/api/transactions/updateTransaction',
  async ({
    transactionId,
    userIdentifer,
    category,
    description,
    amount,
    transactionDate,
  }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/transactions/updateTransaction',
        {
          transactionId: transactionId,
          userIdentifer: userIdentifer,
          category: category,
          description: description,
          amount: amount,
          date: transactionDate,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'GET/api/transactions/updateTransaction',
  async ({ transactionId, userIdentifer }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/transactions/deleteTransaction',
        {
          transactionId: transactionId,
          userIdentifer: userIdentifer,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// Monthly Spending Breakdown
export const getMonthlyExpenses = createAsyncThunk(
  'PUT /api/transactions/getMonthlyExpenses',
  async ({ userIdentifer }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/transactions/getMonthlyExpenses',
        {
          userIdentifer: userIdentifer,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

// Category Timeline Comparison
export const categoryComparison = createAsyncThunk(
  'PUT /api/transactions/categoryComparison',
  async ({ userIdentifer, category, timeframe }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/transactions/categoryComparison',
        {
          userIdentifer: userIdentifer,
          category: category,
          timeframe: timeframe,
        }
      );

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
    addTransaction: null,
    transactionInfo: [],
    updateStatus: null,
    monthlyTransactions: null,
    categoryComparison: null,
  },
  reducers: {
    resetTransactionInfo: (state) => {
      state.transactionInfo = [];
    },
    logoutUser: (state) => {
      state.transactions = [];
      state.addTransaction = null;
      state.transactionInfo = [];
      state.updateStatus = null;
      state.monthlyTransactions = null;
      state.categoryComparison = null;
    },
  },

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
      })
      .addCase(updateTransaction.fulfilled, (state, { payload }) => {
        state.updateStatus = true;
      })
      .addCase(updateTransaction.rejected, (state, { payload }) => {
        state.updateStatus = false;
      })
      .addCase(updateTransaction.pending, (state) => {
        state.updateStatus = null;
      })
      .addCase(getMonthlyExpenses.fulfilled, (state, { payload }) => {
        state.monthlyTransactions = payload;
      })
      .addCase(categoryComparison.fulfilled, (state, { payload }) => {
        state.categoryComparison = payload;
      });
  },
});
export const { resetTransactionInfo, logoutUser } = Transactions.actions;
export default Transactions.reducer;
