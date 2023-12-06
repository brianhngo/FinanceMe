import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// Creating New User

export const createNewUser = createAsyncThunk(
  'PUT/api/Users',
  async ({ uid, email }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/users/createUser',
        {
          uid: uid,
          email: email,
        }
      );

      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getUserInformation = createAsyncThunk(
  'GET/Users/userinfo',
  async ({ uid }) => {
    try {
      const { data } = await axios.put(
        'http://localhost:3000/api/users/userinfo',
        {
          uid: uid,
        }
      );

      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

const Users = createSlice({
  name: 'Users',
  initialState: {
    users: null,
    userInformation: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewUser.fulfilled, (state, { payload }) => {
        state.users = payload;
        console.log(payload);
      })
      .addCase(createNewUser.rejected, (state, { payload }) => {
        state.users = payload;
      })
      .addCase(getUserInformation.fulfilled, (state, { payload }) => {
        state.userInformation = payload;
      })
      .addCase(getUserInformation.rejected, (state, { payload }) => {
        state.userInformation = null;
      });
  },
});

export default Users.reducer;
