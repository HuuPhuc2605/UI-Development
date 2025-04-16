import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import todoReducer from '../features/todoSlice';
import themeReducer from '../features/themeSlice';
import cartReducer from '../features/cartSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    theme: themeReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
