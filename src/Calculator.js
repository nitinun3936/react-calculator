function calculate(input) {
  try {
    return eval(input).toString();
  } catch (error) {
    return 'Error';
  }
}

export default calculate;
