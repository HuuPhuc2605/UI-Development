// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload); // Thêm sản phẩm vào giỏ hàng
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload); // Xóa sản phẩm khỏi giỏ hàng
    },
    updateQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity; // Cập nhật số lượng sản phẩm
      }
    },
    updateName: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.name = action.payload.name; // Cập nhật tên sản phẩm
      }
    },
    updatePrice: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.price = action.payload.price; // Cập nhật giá sản phẩm
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity, updateName, updatePrice } = cartSlice.actions;
export default cartSlice.reducer;
