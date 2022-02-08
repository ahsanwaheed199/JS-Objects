// JavaScript destructuring assignment shorthand syntax
const rubiksCubeFacts = {
  possiblePermutations: "43,252,003,274,489,856,000",
  invented: "1974",
  largestCube: "17x17x17",
};
const { possiblePermutations, invented, largestCube } = rubiksCubeFacts; //destructuring
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented); // '1974'
console.log(largestCube); // '17x17x17'

const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]

console.log(Object.keys(object1));
console.log(Object.values(object1));
console.log(Object.entries(object1));
