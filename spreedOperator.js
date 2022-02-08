let user = {
  name: "sarim",
  age: 60,
};

let copied = { ...user, occupation: "doctor" };
console.log(copied);
console.log(user);

const { name, ...other } = copied;
console.log(name);
console.log(other);
console.log(other.age);

// obj is not iterable  , in javascript objects are not itterable.
let obj = { key1: "value1" };
let array = [...obj]; // TypeError: obj is not iterable
