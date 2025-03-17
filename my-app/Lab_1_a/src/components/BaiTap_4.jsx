import { useState } from "react";

export default function BaiTap_4() {
  const [task, setTask] = useState(""); // Quản lý nội dung nhập vào
  const [list, setList] = useState([]); // Danh sách công việc

  function handleAdd() {
    if (task.trim() === "") return; // Không thêm công việc trống
    setList([...list, task]);
    setTask(""); // Xóa nội dung ô nhập sau khi thêm
  }

  function handleDelete(index) {
    setList(list.filter((_, i) => i !== index)); // Xóa phần tử theo index
  }

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Nhập công việc..."
        />
        <button onClick={handleAdd}>Thêm</button>
      </div>
      <hr />
      <ul style={{ padding: 0 }}>
        {list.map((item, index) => (
          <li key={index} style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            border: "1px solid #ddd",
            padding: "8px",
            marginBottom: "5px",
            borderRadius: "5px",
            listStyle: "none"
          }}>
            <span>{item}</span>
            <button 
              onClick={() => handleDelete(index)} 
              style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", borderRadius: "5px" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
