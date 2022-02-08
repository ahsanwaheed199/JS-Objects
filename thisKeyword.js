function sayHi() {
  console.log("Hi"), console.log(this); //it refer global window object
}
sayHi();
const name = "haroon ";
const color = {
  blue: "Blue Color",
  red: "Red Color",
  green: "Green Color",
  name: "ahsan Waheed",
  likedColor() {
    const { blue, red, green } = this; //destructuring
    return `i liked ${blue}`;
  },
  bioData: function () {
    console.log(this);
    const likedColor = this.likedColor();
    return `my name is ${this.name} and I like ${this.green} `;
  },
  nickName: () => {
    //arrow function refer this to global window object
    console.log(this);
    console.log(`my name is ${name}`);
  },
};
color.name = "ahad raza";
console.log(color.bioData());
console.log(color.likedColor());
console.log(color.nickName()); //that's why we don't use arrow funciton to object methods
const bioData = color.bioData;

// why arrow function not get their own this
