import React from "react";
import Counter from "./components/Counter"; // useReducer - Bộ đếm số
import Calculation from "./components/Calculation"; // useMemo - Tối ưu hóa
import CallbackExample from "./components/CallbackExample"; // Callback function - Truyền dữ liệu
import "./App.css"; // Import CSS

export default function App() {
  return (
    <div className="wrapper">
      <h1> React Hooks Demo</h1>

      {/* useReducer - Bộ đếm */}
      <Counter />

      {/* useMemo - Tối ưu tính toán */}
      <Calculation />

      {/* Callback - Truyền dữ liệu từ con lên cha */}
      <CallbackExample />
    </div>
  );
}
