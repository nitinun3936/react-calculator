class Calculator {
    calculate(current, next, operation) {
      const currentNumber = parseFloat(current);
      const nextNumber = parseFloat(next);
      if (isNaN(currentNumber) || isNaN(nextNumber)) return '0';
  
      switch (operation) {
        case '+':
          return (currentNumber + nextNumber).toString();
        case '-':
          return (currentNumber - nextNumber).toString();
        case '*':
          return (currentNumber * nextNumber).toString();
        case '/':
          if (nextNumber === 0) return 'Infinity';  // handle division by zero
          return (currentNumber / nextNumber).toString();
        default:
          return '0';
      }
    }
  }
  
  export default Calculator;
  