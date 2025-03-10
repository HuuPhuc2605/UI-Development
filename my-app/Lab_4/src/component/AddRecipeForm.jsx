import { useState } from "react";
import axios from "axios";
import "./AddRecipeForm.css";

const AddRecipeForm = () => {
    const [content, setContent] = useState("");
    const [minutes, setMinutes] = useState("");
    const [img, setImg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRecipe = { content, minutes: Number(minutes), img };

        try {
            await axios.post("https://67ca6b86102d684575c5483b.mockapi.io/recipes", newRecipe);
            alert("Thêm món ăn thành công!");
            setContent("");
            setMinutes("");
            setImg("");
        } catch (error) {
            alert("Lỗi khi thêm món ăn!");
        }
    };

    return (
        <div className="form-container">
            <h2>Thêm Công Thức Mới</h2>
            <form onSubmit={handleSubmit} className="recipe-form">
                <input 
                    type="text" 
                    placeholder="Tên món ăn" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                    className="form-input"
                />
                <input 
                    type="number" 
                    placeholder="Thời gian (phút)" 
                    value={minutes} 
                    onChange={(e) => setMinutes(e.target.value)} 
                    required 
                    className="form-input"
                />
                <input 
                    type="text" 
                    placeholder="URL hình ảnh" 
                    value={img} 
                    onChange={(e) => setImg(e.target.value)} 
                    required 
                    className="form-input"
                />
                <button type="submit" className="submit-btn">Thêm Món Ăn</button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
