import testFunctions from "../tdd";

const tdd = testFunctions();

test("hello should be Hello", () => {
  expect(tdd.capatalize("hello")).toBe("Hello");
});

test("Pancake should be Pancake", () => {
  expect(tdd.capatalize("Pancake")).toBe("Pancake");
});

test("ORANGE should be ORANGE", () => {
  expect(tdd.capatalize("ORANGE")).toBe("ORANGE");
});

test("bACON should be BACON", () => {
  expect(tdd.capatalize("bACON")).toBe("BACON");
});
