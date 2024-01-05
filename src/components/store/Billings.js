import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBillings = createAsyncThunk(
  'GET/Billings/getBillingInfo',
  async ({ userIdentifer, sort }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/billings/getBillings',
        {
          userIdentifer: userIdentifer,
          sort: sort,
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
    isRecurringInterval,
    date,
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
          recurrenceInterval: isRecurringInterval,
          date: date,
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
    id,
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
          id: id,
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
  async ({ userIdentifer, billId }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/billings/getSingularBillings',
        {
          userIdentifer: userIdentifer,
          billId: billId,
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteSingularBillings = createAsyncThunk(
  'GET/Billings/deleteSingularBillings',
  async ({ userIdentifer, id }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/billings/deleteSingularBillings',
        {
          userIdentifer: userIdentifer,
          id: id,
        }
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const extendRecurringDate = createAsyncThunk(
  'PUT/BILLINGS/extendRecurringDates',
  async ({ userIdentifer, id }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/billings/extendSingularBillings',
        {
          userIdentifer: userIdentifer,
          id: id,
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
    getBillingsList: [],
    editBillings: null,
    getSingularListData: [],
    deleteSingularList: null,
    addBilling: null,
    recurringIntervalStatus: null,
  },
  reducers: {
    resetBillingInfo: (state) => {
      state.getSingularListData = [];
    },
    logoutUser5: (state) => {
      state.getBillingsList = [];
      state.editBillings = null;
      state.getSingularListData = [];
      state.deleteSingularList = null;
      state.addBilling = null;
      state.recurringIntervalStatus = null;
    },
    resetRecurringIntervalStatus: (state) => {
      state.recurringIntervalStatus = null;
    },
    sortBillingList: (state, sort) => {},
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
        state.getSingularListData = payload;
      })
      .addCase(deleteSingularBillings.fulfilled, (state, { payload }) => {
        state.deleteSingularList = payload;
      })
      .addCase(addBillings.fulfilled, (state, { payload }) => {
        state.addBilling = payload;
      })
      .addCase(extendRecurringDate.fulfilled, (state, { payload }) => {
        state.recurringIntervalStatus = payload;
      });
  },
});

export const { logoutUser5, resetBillingInfo, resetRecurringIntervalStatus } =
  Billings.actions;
export default Billings.reducer;
