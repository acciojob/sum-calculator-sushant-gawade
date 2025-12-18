import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    const calculateSumAsync = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      const total = numbers.reduce((acc, num) => acc + num, 0);
      setSum(total);
    };

    calculateSumAsync();
  }, [numbers]);

  const addNumber = () => {
    const value = parseInt(input, 10);
    if (!isNaN(value)) {
      setNumbers((prev) => [...prev, value]);
      setInput("");
    }
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number"
      />

      <button onClick={addNumber}>Add</button>

      <p>Total Sum: {sum}</p>
    </div>
  );
};

export default App;
