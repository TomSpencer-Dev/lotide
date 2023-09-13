const assert = require("chai").assert
const findKey = require("../findKey");

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findKey", () => {
  it("returns 'noma' for findKey(object, x => x.stars === 2)", () => {
    assert.strictEqual(findKey(object, x => x.stars === 2), "noma");
  });
  it("returns 'Akaleri' for findKey(object, x => x.stars === 3)", () => {
    assert.strictEqual(findKey(object, x => x.stars === 3), 'Akaleri');
  });
  it("returns undefined for findKey(object, x => x.stars === 5)", () => {
    assert.strictEqual(findKey(object, x => x.stars === 5), undefined);
  });
  it("returns 'Akaleri' for findKey(object, x => x.stars > 1)", () => {
    assert.strictEqual(findKey(object, x => x.stars > 1), "Akaleri");
  });
});
// assertEqual(findKey(object, x => x.stars === 2), "noma");
// assertEqual(findKey(object, x => x.stars === 3), "Akaleri");
// assertEqual(findKey(object, x => x.stars === 5), undefined);
// assertEqual(findKey(object, x => x.stars > 1), "Akaleri");