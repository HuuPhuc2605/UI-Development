import React, { useState, useEffect } from "react";
import { FiBookmark } from "react-icons/fi";
const Lab3 = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://67ca6b86102d684575c5483b.mockapi.io/Lab4")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
        {/* justify-between: Căn các phần tử con theo chiều ngang (trái và phải)r 
        px-8 → Thêm padding ngang (trái & phải) 8 (tương đương 32px).
        py-4 → Thêm padding dọc (trên & dưới) 4 (tương đương 16px).
        items-center → Căn các phần tử con theo chiều dọc*/}

        {/* space-x-2 → Khoảng cách giữa các phần tử con là 2 */}
        <img
          src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742179691/Group_21_qxumlm.png"
          alt="logo"
        />
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="border rounded-md px-4 py-2 w-96 "
        />
        {/*rounded-md → Bo góc phần tử với độ cong trung bình (md = medium).*/}
        <nav className="flex space-x-4">
          <button className="px-4 py-2 rounded-md hover:bg-gray-300">
            What to cook
          </button>
          <button className="px-4 py-2 rounded-md hover:bg-gray-300">
            Recipes
          </button>
          <button className="px-4 py-2 rounded-md hover:bg-gray-300">
            Ingredients
          </button>
          <button className="px-4 py-2 rounded-md hover:bg-gray-300">
            Occasions
          </button>
          <button className="px-4 py-2 bg-rose-200 text-pink-700 font-bold rounded-md hover:bg-pink-600">
            Your Recipe Box
          </button>
          <img
            src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742020324/Avatar_42_klafap.png"
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />
          {/*rounded-full → Bo góc phần tử thành hình tròn.*/}
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 flex ml-32 gap-8">
        {/* Sidebar Filter */}
        <aside className="p-4 w-full max-w-xs h-[650px] bg-white rounded-xl shadow-md">
          {/* Title */}
          <div className="mb-6">
            <p className="text-lg font-bold">
              <i className="fas fa-bars mr-2"></i>FILTERS
            </p>
          </div>

          {/* Type */}
          <div className="mb-6">
            <p className="font-semibold text-gray-800">Type</p>
            <div className="grid grid-cols-2 gap-y-2 mt-3 text-sm text-gray-700">
              {[
                "Pan-fried",
                "Stir-fried",
                "Grilled",
                "Roasted",
                "Sauteed",
                "Baked",
                "Steamed",
                "Stewed",
              ].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-pink-500 w-4 h-4" />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Time Slider */}
          <div className="mb-6">
            <p className="font-semibold mb-2 text-gray-800">Time</p>
            <input
              type="range"
              min="0"
              max="60"
              className="w-full accent-pink-500"
            />
            <div className="flex justify-between text-xs text-pink-500 mt-1">
              <span>30 minutes</span>
              <span>50 minutes</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <p className="font-semibold mb-2 text-gray-800">Rating</p>
            {[5, 4, 3, 2, 1].map((stars, idx) => (
              <label
                key={idx}
                className="flex items-center space-x-2 mb-1 text-yellow-500"
              >
                <input type="checkbox" className="accent-pink-500 w-4 h-4" />
                <div className="flex space-x-0.5 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < stars ? "★" : "☆"}</span>
                  ))}
                </div>
              </label>
            ))}
          </div>

          {/* Apply Button */}
          <button className="bg-pink-500 text-white py-2 px-6 rounded-md mt-2 w-full hover:bg-pink-600 transition">
            Apply
          </button>
        </aside>

        {/* Recipe Cards */}
        <section className="w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Salad ({recipes.length})</h2>

            <select className="border px-3 py-2 rounded-md">
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
          </div>

          {/* Recipe Grid */}
          <div className="grid grid-cols-3 gap-6">
            {recipes.length > 0 ? (
              recipes.map((recipe, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-200"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{recipe.content}</h3>
                    <FiBookmark className="p-1 ml-56 mb-4 w-8 h-8 rounded-full border-2 border-pink-500 text-pink-500 text-xl cursor-pointer hover:bg-pink-300" />
                    <div className="flex justify-between items-center text-sm text-pink-600">
                      <span>{recipe.minutes} minutes</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No recipes available</p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {[1, 2, 3, "...", 10, 11].map((page, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded ${
                  page === 1
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        {/*  mt-12: là margin-top (khoảng cách trên) với giá trị 48px */}
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-32">
          {/* grid-cols-3 → Chia lưới thành 3 cột. */}
          {/* gap-8 → Tạo khoảng cách giữa các phần tử con là 8 (tương đương 32px). */}
          {/* mx-auto → Căn lề trái và lề phải của phần tử theo chiều ngang. */}
          <div className="col-span-2">
            {/* col-span-2 → Mở rộng phần tử ra 2 cột. */}
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-gray-400">
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="flex items-center mt-4">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white-800 text-gray px-4 py-2 rounded-md mt-4 w-[300px] "
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-4 ml-2 ">
                Send
              </button>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <img
                src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742211442/Group_22_osdftk.png"
                alt="Emma Gonzalez"
                className="h-16 w-32 rounded-full mt-8"
              />
              <p className="text-sm">2023 Chefify Company</p>{" "}
              <p className="text-sm">Terms of Service</p> |{" "}
              <p className="text-sm">Privacy Popcy</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Learn More</h3>
            {/* text-lg → Đặt kích thước phông chữ là lg (24px). */}
            {/* font-semibold → Đặt độ đậm cho phông chữ là semi-bold. */}
            <ul className="text-gray-400 space-y-2">
              {/* space-y-2 → Khoảng cách giữa các phần tử con là 2. */}
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
              <br />
              <br />
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Recipes</h3>
            <ul className="text-gray-400 space-y-2">
              {/* space-y-2 → Khoảng cách giữa các phần tử con là 2. */}
              <li>What to Cook This Week</li>
              <li>Dinner</li>
              <li>Healthy</li>
              <li>Pasta</li>
              <li>Vegetarian</li>
              <li>Vegan</li>
              <li>Christmas</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Lab3;
