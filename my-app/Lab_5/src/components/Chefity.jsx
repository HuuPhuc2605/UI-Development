import React, { useState, useEffect } from "react";
import { FiBookmark } from "react-icons/fi";
const Chefify = () => {
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
      <main className="max-w-6xl mx-auto py-8">
        {/* max-w-6xl → Đặt chiều rộng tối đa của phần tử là 6xl (96rem). */}
        {/* mx-auto → Căn lề trái và lề phải của phần tử theo chiều ngang. */}
        {/* py-8 → Thêm padding dọc (trên & dưới) 8 (tương đương 32px). */}
        <h1 className="text-3xl font-bold">Emma Gonzalez's Recipe Box</h1>
        {/* text-3xl → Đặt kích thước phông chữ là 3xl (48px). */}
        <div className="flex items-center space-x-4">
          {/* items-center → Căn các phần tử con theo chiều dọc. */}
          {/* space-x-4 → Khoảng cách giữa các phần tử con là 4. */}
          <img
            src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1742020324/Avatar_42_klafap.png"
            alt="Emma Gonzalez"
            className="h-30 w-30 rounded-full"
          />
          <p className="text-gray-700">
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomppshed author, contributing to numerous cookbooks and food
            pubpcations. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of cupnary depghts.
          </p>
        </div>
        <div className="flex space-x-4 mb-20 ml-[250px]">
          {/* mb: (margin-bottom) -4 → Thêm margin dưới 4 (tương đương 16px).tạo khoảng trống giữa phần tử đó với các phần tử khác. */}
          {/* ml: (margin-left) -32 → Thêm margin bên trái 32 (tương đương 128px). */}
          <button className="bg-pink-100 text-pink-600 px-4 py-2 rounded-md hover:bg-pink-300">
            6.5K Subscribess
          </button>
          {/*rounded-md → Bo góc phần tử với độ cong trung bình (md = medium).*/}
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
            Share
          </button>
        </div>

        {/* Recipe List */}
        <div className="grid grid-cols-4 gap-10">
          {/* grid-cols-4 → Chia lưới thành 4 cột. */}
          {/* gap-6 → Tạo khoảng cách giữa các phần tử con là 6 (tương đương 24px). */}
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                {/*rounded-lg → Bo góc phần tử với độ cong lớn (lg = large).*/}
                {/*shadow-md: đổ bóng trugn bình (md = medium)*/}
                {/*overflow-hidden: Ẩn phần nội dung vượt ra ngoài phần tử cha.*/}
                {/*transition-transform: Thêm hiệu ứng chuyển đổi cho phần tử.*/}
                {/*transform hover:scale-105: Phóng to phần tử khi rê chuột vào phần tử.*/}
                {/*recipes.length > 0 → Kiểm tra xem mảng recipes có dữ liệu không
                recipes.map(...) → Duyệt qua từng phần tử trong danh sách recipes và tạo một thẻ hiển thị (<div>).*/}
                <img
                  src={recipe.image} // Lấy ảnh từ API
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
                {/*object-cover: Hiển thị hình ảnh mà không bị vùi bởi phần tử cha.*/}
                <div className="p-4">
                  {/*p-4 → Thêm padding 4 (tương đương 16px).*/}
                  <h3 className="font-bold">{recipe.content} </h3>

                  <div className="flex items-center gap-2 mt-2 ml-[5px]">
                    <p className="text-pink-600 bg-pink-100 px-2 py-1 rounded-md">
                      {recipe.minutes} minutes
                    </p>
                    <FiBookmark className="p-1 ml-20 mb-4 w-8 h-8 rounded-full border-2 border-pink-500 text-pink-500 text-xl cursor-pointer hover:bg-pink-300" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No recipes available</p>
          )}
        </div>
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

export default Chefify;
