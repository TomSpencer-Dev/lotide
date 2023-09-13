const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
it("returns [1, 2, 3, 4, 5, 6] for flatten([1, 2, [3, 4], 5, [6]]))", () => {
assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
it("returns ['today', 'extra', 2, 3, 4, 5, 6] for flatten([['today', 'extra'], 2, [3, 4], 5, [6]])" , () => {
assert.deepEqual(flatten([["today", "extra"], 2, [3, 4], 5, [6]]),["today", "extra", 2, 3, 4, 5, 6])
  });
});
