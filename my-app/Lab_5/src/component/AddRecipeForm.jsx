import { useState, useEffect } from "react";
import axios from "axios";
import "./AddRecipeForm.css";

const API_URL = "https://67ca6b86102d684575c5483b.mockapi.io/Lab4";

export const AddRecipeForm = () => {
    const [content, setContent] = useState("");
    const [minutes, setMinutes] = useState("");
    const [img, setImg] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get(API_URL);
            setRecipes(response.data);
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRecipe = { content, minutes: Number(minutes), img };

        try {
            await axios.post(API_URL, newRecipe);
            alert("Thêm món ăn thành công!");
            fetchRecipes(); // Cập nhật danh sách sau khi thêm
            setContent("");
            setMinutes("");
            setImg("");
        } catch (error) {
            alert("Lỗi khi thêm món ăn!");
        }
    };

    return (
        <div className="container">
            {/* Form Thêm Món Ăn */}
            <form onSubmit={handleSubmit} className="form-container">
                <h2>Thêm Công Thức Món Ăn</h2>
                <input
                    type="text"
                    placeholder="Tên món ăn"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="input-field"
                />
                <input
                    type="number"
                    placeholder="Thời gian (phút)"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    required
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="URL hình ảnh"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    required
                    className="input-field"
                />
                <button type="submit" className="submit-btn">Thêm Món Ăn</button>
            </form>

            {/* Danh sách món ăn */}
            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card">
                        <img src={recipe.img} alt={recipe.content} className="recipe-image" />
                        <div className="recipe-info">
                            <h3>{recipe.content}</h3>
                            <p>{recipe.minutes} phút</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddRecipeForm;
