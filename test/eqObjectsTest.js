const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
const longSleeveMultiColorShirtObject2 = { size: "medium", colors: ["red", "blue", "black"], sleeveLength: "long" };
const longSleeveMultiColorShirtObject3 = { size: "medium", colors: ["red", "blue", "black"], sleeveLength: "extra-long" };

describe("#eqObjects", () => {
  it("returns true for eqObjects(shirtObject , anotherShirtObject)", () => {
    assert.strictEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });
  it("returns false for eqObjects(shirtObject , anotherShirtObject)", () => {
    assert.strictEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
  });
  it("returns true for eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
  });
  it("returns false for eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
  });
it("returns false for eqObjects(longSleeveMultiColorShirtObject  , longSleeveMultiColorShirtObject2)", () => {
    assert.strictEqual(eqObjects(longSleeveMultiColorShirtObject  , longSleeveMultiColorShirtObject2), false);
  });
it("returns false for eqObjects(longSleeveMultiColorShirtObject2  , longSleeveMultiColorShirtObject3))", () => {
    assert.strictEqual(eqObjects(longSleeveMultiColorShirtObject2  , longSleeveMultiColorShirtObject3), false);
  });
});

