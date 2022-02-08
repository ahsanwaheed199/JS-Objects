//we can add function as a property on object and we can call them  method.
const math = {
  add(a, b) {
    return a + b;
  },
  mod(a, b) {
    return a % b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  },
};

console.log(math.mod(32, 3));
