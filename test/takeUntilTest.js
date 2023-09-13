const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

const data1 = [100, 55, 697, 546, 986, 42, 5];
const data2 = ["together", "we", 5, "can"];

describe("#takeUntil", () => {
  
  it("returns [100, 55, 697, 546] for takeUntil(data1, x => x > 700)", () => {
    assert.deepEqual(takeUntil(data1, x => x > 700), [100, 55, 697, 546]);
  });
  it("returns ['together', 'we'] for takeUntil(data2, x => Number.isInteger(x))", () => {
    assert.deepEqual(takeUntil(data2, x => Number.isInteger(x)), ["together", "we"]);
  });

});