const eqArrays = require('./eqArrays')
const assertArraysEqual = require('./assertArraysEqual')

const flatten = function(arr) {
  const flattenedArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArray.push(arr[i][j]);
      }
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  
  return flattenedArray;
};

module.exports = flatten;

