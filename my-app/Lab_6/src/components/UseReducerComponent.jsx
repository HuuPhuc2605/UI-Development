import { useReducer } from "react";

// Hàm reducer: Xử lý logic tăng/giảm giá trị dựa trên action
function reducer(count, action) {
  console.log(action); // In ra action để kiểm tra trong console mỗi khi nhấn nút

  switch (action.type) {
    case "+": // Nếu action có type là "+"
      return { ...count, m: count.m + 1 }; // Tăng giá trị m lên 1
    case "-": // Nếu action có type là "-"
      return { ...count, m: count.m - 1 }; // Giảm giá trị m đi 1
    case "0": // Nếu action có type là "-"
      return { ...count, m: 0 };
    default:
      return count; // Nếu không có action phù hợp, giữ nguyên state
  }
}

function UseReducerComponent() {
  // Khởi tạo state bằng useReducer, giá trị ban đầu là { m: 0 }
  const [count, dispatch] = useReducer(reducer, { m: 0 });

  return (
    // Phần nền của trang, căn giữa theo chiều ngang và chiều dọc
    <div className="bg-blue-100 flex-col flex items-center justify-center h-screen gap-8">
      
      <div className="text-4xl items-center justify-center flex-col flex bg-white w-1/2 h-1/2 rounded-xl shadow-xl shadow-stone-700 gap-8">
       
        <p>
          <strong>Giá trị hiện tại:</strong> {count.m}
        </p>

        {/* Nút tăng giá trị m */}
        <button
          className="bg-green-700 rounded px-4 py-2 text-white"
          onClick={() => dispatch({ type: "+" })} // Gửi action type "+"
        >
          Tăng 1
        </button>

        {/* Nút giảm giá trị m */}
        <button
          className="bg-red-700 rounded px-4 py-2 text-white"
          onClick={() => dispatch({ type: "-" })} // Gửi action type "-"
        >
          Giảm 1
        </button>
        <button
          className="bg-pink-700 rounded px-4 py-2 text-white"
          onClick={() => dispatch({ type: "0" })} // Gửi action type "-"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseReducerComponent;
