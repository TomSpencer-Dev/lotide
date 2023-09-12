//Import eqArrays and assertEqual
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


//Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);