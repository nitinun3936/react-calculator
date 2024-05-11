import React from 'react';

function CalculatorButton({ value, onClick }) {
  return (
    <button onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default CalculatorButton;
