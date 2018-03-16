const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      throw(err);
    } else {
      callback(data);
    }
  });
}

var writeFile = (fileName, data, callback) => {
  fs.writeFile(fileName, data, 'utf-8', (err, d) => {
    if (err) {
      throw(err);
    } else if (callback) {
      callback(d);
    }
  });
}

var capitalizeString = string => string.toUpperCase();

var capitalizeFile = () => {
  rl.question('File to transform: ', oldFile => {
    rl.question('File to save to: ', newFile => {
      rl.close();
      readFile(oldFile, data => {
        var cString = capitalizeString(data);
        writeFile(newFile, cString, () => console.log(cString));
      });
    });
  });
}

module.exports = capitalizeFile;