import React, { useState } from "react";
import { add } from "./calculater";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error:any) {
      alert(error.message);
    }
  };

  return (
    <div className="container-wrapper">
      <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button></div>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;