// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (Array.isArray(expected)) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`😒 Assertion Failed: ${actual} !==  ${expected}`);
        return;
      }
      console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
      return;
    }
  } else {
    if (actual !== expected) {
      console.log(`😒 Assertion Failed: ${actual} !==  ${expected}`);
      return;
    }
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
    return;

  }
};


//Export the function
module.exports = assertEqual;