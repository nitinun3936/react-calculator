import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.name);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // Handling division by zero and zero by zero specifically
      if (input.includes('/0')) {
        const checkZeroDivision = input.split('/').map(s => s.trim());
        if (checkZeroDivision[1] === '0') {
          setInput('Infinity');
          return;
        } else if (input === '0/0') {
          setInput('NaN');
          return;
        }
      }
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error'); // Handles incomplete expressions and other errors
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="keypad">
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="/" onClick={handleClick}>/</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="*" onClick={handleClick}>*</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="-" onClick={handleClick}>-</button>
          <button name="C" onClick={handleClear}>C</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="=" onClick={handleCalculate}>=</button>
          <button name="+" onClick={handleClick}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
