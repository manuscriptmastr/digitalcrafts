const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var read = (fileName, callback) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      throw(err);
    } else {
      callback(data);
    }
  });
}

var write = (fileName, data, callback) => {
  fs.writeFile(fileName, data, 'utf-8', (err, d) => {
    if (err) {
      throw(err);
    } else if (callback) {
      callback(d);
    }
  });
}

var capitalizeString = string => string.toUpperCase();

var transformFile = transform => () => {
  rl.question('File to transform: ', oldFile => {
    rl.question('File to save to: ', newFile => {
      rl.close();
      readFile(oldFile, data => {
        var newString = transform(data);
        writeFile(newFile, newString, () => console.log(newString));
      });
    });
  });
}

var copy = transformFile(d => d);
var capitalize = transformFile(capitalizeString);

module.exports = { copy, capitalize, read, write };