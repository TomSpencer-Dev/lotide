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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`😃 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😒 Assertion Failed: ${arr1} !==  ${arr2}`);
  }
};


const middle = function(arr) {
  let newArr = [];
  if (arr.length < 3) {
    return newArr;
  } else if (arr.length % 2 > 0) {
    newArr.push(arr[(arr.length - 1) / 2]);
    return newArr;
  } else {
    newArr.push(arr[(arr.length) / 2 - 1]);
    newArr.push(arr[(arr.length) / 2]);
    return newArr;
  }
};

assertArraysEqual([],middle([1]));
assertArraysEqual([],middle([1, 2]));
assertArraysEqual([2],middle([1, 2, 3]));
assertArraysEqual([3],middle([1, 2, 3, 4, 5]));
assertArraysEqual([2,3],middle([1, 2, 3, 4]));
assertArraysEqual([3,4],middle([1, 2, 3, 4, 5, 6]));
assertArraysEqual([2,3], middle([1,2,3,4,5]));
assertArraysEqual([5], middle([1,4,7,9,5,4,3,5,8]));