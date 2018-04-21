const assert = require('assert');

// Given a string, return a dictionary and binary string
let compress = (str) => {
  let dictionary = generateDictionary(str);
  let binaryArray = [...str].map(l => dictionary[l]);
  let binaryString = binaryArray.join("");
  return [ dictionary, binaryString ];
}

// Given an array with a dictionary object and a binary string, return a text string
let decompress = ([dictionary, str]) => {
  let text = '';
  let binaryLeft = str;
  while (binaryLeft.length) {
    let [match, strLeft] = findMatch(binaryLeft, dictionary);
    text += match;
    binaryLeft = strLeft;
  }
  return text;
}

// Given a string and a dictionary, return an array with the first match and the remaining string
let findMatch = (str, dictionary) => {
  let tests = Object.entries(dictionary);
  let match = '';
  let newStr = str;
  tests.some(([key, val]) => {
    let subStr = str.slice(0, val.length);
    if (subStr === val) {
      match = key;
      newStr = str.slice(val.length);
      return true;
    }
  });
  return [ match, newStr ];
}

// Given a string, create a dictionary with characters set to binary strings
let generateDictionary = (str) => {
  let freqMap = createFrequencyMap(str);
  let binaryMap = generateBinaryMap(freqMap);
  let binaryObj = {};
  binaryMap.forEach(([key, val]) => binaryObj[key] = val.toString());
  return binaryObj;
}

// Given a frequency map, return a map with characters set to binary numbers.
let generateBinaryMap = (freqMap) => {
  let first = 0;
  let last = freqMap.length - 1;

  let binaryMap = freqMap.map((el, i) => {
    let key = el[0];
    let isFirst = i === first;
    let isLast = i === last && !isFirst;
    let binaryString = '1'.repeat(i) + '0';
    if (isFirst) {
      binaryString = '0';
    }
    if (isLast) {
      binaryString = '1'.repeat(i);
    }
    let binary = parseInt(binaryString);
    return [key, binary];
  });

  return binaryMap;
}

// Given a string, create a sorted frequency map
let createFrequencyMap = (str) => {
  let frequencies = {};
  let strArr = [...str];

  strArr.forEach(l => {
    if (frequencies.hasOwnProperty(l)) {
      frequencies[l]++;
    } else {
      frequencies[l] = 1;
    }
  });

  let frequencyMap = Object.entries(frequencies);
  frequencyMap.sort(compare);

  return frequencyMap;
}

// Given two frequency arrays, sort by frequency first, then alphabetically to break ties
let compare = (a, b) => {
  let letter = 0;
  let freq = 1;
  let compareBy = (prop) => {
    let val1 = a[prop];
    let val2 = b[prop];
    if (val1 < val2) {
      return -1;
    }
    if (val1 > val2) {
      return 1;
    }
    return 0;
  }
  let compareByLetter = compareBy(letter);
  let compareByFreq = compareBy(freq) * -1;
  let comparison = compareByFreq === 0 ? compareByLetter : compareByFreq;
  return comparison;
}

assert.deepStrictEqual(compress('a'), [{'a':'0'}, '0'], 'A single character should become 0');
assert.deepStrictEqual(compress('abc'), [{'a':'0', 'b':'10', 'c':'11'}, '01011'], 'Should return 01011');

assert.deepStrictEqual(decompress([{'a':'0', 'b':'10', 'c':'11'}, '01011']), 'abc', 'Should return abc');

assert.deepStrictEqual(decompress(compress('abc')), 'abc', 'Should return abc');
assert.deepStrictEqual(decompress(compress('ab c')), 'ab c', 'Should return ab c');
assert.deepStrictEqual(decompress(compress('bbaa')), 'bbaa', 'Should return bbaa');
assert.deepStrictEqual(decompress(compress('abc c b')), 'abc c b', 'Should return abc c b');
assert.deepStrictEqual(decompress(compress('$%#')), '$%#', 'Should return $%#');
assert.deepStrictEqual(decompress(compress('$a b()[]\%#')), '$a b()[]\%#', 'Should return $a b()[]\%#');

assert.deepStrictEqual(findMatch('01011', {'a':'0', 'b':'10', 'c':'11'}), ['a', '1011'], 'Should return a and 1011');

assert.deepStrictEqual(generateBinaryMap([['a', 3]]), [['a', 0]], 'Should change el. 2 into binary of 0');
assert.deepStrictEqual(generateBinaryMap([['a', 3],['b', 2]]), [['a', 0],['b', 1]], 'Should change el. 2 into binary');
assert.deepStrictEqual(generateBinaryMap([['c', 5],['a', 3],['b', 2]]), [['c', 0],['a', 10],['b', 11]], 'Should change el. 2 into binary');

assert.deepStrictEqual(createFrequencyMap('a'), [ ['a', 1] ], 'Should return an object with a set to 1')
assert.deepStrictEqual(createFrequencyMap('abcc'), [ ['c', 2], ['a', 1], ['b', 1] ], 'Should return an object with c: 2, a: 1, b: 1')
assert.deepStrictEqual(createFrequencyMap('bdiiibca'),[ ['i', 3], ['b', 2], ['a', 1], ['c', 1], ['d', 1] ], 'Comparison should have i, b, a, c, d');
assert.deepStrictEqual(createFrequencyMap(' '),[ [' ', 1] ], 'Comparison should have empty space');

assert.deepStrictEqual(compare(['b', 2],['a', 3]), 1, 'Comparison should return 1');
assert.deepStrictEqual(compare(['b', 3],['a', 3]), 1, 'Comparison should return 1');