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

const Users = createSlice({
  name: 'Users',
  initialState: {
    users: null,
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
      });
  },
});

export default Users.reducer;
