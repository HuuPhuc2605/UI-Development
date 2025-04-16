import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/authSlice';

const Auth = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">🔐 Auth</h2>

      {!isLoggedIn ? (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Tên đăng nhập..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={() => dispatch(login(username))}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg"
          >
            Đăng nhập
          </button>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">Xin chào, <span className="text-indigo-500">{user}</span>!</p>
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
