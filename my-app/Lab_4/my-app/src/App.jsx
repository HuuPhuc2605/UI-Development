import { useEffect, useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://67ca6b86102d684575c5483b.mockapi.io/Lab4")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>Danh sách công thức</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {recipes.map((recipe) => (
          <li key={recipe.id} style={{ marginBottom: "20px" }}>s
            <h3>{recipe.name}</h3>
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{ width: "200px", borderRadius: "10px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
