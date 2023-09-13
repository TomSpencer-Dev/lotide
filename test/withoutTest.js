const without = require("../without");
const assert = require("chai").assert;

// Test Case:

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

describe("#without", () => {
  it("returns [2, 3] for without([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] for without(['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("returns ['Arrow', 'Bar', 'Gold'] for without(['Arrow', 'Bar', 'Gold'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["Arrow", "Bar", "Gold"], [1, 2, "3"]), ["Arrow", "Bar", "Gold"]);
  });
  it("returns ['1', '2', 4, 5, 6, '7'] for without(['1', '2', '3', 4, 5, 6, '7'], [1, 2, '3', 7])", () => {
    assert.deepEqual(without(["1", "2", "3", 4, 5, 6, "7"], [1, 2, "3", 7]), ["1", "2", 4, 5, 6, "7"]);
  });
  it("returns ['Derek', 'Jeeter'] for without(['Derek', 'Bat', 'Glove', 'Jeeter'], ['Glove', 'Bat', '4', 2])", () => {
    assert.deepEqual(without(["Derek", "Bat", "Glove", "Jeeter"], ["Glove", "Bat", "4", 2]), ["Derek", "Jeeter"]);
  });
  it("returns ['hello', 'world', 'lighthouse'] for words", () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

});

