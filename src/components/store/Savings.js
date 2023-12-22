import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const setSavingsAmount = createAsyncThunk(
  'GET/savings/setSavingsinfo',
  async ({ userIdentifer, status, amount, date, endDate }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/savings/setSavings',
        {
          userIdentifer: userIdentifer,
          status: status,
          amount: amount,
          date: date,
          endDate: endDate,
        }
      );

      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getSavingsAmount = createAsyncThunk(
  'GET/Savings/getSavingsinfo',
  async ({ userIdentifer }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/savings/getSavings',
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

export const getSavingsChartData = createAsyncThunk(
  'PUT/Budgets/getSavingsChartData',
  async ({ userIdentifer }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/savings/getChartDataSavings',
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

const Savings = createSlice({
  name: 'Savings',
  initialState: {
    setSavings: null,
    getSavings: 0,
    SavingsChartDatas: null,
  },
  reducers: {
    logoutUser4: (state) => {
      state.setSavings = null;
      state.getSavings = 0;
      state.SavingsChartDatas = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSavingsAmount.fulfilled, (state, { payload }) => {
        state.setSavings = true;
      })
      .addCase(setSavingsAmount.rejected, (state, { payload }) => {
        state.setSavings = false;
      })
      .addCase(getSavingsAmount.fulfilled, (state, { payload }) => {
        state.getSavings = payload;
      })
      .addCase(getSavingsAmount.rejected, (state, { payload }) => {
        state.getSavings = null;
      })
      .addCase(getSavingsChartData.fulfilled, (state, { payload }) => {
        state.SavingsChartDatas = payload;
      });
  },
});

export const { logoutUser4 } = Savings.actions;
export default Savings.reducer;
