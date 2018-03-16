const assert = require('assert');
const capitalizeFile = require('./capitalize-file');
const getIpAddress = require('./get-ip-address');

capitalizeFile('test-file.txt', 'new-test-file.txt');
getIpAddress('www.google.com', a => console.log(a));