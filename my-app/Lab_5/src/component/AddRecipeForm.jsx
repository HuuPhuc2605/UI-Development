import React from "react";

export const AddRecipeForm = ({ recipes }) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="relative bg-white p-4 rounded-lg shadow-md">
            {/* Icon Bookmark */}
            <img
              src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1741934872/Icon_Button_70_khg8np.png"
              alt="Bookmark"
              className="absolute top-3 right-3 w-6 h-6"
            />
            
            {/* Hình ảnh món ăn */}
            <img
              src={recipe.image}
              alt={recipe.content}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Thông tin món ăn */}
            <div className="mt-3 text-center">
              <h3 className="text-lg font-semibold">{recipe.content}</h3>
              <p className="text-gray-600">{recipe.minutes} minutes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddRecipeForm;
