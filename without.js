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

module.exports = without;



