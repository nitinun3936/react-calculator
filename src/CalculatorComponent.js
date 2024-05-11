import React from 'react';

const CalculatorComponent = ({ handleClick }) => {
  const buttons = [
    '7', '8', '9', '/', 
    '4', '5', '6', '*', 
    '1', '2', '3', '-', 
    'C', '0', '=', '+'
  ];

  return (
    <div>
      {buttons.map((button, idx) => (
        <button key={idx} onClick={() => handleClick(button)} className="button">
          {button}
        </button>
      ))}
    </div>
  );
}

export default CalculatorComponent;
