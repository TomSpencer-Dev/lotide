const assertEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`😒 Assertion Failed: ${actual} !==  ${expected}`);
      return;
    }
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
    return;
  }
};

const tail = function(arr) {
  return arr.slice(1, arr.length);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!