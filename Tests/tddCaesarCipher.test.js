import testFunctions from "../tdd";

const tdd = testFunctions();

test("'attack', 5 should be 'fyyfhp'", () => {
  expect(tdd.caesarCipher("attack", 5)).toBe("fyyfhp");
});

test("'banana', 0 should be 'banana'", () => {
  expect(tdd.caesarCipher("banana", 0)).toBe("banana");
});

test("'I ate a cupcake, and a pancake.', 8 should be 'q ibm i kcxkism, ivl i xivkism.'", () => {
  expect(tdd.caesarCipher("I ate a cupcake, and a pancake.", 8)).toBe(
    "q ibm i kcxkism, ivl i xivkism."
  );
});

test("'zebra', 2 should be 'bgdtc'", () => {
  expect(tdd.caesarCipher("zebra", 2)).toBe("bgdtc");
});
