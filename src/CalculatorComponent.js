import React, { useState } from 'react';
import Calculator from './Calculator';

const CalculatorComponent = () => {
  const [displayValue, setDisplayValue] = useState('');
  const calculator = new Calculator();

  const handleKeyPress = (key) => {
    if (key === 'C') {
      calculator.clear();
      setDisplayValue('');
    } else if (key === '=') {
      calculator.compute();
      setDisplayValue(calculator.currentOperand.toString());
    } else {
      if (['+', '-', '*', '÷'].includes(key)) {
        calculator.chooseOperation(key);
      } else {
        calculator.appendNumber(key);
      }
      setDisplayValue(calculator.currentOperand.toString());
    }
  };

  return (
    <div>
      <input type="text" value={displayValue} readOnly />
      <div>
        {'789+456-123*0C='.split('').map((key) => (
          <button key={key} onClick={() => handleKeyPress(key)}>
            {key.replace('*', '×').replace('÷', '/')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorComponent;
