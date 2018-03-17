const assert = require('assert');
const promptUser = require('./prompt-user');
const { copy, uppercase, lowercase } = require('./file');
const getIpAddress = require('./get-ip-address');
const saveWebpage = require('./webpage');

// copy('file.txt', 'new-file.txt');
// promptUser(['File to copy: ', 'File to save to: '], copy);
// uppercase('test-file.txt', 'new-test-file.txt');
// getIpAddress('www.google.com', a => console.log(a));
// saveWebpage('http://dc-coffeerun.herokuapp.com/api/coffeeorders/', 'new.js');
promptUser(['Url: ', 'File to save to:'], saveWebpage);