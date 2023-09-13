//Import assertArraysEqual file
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

//Test code

describe("#assertArraysEqual", () => {
it("returns true for flatten([1, 2, [3, 4], 5, [6]]))", () => {
assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
it("returns false for assertArraysEqual([1, 2, 3], [1, 2, 3, 4, 7])" , () => {
assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3, 4, 7]),false)
  });
});
