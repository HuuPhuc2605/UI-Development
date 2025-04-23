const Footer = () => {
  return (
    <footer className="grid grid-cols-5 bg-slate-900 text-white p-8 ">
      {/* Cột 1 - chiếm 2 cột */}
      <div className="col-span-2 ml-4 gap-4">
        <h3 className="text-lg font-bold mb-2">About Us</h3>
        <p className="text-xl">
          Welcome to our website, a wonderful place to explore and learn how to
          cook like a pro.
        </p>
        <div className="flex gap-4 mt-4">
          <input
            type="text"
            placeholder="Your email"
            className="p-2 rounded text-black w-[400px] h-[36px]"
          />
          <button className="bg-pink-500 text-white px-4  rounded h-[36px]">
            Send
          </button>
        </div>
        <div className="flex gap-4 mt-28">
          <img
            src="https://res.cloudinary.com/dkzpfo8b2/image/upload/v1744530972/image.psd_8_f7jsri.png"
            alt="logofooter"
            className="h-16 w-42"
          />
          <p className="mt-6">2023 Chefify Company</p>
          <p className="mt-6">Terms of Service| Privacy Policy</p>
        </div>
      </div>
      {/* Cột 2 */}
      <div></div>
      <div>
        <h3 className="text-lg font-bold mb-2 ">Learn More</h3>
        <ul className=" text-sm space-y-2 mt-4">
          <li>Our Cooks</li>
          <li>See Our Features</li>
          <li>FAQ</li>
        </ul>

        <h3 className="text-lg font-bold mt-24">Shop</h3>
        <ul className=" text-sm space-y-2 mt-4 ">
          <li>Gift Subscription</li>
          <li>Send Us Feedback</li>
        </ul>
      </div>

      {/* Cột 3 */}
      <div>
        <h3 className="text-lg font-bold mb-2">Recipes</h3>
        <ul className=" text-sm space-y-6">
          <li>What to Cook This Week</li>
          <li>Pasta</li>
          <li>Dinner</li>
          <li>Healthy</li>
          <li>Vegetarian</li>
          <li>Vegan</li>
          <li>Christmas</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
