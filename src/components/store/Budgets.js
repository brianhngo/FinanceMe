import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setBudgetAmount = createAsyncThunk(
  'GET/Budgets/setBudgetinfo',
  async ({ userIdentifer, status, amount, date, endDate }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/budgets/setBudget',
        {
          userIdentifer: userIdentifer,
          amount: amount,
          status: status,
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

export const getBudgetAmount = createAsyncThunk(
  'GET/Budgets/getBudgetinfo',
  async ({ userIdentifer }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/budgets/getBudget',
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

export const getBudgetChartData = createAsyncThunk(
  'PUT/Budgets/getBudgetChartData',
  async ({ userIdentifer }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/budgets/getChartData',
        {
          userIdentifer: userIdentifer,
        }
      );
      console.log('chartdata', data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteBudgetChartData = createAsyncThunk(
  'DELETE /Budgets/deleteBudgetChartData',
  async ({ userIdentifer }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/budgets/deleteBudgetChartData',
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

const Budgets = createSlice({
  name: 'Budgets',
  initialState: {
    setBudget: null,
    getBudget: 0,
    getBudgetChartDatas: null,
    deleteBudgetStatus: null,
  },
  reducers: {
    logoutUser3: (state) => {
      state.setBudget = null;
      state.getBudget = 0;
      state.getBudgetChartDatas = null;
      state.deleteBudgetStatus = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setBudgetAmount.fulfilled, (state, { payload }) => {
        state.setBudget = true;
      })
      .addCase(setBudgetAmount.rejected, (state, { payload }) => {
        state.setBudget = false;
      })
      .addCase(getBudgetAmount.fulfilled, (state, { payload }) => {
        state.getBudget = payload;
      })
      .addCase(getBudgetChartData.fulfilled, (state, { payload }) => {
        state.getBudgetChartDatas = payload;
      })
      .addCase(deleteBudgetChartData.fulfilled, (state, { payload }) => {
        state.deleteBudgetStatus = payload;
        state.getBudgetChartDatas = null;
      });
  },
});

export const { logoutUser3 } = Budgets.actions;
export default Budgets.reducer;
