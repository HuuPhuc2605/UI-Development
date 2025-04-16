import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../features/todoSlice';

const TodoList = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput(''); // Reset input sau khi thêm
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">📋 To-do List</h2>

      {/* Form thêm công việc mới */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
          placeholder="Thêm công việc..."
        />
        <button
          onClick={handleAddTodo}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Thêm
        </button>
      </div>

      {/* Danh sách công việc */}
      <ul className="space-y-2">
        {todos.length === 0 ? (
          <li className="text-center text-gray-500">Chưa có công việc nào!</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex justify-between items-center px-3 py-2 rounded-lg ${
                todo.completed ? 'bg-green-100 line-through' : 'bg-gray-100'
              } dark:bg-gray-700 dark:text-white`}
            >
              <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                className="cursor-pointer flex-1"
              >
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-white font-bold text-lg"
              >
                ✕
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
