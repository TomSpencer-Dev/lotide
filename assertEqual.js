// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (Array.isArray(expected)) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {  
        return false;
      }
      return true;
    }
  } else {
    if (actual !== expected) {
      return false;
    }
    return true;

  }
};


//Export the function
module.exports = assertEqual;