//Import head.js and assertEqual.js
const assert = require('chai').assert;
const tail = require('../tail');


// Test Case:

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  
  it("returns 3 for words.length after tail(words) was called", () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  }
  );
});