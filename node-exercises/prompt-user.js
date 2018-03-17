const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var promptUser = (questions, callback) => {
  var answers = [];

  var getAnswers = questions => {
    if (questions.length) {
      rl.question(questions[0], answer => {
        answers.push(answer);
        questions = questions.slice(1);
        getAnswers(questions);
      });
    } else {
      rl.close();
      callback(...answers);
    }
  }

  getAnswers(questions);
}

module.exports = promptUser;