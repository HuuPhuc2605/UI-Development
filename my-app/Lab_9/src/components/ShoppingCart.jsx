import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity, updateName, updatePrice } from '../features/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">🛒 Shopping Cart</h2>

      <button
        onClick={() =>
          dispatch(
            addItem({
              id: Date.now(),
              name: 'Bánh mì ngọt',
              price: 10,
              quantity: 1,
            })
          )
        }
        className="mb-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
      >
        + Thêm sản phẩm mẫu
      </button>

      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-3 rounded-xl mb-2">
          <div>
            {/* Input để thay đổi tên sản phẩm */}
            <input
              type="text"
              value={item.name}
              onChange={(e) => {
                setNewName(e.target.value);
                dispatch(updateName({ id: item.id, name: e.target.value }));
              }}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 mb-2"
            />
            <p className="font-medium">{newName ? newName : item.name}</p>

            {/* Input để thay đổi giá sản phẩm */}
            <input
              type="number"
              value={item.price}
              onChange={(e) => {
                setNewPrice(e.target.value);
                dispatch(updatePrice({ id: item.id, price: parseFloat(e.target.value) }));
              }}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 mb-2"
            />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              ${item.price} × {item.quantity}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                item.quantity > 1 &&
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
              }
              className="bg-gray-300 dark:bg-gray-600 px-2 rounded"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
              className="bg-gray-300 dark:bg-gray-600 px-2 rounded"
            >
              +
            </button>

            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="text-red-500 hover:text-red-700 text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4 font-semibold text-right text-indigo-600 dark:text-indigo-300">
        <p>Tổng số lượng: {totalQuantity}</p>
        <p>Tổng tiền: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
