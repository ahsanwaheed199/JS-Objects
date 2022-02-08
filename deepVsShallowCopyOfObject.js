// shallow copy of an object

// 1.  Object.assign(target, ...source) //its used to copy the values and properties of one or more
//  source objects to a targer object
let course = {
  name: "web programming",
  c_hours: 3,
};
let grade = {
  score: 65,
};
let result = Object.assign(course, grade, { mentor: "sarim ali" });
console.log(result);

// 2. spread object
let userInfo = {
  name: "saqlain",
  age: 34,
  hobies: ["swimming", "reading", "chess"],
};
let shallowCopyOfUserInfo = { ...userInfo };
shallowCopyOfUserInfo.name = "irtiza";
shallowCopyOfUserInfo.age = 23;
shallowCopyOfUserInfo.hobies[1] = "writing";
console.log(userInfo, shallowCopyOfUserInfo);
//output: userInfo
// name: "saqlain"                                   //shallow copy not refer the top level
// age: 34                                                //shallow copy not refer the top level
// hobies: (3) ['swimming', 'writing', 'chess']           //shallow copy  refer the nested level. that's why this is change
//shallowCopyOfUserInfo
// name: "irtiza"
// age: 23
// hobies: (3) ['swimming', 'writing', 'chess']

//
// deep copy of an object
let userInfo1 = {
  name: "saqlain",
  age: 34,
  hobies: ["swimming", "reading", "chess"],
};
let shallowCopyOfUserInfo1 = JSON.parse(JSON.stringify(userInfo1));
shallowCopyOfUserInfo1.name = "irtiza";
shallowCopyOfUserInfo1.age = 23;
shallowCopyOfUserInfo1.hobies[1] = "writing";
console.log(userInfo1, shallowCopyOfUserInfo1);
//output: userInfo
// name: "saqlain"                                   //shallow copy not refer the top level
// age: 34                                                //shallow copy not refer the top level
// hobies: (3) ['swimming', 'reading', 'chess']           //shallow copy not  refer the nested level. that's why this is not change
//shallowCopyOfUserInfo
// name: "irtiza"
// age: 23
// hobies: (3) ['swimming', 'writing', 'chess']
