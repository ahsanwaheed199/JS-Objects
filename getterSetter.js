// JavaScript getter and setter methods are helpful in part because
// they offer a way to intercept property access and assignment,
//  and allow for additional actions to be performed before these changes go into effect.
const myCat = {
  _name: "Snickers",
  get name() {
    return this._name;
  },
  set name(newName) {
    //Verify that newName is a non-empty string before setting as name property
    if (typeof newName === "string" && newName.length > 0) {
      this._name = newName;
    } else {
      console.log("ERROR: name must be a non-empty string");
    }
  },
};
myCat.name = 4; //error
myCat.name = "salman";
console.log(myCat.name);

// javascript getters and setters restricted
// JavaScript object properties are not private or protected.
// Since JavaScript objects are passed by reference,
//  there is no way to fully prevent incorrect interactions with object properties.

const myCat = {
  _name: "Dottie",
  get name() {
    return this._name;
  },
  set name(newName) {
    this._name = newName;
  },
};

// Reference invokes the getter
console.log(myCat.name);

// Assignment invokes the setter
myCat.name = "Yankee";
