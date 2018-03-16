const http = require('http');

var getWebpage = (url, callback) => {
  http.get(url, response => {
    var rawData = '';
    response.on('data', chunk => {
      rawData += chunk;
    });
    response.on('end', () => {
      try {
        var data = JSON.parse(rawData);
        callback(data);
      } catch (e) {
        throw(e);
      }
    })
  });
}

module.exports = getWebpage;