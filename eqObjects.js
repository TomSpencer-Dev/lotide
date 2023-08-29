const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒 Assertion Failed: ${actual} !==  ${expected}`);
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
    return true;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back false
const eqObjects = function(object1, object2) {
  const obj1Arr = Object.keys(object1);
  const obj2Arr = Object.keys(object2);

  //Checking if both objects have an equal number of keys and comparing values
  if (obj1Arr.length === obj2Arr.length) {
    for (let key of obj1Arr) {
      //Check if key value is an array to check if arrays are equal
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
        //Else compare primitive values
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }

      }
  
    } return true;
  } else {
    return false;
  }
      
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

const longSleeveMultiColorShirtObject2 = { size: "medium", colors: ["red", "blue", "black"], sleeveLength: "long" };
assertEqual(eqObjects(longSleeveMultiColorShirtObject  , longSleeveMultiColorShirtObject2), false); // => false

const longSleeveMultiColorShirtObject3 = { size: "medium", colors: ["red", "blue", "black"], sleeveLength: "extra-long" };
assertEqual(eqObjects(longSleeveMultiColorShirtObject2  , longSleeveMultiColorShirtObject3), false); // => false
