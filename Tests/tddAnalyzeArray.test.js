import testFunctions from "../tdd";

let tdd = testFunctions();

test("[1, 2, 3, 4]", () => {
  expect(tdd.analyzeArray([1, 2, 3, 4])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test("[] empty array", () => {
  expect(tdd.analyzeArray([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
});

test("[987, 234, 632, 1872, 34]", () => {
  expect(tdd.analyzeArray([987, 234, 632, 1872, 34])).toEqual({
    average: 751.8,
    min: 34,
    max: 1872,
    length: 5,
  });
});

test("[0.3, 0.98, 2.3, 0.1123]", () => {
  expect(tdd.analyzeArray([0.3, 0.98, 2.3, 0.1123])).toEqual({
    average: 0.9,
    min: 0.1123,
    max: 2.3,
    length: 4,
  });
});
