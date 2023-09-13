const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1,obj2)) {
    return true;
  } else {
    return false;
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // => true
module.exports = assertObjectsEqual;





