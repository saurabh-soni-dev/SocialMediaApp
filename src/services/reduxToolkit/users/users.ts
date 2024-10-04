import { createSlice } from '@reduxjs/toolkit';
import { userInitialState } from './interface';

const UserData = createSlice({
  name: 'users',
  initialState: {
    data: [],
    isLogin: false,
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
});

export const {loginSuccess, logout} = UserData.actions;
export default UserData.reducer;
