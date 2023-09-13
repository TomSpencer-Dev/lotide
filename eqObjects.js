const assertEqual = require("./assertEqual"); 
const eqArrays = require("./eqArrays");


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

module.exports = eqObjects;

