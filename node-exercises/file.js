const fs = require('fs');

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

var convert = transform => (oldFile, newFile) => {
  read(oldFile, data => {
    var newString = transform(data);
    write(newFile, newString, () => console.log(newString));
  });
}

var copy = convert(s => s);
var uppercase = convert(s => s.toUpperCase());
var lowercase = convert(s => s.toLowerCase());

module.exports = { read, write, copy, uppercase, lowercase };