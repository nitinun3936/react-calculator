import React, { useState } from 'react';
import './App.css';
import calculate from './Calculator';
import CalculatorButton from './CalculatorComponent';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    if (value === '=') {
      const output = calculate(input);
      setResult(output);
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
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
