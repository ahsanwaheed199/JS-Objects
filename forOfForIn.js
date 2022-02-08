// An enumerable property in JavaScript means that a property can be viewed if
// it is iterated using the for…in loop or Object. keys() method. All the properties
//  which are created by simple assignment or property initializer are enumerable by default.

// Iterable is an object which can be looped over or iterated over with the help of a for loop.
//  Objects like lists, tuples, sets, dictionaries, strings, etc. are called iterables.
//  In short and simpler terms, iterable is anything that you can loop over

let arr = ["value1", "value2", "value3"];

let obj = {
  propName1: "propValue1",
  propName2: "propValue2",
  propName3: "propValue3",
};

console.log("=====================WORKING WITH ARRAYS===================");
console.log("For Of ");
for (const value of arr) {
  console.log("value: ", value);
}

// for (const value of obj) {      // object is not itterable by default
//   console.log("value: ", value);
// }

for (value of Object.keys(obj)) {
  console.log(value);
}

let rating = Object.values(obj);

console.log("For In");
for (const key in arr) {
  console.log("key: ", key, " value: ", arr[key]);
}
console.log("=====================WORKING WITH OBJECTS===================");
console.log("For In:");
for (const prop in obj) {
  console.log("prop: ", prop, "value: ", obj[prop]);
}
Object.defineProperty(obj, "definedPropEnFalse", {
  value: "value of definedPropEnFalse",
  enumerable: false,
});

Object.defineProperty(obj, "definedPropEnTrue", {
  value: "value of definedPropEnTrue",
  enumerable: true,
});

console.log("For In for Objects with enumerables:");
for (const prop in obj) {
  console.log("prop: ", prop, "value: ", obj[prop]);
}
