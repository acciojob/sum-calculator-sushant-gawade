import React, { useEffect, useState } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [input, setInput] = useState("");

  // Handle number input
  const handleAddNumber = () => {
    if (input.trim() === "") return;

    const value = parseInt(input, 10);
    if (!isNaN(value)) {
      setNumbers((prev) => [...prev, value]);
    }
    setInput("");
  };

  // Asynchronous sum calculation
  useEffect(() => {
    let isCancelled = false;

    const calculateSumAsync = async () => {
      // simulate async work (non-blocking)
      await new Promise((resolve) => setTimeout(resolve, 0));

      const total = numbers.reduce((acc, num) => acc + num, 0);

      if (!isCancelled) {
        setSum(total);
      }
    };

    calculateSumAsync();

    return () => {
      isCancelled = true;
    };
  }, [numbers]);

  return (
    <div>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number"
      />
      <button onClick={handleAddNumber}>Add</button>

      <p><strong>Total Sum:</strong> {sum}</p>
    </div>
  );
}

export default SumCalculator;
