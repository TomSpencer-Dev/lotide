const assert = require("chai").assert;
const assertObjectsEqual = require("../assertObjectsEqual");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };


describe("#assertObjectsEqual", () => {
  it("returns true for assertObjectsEqual(shirtObject , anotherShirtObject)", () => {
    assert.strictEqual(assertObjectsEqual(shirtObject , anotherShirtObject), true);
  });
  it("returns false for assertObjectsEqual(shirtObject , longSleeveShirtObject)", () => {
    assert.strictEqual(assertObjectsEqual(shirtObject , longSleeveShirtObject), false);
  });
  it("returns true for assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject)", () => {
    assert.strictEqual(assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject), true);
  });
  it("returns false for assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject)", () => {
    assert.strictEqual(assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
  });
});