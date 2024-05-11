import React from 'react';
import Button from './Button';  // If you have a Button component

const Calculator = ({ input, onButtonPress }) => {
  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    'C', '0', '=', '/'
  ];

  return (
    <div>
      <div className="screen">{input}</div>
      <div className="button-grid">
        {buttons.map((label, index) => (
          <Button key={index} label={label} onClick={() => onButtonPress(label)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
