const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

//  TEST CODE

describe("assertEqual", () => {
  it("returns false for assertEqual('Lighthouse Labs', 'Bootcamp')", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it("returns true for assertEqual(1,1)", () => {
    assert.strictEqual(assertEqual(1,1), true);
  });
  it("returns false for assertEqual(1, 5)", () => {
    assert.strictEqual(assertEqual(1, 5), false);
  });
  it("returns true for assertEqual('Talk', 'Talk')", () => {
    assert.strictEqual(assertEqual("Talk", "Talk"), true);
  });
});
