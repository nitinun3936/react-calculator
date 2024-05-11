import React, { useState } from 'react';
import Calculator from './Calculator'; // Assuming this is the layout and logic handler

function CalculatorComponent() {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    // Handle different inputs like numbers, operations, etc.
    if (value === 'C') {
      setInput("");
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div>
      <Calculator input={input} onButtonPress={handleInput} />
    </div>
  );
}

export default CalculatorComponent;
