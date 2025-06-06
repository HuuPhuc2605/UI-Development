import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, isLoggedIn: false },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
