function calculate(expression) {
  try {
    const result = eval(expression);
    if (Number.isNaN(result)) {
      return 'NaN'; // Division by zero will yield NaN
    } else if (!Number.isFinite(result)) {
      return 'Infinity'; // Division of a number by zero
    }
    return result.toString();
  } catch (error) {
    return 'Error'; // Handle incomplete expressions or any other errors
  }
}

export default calculate;
