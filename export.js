// let myVariable = 942;
// let func1 = () => {
//   console.log("Hello from func1");
// }
// let func2 = () => {
//   console.log("Hello from func2");
// }

//Slow old large way
// module.exports.myVar = myVariable;
// module.exports.func1 = func1;
// module.exports.func2 = func2;

//Old shorten way
// module.exports = {
//   myVar: myVariable,
//   func1: func1,
//   func2: func2
// };

//Second old way
// module.exports.myVar = 942;
// module.exports.func1 = () => {
//   console.log("Hello from func1");
// }
// module.exports.func2 = () => {
//   console.log("Hello from func2");
// }


//ES6 way
export let myVar = 942;
export let func1 = () => {
  console.log("Hello from func1");
}
export let func2 = () => {
  console.log("Hello from func2");
}
