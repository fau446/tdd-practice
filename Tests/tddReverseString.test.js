import testFunctions from "../tdd";

let tdd = testFunctions();

test("'bonfire' should be 'erifnob'", () => {
  expect(tdd.reverseString("bonfire")).toBe("erifnob");
});

test("'Corn' should be 'nroC'", () => {
  expect(tdd.reverseString("Corn")).toBe("nroC");
});

test("'CAR' should be RAC", () => {
  expect(tdd.reverseString("CAR")).toBe("RAC");
});

test("'Banana's are tasty!' should be '!ytsat era s'ananaB'", () => {
  expect(tdd.reverseString("Banana's are tasty!")).toBe("!ytsat era s'ananaB");
});
