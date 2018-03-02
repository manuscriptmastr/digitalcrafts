var array = [
  [ 0, 0, 0, 1, 0, 1 ],
  [ 1, 1, 1, 0, 1, 1 ],
  [ 1, 1, 0, 1, 0, 0 ],
  [ 0, 0, 1, 0, 1, 0 ]
];

var getNeighbors = (x, y) => {
  var neighbors = [];

  for (var a = 0; a < array.length; a++) {
    for (var b = 0; b < array[a].length; b++) {

      var originalCell = array[x][y];
      var currentCell = array[a][b];
      var isAlive = currentCell === 1;

      var xIsClose = Math.abs(x - a) < 2;
      var yIsClose = Math.abs(y - b) < 2;
      var isClose = xIsClose && yIsClose;

      var isUnique = x !== a || y !== b;

      if (isAlive && isClose && isUnique) {
        neighbors.push(1);
      }
    }
  }

  return neighbors.length;
}

var getNewArray = array => {
  var newArray = [];
  for (var x = 0; x < array.length; x++) {
    var newRow = [];
    for (var y = 0; y < array[x].length; y++) {
      var currentCell = array[x][y];
      var isAlive = currentCell === 1;
      var neighbors = getNeighbors(x, y);
      if (isAlive) {
        var isJustRight = neighbors > 1 && neighbors < 4;
        if (isJustRight) {
          newRow.push(1);
        } else {
          newRow.push(0);
        }
      } else {
        if (neighbors === 3) {
          newRow.push(1);
        } else {
          newRow.push(0);
        }
      }
    }

    newArray.push(newRow);
  }

  return newArray;
}

console.log(getNewArray(array));