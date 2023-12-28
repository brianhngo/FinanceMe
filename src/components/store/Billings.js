import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBillings = createAsyncThunk(
  'GET/Billings/getBillingInfo',
  async ({ userIdentifer }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/billings/getBillings',
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

export const addBillings = createAsyncThunk(
  'GET/Billings/addBillingInfo',
  async ({
    userIdentifer,
    amount,
    status,
    description,
    isRecurring,
    recurrenceInterval,
  }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/billings/addBillings',
        {
          userIdentifer: userIdentifer,
          amount: amount,
          status: status,
          description: description,
          isRecurring: isRecurring,
          recurrenceInterval: recurrenceInterval,
        }
      );

      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const editBillings = createAsyncThunk(
  'GET/Billings/editBilling',
  async ({
    userIdentifer,
    amount,
    status,
    description,
    isRecurring,
    recurrenceInterval,
    date,
  }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/billings/editBillings',
        {
          userIdentifer: userIdentifer,
          amount: amount,
          status: status,
          description: description,
          isRecurring: isRecurring,
          recurrenceInterval: recurrenceInterval,
          date: date,
        }
      );

      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getSingularBillings = createAsyncThunk(
  'GET/Billings/getSingularBillings',
  async ({
    userIdentifer,
    amount,
    status,
    description,
    isRecurring,
    recurrenceInterval,
    date,
  }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/billings/getSingularBillings',
        {
          userIdentifer: userIdentifer,
          amount: amount,
          status: status,
          description: description,
          isRecurring: isRecurring,
          recurrenceInterval: recurrenceInterval,
          date: date,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteSingularBillings = createAsyncThunk(
  'GET/Billings/deleteSingularBillings',
  async ({
    userIdentifer,
    amount,
    status,
    description,
    isRecurring,
    recurrenceInterval,
    date,
  }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/billings/deleteSingularBillings',
        {
          userIdentifer: userIdentifer,
          amount: amount,
          status: status,
          description: description,
          isRecurring: isRecurring,
          recurrenceInterval: recurrenceInterval,
          date: date,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

const Billings = createSlice({
  name: 'Billings',
  initialState: {
    getBillingsList: null,
    editBillings: null,
    getSingularList: null,
    deleteSingularList: null,
    addBilling: null,
  },
  reducers: {
    logoutUser5: (state) => {
      state.getBillingsList = null;
      state.editBillings = null;
      state.getSingularList = null;
      state.deleteSingularList = null;
      state.addBilling = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBillings.fulfilled, (state, { payload }) => {
        state.getBillingsList = payload;
      })
      .addCase(editBillings.fulfilled, (state, { payload }) => {
        state.editBillings = true;
      })
      .addCase(getSingularBillings.fulfilled, (state, { payload }) => {
        state.getSingularList = payload;
      })
      .addCase(deleteSingularBillings.fulfilled, (state, { payload }) => {
        state.deleteSingularList = payload;
      })
      .addCase(addBillings.fulfilled, (state, { payload }) => {
        state.addBilling = payload;
      });
  },
});

export const { logoutUser5 } = Billings.actions;
export default Billings.reducer;
