const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// examp #2

const v1 = "abssc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { 0: 'a', 1: 'b', 2: 's', 3: 's', 4: 'c' }

// exmp # 3

let obj1 = { a: 0, b: { c: 0 } };
let obj2 = Object.assign({}, obj1);
console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

obj1.a = 1;
console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

obj2.a = 2;
console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}

obj2.b.c = 3;
console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}

// Deep Clone
obj1 = { a: 0, b: { c: 0 } };
let obj3 = JSON.parse(JSON.stringify(obj1));
obj1.a = 4;
obj1.b.c = 4;
console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
