const Header = () => {
  return (
    <header className="flex flex-row justify-between mt-4 border-b-2 border-gray-100 pb-4">
      {/* justify-between: Căn các phần tử con theo chiều ngang (trái và phải) căn đều ra
        justify-center: căn các phần tử về giữa*/}
      <img
        className="h-16 w-50 "
        src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1744441317/Chefity_ya5rkt.png"
        alt="Logo"
      />
      <input
        type="text"
        placeholder="What would you like to cook?"
        className="border h-10 rounded-md px-4 py-2 w-96 gap-8 mt-4"
      />
      <div className="flex gap-8 mt-6 text-gray-500 ">
        <p className="hover:text-pink-500">What to cook</p>
        <p className="hover:text-pink-500">Recipes</p>
        <p className="hover:text-pink-500">Ingredients</p>
        <p className="hover:text-pink-500">Occasions</p>
        <p className="hover:text-pink-500">About Us</p>
      </div>
      <div className="flex gap-4 ">
        <button className="bg-pink-100 mt-5 px-4 py-2 text-pink-500 rounded-xl hover:text-pink-300">
          Login
        </button>
        <button className="bg-pink-500 mt-5 px-4 py-2 text-white rounded-xl mr-8 hover:text-pink-300">
          Subscribe
        </button>
      </div>
    </header>
  );
};
export default Header;
