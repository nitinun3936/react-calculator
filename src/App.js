import React, { useState } from 'react';
import './App.css';
import CalculatorButton from './CalculatorComponent';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    if (value === '=') {
      handleCalculate();
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const handleCalculate = () => {
    try {
      const output = eval(input);
      if (Number.isNaN(output) || !Number.isFinite(output)) {
        throw new Error("Invalid expression");
      }
      setResult(output.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
        <div className="result">{result}</div>
        <div className="keypad">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map(key => (
            <CalculatorButton key={key} label={key} onClick={handleInput} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
