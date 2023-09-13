const assert = require('chai').assert;
const map = require('../map');

//  TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

const results3 = map(words, () => "foo");

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for map(words, word => word[0])", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("returns [ 0, 1, 2, 3, 4] for map(words, word => words.indexOf(word))", () => {
    assert.deepEqual(map(words, word => words.indexOf(word)), [ 0, 1, 2, 3, 4]);
  });
  it("returns [ 'foo', 'foo', 'foo', 'foo', 'foo' ] for map(words, () => 'foo')", () => {
    assert.deepEqual(map(words, () => "foo"), [ 'foo', 'foo', 'foo', 'foo', 'foo' ]);
  });

});
