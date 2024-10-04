import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {userInitialState} from './interface';
import axios from 'axios';

// Define the thunk
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

const UserData = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLogin: false,
    status: '',
    error: '',
  } as userInitialState,

  reducers: {
    loginSuccess: (state, action) => {
      state.data = action.payload;
      state.isLogin = true;
    },
    logout: state => {
      state.isLogin = false;
      state.data = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const {loginSuccess, logout} = UserData.actions;
export default UserData.reducer;
