// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");
  
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

module.exports = findKey;

