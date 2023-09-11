const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`😃 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😒 Assertion Failed: ${arr1} !==  ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    
  } return true;
};

const takeUntil = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      result.push(array[i]);
    } else {
      return result;
    }

  } return result;
};

const data1 = [100, 55, 697, 546, 986, 42, 5];
const results1 = takeUntil(data1, x => x > 700);

const data2 = ["together", "we", 5, "can"];
const results2 = takeUntil(data2, x => Number.isInteger(x));

assertArraysEqual(results1, [100, 55, 697, 546]);
assertArraysEqual(results2, ["together", "we"]);





