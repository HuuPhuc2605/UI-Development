import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-6">
        🔢 Counter App
      </h2>

      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => dispatch(decrement())}
          className="w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 text-white text-3xl font-bold shadow-lg transition-all"
        >
          –
        </button>

        <div className="text-5xl font-extrabold text-gray-800 dark:text-white min-w-[60px] text-center">
          {count}
        </div>

        <button
          onClick={() => dispatch(increment())}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white text-3xl font-bold shadow-lg transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
