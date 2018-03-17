const http = require('http');
const { write } = require('./file');

var getWebpage = (url, callback) => {
  http.get(url, response => {
    var rawData = '';
    response.on('data', chunk => {
      rawData += chunk;
    });
    response.on('end', () => {
      try {
        callback(rawData);
      } catch (e) {
        throw(e);
      }
    })
  });
}

var saveWebpage = (url, fileName) => {
  getWebpage(url, data => {
    write(fileName, data, () => console.log(data));
  });
}

module.exports = saveWebpage;