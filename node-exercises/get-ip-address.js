const dns = require('dns');

var getIpAddress = (hostname, callback) => {
  dns.resolve(hostname, (err, records) => {
    if (err) {
      throw(err);
    } else {
      callback(records);
    }
  });
}

module.exports = getIpAddress;