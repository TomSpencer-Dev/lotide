//Import assert from chai and middle
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] when passed [1, 2, 3]",() => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [] when passed [1]",() => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] when passed [1, 2]",() => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [3] when passed [1, 2, 3, 4, 5]",() => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2,3] when passed [1, 2, 3, 4]",() => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });
  it("returns [3,4] when passed [1, 2, 3, 4, 5, 6]",() => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });


});


// assertArraysEqual([3,4],middle([1, 2, 3, 4, 5, 6]));
// assertArraysEqual([2,3], middle([1,2,3,4,5]));
// assertArraysEqual([5], middle([1,4,7,9,5,4,3,5,8]));