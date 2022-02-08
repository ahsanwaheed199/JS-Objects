// Objects
// An object is a built-in data type for storing key-value pairs.
//objects are the collection of properties. properties are a key value pair
// rather than accessing data using an index we use custom keys
// Data inside objects are unordered, and the values can be of any type

//
// Restrictions in Naming Properties
// JavaScript object key names must adhere to some restrictions to be valid. Key names
//  must either be strings or valid identifier or variable names
//  (i.e. special characters such as - are not allowed in key names that are not strings).
// example:
// Example of invalid key names
// const trainSchedule = {
//     platform num: 10, // Invalid because of the space between words.
//     40 - 10 + 2: 30, // Expressions cannot be keys.
//     +compartment: 'C' // The use of a + sign is invalid unless it is enclosed in quotations.
//   }

//
// Dot Notation for Accessing Object Properties
// Properties of a JavaScript object can be accessed using the dot notation in this manner:
// object.propertyName.
//  Nested properties of an object can be accessed by chaining key names in the correct order.
const apple = {
  color: "Green",
  price: {
    bulk: "$3/kg",
    smallQty: "$4/kg",
  },
};
console.log(apple.color); // 'Green'
console.log(apple.price.bulk); // '$3/kg'

//
// Accessing non-existent JavaScript properties
// When trying to access a JavaScript object property that has not been defined yet,
// the value of undefined will be returned by default.
// bracket notation is used when the property identifiers only have to be a String.
// the property name start with a number or dynamically.
//its used if you had something that syntactically not valid
const classElection = {
  date: "January 12",
  1: "one",
};
console.log(classElection.place); // undefined
console.log(classElection.date);
// console.log(classElection[date]); //error
let userInfo = {
  name: "saqlain",
  age: 34,
  hobies: ["swimming", "reading", "chess"],
};
userInfo.hobies[1] = "writing";
console.log(userInfo);
//sometime we want to use dynamic value like a variable to access data from object
let palette = {
  red: "red color",
  blue: "blue color",
  yellow: "yellow color",
};
let mycolor = "blue";
console.log(palette[mycolor]);

//
// JavaScript Objects are Mutable.
// JavaScript objects are mutable, meaning their contents can be changed,
// even when they are declared as const. New properties can be added, and existing property values can
// be changed or deleted.It is the reference to the object, bound to the variable, that cannot be changed.
const student = {
  name: "Sheldon",
  score: 100,
  grade: "A",
};
console.log(student);
// { name: 'Sheldon', score: 100, grade: 'A' }
delete student.score;
student.grade = "F";
console.log(student);
// { name: 'Sheldon', grade: 'F' }
// student = {}; // TypeError: Assignment to constant variable.

//
//   Delete operator
// Once an object is created in JavaScript, it is possible to remove properties from the object using the
//  delete operator. The delete keyword deletes both the value of the property and the property itself from
//   the object.The delete operator only works on properties, not on variables or functions.
const person = {
  firstName: "Matilda",
  age: 27,
  hobby: "knitting",
  goal: "learning JavaScript",
};
delete person.hobby; // or delete person[hobby];
console.log(person); //{ firstName: "Matilda" age: 27 goal: "learning JavaScript"}
delete person; // not work it does not delete a variable
console.log(person); //{ firstName: "Matilda" age: 27 goal: "learning JavaScript"}
