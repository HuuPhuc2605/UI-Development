const Grid = () => {
  return (
    <div className="text-center text-3xl font-bold">
      <p>Chào mừng bạn đến với grid</p>
      <br />
      <div className="grid grid-cols-4 p-4 gap-4 bg-gray-100  bg-blue-400">
        <div className="bg-red-500 p-6 rounded-lg text-white text-center">
          Item 1
        </div>

        <div className="bg-blue-500 p-6 rounded-lg text-white text-center">
          Item 2
        </div>
        <div className="bg-yellow-500 p-6 rounded-lg text-white text-center">
          Item 3
        </div>
        <div className="bg-green-500 p-6 rounded-lg text-white text-center">
          Item 4
        </div>
        <div className="bg-lime-500 p-6 rounded-lg text-white text-center">
          Item 5
        </div>
        <div className="bg-orange-500 p-6 rounded-lg text-white text-center">
          Item 6
        </div>
        <div className="bg-teal-500 p-6 rounded-lg text-white text-center">
          Item 5
        </div>
        <div className="bg-gray-500 p-6 rounded-lg text-white text-center">
          Item 6
        </div>
      </div>
    </div>
  );
};

export default Grid;
