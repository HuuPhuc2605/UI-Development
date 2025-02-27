import { useState } from "react";
import "./InvestmentCalculator.css"; 

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
      let endYearMoney = Math.floor(money * (1 + interestRate)); 
      data.push({
        year,
        money: Math.floor(money), 
        rate: Math.floor(rate), 
        endYear: endYearMoney,
      });
      money = endYearMoney;
      year++;
    }
  
    setResults(data);
  };
  

  return (
    <div className="investment-container">
      <h2 className="investment-title">Investment Calculator</h2>

      <div className="investment-form">
        <input
          type="number"
          placeholder="Input Your Invest Money"
          value={investMoney}
          onChange={(e) => setInvestMoney(e.target.value)}
          className="investment-input"
        />
        <input
          type="number"
          placeholder="Input Rate (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="investment-input"
        />
        <input
          type="number"
          placeholder="Input Your Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="investment-input"
        />
        <button onClick={handleCalculate} className="investment-button">
          Calculate
        </button>
      </div>

      {results.length > 0 && (
        <table className="investment-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.money}</td>
                <td>{row.rate}%</td>
                <td>{row.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvestmentCalculator;
