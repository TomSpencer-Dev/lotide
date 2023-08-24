const assertArraysEqual = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`😒 Assertion Failed: ${arr1} !==  ${arr2}`);
      return;
    }
  } console.log(`😃 Assertion Passed: ${arr1} === ${arr2}`);
  return;
};

//Declare a function that accepts two arguments, the source array, and the array with the items to be removed from the array

const without = function(sourceArr, itemsToRemove) {

  let newArr = []; //Creates an empty array to be used to store the unmatched values later on
  let result = false;
  for (let i = 0; i < sourceArr.length; i++) {
   
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArr[i] === itemsToRemove[j]) {
        result = false;
        j = itemsToRemove.length;
      } else if (sourceArr[i] !== itemsToRemove[j]) {
        result = true;
      }
    } if (result) {
      newArr.push(sourceArr[i]);
    
    }
  } return newArr;
};



assertArraysEqual([2, 3], without([1, 2, 3], [1]));
assertArraysEqual(["1", "2"],without(["1", "2", "3"], [1, 2, "3"]));
assertArraysEqual(["Arrow", "Bar", "Gold"],without(["Arrow", "Bar", "Gold"], [1, 2, "3"])); // => ["Arrow", "Bar", "Gold"]
assertArraysEqual(["1", "2", 4, 5, 6, "7"],without(["1", "2", "3", 4, 5, 6, "7"], [1, 2, "3", 7])); // => ["1", "2", 4, 5, 6, "7"]
assertArraysEqual(["Derek", "Jeeter"], without(["Derek", "Bat", "Glove", "Jeeter"], ["Glove", "Bat", "4", 2])); // => ["Derek", "Jeeter"]
assertArraysEqual([2, 3, 4, 5], without([1, 2, 3], [1]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



