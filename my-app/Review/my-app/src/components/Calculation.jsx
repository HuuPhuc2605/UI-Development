import React, { useState, useMemo } from "react";

export default function Calculation() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const slowCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} // Giả lập tính toán nặng
    return num * 2;
  };

  const result = useMemo(() => slowCalculation(count), [count]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
    margin: "20px",
    borderRadius: "8px",
    transition: "0.3s",
  };

  return (
    <div style={themeStyle}>
      <h2>Expensive Calculation: {result}</h2>
      <button onClick={() => setCount(count + 1)}> Increase</button>
      <button onClick={() => setDark(!dark)}> Toggle Theme</button>
    </div>
  );
}
