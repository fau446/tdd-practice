const testFunctions = () => {
  function capatalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  }

  return {
    capatalize,
  };
};

export default testFunctions;
