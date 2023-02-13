import { calculator } from "../tdd";

let tdd = calculator();

// addition
test("5 + 6 = 11", () => {
  expect(tdd.add(5, 6)).toBe(11);
});

test("56 + 789 = 845", () => {
  expect(tdd.add(56, 789)).toBe(845);
});

test("0.1 + 0.2 = 0.3", () => {
  expect(tdd.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// subtraction
test("5 - 2 = 3", () => {
  expect(tdd.subtract(5, 2)).toBe(3);
});

test("-5 - (-3) = -2", () => {
  expect(tdd.subtract(-5, -3)).toBe(-2);
});

test("0.1 - 0.55 = -0.45", () => {
  expect(tdd.subtract(0.1, 0.55)).toBeCloseTo(-0.45);
});

// multiplication
test("3 * 4 = 12", () => {
  expect(tdd.multiply(3, 4)).toBe(12);
});

test("56 * 10 = 560", () => {
  expect(tdd.multiply(56, 10)).toBe(560);
});

test("5 * -3 = -15", () => {
  expect(tdd.multiply(5, -3)).toBe(-15);
});

// division
test("6 / 3 = 2", () => {
  expect(tdd.divide(6, 3)).toBe(2);
});

test("70 / 7 = 10", () => {
  expect(tdd.divide(70, 7)).toBe(10);
});
