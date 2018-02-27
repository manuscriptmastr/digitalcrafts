var dictionary = [
  {
    firstName: 'Nikolajs',
    lastName: 'Bogucarskis',
    strength: 10,
    hobby: 'Programmer'
  },
  {
    firstName: 'Joshua',
    lastName: 'Martin',
    strength: 5,
    hobby: 'Musician'
  }
];

var sortBy = key => {
  return (a, b) => {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] > b[key]) {
      return 1;
    } else {
      return 0;
    }
  }
}

var sortByStrength = sortBy('strength');
var sortByLastName = sortBy('lastName');

var sortedStrength = dictionary.sort(sortByStrength);
console.log('By strength: ' + sortedStrength);

var sortedLastName = dictionary.sort(sortByLastName);
console.log('By last name: ' + sortedLastName);