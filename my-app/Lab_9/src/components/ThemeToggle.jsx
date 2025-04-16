import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/themeSlice';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-center">
      <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">🌗 Theme Toggle</h2>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition"
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
