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

  function caesarCipher(str, shift) {
    if (shift < 0) return;
    let encryptedMessage = "";
    for (let i = 0; i < str.length; i++) {
      const encryptedLetter = encrypter(str[i], shift);
      encryptedMessage = encryptedMessage.concat(encryptedLetter);
    }
    return encryptedMessage;
  }

  function encrypter(char, shift) {
    let asciiValue = char[0].toLowerCase().charCodeAt(0);
    let newLetter = "";
    if (!(asciiValue >= 97 && asciiValue <= 122)) {
      return char;
    }

    if (asciiValue + shift > 122) {
      const distance = 122 - asciiValue;
      asciiValue = 96 + (shift - distance);
    } else {
      asciiValue += shift;
    }

    newLetter = String.fromCharCode(asciiValue);
    return newLetter;
  }

  function analyzeArray(arr) {
    if (arr.length === 0) return { average: 0, min: 0, max: 0, length: 0 };

    const average = arrayAverage(arr);
    const min = arrayMinimum(arr);
    const max = arrayMaximum(arr);

    return { average: average, min: min, max: max, length: arr.length };
  }

  function arrayAverage(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return Math.round((total / arr.length) * 1e1) / 1e1;
  }

  function arrayMinimum(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }

    return min;
  }

  function arrayMaximum(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }

    return max;
  }

  return {
    capatalize,
    reverseString,
    caesarCipher,
    analyzeArray,
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
