const readline = require('readline');
const { write } = require('./file');
const getWebpage = require('./get-webpage');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var saveWebpage = () => {
  rl.question('Url: ', url => {
    rl.question('File to save to: ', fileName => {
      rl.close();
      getWebpage(url, data => {
        write(fileName, data, () => console.log(data));
      });
    });
  });
}

saveWebpage();