const assert = require('assert');

var camelCase = function(arr) {
  str = '';

  for (var i = 0; i < arr.length; i++) {
    var currentWord = arr[i];
    var isFirstWord = i === 0;

    if(!isFirstWord) {
      currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
    }

    str += currentWord;
  }

  return str;
}

var snakeCase = function(arr) {
  return arr.join('_');
}

const transforms = {
  camelcase: camelCase,
  snakecase: snakeCase
}

var isLetterOrNumber = function(char) {
  return (char >= 'A' && char <= 'Z')
      || (char >= 'a' && char <= 'z')
      || (char >= '0' && char <= '9')
      || (char === ' ');
}

var removeNonText = function(str) {
  var cleanStr = '';

  for (var i = 0; i < str.length; i++) {
    var currentLetter = str[i];
    if (isLetterOrNumber(currentLetter)) {
      cleanStr += currentLetter;
    }
  }

  return cleanStr;
}

var reduceWhitespace = function(str) {
  var cleanStr = '';
  var lastWasSpace = false;

  for (var i = 0;i < str.length; i++) {
    var currentLetter = str[i];
    var currentIsSpace = currentLetter === ' ';

    if (!currentIsSpace ||
        currentIsSpace && !lastWasSpace) {
      cleanStr += currentLetter;
    }

    lastWasSpace = currentIsSpace;
  }

  return cleanStr;
}

var trimText = function(str) {
  while (str[0] === ' ') {
    str = str.slice(1);
  }

  while (str[(str.length - 1)] === ' ') {
    str = str.slice(0, -1);
  }

  return str;
}

var cleanText = function(str) {

  var filters = [
    removeNonText,
    reduceWhitespace,
    trimText,
    s => s.toLowerCase()
  ];

  var cleanStr = str;

  for (var filter of filters) {
    cleanStr = filter(cleanStr);
  }

  return cleanStr;
}

var textToArray = function(str) {
  var str = cleanText(str);

  var currentWord = '';
  var wordArray = [];

  for (var i = 0; i < str.length; i++) {
    var currentLetter = str[i];
    var isSpace = currentLetter === ' ';
    var isLastLetter = i === str.length - 1;

    if (!isSpace || isLastLetter) {
      currentWord += currentLetter;
    }

    if (isSpace || isLastLetter) {
      wordArray.push(currentWord);
      currentWord = '';
    }
  }

  return wordArray;
}

var transformText = function(str,t) {
  var wordArray = textToArray(str);
  var t = cleanText(t);
  var transform = transforms[t];

  if (!transform) {
    throw new Error(`Transform ${t} is not supported.`);
  }

  var transformedText = transform(wordArray);
  console.log(t, transformedText);
  return transformedText;
}

assert(textToArray('Hello').join(',') === 'hello', 'Failed to transform text to array');
assert(textToArray('Hello world').join(',') === 'hello,world', 'Failed to transform text to array');
assert(textToArray('HELLO ~!@# !)(*@) pink  $%)(*) $$$ world %%%%  ').join(',') === 'hello,pink,world', 'Failed to transform text to array');

assert(transformText('hello   WORLD', '  camelCaSe $$ @#$$') === 'helloWorld', 'Failed to transform string to camelcase');
assert(transformText(' %  hello   World %$   ', 'camelCase') === 'helloWorld', 'Failed to transform string to camelcase');
assert(transformText('Hello', 'camelcase') === 'hello', 'Failed to transform string to camelcase');

assert(transformText('Hello', 'snakecase') === 'hello', 'Failed to transform string to snakecase');
assert(transformText('   #hello $^ World', 'snakeCase') === 'hello_world', 'Failed to transform string to snakecase');

assert(transformText(' $ $  ', 'snakecase') === '', 'Failed to transform string to snakecase');