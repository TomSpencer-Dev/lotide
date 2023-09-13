# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nodetom/lotide`

**Require it:**

`const _ = require('@nodetom/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: returns the first index of each element of an array.
* `tail(arr)`: returns every element but the first element of an array.
* `middle(arr)`: returns the value/s of the middle element/s of an array.
* `map(array, callback)`: returns a new array based on callback function given.
* `letterPositions(sentence)`: returns indices of given character in a string.
* `flatten(arr)`: returns a single level array when given multi level arrays.
* `findKeyByValue(obj, val)`: returns the key of an object where that key's value matches the value given.
* `findKey(obj, callback)`: returns the first key of an object where callback returns a truthy value. 
* `eqObjects(object1, object2)`: returns true if two objects are equal.
* `eqArrays(arr1, arr2)`: returns true if two arrays are equal.
* `countOnly(allItems, itemsToCount)`: counts a subset of items based on conditions given.
* `countLetters(string)`: returns the count of each letter used in a string.
* `assertObjectsEqual(obj1, obj2)`: returns true if two objects are equal.
* `assertEqual(actual, expected)`: returns true if two values of primitive data types are identical in type and value.
* `assertArraysEqual(arr1, arr2)`: returns true if two arrays are equal.
* `without(sourceArr, itemsToRemove)`: returns a subset of an array without the unwanted elements.
* `takeUntil(array, callback)`: returns slice of array starting at the beginning of the array until the condition is met.
