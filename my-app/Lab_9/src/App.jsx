import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import ShoppingCart from './components/ShoppingCart';
import Auth from './components/Auth';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-900 shadow-md py-6 px-4 mb-8">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 dark:text-indigo-400">
          🧠 Redux Toolkit Mini Dashboard
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-2">
          5 tính năng cơ bản với Redux Toolkit + Tailwind CSS
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <ThemeToggle />
        </div>
        <div className="col-span-1">
          <Counter />
        </div>
        <div className="col-span-1">
          <Auth />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <TodoList />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <ShoppingCart />
        </div>
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm dark:text-gray-400">
        © {new Date().getFullYear()} – Developed by <span className="font-medium text-indigo-600 dark:text-indigo-400">You</span> with 💻 & 🧠
      </footer>
    </div>
  );
}

export default App;
