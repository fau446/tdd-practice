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
  };
};

export default testFunctions;
