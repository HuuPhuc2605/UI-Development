import { useEffect, useState } from "react";
import AddRecipeForm from "./component/AddRecipeForm"; 

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://67ca6b86102d684575c5483b.mockapi.io/Lab4")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dữ liệu API:", data); // 🛑 Kiểm tra dữ liệu
        setRecipes(data);
      })
      .catch((error) => console.error("Lỗi khi gọi API:", error));
  }, []);

  return (
    <div>
      <h1>Danh sách công thức</h1>
      <AddRecipeForm recipes={recipes} /> {/* ✅ Truyền dữ liệu xuống */}
    </div>
  );
}

export default App;
