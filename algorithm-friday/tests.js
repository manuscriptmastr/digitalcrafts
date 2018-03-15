const assert = require('assert');
const flattenArray = require('./array-flattener');
const transformText = require('./case-converter');
const gameOfLife = require('./game-of-life');

assert.deepEqual(flattenArray([1,[2,[3,[4]]]]), [ 1, 2, 3, 4 ], 'Nested array should flatten to single level array')

assert(transformText('Hello World', 'camelcase') === 'helloWorld', 'Should return camel-case string');
assert(transformText('Hello World', 'snakecase') === 'hello_world', 'Should return camel-case string');

var board = gameOfLife.newBoard(5,4);
assert(board.length === 4, 'Board is not correct size');
assert.notDeepEqual(gameOfLife.nextBoard(board), board, 'The next board should be different from board');