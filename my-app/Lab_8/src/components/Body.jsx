import React, { useState, useEffect } from "react";
import Header from "./header";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FiBookmark } from "react-icons/fi";
import Footer from "./Footer";
const Chefify = () => {
  const [recipes, setRecipes] = useState([]);
  const [videoRecipes, setVideoRecipes] = useState([]);
  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };
  useEffect(() => {
    fetch("https://67ca6b86102d684575c5483b.mockapi.io/Lab4")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log("Error:", error));
  }, []);
  useEffect(() => {
    fetch("https://67fa743d8ee14a542627bf04.mockapi.io/Lab6/menu")
      .then((res) => res.json())
      .then((data) => setVideoRecipes(data))
      .catch((err) => console.error("API 2 Error:", err));
  }, []);

  return (
    <div className="bg-white text-gray-800 ">
      {/*scale-[20%]: thu phóng to nhỏ*/}
      <Header />

      <main className=" mt-[84px]">
        <img
          className="w-full"
          src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1744453963/Banner_fyvdar.png"
          alt="banner"
        />

        <div className=" absolute top-[510px] left-[108px] w-[413px] h-[418px] bg-white rounded-lg shadow-lg p-4 items-center border border-dashed border-purple-500 ">
          <button className=" bg-yellow-500 absolute top-[-15px] left-[80px] text-center px-16 py-2 rounded-lg text-yellow-900 hover:bg-yellow-600 ">
            Recipe of the day
          </button>
          <p className="absolute top-[80px] left-[110px] text-3xl font-bold text-pink-500">
            Salad Caprese
          </p>
          <p className="absolute top-[120px] p-6 text-center">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish for
            lunch or appetizer.
          </p>
          <img
            className="w-12 h-12 absolute top-[250px] left-[180px] "
            src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1744457057/image.psd_cqs5vd.png"
            alt="avatar"
          />
          <p className=" absolute top-[300px] left-1/2 transform -translate-x-1/2 font-medium">
            Salad Caprese
          </p>
          <button className=" flex items-center justify-center absolute bg-pink-500 absolute top-[350px] left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg text-white hover:bg-pink-600 gap-2 ">
            View now
            <ArrowRightIcon className="h-5 w-5" />
          </button>
          {/* top-[10px]: Đặt vị trí phần tử cách đỉnh của phần tử cha 10px. khi sử dụng absoulte*/}
          {/* absolute: Đặt vị trí của phần tử là tuyệt đối so với phần tử cha gần nhất có vị trí không phải là static.*/}
        </div>
        {chunkArray(recipes, 4).map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16">
            <h2 className="text-4xl font-bold text-center text-pink-600 mt-8">
              {groupIndex === 0 ? "This Summer Recipes" : "Recipes With Videos"}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {groupIndex === 0
                ? "We have all your Independence Day sweets covered."
                : "Cooking Up Culinary Creations with Step-by-Step Videos"}
            </p>

            <div className="grid grid-cols-4 gap-20 p-20">
              {group.map((recipe, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.content}
                    className="w-full h-72 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-sm">{recipe.content}</h3>
                    <FiBookmark className=" p-1 w-8 h-8 rounded-full border-2 border-pink-500 ml-60 text-pink-500 text-xl cursor-pointer hover:bg-pink-300" />
                    <p className="text-pink-600 bg-pink-100 w-fit mt-[10px] px-2 py-1 rounded-xl mt-2 text-sm">
                      {recipe.minutes} minutes
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <h2 className="text-4xl font-bold text-center text-pink-600 mt-8">
          Editor's pick
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>
        <div className=" grid grid-cols-2  gap-20 p-20">
          {videoRecipes.map((videoRecipe, index) => (
            <div
              key={index}
              className=" flex bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={videoRecipe.img}
                alt={videoRecipe.title}
                className=" p-4 h-60 w-50 object-cover"
              />

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div className="flex flex-cols justify-between">
                  {/*justify-between:căn các phần tử bên trong về 2 bên bìa*/}
                  <h3 className=" text-2xl  font-bold">{videoRecipe.title}</h3>
                  <FiBookmark className=" p-1 w-8 h-8 rounded-full border-2 border-pink-500 mr-2 text-pink-500 text-xl cursor-pointer hover:bg-pink-300" />
                </div>
                <p className="text-gray-600">{videoRecipe.minutes} minutes</p>
                <div className="flex flex-cols gap-2 mt-2 ml-[5px]">
                  <img
                    className="h-10 w-10 rounded-full  "
                    src={videoRecipe.avatar}
                    alt={videoRecipe.title}
                  />
                  <p className="text-xl ">{videoRecipe.name} </p>
                </div>
                <p className="text-xl text-gray-600">{videoRecipe.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chefify;
