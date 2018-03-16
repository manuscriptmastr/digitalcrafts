const assert = require('assert');
const { copy, capitalize } = require('./file');
const getIpAddress = require('./get-ip-address');
const getWebpage = require('./get-webpage');

capitalize('test-file.txt', 'new-test-file.txt');
getIpAddress('www.google.com', a => console.log(a));
getWebpage('http://dc-coffeerun.herokuapp.com/api/coffeeorders/', d => console.log(d));