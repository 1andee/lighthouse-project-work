// TASK ONE
var array = [10, 2, 5, 1, 9];

var sortaroo = array.sort(function (a,b) {
    return a - b;
});

//console.log(sortaroo);



//  TASK TWO
var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

var sortedStudentList = students.sort(function(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }

  // if names aren't equal
  return b.age - a.age;

});

console.log(sortedStudentList);
