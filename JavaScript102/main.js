var printNumbers = function(start, end) {
  var arr = [];
  var start = parseInt(start);
  var end = parseInt(end);

  for (var num = start; num <= end; num++) {
    console.log(num);
    arr.push(num);
  }

  return arr;
}

var numbers = printNumbers(1, 10);
var elements = numbers.map(num => {
  var li = document.createElement('li');
  li.innerText = String(num);
  return li;
});

var numbersElement = document.getElementById('numbers');
elements.forEach(e => numbersElement.appendChild(e));

var printSquare = function(num) {
  var num = parseInt(num);

  for(var i = 1; i <= num; i++) {
    var str = '';

    for(var c = 1; c <= num; c++) {
      str += '*';
    }

    console.log(str);
  }
}

printSquare(10);

var printBox = function(width, height) {
  var width = parseInt(width);
  var height = parseInt(height);

  var box = '';
  for(var i = 1; i <= height; i++) {
    var line = '';
    var hasSpace = i !== 1 && i !== height;

    for(var c = 1; c <= width; c++) {
      var char = '*';
      if (hasSpace) {
        if (c !== 1 && c !== width) {
          char = ' ';
        }
      }
      line += char;
    }

    box += line + '\n';
    line = '';
  }

  console.log(box);
}

printBox(4,6);

var printBanner = function(str) {
  var width = parseInt(str.length + 1);
  var height = 2;

  var box = '';
  for(var i = 0; i <= height; i++) {
    var line = '';
    var hasSpace = i !== 0 && i !== height;
    strIndex = 0;

    for(var c = 0; c <= width; c++) {
      var char = '*';
      if (hasSpace) {
        if (c !== 0 && c !== width) {
          char = str[strIndex];
          strIndex++;
        }
      }
      line += char;
    }

    box += line + '\n';
    line = '';
  }

  console.log(box);
}

printBanner('Hello world!');

var isPrime = function(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var getPrimes = function(num) {
  var numbers = [];

  for (i = 1; i < num; i++) {
    if (isPrime(i)) {
      numbers.push(i);
    }
  }

  return numbers;
}

function getFactors(num) {
  num = parseInt(num);
  var remainder = num;

  var factors = [];
  var primeNumbers = getPrimes(num);

  while(!isPrime(remainder)) {
    for (var i = 1; i < primeNumbers.length; i++) {
      var currentNum = primeNumbers[i];
      if (remainder % currentNum === 0) {
        factors.push(currentNum);
        remainder = remainder / currentNum;
        break;
      }
    }
  }

  factors.push(remainder);
  console.log(`${num} => ${factors.join(', ')}`);
}

getFactors(0);
getFactors(3);
getFactors(28);
getFactors(55);

var modulo = function() {}

// work with both lowercase and uppercase letters
// reset offset with modulo
var caesar = function(str, offset) {
  var str = str.toLowerCase();
  var offset = offset || 0;
  var cipheredString = '';

  for (i = 0; i < str.length; i++) {
    var currentLetter = str[i];
    var newLetter = ''

    if (currentLetter === ' ') {
      newLetter = currentLetter;
    } else {
      var newAscii = currentLetter.charCodeAt() + offset;
      newLetter = String.fromCharCode(newAscii);
    }

    cipheredString += newLetter;
  }

  console.log(cipheredString);
}

caesar('Hello world', 1);

