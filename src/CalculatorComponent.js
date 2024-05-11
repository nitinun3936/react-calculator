import React from 'react';

const CalculatorComponent = ({ handleClick }) => {
  const buttons = [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['C', '0', '=', '/']
  ];

  return (
    <div>
      {buttons.map((row, idx) => (
        <div key={idx} className="button-row">
          {row.map((button) => (
            <button key={button} onClick={() => handleClick(button)} className="button">
              {button}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CalculatorComponent;
