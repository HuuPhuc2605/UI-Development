import { useEffect, useState } from "react";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://67ca6b86102d684575c5483b.mockapi.io/Lab4")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dữ liệu API:", data);
        setRecipes(data);
      })
      .catch((error) => console.error("Lỗi khi gọi API:", error));
  }, []);

  return (
    <div className="container">
      <h1>Emma Gonzalez's Recipe Box</h1>

      {/* 🔥 Phần giới thiệu Emma Gonzalez */}
      <div className="recipe-imgavatar">
        <img
          src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742020324/Avatar_42_klafap.png"
          alt="Emma Gonzalez"
          className="profile-img"
        />
        <p className="recipe-text">
          Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at
          The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks
          and food publications. Originally from East Los Angeles, Emma now resides in New York City,
          where she explores a wide range of culinary delights.
        </p>
      </div>

      {/* 🔘 Thêm hai nút Subscribe và Share */}
      <div className="button-container">
        <button className="subscribe-btn">6.5k Subscribes</button>
        <button className="share-btn">Share</button>
      </div>

      {/* ✅ Truyền danh sách công thức xuống AddRecipeForm */}
      <AddRecipeForm recipes={recipes} />
    </div>
  );
}

export default App;
