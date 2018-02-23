const assert = require('assert');

var newArray = [];

var flatten = function(array) {
  for (i of array) {
    if (i.length > 1 || typeof(i) === 'object') {
      flatten(i);
    } else {
      newArray.push(i);
    }
  }

  return newArray;
}

console.log(flatten([1, [2, [3, [4]]]]));