// let array = [32,49,54,58];
//
// console.log('FOR LOOP=======');
//
// for (var x = 0; x < array.length; x++){
//   console.log(array[x]);
// }
//
// console.log('FOR EACH=====');
// array.forEach(function(arrayElem){
//     console.log(arrayElem);
// });
//
// console.log('FOR EACH FAT ARROW======');
// array.forEach((value) => console.log(value));
//
// console.log('GRADES========');
// let grades = [98,87,82,74,89,87];
//
// let sum = 0;
//
// grades.forEach(grade => sum += grade);
//
// let average = sum / grades.length;
// console.log(`Our average is ${average.toFixed(0)}`);

//Map Helper

let array = [1,2,3,4,5];
let addOne = [];

for (let x = 0; x < array.length; x++){
  addOne.push(array[x] + 1);
}

console.log(addOne); //2,3,4,5,6

//With Map Helper
// let addOneMap = array.map(function(value) { //ES5 Way
//     return value + 1;
// });

let addOneMap = array.map(value => value + 1); //ES6 WAY

console.log(addOneMap); //2,3,4,5,6


let vehicles = [
  {id: 1, make: 'Doge',model:'Ram 1500',year: '2011',is4WD:true},
  {id: 2, make: 'Doge',model:'Charger R/T',year: '2015',is4WD:false},
  {id: 3, make: 'Nissan',model:'Rogue',year: '2016',is4WD:false},
]

let truckDriver = {
  vehicleId: 1,
  name: 'Jack'
}

let models = vehicles.map(vehicle => vehicle.model); //Take a property of an array to a variable
console.log(models);

// //Filter //Brings back all the elements that match the critirea
// let filteredVehicles = vehicles.filter(vehicle => vehicle.make === 'Dodge'); //ES6 Filter to get only the make with Dogje
// // let filteredVehicles = vehicels.filter(function(vehicle){
// //   return vehicle.make === 'Dodje';
// // });
//
//
// console.log(filteredVehicles);
//
//
// //FIND //Brings back the first element that starts the critirea and then stops
//
// // let vehicle = vehicles.find(function(vehicle) {
// //   return vehicle.make === 'Nissan';
// // });
// //
// // console.log(vehicle);
//
// let vehicle = vehicles.find(vehicle => vehicle.make === 'Nissan') //ES6
//
// console.log(vehicle);

function driverForVehicle(vehicles,driver){
  return vehicles.find(vehicle => vehicle.id === driver.vehicleId); //Get the vehicle of the driver
}

console.log(driverForVehicle(vehicles,truckDriver));



// EVERY AND SOME QUICK LOOK
// let areAll4WD = vehicls.every(function(vehicle) {
//   return vehicle.is4WD === true;
// });

let areAll4WD = vehicles.every(vehicle => vehicle.is4WD === true); //ES6 Returns if all are 4wd

let someAre4WD = vehicles.some(vehicle => vehicle.is4WD === true); //ES6 IF some are 4wd

console.log(areAll4WD);

console.log(someAre4WD);


//Reduce
//Without reduce
let grades = [98,87,82,74,89,87];

let sum = 0;

for (let x = 0; x < grades.length; x++) {
  sum += grades[x];
}

console.log(`sum = ${sum}`);
console.log(`Our average is ${(sum / grades.length).toFixed(1)}`);

//With reduce
// let total = grades.reduce(function(sum,grade){
//     return sum + grade;
// }, 0);

let total = grades.reduce((sum,grade) => {
  return sum + grade;
},0);

console.log(`total = ${total}`);
console.log(`Our average is ${(total / grades.length).toFixed(1)}`);
