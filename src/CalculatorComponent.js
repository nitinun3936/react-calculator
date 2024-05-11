import React from 'react';

function CalculatorButton({ label, onClick }) {
  return (
    <button onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default CalculatorButton;
