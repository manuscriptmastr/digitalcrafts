var flattenArray = function(array) {
  var newArray = [];

  for (var i of array) {
    if (Array.isArray(i)) {
      newArray = newArray.concat(flattenArray(i));
    } else {
      newArray.push(i);
    }
  }

  return newArray;
}

module.exports = flattenArray;