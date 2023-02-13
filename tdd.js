const testFunctions = () => {
  function capatalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  }

  function reverseString(str) {}

  return {
    capatalize,
    reverseString,
  };
};

export default testFunctions;
