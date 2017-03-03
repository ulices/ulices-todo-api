var _ = require('underscore');

var person = {
  name: 'Sus',
  age: '36'
};

function updatePerson(obj) {
//  obj = {
//    name: 'sus',
//    ager: 24
//  };
  obj.age = 37;
}

updatePerson(person);
console.log(person);

var grades = [12, 45];

function addGrades(gradesArr) {
//  gradesArr.push(55);

  return gradesArr = [14, 25, 46];
}

addGrades(grades);
console.log(grades);
