import React from "react";
import "./AddRecipeForm.css";

export const AddRecipeForm = ({ recipes }) => {  // ✅ Nhận recipes từ props, KHÔNG cần khai báo lại useState([])

    return (
        
        <div className="recipe-grid">
        {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
            {console.log("URL ảnh:", recipe.image)} {/* 🛑 Kiểm tra URL ảnh */}
            <img src={recipe.image} alt={recipe.content} className="recipe-image" />
            <div className="recipe-info">
                <h3>{recipe.content}</h3>
                <p>{recipe.minutes} minutes</p>
            </div>
            <div className="bookmark-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </div>
        </div>
        
    ))}
</div>

    );
};

export default AddRecipeForm;
