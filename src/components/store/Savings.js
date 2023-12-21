import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const Savings = createSlice({
  name: 'Savings',
  initialState: {},
  reducers: {
    logoutUser4: (state) => {},
  },
  extraReducers: (builder) => {},
});

export const { logoutUser4 } = Savings.actions;
export default Savings.reducer;
