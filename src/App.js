import React, { useState } from 'react';
import './App.css';
import calculate from './Calculator';
import CalculatorButton from './CalculatorComponent';

function App() {
  const [input, setInput] = useState('');

  const handleClick = value => setInput(input + value);
  const clearInput = () => setInput('');
  const computeResult = () => setInput(calculate(input));

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="keypad">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map(key => (
            <CalculatorButton key={key} value={key} onClick={key === 'C' ? clearInput : key === '=' ? computeResult : handleClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
