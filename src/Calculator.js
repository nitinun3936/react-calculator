import React, { useState } from 'react';
import CalculatorComponent from './CalculatorComponent';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (e) {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="display" />
      <CalculatorComponent handleClick={handleClick} />
    </div>
  );
}

export default Calculator;
