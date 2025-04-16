// src/features/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0; // Giúp tạo id duy nhất cho từng todo

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nextTodoId++, // Tạo id mới cho todo
        text: action.payload, // Lưu nội dung todo
        completed: false, // Mặc định là chưa hoàn thành
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // Chuyển đổi trạng thái hoàn thành
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload); // Xóa todo
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
