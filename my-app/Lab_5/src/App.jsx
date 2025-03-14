import { useEffect, useState } from "react";
import AddRecipeForm from "./component/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://67ca6b86102d684575c5483b.mockapi.io/Lab4")
      .then((response) => response.json())
      .then((data) => {
        console.log("📌 Dữ liệu API:", data); // Kiểm tra API trả về gì
        setRecipes(data);
      })
      .catch((error) => console.error("❌ Lỗi API:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Danh sách món ăn</h1>
      {recipes.length >= 4 ? (
        <AddRecipeForm recipes={recipes} />
      ) : (
        <p className="text-center text-gray-500">Đang tải dữ liệu...</p>
      )}
    </div>
  );
}

export default App;
