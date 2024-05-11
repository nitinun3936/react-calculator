import React, { useState } from 'react';
import Button from './Button';
import './CalculatorComponent.css';

const CalculatorComponent = () => {
  const [input, setInput] = useState('');

  const addToInput = val => {
    setInput(input + val);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="keypad">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map(key => (
          <Button key={key} onClick={() => key === 'C' ? clearInput() : key === '=' ? calculateResult() : addToInput(key)}>
            {key}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorComponent;
