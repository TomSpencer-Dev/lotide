const takeUntil = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      result.push(array[i]);
    } else {
      return result;
    }

  } return result;
};

module.exports = takeUntil;







