function hello(name) {
  var name = name === undefined ? 'world' : name;
  console.log(`Hello, ${name}!`)
}

hello('');
hello('Moustache');

function madlib(name,subject) {
  return `${name}'s favorite food is ${subject}`;
}

madlib('Paul','Quaker oats');
madlib('Anna');

function tipAmount(amount, quality) {
  var levelsOfService = {
    good: '0.2',
    fair: '0.15',
    bad: '0.1'
  }

  var service = levelsOfService[quality];
  if(!service) {
    service = levelsOfService.fair;
  }

  service = parseFloat(service, 10);

  var tip = amount * service;
  console.log('Tip: ' + tip);
  return tip;
}

function totalAmount(amount, quality) {
  var total = amount + tipAmount(amount, quality);

  console.log('Total: ' + total);
  return total;
}

totalAmount(25, 'fair');
totalAmount(30, 'good');

function splitAmount(amount, quality, num) {
  var total = totalAmount(amount, quality);
  var people = num || 1;

  var perPerson = total / people;
  console.log('Per person: ' + perPerson);
  return perPerson;
}

splitAmount(25, 'fair');
splitAmount(30, 'good', 3);