import { useState } from "react";

const InvestmentCalculator = () => {
  const [investMoney, setInvestMoney] = useState("");
  const [rate, setRate] = useState("");
  const [goal, setGoal] = useState("");
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    if (!investMoney || !rate || !goal) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    let year = new Date().getFullYear();
    let money = parseFloat(investMoney);
    const interestRate = parseFloat(rate) / 100;
    const target = parseFloat(goal);

    let data = [];

    while (money < target) {
      let endYearMoney = money + money * interestRate;
      data.push({
        year,
        money: money.toFixed(0),
        rate,
        endYear: endYearMoney.toFixed(0),
      });
      money = endYearMoney;
      year++;
    }

    setResults(data);
  };

  return (
    <div className="flex flex-col items-center p-5 bg-black text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Investment Calculator</h2>

      <div className="flex flex-col gap-3 w-64">
        <input
          type="number"
          placeholder="Input Your Invest Money"
          value={investMoney}
          onChange={(e) => setInvestMoney(e.target.value)}
          className="p-2 border border-gray-500 rounded bg-black text-white text-center"
        />
        <input
          type="number"
          placeholder="Input Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="p-2 border border-gray-500 rounded bg-black text-white text-center"
        />
        <input
          type="number"
          placeholder="Input Your Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="p-2 border border-gray-500 rounded bg-black text-white text-center"
        />
        <button
          onClick={handleCalculate}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded mt-2"
        >
          Click
        </button>
      </div>

      {results.length > 0 && (
        <table className="mt-5 border-collapse border w-80 text-center text-yellow-400">
          <thead>
            <tr className="border border-yellow-400">
              <th className="border border-yellow-400 p-2">Year</th>
              <th className="border border-yellow-400 p-2">Money</th>
              <th className="border border-yellow-400 p-2">Rate</th>
              <th className="border border-yellow-400 p-2">End Year</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index} className="border border-yellow-400">
                <td className="border border-yellow-400 p-2">{row.year}</td>
                <td className="border border-yellow-400 p-2">{row.money}</td>
                <td className="border border-yellow-400 p-2">{row.rate}%</td>
                <td className="border border-yellow-400 p-2">{row.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvestmentCalculator;
