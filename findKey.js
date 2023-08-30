// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

//findKey function that will take an object and a callback
const findKey = function(obj, callback) {

  //scan through the object
  for (let key in obj) {

    //return the first key which the callback returns a truthy value
    if (callback(obj[key])) {
      return key;
    }
  }
};

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(object, x => x.stars === 2), "noma");
assertEqual(findKey(object, x => x.stars === 3), "Akaleri");
assertEqual(findKey(object, x => x.stars === 5), undefined);
assertEqual(findKey(object, x => x.stars > 1), "Akaleri");

