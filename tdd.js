const testFunctions = () => {
  function capatalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  }

  function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      newStr = newStr.concat(str[i]);
    }
    return newStr;
  }

  return {
    capatalize,
    reverseString,
    calculator,
  };
};

const calculator = () => {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
  };
};

export default testFunctions;
export { calculator };
